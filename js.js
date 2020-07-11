var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var questionConEl=document.getElementById('question-con');
var shuffleQue, currentQueIndex;
var QueEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-btns');
var time =200;



//start the quiz

startBtn.addEventListener('click', function() {
    startQuiz();
    startTimer();
});   

nextBtn.addEventListener('click', ()=>{
    currentQueIndex++;
    nextQuestion();
    
    
})
function startQuiz(){
console.log("started");
startBtn.classList.add("hide");
shuffleQue =questions.sort(() => Math.random() - .5);
currentQueIndex = 0
questionConEl.classList.remove('hide');
nextQuestion()
}
//quiz timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
//To set the next question 
function nextQuestion(){
    resetQue();
showQue(shuffleQue[currentQueIndex]);
}

function showQue(question){
    QueEl.innerText = question.question;
    question.answers.forEach(answer1 =>{
        var button =document.createElement('button');
        button.innerText = answer1.text;
        button.classList.add('btn');
        if (answer1.correct){
            button.dataset.correct= answer1.correct
        }
button.addEventListener('click', answerSel);
answerBtnEl.appendChild(button);
    })
}

function resetQue(){
    nextBtn.classList.add('hide');
    while (answerBtnEl.firstChild){
        answerBtnEl.removeChild (answerBtnEl.firstChild);
    }
}

//select the Answer function
function answerSel(){
var selectedBtn= event.target;
var correct = selectedBtn.dataset.correct;
setStatusClass(document.body, correct);
Array.from (answerBtnEl.children).forEach(button => {
    setStatusClass(button,button.dataset.correct);

})
//When we run out of question, the restart buttonshow (or any other action)
if (shuffleQue.length> currentQueIndex + 1){
    nextBtn.classList.remove('hide');
}else {
    startBtn.innerText = 'Restart';
    startBtn.classList.remove('hide');

}
nextBtn.classList.remove('hide');
}


function setStatusClass(element, correct){
    clearStatusClass (element);
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

var questions =[
    {
        question: 'What is Question 1?', 
        answers: [
            {text:'1', correct:true},
            {text:'2', correct:false},
            {text:'3', correct:false},
            {text:'4', correct:false},
        ]
    },
    {
        question: 'What is Question 2?', 
        answers: [
            {text:'e', correct:false},
            {text:'u', correct:false},
            {text:'y', correct:true},
            {text:'k', correct:false},
        ]
    },
    {
        question: 'What is Question 3?', 
        answers: [
            {text:'3', correct:false},
            {text:'g', correct:false},
            {text:'j', correct:false},
            {text:'f', correct:true},
        ]
        
    }

]