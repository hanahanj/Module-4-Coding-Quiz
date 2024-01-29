var scores = document.querySelector("#score");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");

// Used to move from Start through questions to End
// Question Count
var q=0;
console.log(q);

// Correct Answer Score 
var c=0;


function nextQuestion(){

    if (q==0){
   question.textContent = "Commonly Used Datatypes do NOT include: ";
answer1.textContent = "Strings";
answer2.textContent = "Alerts";
    correct();
// Add correct class

// Remove incorerct class

    q++;
    console.log(q);

    } else if (q == 1){
question.textContent = "Conditions in an if/else statement are enclosed in _______?";
answer1.textContent = "Brackets";
answer2.textContent = "Parenthesis";
 correct();
q++;
console.log(q);
answer1.classList.remove("correct");
answer2.classList.add("correct");


} else if (q == 2){

question.textContent = "A useful development tool for printing content to the console is?";
answer1.textContent = "console.log();";
answer2.textContent = "web inspector";
 correct();
q++;
console.log(q);
answer1.classList.add("correct");
answer2.classList.remove("correct");


} else {
 question.textContent = "Results";
    answer1.textContent = "Exit?";
    answer2.textContent = "Play Again?";
    
   
}
}


function exit(){
   
    question.textContent = "Ok bye";
    answer1.remove();
    answer2.remove();
}


function correct() {
    if (event.target.classList.contains('correct')) {
    console.log('Element with class "correct" was clicked!');
    c=c+10;
    console.log(c);

  } else{
    console.log('Element with the class "wrong" was clicked!');
     c=c-10;
    console.log(c);
  } 
}