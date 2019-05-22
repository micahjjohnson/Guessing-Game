var form = document.getElementById("gameForm");
var resultForm = document.getElementById("result");


var isGuessing = 0;
var x = document.getElementById("initialGuess");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const initialNumber = generateRandomNumber();
document.getElementById("initialGuess").innerHTML = `Starting number: ${ initialNumber }`;
document.getElementById("sub").onclick = processInput;

function getRadioValue()
{
    for (var i = 0; i < document.getElementsByName('myGuess').length; i++)
    {
        if (document.getElementsByName('myGuess')[i].checked)
        	return document.getElementsByName('myGuess')[i].value;
    }
}

function processInput() {
	if (isGuessing == 0) { // submit button has not just been pressed
		var guess = '';
		var header = ''; 
		var compareNumber = generateRandomNumber();
		var userGuess = getRadioValue();

		if (initialNumber < compareNumber)
			guess = 'higher';
		else if (initialNumber > compareNumber)
			guess = 'lower';
		else if (initialNumber == compareNumber)
			guess = 'same';

		if (guess == userGuess)
			header = 'CORRECT';
		else
			header = 'WRONG';

		isGuessing = 1;
		resultForm.innerHTML.display="block";
		document.getElementById("wordGuessResult").innerHTML = `You guessed ${ header } `;
		document.getElementById("numberGuessResult").innerHTML = `The next number was ${ compareNumber }`;
	}
}

document.getElementById("restart").onclick = resetForms;

function resetForms(){
	isGuessing = 0;
	form.reset();
	document.getElementById("wordGuessResult").innerHTML = '';
	document.getElementById("numberGuessResult").innerHTML = '';
	
	const initialNumber = generateRandomNumber();
	document.getElementById("initialGuess").innerHTML = `Starting number: ${ initialNumber }`;

}

