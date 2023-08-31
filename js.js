let count = 0;
let color = null;

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
    färg();
    liksom.style.background = color;
}

function unclick(){
    liksom.style.height = "50rem";
    liksom.style.width = "50rem";
    
}

function färg(){
    const färger = [ "Red", "Green", "Blue", "Yellow", "Violet", "Lime", "Pink", "Aqua", "Indigo", "Orange", "orangered", "Aquamarine", "Skyblue", 
"Darkblue", "Fuchsia", "Gld"];
    return color = färger[Math.round(Math.random()*15)];
  }

window.onload = init;
