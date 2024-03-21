const Navbar = document.getElementById('nav_desctop')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        Navbar.classList.add("navbaractive")
    }
    else {
        Navbar.classList.remove("navbaractive")
    }
})