(function () {
  const accentCycle = ['yellow', 'red', 'green', 'blue'];

  function setCurrentAccent(slide) {
    const accent = slide?.dataset.chromeAccent || 'blue';
    document.documentElement.dataset.currentChromeAccent = accent;
  }

  function updateChromeQrs(reveal) {
    reveal.getSlides().forEach(function (slide) {
      const accent = slide.dataset.chromeAccent || 'blue';
      slide.querySelectorAll('[data-chrome-qr]').forEach(function (image) {
        image.src = image.dataset.chromeQr + '-' + accent + '.png';
      });
    });
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

    updateChromeQrs(reveal);
    setCurrentAccent(reveal.getCurrentSlide());
    reveal.on('slidechanged', function (event) {
      setCurrentAccent(event.currentSlide);
    });
  };
})();
