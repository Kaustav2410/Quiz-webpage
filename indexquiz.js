const quizData = [
    {
        question:"Who destoryed planet vegeta ?",
        a:"Vegeta",
        b:"Nappa",
        c:"Frieza",
        d:"Goku",
        correct:"c",
    },
    {
        question:"Who is Goku's Brother?",
        a:"Raditz",
        b:"Vegeta",
        c:"Whis",
        d:"Nappa",
        correct:"a",
    },
    {
        question:"Who comes from the future to warn the Z warriors?",
        a:"Trunks",
        b:"Goten",
        c:"Bulma",
        d:"Gohan",
        correct:"a",
    },
    {
        question:"Who does Piccolo fuse with to fight the Androids?",
        a:"Goku",
        b:"Kami",
        c:"Tein",
        d:"Vegeta",
        correct:"b",
    },
    {
        question:"Who is the first Z warrior to go Super saiyan 2?",
        a:"Goku",
        b:"Vegeta",
        c:"Gohan",
        d:"Trunks",
        correct:"c",
    },
]

let currentQuestion = 0;
// current counter of the question
let quizQuestion=document.querySelector("#question");
//Selected the h2 tag from the html to modify it using quizQuestion
const answerEls = document.querySelectorAll(".answer");
let quizContainer = document.getElementById("container");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitbtn =document.getElementById("button");
let answer=undefined;
let score =0 ;

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    //currentQuizData stores the obj stored at the current location in the array quizData
    quizQuestion.innerText=currentQuizData.question;
    //modifying the h2 using innerHTML
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
}

loadQuiz();

function getSelected(){
    //answer element
    answer=undefined;
    //Every time we call this function answer default value will be reseted to undefined and if we don't do this then answer(variable) will show the previous answer and even if don't select any answer and submit it will go to the next question

    answerEls.forEach((answerEl)=>{
        //created an array called answerEl from answerEls
        if(answerEl.checked){
            //if answerEl is checked or not 
            answer = answerEl.id;
            //if it is then answer = id of that tag
        }

    });
    return answer;
}

function deselected(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}

submitbtn.addEventListener('click',function(){
    //if the length of the quizData array is greater than the currentQuestion counter then call the function and if the vice versa is true that means the quiz is finished so alert is called
    let answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        console.log(score, answer, quizData[currentQuestion].correct);
        currentQuestion++;
        if(currentQuestion<quizData.length){
            loadQuiz();
            deselected();
        }
        else{
            quizContainer.innerHTML=`<h2>You answered ${score}/${quizData.length} questions correctly </h2> 
            <button onclick="location.reload()">Reload</button>`
        }
    }
    
});