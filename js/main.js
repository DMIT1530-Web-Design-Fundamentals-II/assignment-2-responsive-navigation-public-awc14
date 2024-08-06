function toggleMenu() {
    const menu = document.getElementById('menu');
    const blogTitle = document.querySelector('.nav-bar h1');
    menu.classList.toggle('open');
    blogTitle.style.display = menu.classList.contains('open') ? 'none' : 'block';
}
