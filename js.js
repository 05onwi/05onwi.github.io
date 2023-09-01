let count = 0;
let color = null;

function init(){
    let liksom = document.getElementById("liksom");
    let bakgrund = document.getElementById("bakgrund");
    liksom.onmousedown = click;
    liksom.onmouseup = unclick;
 if(count >= 50){
        liksom.style.bordercolor = "Black";
        liksom.style.border = "1rem";
    }

}
 
function click(){
    count++;
    document.getElementById("klick").innerHTML = count;
    liksom.style.height = "29rem";
    liksom.style.width = "29rem";
    färg();
    liksom.style.background = color;
}

function unclick(){
    liksom.style.height = "30rem";
    liksom.style.width = "30rem";
    
}

function färg(){
    const färger = [ "Red", "Green", "Blue", "Yellow", "Violet", "Lime", "Pink", "Aqua", "Indigo", "Orange", "orangered", "Aquamarine", "Skyblue", 
"Darkblue", "Fuchsia", "Gld"];
    return color = färger[Math.round(Math.random()*15)];
  }

window.onload = init;
