let generateRondomNumber = function(){
    let randomNumberAnswer;
    let num1 = Math.floor(Math.random()*100);
    let num2 = Math.floor(Math.random()*100);

    
    mathOperators = ["+","-"];
    let i = Math.floor(Math.random()*mathOperators.length);
    
    if(mathOperators[i] == "+"){
        randomNumberAnswer = num1 + num2;
    }
    else if (mathOperators[i] == "-"){
        randomNumberAnswer = num1 - num2;
    }
    
    let quizQuestionText = `${num1} ${mathOperators[i]} ${num2} =`;
    questionElement.innerText = quizQuestionText;
    console.log(quizQuestionText,randomNumberAnswer);

    return randomNumberAnswer;
}

// html elements
const questionElement = document.getElementById("mathQuestion");
let inputAnswerElement = document.getElementById("answerInput");
let continueButton = document.getElementById("continue");
let evaluateButton = document.getElementById("evaluate");
let resetButton = document.getElementById("reset");

let numOfCorrectAnsws;
let numberOfQuestions = 10;
let currentNumOfQuestions = 1;
let answer;
let result;


bodyElement.onload = function() 
{
  startQuiz();
}

function startQuiz(){
    currentID = 0;
    numOfCorrectAnsws = 0;
    continueButton.disabled = true;
    result = generateRondomNumber();
}

continueButton.onclick = function(){
    result = generateRondomNumber();
    inputAnswerElement.value = "";
    continueButton.disabled = true;
    inputAnswerElement.disabled = false;
    evaluateButton.disabled = false;
    
}

evaluateButton.onclick = function(){
    answer = inputAnswerElement.value;
 
    if (answer == result){
        numOfCorrectAnsws++
        alert("That's correct");
    }
    else{
        alert(`That's wrong, the right answer is: ${result}`);
    }

    evaluateButton.disabled = true;
    continueButton.disabled = false;
    inputAnswerElement.disabled = true;

    if(currentNumOfQuestions >= numberOfQuestions){
        alert(`Quiz completed! \nNumber of correct answers: ${numOfCorrectAnsws}/${numberOfQuestions}`);
        continueButton.disabled = true;
    }

    currentNumOfQuestions++;
}

resetButton.onclick = function(){
    location.reload();
}
