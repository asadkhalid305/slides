(function () {
  const accentCycle = ['yellow', 'red', 'green', 'blue'];

  function setCurrentAccent(slide) {
    const accent = slide?.dataset.chromeAccent || 'blue';
    document.documentElement.dataset.currentChromeAccent = accent;
  }

  window.applyChromeSlideTheme = function applyChromeSlideTheme(reveal) {
    reveal
      .getSlides()
      .filter(function (slide) {
        return slide.dataset.visibility !== 'hidden';
      })
      .forEach(function (slide, index) {
        slide.dataset.chromeAccent = accentCycle[index % accentCycle.length];
      });

    setCurrentAccent(reveal.getCurrentSlide());
    reveal.on('slidechanged', function (event) {
      setCurrentAccent(event.currentSlide);
    });
  };
})();
