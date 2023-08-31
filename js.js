let count = 0;

function init(){
    let liksom = document.getElementById("liksom");
    liksom.onmousedown = click;
    liksom.onmouseup = unclick;
    
   
}
 
function click(){
   
   
    count++;
    document.getElementById("klick").innerHTML = count;
    liksom.style.height = "49rem";
    liksom.style.width = "49rem";
}

function unclick(){
    liksom.setAttribute("style","width:50rem");
    liksom.setAttribute("style","height:50rem");


}

window.onload = init;

