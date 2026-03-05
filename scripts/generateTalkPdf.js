const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn, spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const talksDir = path.join(rootDir, 'talks');

function printUsage() {
  console.error('Usage: npm run generate:pdf -- <talk-folder-name>');
  console.error(
    'Example: npm run generate:pdf -- a-practical-guide-to-building-agentic-systems'
  );
}

function getTalkFolders() {
  if (!fs.existsSync(talksDir)) {
    return [];
  }

  return fs
    .readdirSync(talksDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function isServerReachable(url) {
  return new Promise((resolve) => {
    const request = http.get(url, (response) => {
      response.resume();
      resolve(response.statusCode >= 200 && response.statusCode < 500);
    });

    request.setTimeout(2000, () => {
      request.destroy();
      resolve(false);
    });

    request.on('error', () => resolve(false));
  });
}

function runDecktape(args) {
  const decktapeBinary = resolveDecktapeBinary();

  return new Promise((resolve, reject) => {
    const child = spawn(decktapeBinary, args, {
      cwd: rootDir,
      stdio: 'inherit',
    });

    child.on('error', (error) => reject(error));
    child.on('close', (code) => resolve(code));
  });
}

function resolveDecktapeBinary() {
  const directCheck = spawnSync('decktape', ['--version'], {
    stdio: 'ignore',
    cwd: rootDir,
  });

  if (directCheck.status === 0) {
    return 'decktape';
  }

  const shellLookup = spawnSync('bash', ['-lc', 'command -v decktape'], {
    cwd: rootDir,
    encoding: 'utf8',
  });

  const resolvedPath = (shellLookup.stdout || '').trim();
  if (shellLookup.status === 0 && resolvedPath) {
    return resolvedPath;
  }

  return null;
}

async function main() {
  const talkFolder = process.argv[2];

  if (!talkFolder) {
    printUsage();
    process.exit(1);
  }

  const talkDir = path.join(talksDir, talkFolder);
  const talkIndex = path.join(talkDir, 'index.html');

  if (!fs.existsSync(talkDir) || !fs.statSync(talkDir).isDirectory()) {
    console.error(`Talk folder not found: talks/${talkFolder}`);
    const talks = getTalkFolders();
    if (talks.length > 0) {
      console.error(`Available talks: ${talks.join(', ')}`);
    }
    process.exit(1);
  }

  if (!fs.existsSync(talkIndex)) {
    console.error(`Missing talk entry file: talks/${talkFolder}/index.html`);
    process.exit(1);
  }

  const decktapeBinary = resolveDecktapeBinary();
  if (!decktapeBinary) {
    console.error(
      '`decktape` is not available in PATH. Please install it globally first.'
    );
    console.error('Example: npm install -g decktape');
    process.exit(1);
  }

  const baseUrl = 'http://localhost:8000';
  const talkUrl = `${baseUrl}/talks/${talkFolder}/index.html`;
  const outputPath = path.join('talks', talkFolder, `${talkFolder}.pdf`);

  const serverReady = await isServerReachable(baseUrl);
  if (!serverReady) {
    console.error('Local server is not reachable at http://localhost:8000');
    console.error('Start it first with: npm run dev');
    process.exit(1);
  }

  console.log(`Generating PDF for talks/${talkFolder}...`);
  console.log(`Using decktape: ${decktapeBinary}`);
  const code = await runDecktape([
    '--pause',
    '1500',
    'reveal',
    talkUrl,
    outputPath,
  ]);

  if (code !== 0) {
    process.exit(code || 1);
  }

  console.log(`PDF generated at ${outputPath}`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
