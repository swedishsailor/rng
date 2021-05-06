'use strict';


           /*  FUNCTIONS   */

           function highLow (playerChoice, goldAmount) {
                playerChoice = document.getElementById('playerChoice');
           }
           console.log(playerChoice);


function roll () {
    let randomNumber  = Math.floor(Math.random()*6 + 1);
    console.log(randomNumber);
    clearMessages();
    printMessage('Rolled number is: ' + randomNumber + '!');
    return randomNumber;
}


function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML='';
} 


                /* METHODS   */

let rollButton = document.getElementById('roll-button');

rollButton.addEventListener('click', function(){roll()});

