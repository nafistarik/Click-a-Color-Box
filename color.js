var colors =['purple','blue','aqua','green','yellow','orange','red'];
var container=document.querySelector("section");
const h1=document.querySelector("h1");
const selectedColor=document.querySelector("#selectedColor");

for(let color of colors){
    const box=document.createElement("div");
    box.classList.add('box');
    container.appendChild(box);
    
    box.style.backgroundColor=color;
    box.addEventListener("click",function(){
        selectedColor.innerText=color;
        selectedColor.style.backgroundColor=color;
        h1.innerText="You have selected: ";
    })
    
}