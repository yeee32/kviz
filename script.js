const myQuestions = [
    {
        id: 0,
        mathQuizQuestion: "10+1=",
        mathQuizAnswer: 11
    },

    {
        id: 1,
        mathQuizQuestion: "54-21=",
        mathQuizAnswer: 33
    },

    {
        id: 2,
        mathQuizQuestion: "15+12=",
        mathQuizAnswer: 27
    },

    {
        id: 3,
        mathQuizQuestion: "4-3",
        mathQuizAnswer: 1
    },

    {
        id: 4,
        mathQuizQuestion: "20+9=",
        mathQuizAnswer: 29
    },
]

// html elements
const questionElement = document.getElementById("mathQuestion");
const inputAnswerElement = document.getElementById("answerInput")
const continueButton = document.getElementById("continue");
const evaluateButton = document.getElementById("evaluate");

let currentID;
let isCorrect; // is the answer(input) correct
let numOfCorrectAnsws;

bodyElement.onload = function() 
{
  startQuiz();
}

function startQuiz(){
    currentID = 0;
    numOfCorrectAnsws = 0;
    continueButton.disabled = true;
    showCurrentQuestion(currentID);
}

function showCurrentQuestion(currentID){
    questionElement.innerText = myQuestions[currentID].mathQuizQuestion;
}