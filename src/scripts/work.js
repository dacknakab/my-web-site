const workonebutton = document.getElementById("workonebutton");
const workoneinfo = document.getElementById("infomationworkone");
workonebutton.addEventListener("click",showInfomationworkone);
function showInfomationworkone(){
    workoneinfo.classList.toggle("visible");
    workoneinfo.classList.toggle("hidden");
}

const worktwobutton = document.getElementById("worktwobutton");
const worktwoinfo = document.getElementById("infomationworktwo");
worktwobutton.addEventListener("click",showInfomationworktwo);
function showInfomationworktwo(){
    worktwoinfo.classList.toggle("visible");
    worktwoinfo.classList.toggle("hidden");
}

const workthbutton = document.getElementById("workthreebutton");
const workthreeinfo = document.getElementById("infomationworkthree");
workthbutton.addEventListener("click",showInfomationworkthree);
function showInfomationworkthree(){
    workthreeinfo.classList.toggle("visible");
    workthreeinfo.classList.toggle("hidden");
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
