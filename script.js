let generateRandomNumber = function(){
    let randomNumberAnswer;
    let num1 = Math.floor(Math.random()*100);
    let num2 = Math.floor(Math.random()*100);

    
    mathOperators = ["+","-"];
    let i = Math.floor(Math.random()*mathOperators.length);
    
    switch(mathOperators[i]){
        case "+":
            randomNumberAnswer = num1 + num2;
        break;
        case "-":
            randomNumberAnswer = num1 - num2;
        break;
    }

    let quizQuestionText = `${num1} ${mathOperators[i]} ${num2}`;
    questionElement.innerText = quizQuestionText;
    console.log(quizQuestionText + " = " + randomNumberAnswer);

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

bodyElement.onload = function(){
  startQuiz();
}

function startQuiz(){
    numOfCorrectAnsws = 0;
    continueButton.disabled = true;
    result = generateRandomNumber();
}

continueButton.onclick = function(){
    result = generateRandomNumber();
    inputAnswerElement.value = "";
    continueButton.disabled = true;
    inputAnswerElement.disabled = false;
    evaluateButton.disabled = false;
}

function checkCorrectAnswer(){
    answer = inputAnswerElement.value;
 
    if (answer == result){
        numOfCorrectAnsws++;
        alert("That's correct");
    }
    else if (answer==""){
        alert("Write an answer");
    }
    else{
        alert(`That's wrong, the right answer is: ${result}`);
    }
}

evaluateButton.onclick = function(){
   
    checkCorrectAnswer();

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
    console.clear();
    result = generateRandomNumber();
    evaluateButton.disabled = false;
    continueButton.disabled = true;
    inputAnswerElement.disabled = false;
    numOfCorrectAnsws = 0;
    currentNumOfQuestions = 1;
    inputAnswerElement.value = "";
}
