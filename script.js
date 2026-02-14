const ageGate = document.getElementById('age-gate');
const confirmButton = document.getElementById('confirm-age');
const denyButton = document.getElementById('deny-age');

if (localStorage.getItem('ageVerified') === 'true') {
  ageGate.classList.add('hidden');
}

confirmButton.addEventListener('click', () => {
  localStorage.setItem('ageVerified', 'true');
  ageGate.classList.add('hidden');
});

denyButton.addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});
