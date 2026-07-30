const main = async () => {
  const externalTalks = [
    {
      audience: 'public',
      date: '2024-12',
      link: 'https://canva.link/ske3nmw3dg0a7v4',
      platform: 'Canva',
      title: 'Importance of Soft Skills in the Technical World',
    },
    {
      audience: 'public',
      date: '2024-06',
      link: 'https://canva.link/4g9pdlw0zvfecay',
      platform: 'Canva',
      title: 'Backend for Frontend (BFF)',
    },
  ];

  const response = await fetch('data/slides.json');
  const slides = await response.json();
  const audienceLabels = {
    company: 'Company',
    private: 'Private',
    public: 'Public',
  };

  // Get the card template
  const template = document.getElementById('cardTemplate').content;

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en-GB', {
      month: date.length === 7 ? 'long' : 'short',
      year: 'numeric',
      ...(date.length === 7 ? {} : { day: 'numeric' }),
    }).format(new Date(`${date}${date.length === 7 ? '-01' : ''}T00:00:00`));

  const sortTalks = (talks) =>
    talks.sort((firstSlide, secondSlide) => {
      const firstDate = firstSlide.date
        ? new Date(firstSlide.date).getTime()
        : 0;
      const secondDate = secondSlide.date
        ? new Date(secondSlide.date).getTime()
        : 0;

      if (firstDate !== secondDate) {
        return secondDate - firstDate;
      }

      return firstSlide.title.localeCompare(secondSlide.title);
    });

  const renderTalks = (talks, gridId) => {
    const grid = document.getElementById(gridId);

    sortTalks(talks).forEach((talk) => {
      const { audience, date, link, platform, title } = talk;

      // Clone the template
      const cardClone = document.importNode(template, true);

      const dateEl = cardClone.querySelector('.card-date');
      const audienceEl = cardClone.querySelector('.card-audience');
      const platformEl = cardClone.querySelector('.card-platform');

      if (date) {
        dateEl.textContent = formatDate(date);
      } else {
        dateEl.remove();
      }

      if (platform) {
        platformEl.textContent = platform;
      } else {
        platformEl.remove();
      }

      if (audience && audienceLabels[audience]) {
        audienceEl.textContent = audienceLabels[audience];
        audienceEl.classList.add(`card-audience--${audience}`);
      } else {
        audienceEl.remove();
      }

      // Update card title
      cardClone.querySelector('.card-title').textContent = title;

      // Set up the anchor link
      const anchorEl = cardClone.querySelector('.card-link');
      const isExternal = link.startsWith('http');
      anchorEl.href = isExternal ? link : `talks/${link}`;
      anchorEl.target = '_blank';
      anchorEl.rel = 'noopener';

      if (platform) {
        anchorEl.querySelector('span').textContent = `View on ${platform}`;
        anchorEl.setAttribute(
          'aria-label',
          `View ${title} on ${platform} (opens in a new tab)`
        );
      } else {
        anchorEl.setAttribute(
          'aria-label',
          `View ${title} (opens in a new tab)`
        );
      }

      // Append the cloned card to the grid
      grid.appendChild(cardClone);
    });
  };

  renderTalks(slides, 'talksGrid');
  renderTalks(externalTalks, 'externalTalksGrid');
};

main();
