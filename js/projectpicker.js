const firstProject = document.getElementById("firstProject");
const project1 = document.getElementById("project1");
const secondProject = document.getElementById("secondProject");
const project2 = document.getElementById("project2");
const projectSelector = document.querySelector(".selector")


width = window.innerWidth;
mobile = isMobile(width);
window.addEventListener('resize', () => {
    width = window.innerWidth;
    mobile = isMobile(width);
})

function isMobile(width){
    if(width < 1000){
        projectSelector.style.display='none';
        project2.style.display = 'block';
        project2.style.zIndex = "0";
        project1.style.zIndex = "0";
        return true;
    } else {
        projectSelector.style.display="block";
        project2.style.display = "none";
        return false;
    }
}



firstProject.addEventListener('click', () => {
    firstProject.classList.add('selected');
    secondProject.classList.remove('selected');
 console.log('dziala');
    project1.style.display = "block";
    project2.style.display = "none";
})

secondProject.addEventListener('click', () => {
    secondProject.classList.add('selected');
    firstProject.classList.remove('selected');

    project2.style.display = "block";
    project1.style.display = "none";
})
