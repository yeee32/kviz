// this function creates the randomly generated question
// it generates two random numbers
// and calculates the answer using the randomly generated operator
const generateRandomQuestion = function(){  
    let questionAnswer;             
    let max = 100;  // highest generated number                
    let num1 = Math.floor(Math.random()*max+1); 
    let num2 = Math.floor(Math.random()*max+1);
    let quizQuestionText;
    
    // × • · * 
    mathOperators = ["+","-","·"];
    const randomOperator = Math.floor(Math.random()*mathOperators.length);
    
    // calculates the answer
    switch(mathOperators[randomOperator]){
        case "+":
            questionAnswer = num1 + num2;
            break;

        case "-":
            questionAnswer = num1 - num2;
            break;

        case "·":
            max = 15;
            num1 = Math.floor(Math.random()*max+1);
            num2 = Math.floor(Math.random()*max+1);
            questionAnswer = num1 * num2;
            break;
    }

    quizQuestionText = `${num1} ${mathOperators[randomOperator]} ${num2}`; // creates the question that is then displayed
    
    questionElement.innerText = quizQuestionText;  // displays the created question on the site
    console.log(`${quizQuestionText} = ${questionAnswer}`);

    return questionAnswer;
}

// html elements
const questionElement = document.getElementById("mathQuestion"); // Randomly generated question
const inputAnswerElement = document.getElementById("answerInput"); // Input field
const continueButton = document.getElementById("continue"); // "Next" button
const evaluateButton = document.getElementById("evaluate"); // "Check" button
const resetButton = document.getElementById("reset"); // "Reset" button
const questionCounter = document.getElementById("questionCounter"); // Question counter

let numOfCorrectAnsws;
let totalNumberOfQuestions;
let currentNumOfQuestions;
let userAnswer;
let result;
let timer;

// ideas TODO:
// 1. Create a main (start) menu 
// 2. Create an end menu
// 3. Implement division (÷)
// 4. Show what question were right and wrong

// 5. Add a timer (Maybe) {kinda working?}*************

// 6. Make better popups
// 7. Continue and check with enter
// 8. SFX (?)

// loads the quiz
bodyElement.onload = function(){
  startQuiz();
}
let seconds;
let finalTime;
function upTimer(){
    seconds++
    let addHour = Math.floor(seconds / 3600); 

    if(addHour < 10){
        addHour = "0" + addHour;
    }

    let addMinute = Math.floor((seconds - addHour * 3600) / 60);

    if(addMinute < 10){
        addMinute = "0" + addMinute;
    }

    let addSecond = seconds - (addHour * 3600 + addMinute * 60);

    if(addSecond < 10){
        addSecond = "0" + addSecond;
    }

    finalTime = `${addHour}:${addMinute}:${addSecond}`;
    document.getElementById("timer").innerText = finalTime;
    
    return finalTime;
}

const startQuiz = function(){
    console.clear();

    seconds = 0;
    totalNumberOfQuestions = prompt("How many questions?");
    if (totalNumberOfQuestions == "" || isNaN(totalNumberOfQuestions) || totalNumberOfQuestions == 0) {
        alert("Write how many questions do you want to answer!");
        // totalNumberOfQuestions = prompt("How many questions?");
        return startQuiz(); // call the function again to check the input again
    }

    if(!totalNumberOfQuestions){ // no idea what this does ·-·
        inputAnswerElement.disabled = true;
        continueButton.disabled = true;
        evaluateButton.disabled = true;
        resetButton.disabled = false;
        clearInterval(timer);
    }
    else{
        numOfCorrectAnsws = 0;
        inputAnswerElement.value = "";
        continueButton.disabled = true;
        evaluateButton.disabled = false
        inputAnswerElement.disabled = false;
        result = generateRandomQuestion();
        currentNumOfQuestions = 1;
        questionCounter.innerText = `${currentNumOfQuestions} / ${totalNumberOfQuestions}`; 
        clearInterval(timer);
        
        timer = setInterval(upTimer, 1000);
    }
}

continueButton.onclick = function(){
    
    result = generateRandomQuestion();
    inputAnswerElement.value = "";
    continueButton.disabled = true;
    inputAnswerElement.disabled = false;
    evaluateButton.disabled = false;

    currentNumOfQuestions++;
    questionCounter.innerText = `${currentNumOfQuestions} / ${totalNumberOfQuestions}`;
}


inputAnswerElement.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        evaluateButton.click();
    }
})

// inputAnswerElement.addEventListener("keypress",function(event){
//     if(event.key === "Enter"){
//         event.preventDefault();
//         continueButton.click();
//     }
// })

// this functions checks if the answer is correct
const checkCorrectAnswer = function(){
    userAnswer = inputAnswerElement.value;
 
    if (userAnswer == result){
        numOfCorrectAnsws++;
        alert("That's correct");
    }
    else if (userAnswer == ""){
        alert("Write an answer");
    }
    else{
        alert(`That's wrong, the right answer is: ${result}`);
    }
}

// when the "Check" button is pressed it checks the answer
evaluateButton.onclick = function(){
    checkCorrectAnswer();

    // if user inputs an answer
    // disables the "Check" button and the input field
    // enables the "Next" button
    if(userAnswer != ""){
        evaluateButton.disabled = true;
        continueButton.disabled = false;
        inputAnswerElement.disabled = true;
    }
    if(currentNumOfQuestions >= totalNumberOfQuestions){
        alert(`Quiz completed! \nNumber of correct answers: ${numOfCorrectAnsws}/${totalNumberOfQuestions}\nFinal time: ${finalTime}`);
        continueButton.disabled = true;
        clearInterval(timer);
    } 
}

// restarts the quiz
resetButton.onclick = function(){ 
    /*re*/startQuiz();  
}
