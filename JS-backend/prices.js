// js/prices.js
fetch('http://localhost:5000/api/prices')
  .then(res => res.json())
  .then(data => {
    const table = document.querySelector('#priceTable tbody');
    data.forEach(item => {
      const row = `<tr><td>${item.crop}</td><td>${item.price}</td><td>${item.market}</td></tr>`;
      table.innerHTML += row;
    });
  });
