let count = 0;
let color = null;

function init(){
    let liksom = document.getElementById("liksom");
    let bakgrund = document.getElementById("bakgrund");
    liksom.onmousedown = click;
    liksom.onmouseup = unclick;
}
 
function click(){
    count++;
    document.getElementById("klick").innerHTML = count;
    liksom.style.height = "79%";
    liksom.style.width = "49%";
    färg();
    liksom.style.background = color;
    if(count >= 50){
        bakgrund.style.background = "Black";
    }


}

function unclick(){
    liksom.style.height = "80%";
    liksom.style.width = "50%";
    
}

function färg(){
    const färger = [ "Red", "Green", "Blue", "Yellow", "Violet", "Lime", "Pink", "Aqua", "Indigo", "Orange", "orangered", "Aquamarine", "Skyblue", 
"Darkblue", "Fuchsia", "Gld"];
    return color = färger[Math.round(Math.random()*15)];
  }

window.onload = init;
