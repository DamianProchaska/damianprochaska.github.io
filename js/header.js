const homeListEl = document.querySelector("#homeListEl")
const homeBtn = document.querySelector("#homeBtn");
let lastScrollTop = 0;

homeListEl.addEventListener("mouseover", function() { homeBtn.src = "img/homegradient.png"; });
homeListEl.addEventListener("mouseout", function() { homeBtn.src = "img/home.png"; });

nabvar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop && window.pageYOffset > 0) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop;
})
