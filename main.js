const statusTab=document.querySelectorAll('.status');
const displays=document.querySelectorAll('.displays');
const upcoming=document.querySelector('#upcoming');
const inprogress=document.querySelector('#inprogress');
const finishd=document.querySelector('#finish');
const closeList=document.querySelectorAll('.close');
const statusT=[];

statusTab.forEach((item)=>{
statusT.push(item.innerText);
//Display
item.addEventListener('click',(e)=>{
    showDisplay(statusT.indexOf(e.target.innerText)); 
})
//Display Function
function showDisplay(value){
    for(i=0;i<displays.length;i++)
    {
        if(i==value){
            displays[i].style.display="block";
            statusTab[i].style.backgroundColor="purple";
            continue;
        }
        displays[i].style.display="none";  
        statusTab[i].style.backgroundColor="red";
    }
}
//Remove List
closeList.forEach((item)=>{
item.addEventListener('click',(e)=>{
e.target.parentNode.remove()   ;
})
})
});