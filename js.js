var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
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
    resetQue();
showQue(shuffleQue[currentQueIndex])
}

function showQue(question){
    QueEl.innerText = question.question
    question.answers.forEach(answer =>{
        var button =document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct= answer.correct
        }
button.addEventListener('click', answer);
answerBtnEl.appendChild(button);
    }
        )
}

function resetQue(){
    nextBtn.classList.add('hide');
    while (answerBtnEl.firstChild){
        answerBtnEl.removeChild (answerBtnEl.firstChild);
    }

}

//select the Answer function
function answer(){
var selectedBtn= e.target;
var correct = selectedBtn.dataset.correct;
setStatusClass(document.body, correct);
Array.from (answerBtnEl.children).forEach(button => {
    setStatusClass(button,button.dataset.correct);

})
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