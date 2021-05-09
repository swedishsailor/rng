'use strict';

        let nr,
        gold,
        randomNumber,
        actualBalance = 80,
         rollButton = document.getElementById('roll-button'),
        playerChoice = document.querySelectorAll('#playerChoice'),
        goldAmount = document.getElementById('goldAmount'),
        balance = document.getElementById('playerMoney');
       

           /*  FUNCTIONS   */

           function bet() {
            gold = document.getElementById('goldAmount').value;
            console.log(gold);
        }

           function oneTap () {
              
               if ((nr == 1 && randomNumber == 1) || (nr == 2 && randomNumber == 2)|| (nr == 3 && randomNumber == 3)|| (nr ==4 && randomNumber ==4)|| (nr == 5 && randomNumber == 5)|| (nr == 6 && randomNumber == 6)) {
                    console.log('Wygrałeś warjacie, esa');
                    actualBalance = actualBalance + gold*5;
                    clearMessages2();
                    printMessage2('D: You won!');
               } else {
                   console.log('buda, try next time');
                   clearMessages2();
                   printMessage2('Buuuda, try again');
               }
               balance.innerHTML = 'Your balance: ' + actualBalance + '$';
           }
          
                                /* Łopatologic Numbers xd */
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
    actualBalance = actualBalance - gold;
    console.log(actualBalance);
    randomNumber  = Math.floor(Math.random()*6 + 1);
    console.log(randomNumber);
    clearMessages();
    printMessage('Rolled number is: ' + randomNumber + '!');
    balance.innerHTML = 'Your balance: ' + actualBalance + '$';
    return  randomNumber, actualBalance;
}

function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function printMessage2(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages2').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML='';
} 

function clearMessages2(){
    document.getElementById('messages2').innerHTML='';
} 

                /* METHODS   */


balance.innerHTML = 'Your balance: ' + actualBalance + '$';
rollButton.addEventListener('click', function(){roll()});
rollButton.addEventListener('click', function(){oneTap()});
playerChoice[1].addEventListener('click', function(){number2(nr)});
playerChoice[2].addEventListener('click', function(){number3(nr)});
playerChoice[3].addEventListener('click', function(){number4(nr)});
playerChoice[4].addEventListener('click', function(){number5(nr)});
playerChoice[5].addEventListener('click', function(){number6(nr)});
playerChoice[0].addEventListener('click', function(){number1(nr)});
goldAmount.addEventListener('change', function(){bet()});
console.log(nr);
//console.log(chosenNr);
console.log(playerChoice);