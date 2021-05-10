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
            if (gold ==undefined || gold ==null){
                gold = 0;
                return;
            }
            if ((gold > actualBalance) || (gold < 0)){
                alert('Wrong amount of money!');
                return;
            }
            balance.innerHTML = 'Your balance: ' + actualBalance + '$, current bet is: ' + gold;
            console.log(gold);
        }

           function oneTap () {
            const result = document.getElementById('messages2');
               if ((nr == 1 && randomNumber == 1) || (nr == 2 && randomNumber == 2)|| (nr == 3 && randomNumber == 3)|| (nr ==4 && randomNumber ==4)|| (nr == 5 && randomNumber == 5)|| (nr == 6 && randomNumber == 6)) {
                result.classList.remove('resultLose');
                   result.classList.add('resultWin');
                    console.log('Wygrałeś warjacie, esa');
                    actualBalance = actualBalance + gold*5;
                    clearMessages2();
                    printMessage2('D: You won!');
               } else {
                result.classList.remove('resultWin');
                result.classList.add('resultLose');
                   console.log('buda, try next time');
                   clearMessages2();
                   printMessage2('Buuuda, try again');
               }
               balance.innerHTML = 'Your balance: ' + actualBalance + '$, current bet is: ' + gold;
           }
          

        function chooseNumber(nr) {
            if (nr==1){
            console.log('Numer wybrany to: ' + nr);
            } else if (nr==2){
            console.log('Numer wybrany to: ' + nr);
            }  else if (nr==3){
            console.log('Numer wybrany to: ' + nr);
            }  else if (nr==4){
            console.log('Numer wybrany to: ' + nr);
            }  else if (nr==5){
            console.log('Numer wybrany to: ' + nr);
            }  else if (nr==6){
            console.log('Numer wybrany to: ' + nr);
            } 
        }

           function getGoldAmount (goldAmount){
         //   let enteredMoney = goldAmount.getAttribute('value');
          //  console.log(enteredMoney);
           }

           goldAmount.addEventListener('click', function(){getGoldAmount(goldAmount)});
           console.log(goldAmount);


function roll () {
    if (gold ==undefined || gold ==null){
        gold = 0;
    }
    if ((gold > actualBalance) || (gold < 0) || (gold== undefined)){
        return;
    } else {
        actualBalance = actualBalance - gold;
        console.log(actualBalance);
        randomNumber  = Math.floor(Math.random()*6 + 1);
        console.log(randomNumber);
        clearMessages();
        printMessage('Rolled number is: ' + randomNumber + '!');
        balance.innerHTML = 'Your balance: ' + actualBalance + '$';
        return  randomNumber, actualBalance;
    }
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
playerChoice[0].addEventListener('click', function(){chooseNumber(nr = 1)});
playerChoice[1].addEventListener('click', function(){chooseNumber(nr = 2)});
playerChoice[2].addEventListener('click', function(){chooseNumber(nr = 3)});
playerChoice[3].addEventListener('click', function(){chooseNumber(nr = 4)});
playerChoice[4].addEventListener('click', function(){chooseNumber(nr = 5)});
playerChoice[5].addEventListener('click', function(){chooseNumber(nr = 6)});
goldAmount.addEventListener('change', function(){bet()});
console.log(nr);
//console.log(chosenNr);
console.log(playerChoice);