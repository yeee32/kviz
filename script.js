let generateRondomNumber = function(){
    let num1 = Math.floor(Math.random()*50);
    let num2 = Math.floor(Math.random()*50);

    let randomNumberAnswer = num1 + num2
    let quizQuestionText = `${num1} + ${num2} =`;
    questionElement.innerText = quizQuestionText;
    console.log(quizQuestionText);

    return randomNumberAnswer;
}

// html elements
const questionElement = document.getElementById("mathQuestion");
let inputAnswerElement = document.getElementById("answerInput");
let continueButton = document.getElementById("continue");
let evaluateButton = document.getElementById("evaluate");

let currentID;
let isCorrect; // is the answer(input) correct
let numOfCorrectAnsws;
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
    inputAnswerElement.value = "";
    if (answer == result){
        numOfCorrectAnsws++
        alert("Správně");
    }
    else{
        alert("Špatně");
    }

    evaluateButton.disabled = true;
    continueButton.disabled = false;
    inputAnswerElement.disabled = true;
}
    
