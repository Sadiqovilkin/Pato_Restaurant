const Navbar = document.getElementById('nav_desctop')

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        Navbar.classList.add("navbaractive")
    }
    else {
        Navbar.classList.remove("navbaractive")
    }
})


// Filter Items-GalleryPage

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

    filter.addEventListener('click', function () {

        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.projects [data-filter]');
        }

        itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });

        itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });

    });
});