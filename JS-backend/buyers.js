// js/buyers.js
fetch('http://localhost:5000/api/buyers')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('buyersContainer');
    data.forEach(buyer => {
      const card = `
        <div class="card">
          <h3>${buyer.name}</h3>
          <p>Location: ${buyer.location}</p>
          <p>Contact: ${buyer.contact}</p>
        </div>
      `;
      container.innerHTML += card;
    });
  });
