
(() => {

  let currentLink = null;
  const tooltipElement = document.createElement('div');
  tooltipElement.className = 'tooltip';
  tooltipElement.style.position = 'absolute';
  document.body.append(tooltipElement);


  function calculatePosition(linkEl, tooltipEl) {
    const margin = 4;
    const position = linkEl.dataset.position;

    let x = linkEl.offsetLeft + linkEl.offsetWidth / 2 - tooltipEl.offsetWidth / 2;
    let y = linkEl.offsetTop - tooltipEl.offsetHeight - margin;

    if (position === 'left') {
      x = linkEl.offsetLeft - tooltipEl.offsetWidth - margin;
      y = linkEl.offsetTop + linkEl.offsetHeight / 2 - tooltipEl.offsetHeight / 2;
    } else if (position === 'right') {
      x = linkEl.offsetLeft + linkEl.offsetWidth + margin;
      y = linkEl.offsetTop + linkEl.offsetHeight / 2 - tooltipEl.offsetHeight / 2;
    } else if (position === 'bottom') {
      y = linkEl.offsetTop + linkEl.offsetHeight + margin;
    }

    x = x < 0 ? 0 : x;
    y = y < 0 ? linkEl.offsetHeight + margin : y;
    return { x , y };
  }

  for (let element of document.getElementsByClassName('has-tooltip')) {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentLink === event.target) {
        tooltipElement.style.display = 'none';
        tooltipElement.classList.remove('tooltip_active');
        currentLink = null;
      } else {
        tooltipElement.innerHTML = event.target.getAttribute('title');
        tooltipElement.classList.add('tooltip_active');
        tooltipElement.style.display = 'block';

        const { x, y } = calculatePosition(event.target, tooltipElement);
        tooltipElement.style.top = y + 'px';
        tooltipElement.style.left = x + 'px';
        currentLink= event.target;
      }
    });
  }

})();
