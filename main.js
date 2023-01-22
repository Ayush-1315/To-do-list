const statusTab = document.querySelectorAll('.status');
const displays = document.querySelectorAll('.displays');
const upcoming = document.querySelector('#upcoming');
const inprogress = document.querySelector('#inprogress');
const finished = document.querySelector('#finish');
var closeList = document.querySelectorAll('.close');
const addBtn = document.getElementById('addBtn');
const screenL = document.getElementById('screen');
const formC = document.getElementById('formContainer');
//Form Data
const form = document.getElementById('form');
const task = document.getElementById('task');
const taskS = document.getElementById('statusInput');
const error=document.querySelectorAll('.error');

const statusT = [];
var screenOn = false;
window.addEventListener('load', addFunctionality)
statusTab.forEach((item) => {
    statusT.push(item.innerText);
    //Display
    item.addEventListener('click', (e) => {
        showDisplay(statusT.indexOf(e.target.innerText));
    })
    //Display Function
    function showDisplay(value) {
        for (i = 0; i < displays.length; i++) {
            if (i == value) {
                displays[i].style.display = "block";
                statusTab[i].style.backgroundColor = "purple";
                continue;
            }
            displays[i].style.display = "none";
            statusTab[i].style.backgroundColor = "red";
        }
    }
});
//Remove List
function addFunctionality() {
    closeList = document.querySelectorAll('.close');
    closeList.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (screenOn) {
                screenL.style.display = "none";
                screenOn = false;
            }
            else
                e.target.parentNode.style.display = "none";
        })
    })
}
//JUST4FUN
addBtn.addEventListener('click', () => {
    screenL.style.display = "flex";
    formC.firstElementChild.style.display = "flex";
    screenOn = true;
})
//FORM Validation
function showTaskError() {
    error[0].innerText="Field can't be empty";
    error[0].style.display="block";
    setTimeout(() => {error[0].style.display="none";},3000);
}
function showStatusError(){
    error[1].innerHTML="Select task status";
    error[1].style.display="block";
    setTimeout(() => {error[1].style.display="none";},3000);
}
// FORM DATA
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(task.value === '' || taskS.value == ''){
        if (task.value==='')
        showTaskError();
        if(taskS.value =='')
        showStatusError();

    }
    else{
        setTask(Number(taskS.value), task.value);
        form.reset();
        screenL.style.display = "none";
        screenOn = false;
    }
})

setTask = function (statusT, task) {
    let statusD;
    switch (statusT) {
        case 0: statusD = upcoming;
            break;
        case 1: statusD = inprogress;
            break;
        case 2: statusD = finished;
            break;
    }
    inserData(statusD, task);
}
function inserData(statusD, task) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let i = document.createElement("i");
    div.appendChild(document.createTextNode(`${task}`));
    i.classList.add("fa-solid", "fa-xmark", "close");
    li.appendChild(div);
    li.appendChild(i);
    li.classList.add('listItem');
    statusD.appendChild(li);
    addFunctionality();
}