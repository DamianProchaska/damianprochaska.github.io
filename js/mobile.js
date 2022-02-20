const menuBtn = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");
const overlayContent = document.querySelector(".overlay_content");
const ham = document.querySelector(".ham");

overlayContent.addEventListener("click", () => {
    overlay.classList.remove("overlay-active");
    ham.classList.toggle('active')
    enableScroll();
})

menuBtn.addEventListener("click", () => {
    if(overlay.classList.contains("overlay-active")){
        overlay.classList.remove("overlay-active");
        enableScroll();
    }else {
        overlay.classList.add("overlay-active");
        disableScroll();
    }

});

function preventDefault(e) {
    e.preventDefault();
  }

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
