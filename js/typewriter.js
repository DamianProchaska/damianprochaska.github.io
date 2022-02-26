const mail = document.getElementById('mailLink');
const sendEmailImg = document.getElementById('sendEmailImg');
const github = document.getElementById('githubLink');
const linkedIn = document.getElementById('linkedinLink');
const el = document.getElementById('typewriter');

let width = window.innerWidth;
let mobile = isMobile(width);
window.addEventListener('resize', () => {
    width = window.innerWidth;
    mobile = isMobile(width);
})

function isMobile(width){
    if(width < 1000){
        el.style.display = "none";
        sendEmailImg.style.display = "none";
        el.classList.remove('emailLine');
        return true;
    } else {
        return false;
    }
}

linkedIn.addEventListener("mouseover", () => { startWritingAnimation("LinkedIn", 5, true) });
linkedIn.addEventListener("mouseout", () => { stopWritingAnimation()});

github.addEventListener("mouseover", () => { startWritingAnimation("GitHub", 4, true) });
github.addEventListener("mouseout", () => { stopWritingAnimation() });

mail.addEventListener("mouseover", () => {
    if(el.classList.contains('emailLine')){
        el.classList.remove('typewriterLine');
        el.style.animation = "none";
    } else {
        startWritingAnimation("E-mail", 3, false);
    }
});

mail.addEventListener("mouseout", () => {
    if(el.classList.contains('emailLine')){
        el.classList.remove('typewriterLine');
        el.style.animation = "none";
    } else {
        stopWritingAnimation();
    }
});

mail.addEventListener("click", () => {
    if(mobile){
        window.location.href="mailto:damian.prochaska@gmail.com"
    } else {
    el.innerText = "damian.prochaska@gmail.com";
    el.style.animation = "none";
    el.classList.remove('typewriterLine');
    el.classList.add('emailLine');
    sendEmailImg.classList.add('sendEmailImgVisible');
    sendEmailImg.style.display = "flex";
    }
});

el.addEventListener("click", () => {
    if(sendEmailImg.classList.contains('sendEmailImgVisible')){
        window.location.href="mailto:damian.prochaska@gmail.com";
    }
});

function startWritingAnimation(text, animationDuration, emailDisable){
    if(emailDisable){
            sendEmailImg.style.display = "none";
            el.classList.remove('emailLine');
    }
    el.innerText = text;
    el.style.display = "block";
    el.style.animation = ` typewriter${animationDuration}em .2s steps(8)  1 normal both,blinkTextCursor .8s steps(40) infinite normal`;
    el.classList.add('typewriterLine');
}

function stopWritingAnimation(){
    el.style.display = "none";
    el.style.animation = "none";
    el.classList.remove('typewriterLine');
}
