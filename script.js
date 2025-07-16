const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.documentElement.toggleAttribute('data-theme', 'dark');
});
