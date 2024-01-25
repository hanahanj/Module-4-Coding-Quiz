var scores = document.querySelector("#score");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");

// Used to move from Start through questions to End
var q=0;
console.log(q);


function nextQuestion(){

    if (q==0){
question.textContent = "Do you want to take a quiz?";
answer1.textContent = "yes";
answer2.textContent = "no";

q++;
console.log(q);

    } else if (q == 1){

question.textContent = "Question 1?";
answer1.textContent = "Answer 1";
answer2.textContent = "Answer 2";

q++;

} else if (q == 2){

question.textContent = "Question 2?";
answer1.textContent = "Answer 2-1";
answer2.textContent = "Answer 2-2";
q++;

}
}

