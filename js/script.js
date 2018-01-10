var ranNumb = 0;
var clearGuess = document.getElementById('clearGuess');
var inputGuess = document.getElementById('guess');
var submitGuess = document.getElementById('submitGuess')
var reset = document.getElementById('reset')
var submitRange = document.getElementById('submitButton');
var minNumb = document.getElementById("minNumInput");
var maxNumb = document.getElementById('maxNumInput');
var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click',getRandomInt);

function getRandomInt() {
  var parsedNumbMax = parseInt(maxNumb.value)
  var parsedNumbMin = parseInt(minNumb.value)
  ranNumb = Math.floor(Math.random() * (parsedNumbMax - parsedNumbMin)) + parsedNumbMin; 
  console.log(ranNumb)
  return ranNumb
 }

inputGuess.addEventListener('keydown', clearEnabled);
submitGuess.addEventListener('click', resetEnabled);

function clearEnabled() {
  clearGuess.disabled = false;
}

function resetEnabled(){
  reset.disabled = false;
}

document.getElementById('submitGuess').onclick = function(){
  var inputNum = document.getElementById ("guess").value;
  var parsedNumber = parseInt(inputNum)
  if (inputNum.includes (".")|| isNaN(parsedNumber)){
    alert("Please try a number")
    }else{
     lastGuess()
     inputNumber(inputNum)
     compare(inputNum)
  }
}
  document.getElementById('clearGuess').onclick = function(){
  document.getElementById('guess').value = "";
}

function compare(inputNum) {
  var numbClue = document.getElementById('numbClue');
  if (inputNum > maxNumb.value || inputNum < minNumb.value){
    numbClue.innerHTML="Please pick a number within the range you set"
  }else if (ranNumb > inputNum){
    numbClue.innerHTML="That is too low"
  }else if (ranNumb < inputNum) {
    numbClue.innerHTML="That is too High"
  }else{
    numbClue.innerHTML="Boom!"
  }
}
function lastGuess() {
  document.getElementById('lastguess').innerHTML = "Your Last Guess Was";
}
function inputNumber(inputNum) {
  document.getElementById('number') .innerHTML = inputNum
}

document.getElementById('reset').onclick = function(){
  window.location.reload(true);
  ranNumb = Math.floor(Math.random() * 100);
}






