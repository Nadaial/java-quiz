var startBtn = document.getElementById('start-btn');
var questionConEl=document.getElementById('question-con');
var shuffleQue, currentQueIndex;
var QueEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-btns');




//start the quiz
startBtn.addEventListener('click', startQuiz);
function startQuiz(){
console.log("started");
startBtn.classList.add("hide");
shuffleQue =questions.sort(() => Math.random() - .5);
currentQueIndex = 0
questionConEl.classList.remove('hide');
nextQuestion()
}





//Toset the next question 
function nextQuestion(){
showQue(shuffleQue[currentQueIndex])
}

function showQue(question){
    QueEl.innerText = question.question
}

//select the Answer function
function answer(){

}

var questions =[
    {
        question: 'What is 1', 
        answers: [
            {text:'1', correct:true},
            {text:'2', correct:false},
            {text:'3', correct:false},
            {text:'4', correct:false},
        ]
    }
]