'use strict';

        let nr,
        bet,
        actualBalance = '80',
         rollButton = document.getElementById('roll-button'),
        playerChoice = document.querySelectorAll('#playerChoice'),
        goldAmount = document.getElementById('goldAmount'),
        balance = document.getElementById('playerMoney');
       

           /*  FUNCTIONS   */

           function highLow () {
               
               
           }
          
              
           function number2() {
            nr = 2;
            console.log('Numer wybrany to: ' + nr);
            
        }

        function number3() {
            nr = 3;
            console.log('Numer wybrany to: ' + nr);
            
        }

        function number4() {
            nr = 4;
            console.log('Numer wybrany to: ' + nr);
            
        }

        function number5() {
            nr = 5;
            console.log('Numer wybrany to: ' + nr);
            
        }

        function number6() {
            nr = 6;
            console.log('Numer wybrany to: ' + nr);
            
        }

        function number1() {
            nr = 1;
            console.log('Numer wybrany to: ' + nr);
            
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


 balance.innerHTML = actualBalance + '$';
rollButton.addEventListener('click', function(){roll()});
playerChoice[1].addEventListener('click', function(){number2(nr)});
playerChoice[2].addEventListener('click', function(){number3(nr)});
playerChoice[3].addEventListener('click', function(){number4(nr)});
playerChoice[4].addEventListener('click', function(){number5(nr)});
playerChoice[5].addEventListener('click', function(){number6(nr)});
playerChoice[0].addEventListener('click', function(){number1(nr)});
goldAmount.addEventListener('text', bet)
console.log(nr);
//console.log(chosenNr);
console.log(bet);
console.log(playerChoice);