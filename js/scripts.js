window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    var links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach((link) => {
        var section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            links.forEach((link) => link.classList.remove('active'));
            link.classList.add('active');

            // Calculate the percentage of the section that has been scrolled and set the opacity
            var percentScrolled = (scrollPosition - section.offsetTop) / section.offsetHeight;
            section.style.opacity = 1 - percentScrolled;
        } else {
            link.classList.remove('active');
            section.style.opacity = 1;
        }
    });
});