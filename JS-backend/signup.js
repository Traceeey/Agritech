// js/signup.js
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value,
    crop: this.crop.value,
    phone: this.phone.value
  };

  fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('responseMsg').innerText = data.message;
      this.reset();
    });
});
