
var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var timer = document.querySelector("#timer");
var counter = document.querySelector("#counter");
var choices = document.querySelector("#choices");
var beginTimer = document.querySelector("#beginTimer");
var a = document.querySelector("#A");
var b = document.querySelector("#B");
var c = document.querySelector("#C");
var d = document.querySelector("#D");
var scorePage = document.querySelector("#scorePage");




var secTillQuizStart = 4;
start.addEventListener("click", function () {
    start.classList.add("hide");
    beginTimer.classList.remove("hide");

    var quizTimeDown = setInterval(function () {
        secTillQuizStart--;
        beginTimer.textContent = "Quiz will start in " + secTillQuizStart;

        if (secTillQuizStart === 0) {
            beginTimer.classList.add("hide")
            quiz.classList.remove("hide");
            renderQuestion();
            quizTime();
            stop(secTillQuizStart);
        }
    }, 1000);
});

function quizTime() {
    var counter = 10;
    setInterval(function () {
        counter--;
        timer.textContent = "remaining time: " + counter;
        if (counter === 0) {
            clearInterval(counter);
            quiz.classList.add("hide");
            scorePage.classList.remove("hide");

        }
    }, 1000);
}


var questions = [
    {
        question: "Question 1",
        a: "Correct",
        b: "Wrong",
        c: "Wrong",
        d: "Wrong",
        correct: "Correct"
    },
    {
        question: "Question 2",
        a: "Wrong",
        b: "Correct",
        c: "Wrong",
        d: "Wrong",
        correct: "Correct"
    },
    {
        question: "Question 3",
        a: "Wrong",
        b: "Wrong",
        c: "Correct",
        d: "Wrong",
        correct: "Correct"
    },
    {
        question: "Question 4",
        a: "Wrong",
        b: "Wrong",
        c: "Wrong",
        d: "Correct",
        correct: "Correct"
    }
];



var lastQuestion = questions.length - 1;
var displayedQuestion = 0;


function renderQuestion() {
    var q = questions[displayedQuestion];

   
    question.innerHTML = "<p>" + q.question + "</p>";
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
    d.innerHTML = q.d;
    // console.log(this);

    if (a || b || c || d) {
        displayedQuestion++;

    }
    var score = 0;
      console.log(score);
    function checkAnswer(answer) {
        if (answer == questions[displayedQuestion.correct]) {
            score++;
          

        }
    }

}



a.addEventListener("click", renderQuestion);
b.addEventListener("click", renderQuestion);
c.addEventListener("click", renderQuestion);
d.addEventListener("click", renderQuestion);
// var score=0;
// function checkAnswer(answer){
//     if(answer==questions[question].correct){
//         scorr++
//     }
// }

// quiz.display = "block";


// # PseudoCode
//     ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// click handler is triggered on the start button
// timer starts
// question shows up on the page
// show the multiple choice answers
// WHEN I answer a question
// THEN I am presented with another question
// click handler is triggered on what the user clicked on
// shows if the answer is correct or not correct
// remove the last question
// remove the last answers
// after a short time,
// remove incorrect/correct,
// show the new question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// if the answer is incorrect,
// decrement the timer's time
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// stop the timer
// remove the question from display
// remove incorrect/correct
// show quiz results
// WHEN the game is over
// THEN I can save my initials and score
// show a text box for putting my name in
// take the current high score from storage
// modify the high score to include the user
// save the current high score into storage
// remove input form
// show the high score page
// ```
// ## Some of the things that I need are...
// * Array of questions
//     * Timer
//     * Click handlers(functions that do click events)
// * HTML templates for Right / Wrong, Questions, Answers, High scores
//     * Stylesheets for each template
//         * Array of objects for the high scores(Scoreboard and a way to save it)