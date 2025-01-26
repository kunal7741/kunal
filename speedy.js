const toggleBtn = document.querySelector('.toggle-btn');
const navItems = document.querySelector('.nav-items');

toggleBtn.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
