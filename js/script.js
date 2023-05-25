/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        addDigit(digit);
    } 
    else if(btn === 'clear'){
        memClear();
    }
    else if(btn === 'comma'){
        addComma();
    }
    else if(btn === 'add'){
        setOperator('+');
    }
    else if(btn === 'sub'){
        setOperator('-');
    }
    else if(btn === 'mul'){
        setOperator('*');
    }
    else if(btn === 'div'){
        setOperator('/');
    }
    else if(btn === 'enter'){
        calculate(memory, lcd.value);
    }
   
}
/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
    lcd.value += digit;
}


/**
 * Lägger till decimaltecken
 */
function addComma() {
    lcd.value += '.';
}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator){
    arithmetic = operator;
    memory = lcd.value;
    clearLCD();
}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate(i,j) {
   if(arithmetic == '+'){
    lcd.value =  parseFloat(i) +  parseFloat(j);
   }
  else  if(arithmetic == '-'){
    lcd.value = i - j;
   }
  else  if(arithmetic == '/'){
    lcd.value = i / j;
   }
  else if(arithmetic == '*'){
    lcd.value = i * j;
   }
}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear(){
    memory = 0;
    arithmetic = null;
    clearLCD();
}

window.onload = init;
