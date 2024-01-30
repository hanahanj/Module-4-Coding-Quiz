var highscore = document.querySelector("#highscore");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var score = document.querySelector("#score");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");

// Sets the initial timer interval
var timeleft = 30;


// Used to move from Start through questions to End
// Question Count
var q=0;
console.log(q);

// Correct Answer Score 
var score = 0

// Goes through all questions, changes questions based on order, logs score, and updates which answer is the correct one 
function nextQuestion(){

    if (q==0){
        question.textContent = "Commonly Used Datatypes do NOT include: ";
        answer1.textContent = "Strings";
        answer2.textContent = "Alerts";

        correct();
        q++;
        console.log(q);
       
        answer1.classList.remove("correct");
        answer2.classList.add("correct");
        addTime();

    } else if (q == 1){
        question.textContent = "Conditions in an if/else statement are enclosed in _______?";
        answer1.textContent = "Parenthesis";
        answer2.textContent = "Brackets";
        correct();
        q++;
        console.log(q);
        answer1.classList.add("correct");
        answer2.classList.remove("correct");
        addTime();


    } else if (q == 2){

        question.textContent = "A useful development tool for printing content to the console is?";
        answer1.textContent = "console.log();";
        answer2.textContent = "web inspector";
        correct();
        q++;
        console.log(q);

         answer1.classList.add("correct");
        answer2.classList.remove("correct");
        addTime();



    } else {
        question.textContent = "Results";

        answer1.textContent = "Exit?";
        answer2.textContent = "Play Again?";
        answer3.textContent = "Save Score";
        localStorage.setItem("score", c);
        score.textContent = "Your Score is " + c;
     correct();
        q++;
        console.log(q);
   
}
}

// If someone doesnt want ot do the quiz they exit 

function exit(){
   
    question.textContent = "Ok bye";
    answer1.remove();
    answer2.remove();
}


// Checks if correct answer was selected and updates the score


function correct() {
    if (event.target.classList.contains('correct')) {
    console.log('Element with class "correct" was clicked!');
    score=score+10;
    console.log(score);

  } else{
    console.log('Element with the class "wrong" was clicked!');
     score=score-10;
    console.log(score);
  } 
}



// countdown timer
function updateCountdown(){
var quizTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(quizTimer);
    document.getElementById("timer").innerHTML = "Finished";
  } else {
    document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

}

function addTime(seconds){
    timeleft += score;

    updateCountdown();
}

updateCountdown();