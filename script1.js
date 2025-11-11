/* ---------x-------------------------x-------------------------x----------------------------*/

                                     /*  Number Guessing  */

let randomNumber;
(generateRandomNumber = function (){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random number:", randomNumber);
})();

const losingVideo = document.getElementById('losingVideo');
const guessButton = document.getElementById("guessButton");
const playAgainButton = document.getElementById("playAgainButton");
const inputBox = document.getElementById("inputBox");
//! this line is to create a timer method system
const timer = document.getElementById("timer");
//! timer one min -> only sec 
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const warnAboutInput = document.getElementById("warnAboutInput");
const chances = 
//! this method is chances only 6  with timer ke saat ok
 document.getElementsByClassName("chances");
const result = document.getElementById("result");
const message = document.getElementById("message");
let timerChanger, remainingSeconds, userInputCounter = 0;

guessButton.addEventListener("click", startTimer);
guessButton.addEventListener("click", handleUserInput);

// set Enter key as click GuessButton
inputBox.onkeyup = function (event){
    event.preventDefault();
    if (event.key === "Enter")
        guessButton.click();
};

function startTimer(){
    guessButton.removeEventListener("click", startTimer);

    timer.style.color = "#03fff7";
    timer.style.fontWeight = "bold";
    second.innerText = "30";
    minute.innerText = "00";
    remainingSeconds = 30;

    timerChanger = setInterval(function (){
        remainingSeconds -= 1;
        if(remainingSeconds === 0){
            second.innerText = "00";
            finish(false, true);
            return;
        }
        let remainingSecondsString = String(remainingSeconds);
        if(remainingSeconds < 20 && remainingSeconds >= 10)
            timer.style.color = "#03fff7";
        else if(remainingSeconds < 10){
            timer.style.color = "#d93030";
            remainingSecondsString = "0" + remainingSecondsString;
        }
        second.innerText = remainingSecondsString;
    }, 1000);
}

function handleUserInput(){
    let inputValue = Number(inputBox.value);
    inputBox.value = '';
    if(inputValue === 0){
        warnAboutInput.innerText = "Empty!";
        return;
    }
    if(inputValue < 1 || inputValue > 100){
        warnAboutInput.innerText = "Out of range!";
        return;
    }
    console.log("User input:", inputValue);
    userInputCounter += 1;
    let chance = chances[userInputCounter - 1]
    chance.style.backgroundColor = "darkred";
    chance.style.fontSize = "5px";
  
  //! this part is logic part ok
    if(inputValue === randomNumber){
        finish(true)
        return;
    }
    if (userInputCounter === 6){
        finish(false);
        return;
    }
    let nextChance = chances[userInputCounter]
    nextChance.style.backgroundColor = "red";
    nextChance.style.fontSize = "8px";
    if(inputValue > randomNumber)
        warnAboutInput.innerText = "Try A Lower Number !";
    else
        warnAboutInput.innerText = "Try A Higher Number !";
}

function finish(win, timeOut = false){
    clearInterval(timerChanger);

    warnAboutInput.innerText = '';
    inputBox.value = '';
//! this condition is win to 
    if (win){
        result.style.color = "#51ff00";
        message.style.color = "#51ff00";
        result.innerText = "You won!";
        message.innerText = "Well played!";
    }
    else { //! not win then this part
        result.style.color = "#d93030";
        message.style.color = "#d93030";
        if (timeOut)
            result.innerText = "Time out!";
        else
            result.innerText = "You lost!";
        message.innerText = "The number was " + String(randomNumber) + "!";
    }
    result.style.visibility = "visible";
    message.style.visibility = "visible";
    inputBox.disabled = true;
    guessButton.style.visibility = "hidden";
    playAgainButton.style.visibility = "visible";
}

playAgainButton.onclick = function playAgain(){
    window.location.reload();
};


/*     Instructions     */

function togglehelp(){
    document.getElementById("help-1").classList.toggle("active");
}