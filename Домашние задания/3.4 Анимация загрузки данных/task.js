
(() => {

  const LOCAL_KEY = 'valute_data';

  const loader = document.getElementById('loader');
  const items = document.getElementById('items');

  const data = localStorage.getItem(LOCAL_KEY);
  if (data) {
    loader.classList.remove('loader_active');
    renderValutes(JSON.parse(data));
  }

  function renderValutes(valutes) {
    items.innerHTML = Object.keys(valutes).map(valute => {
      // курс еще надо делить на номинал, иначе это будет неправильный курс
      return `
        <div class="item">
          <div class="item__code">
              ${valutes[valute].CharCode}
          </div>
          <div class="item__value">
              ${ valutes[valute].Value / valutes[valute].Nominal }
          </div>
          <div class="item__currency">
              руб.
          </div>
        </div>
      `;
    }).join('');
  }

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(data.response.Valute));
      renderValutes(data.response.Valute);
      loader.classList.remove('loader_active');
    });

})();