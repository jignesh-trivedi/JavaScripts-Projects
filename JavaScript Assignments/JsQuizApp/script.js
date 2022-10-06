const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0


loadQuiz(currentQuiz)

function loadQuiz(currentQuiz) {
    questionEl.innerText = quizData[currentQuiz].question;
    a_text.innerText = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;
}

function deselectAnswers() {
    answerEls.forEach(element => {
        element.checked = false;
    })
}


function getSelected() {
   answerEls.forEach(element => {
    if(element.checked){
        // if(element.id)
        // console.log(element.id);
        if(element.id === quizData[currentQuiz].correct){
            score = score + 1;
        }
    }
   });
   
}


submitBtn.addEventListener('click', () => {
    getSelected();
    if(currentQuiz < quizData.length - 1){
        currentQuiz = currentQuiz + 1;
        loadQuiz(currentQuiz)
    }
    else{
        questionEl.innerText = "Quiz Finished";
        document.getElementsByTagName("ul")[0].style.display = "none"; // hide options after the last question is completed
        submitBtn.innerText = `Your Score is ${score}`;
    }
    deselectAnswers();
    }
)