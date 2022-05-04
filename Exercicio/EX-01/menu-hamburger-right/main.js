const btnMobile = document.getElementById('btn__mobile');

function toggleMenu() {
    const Navbar = document.getElementById('navbar') ;
    Navbar.classList.toggle('active');
}
btnMobile.addEventListener("click", toggleMenu);
