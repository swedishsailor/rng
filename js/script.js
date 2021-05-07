'use strict';

        let nr,
        bet,
        rollButton = document.getElementById('roll-button'),
        playerChoice = document.getElementById('playerChoice'),
        chosenNr = playerChoice.getAttribute('value'),
        goldAmount = document.getElementById('goldAmount'),
        balance = document.getElementById('playerMoney'),
        actualBalance = '80';
        balance.innerHTML = actualBalance + '$';
        

           /*  FUNCTIONS   */

           function highLow () {
               
               
           }
          
           function getPlayerChoice(/*playerChoice, chosenNr*/){
           
             if (chosenNr = 'nr1') {
                 nr = '1';
             } else if (chosenNr = 'nr2'){
                 nr ='2';
             } else if (chosenNr = 'nr3'){
                nr ='3';
            } else if (chosenNr = 'nr4'){
                nr ='4';
            } else if (chosenNr = 'nr5'){
                nr ='5';
            } else {
                nr ='6';
            }
             return nr;
           }
              
     

           function getGoldAmount (goldAmount){
         //   let enteredMoney = goldAmount.getAttribute('value');
          //  console.log(enteredMoney);
           }

           goldAmount.addEventListener('click', function(){getGoldAmount(goldAmount)});
           console.log(goldAmount);


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


rollButton.addEventListener('click', function(){roll()});
playerChoice.addEventListener('click', function(){getPlayerChoice(nr)});
goldAmount.addEventListener('change', bet)
console.log(nr);
console.log(chosenNr);
console.log(bet);