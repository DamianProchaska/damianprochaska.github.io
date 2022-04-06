const firstProject = document.getElementById("firstProject");
const project1 = document.getElementById("project1");
const secondProject = document.getElementById("secondProject");
const project2 = document.getElementById("project2");
const projectSelector = document.querySelector(".selector")
let selectedProject = 0;

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
        // project2.style.zIndex = "1";
        // project1.style.zIndex = "1";
        if(selectedProject == 0){
            project2.style.display = "none";
        } else {
            project1.style.display = "none";
        }
        projectSelector.style.display="block";
        return false;
    }
}



firstProject.addEventListener('click', () => {
    firstProject.classList.add('selected');
    secondProject.classList.remove('selected');
    selectedProject = 0;
    project1.style.display = "block";
    project2.style.display = "none";
})

secondProject.addEventListener('click', () => {
    secondProject.classList.add('selected');
    firstProject.classList.remove('selected');
    selectedProject = 1;
    project2.style.display = "block";
    project1.style.display = "none";
})
