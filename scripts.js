let history = []

let Random = Math.floor(Math.random() * 100)
console.log(`The random number is ${Random}`);

let guessRemaining = 5

document.getElementById("guess-remaining").innerHTML = `Your chance(s) to guess: ${guessRemaining}`

// function doublecheck() {
//     if (history.includes(userNumber)) {

//         alert("You've put the same number!")
//         history.pop();
// }
// }

function guessNumber() {

    let userNumber = document.getElementById("guessingArea").value
    // console.log(`User guessed ${userNumber}`)
    

    history.push(userNumber)
    console.log(history)
    document.getElementById("historyArea").innerHTML = `history: ${history}`
    guessRemaining = guessRemaining - 1;

    if (guessRemaining >= 1) {
        
    document.getElementById("guess-remaining").innerHTML = `Your chance(s) to guess: ${guessRemaining}`


        if (userNumber == Random) {
            document.getElementById("resultArea").innerHTML = `Correct!`;
            timeOut()
            document.getElementById('myTime').innerHTML = `You have won!`;
            document.getElementById("guessButton").disabled = true

        } else if (userNumber < Random) {
            document.getElementById("resultArea").innerHTML = `Too Low`;


        } else  {
            document.getElementById("resultArea").innerHTML = `Too High`;

        } 
    }    else {
        document.getElementById("guess-remaining").innerHTML = `You lost! Our number was : ${Random}`
        document.getElementById("guessButton").disabled = true
    }
    
}



function timeOut() {
    clearInterval(myTime);
  } 

let time =30 // time start from 0
let myTime; // timer will be assign to this variable

function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        if(time == 0){
            timeOut();
            guessRemaining = 0;
            document.getElementById("guess-remaining").innerHTML = `You lost!`      
            }
        document.getElementById('myTime').innerHTML = `You have ${time} sec to finish this round!` 
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)

}

timecounting()// fire the timecounting function!!



function resetNow() {
    document.getElementById('historyArea').innerHTML = ` Your previous guesses : ${history.splice(0,1,2,3,4)}`
    time = 30;
    document.getElementById("guessButton").disabled = false
    timeOut();
    timecounting();
    history = [];
    guessRemaining = 5;
    document.getElementById('guessingArea').value = '';
    document.getElementById('historyArea').innerHTML = '';
    Random = Math.floor(Math.random() * 100);
    console.log(`The random number is ${Random}`);
    document.getElementById("guess-remaining").innerHTML = `Your chance(s) to guess: ${guessRemaining}`;
    document.getElementById('myTime').innerHTML = `You have ${time} sec to finish this round!`;
    document.getElementById("resultArea").innerHTML = ``;
    
}

function setupListeners() {
    const node = document.getElementById("guessingArea");
    node.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          guessNumber()
        }
    });
  }
  
  setupListeners()




