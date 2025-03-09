const kartenbutton = document.getElementById("kindergartenbutton");
const karteninfo = document.getElementById("infomationgarten");
kartenbutton.addEventListener("click",showInfomationkarten);
function showInfomationkarten(){
    karteninfo.classList.toggle("visible");
    karteninfo.classList.toggle("hidden");
}

const primarybutton = document.getElementById("primaryschoolbutton");
const primaryinfo = document.getElementById("infomationprimary");
primarybutton.addEventListener("click",showInfomationprimary);
function showInfomationprimary(){
    primaryinfo.classList.toggle("visible");
    primaryinfo.classList.toggle("hidden");
}

const highbutton = document.getElementById("highschoolbutton");
const highinfo = document.getElementById("highschoolinfo");
highbutton.addEventListener("click",showInfomationhigh);
function showInfomationhigh(){
    highinfo.classList.toggle("visible");
    highinfo.classList.toggle("hidden");
}

const colbutton = document.getElementById("collegebutton");
const colinfo = document.getElementById("collegeinfo")

colbutton.addEventListener("click",showInfomationcol);
function showInfomationcol(){
    colinfo.classList.toggle("visible");
    colinfo.classList.toggle("hidden");
}

const unibutton = document.getElementById("universtbutton");
const uniinfo = document.getElementById("universeinfo");
unibutton.addEventListener("click",showInfomationuni);
function showInfomationuni(){
    uniinfo.classList.toggle("visible");
    uniinfo.classList.toggle("hidden");
}
