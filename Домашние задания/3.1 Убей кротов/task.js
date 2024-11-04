
(() => {
  const holes = document.getElementsByClassName('hole');

  function getStat(id) {
    const el = document.getElementById(id);
    return parseInt(el.textContent);
  }

  function setStat(id, intValue) {
    const el = document.getElementById(id);
    el.textContent = intValue.toString();
  }

  function reset() {
    setStat('dead', 0);
    setStat('lost', 0);
  }

  function makeClickHandler(id, maxCount, message) {
    return function() {
      let count = getStat(id) + 1;
      if (count >= maxCount) {
        alert(message);
        reset();
      } else {
        setStat(id, count);
      }  
    }
  }

  const moleKilled = makeClickHandler('dead', 10, 'You are win!');
  const missfire = makeClickHandler('lost', 5, 'You loose!');

  for (let hole of holes) {
    hole.addEventListener('click', function() {
      if (hole.classList.contains('hole_has-mole')) {
        moleKilled();
      } else {
        missfire();
      }
    });
  }
})();

