let lastScrollTop = 0;

nabvar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(window.pageYOffset);
    if(scrollTop > lastScrollTop && window.pageYOffset > 0) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
})
