let count = 0;

function init(){
    document.getElementById("liksom").onclick = click;
    
   
}
 
function click(){
    count++;
    document.getElementById("klick").innerHTML = count;
    setRandomColor;
}

window.onload = init;


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  function setRandomColor() {
    $("#liksom").css("background-color", getRandomColor());
  }