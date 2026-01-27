const main = async () => {
  const responses = await Promise.all([fetch('data/slides.json')]);

  let slides = await Promise.all(responses.map((resp) => resp.json()));
  slides = slides.flat();
  const grid = document.getElementById('talksGrid');

  // Get the card template
  const template = document.getElementById('cardTemplate').content;

  slides.forEach((slide) => {
    const { link, title } = slide;

    // Clone the template
    const cardClone = document.importNode(template, true);

    // Update card title
    cardClone.querySelector('.card-title').textContent = title;

    // Set up the anchor link
    const anchorEl = cardClone.querySelector('.card-link');
    const isExternal = link.includes('http');
    anchorEl.href = isExternal ? link : `talks/${link}`;
    anchorEl.target = '_blank';
    anchorEl.rel = 'noopener';

    // Update link text for external links
    if (isExternal) {
      anchorEl.querySelector('span').textContent = 'Open External';
    }

    // Append the cloned card to the grid
    grid.appendChild(cardClone);
  });
};

main();
