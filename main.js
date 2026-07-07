const main = async () => {
  const responses = await Promise.all([fetch('data/slides.json')]);

  let slides = await Promise.all(responses.map((resp) => resp.json()));
  slides = slides.flat();
  const grid = document.getElementById('talksGrid');

  // Get the card template
  const template = document.getElementById('cardTemplate').content;

  const formatDate = (date) =>
    new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(`${date}T00:00:00`));

  slides.sort((firstSlide, secondSlide) => {
    const firstDate = firstSlide.date ? new Date(firstSlide.date).getTime() : 0;
    const secondDate = secondSlide.date
      ? new Date(secondSlide.date).getTime()
      : 0;

    if (firstDate !== secondDate) {
      return secondDate - firstDate;
    }

    return firstSlide.title.localeCompare(secondSlide.title);
  });

  slides.forEach((slide) => {
    const { date, link, title } = slide;

    // Clone the template
    const cardClone = document.importNode(template, true);

    const dateEl = cardClone.querySelector('.card-date');

    if (date) {
      dateEl.textContent = formatDate(date);
    } else {
      dateEl.remove();
    }

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
