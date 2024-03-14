// ##make bullites and Question number 
  // 01-Select element
let countSpan=document.querySelector(".quiz_info .count span");
//    06-select bulletis==>spans
let bulletsSpanContainer=document.querySelector(".quiz_App .bulleits .spans");
let quizArea=document.querySelector(".quiz_area");
let answersArea=document.querySelector(".answers_area");
let submitButton=document.querySelector(".quiz_App .submit_button");
let bulleits=document.querySelector(".bulleits");
let results=document.querySelector(".results");
let countdownElement=document.querySelector(".countdown");
                        // #################### #################### ####################
// Set Options 
//first index i will start from
let currentIndex=0;
let rightAnswer=0;
let countDownInterval;

// function to get Data from json using AJAX call
function getQuestions(){
    let myRequest=new XMLHttpRequest();
    //do a test ,is there an answer to the request I sent or not?
    myRequest.onreadystatechange=function(){
        if (this.readyState === 4 && this.status === 200){
            // convert json object to js object
    let questionsObject=JSON.parse(this.responseText);
    //03- to know js object  contains How many questions?
    let questionsCount=questionsObject.length;
    console.log(questionsCount);
    
    //04-creatBullets+set Questions count
    creatBullets(questionsCount);

                        // #################### #################### ####################
//Add Question data==>receive object of first element & questions Count to stop at it
addQuestionData(questionsObject[currentIndex],questionsCount);
//start countdown
countdown(5,questionsCount);


//click on submit Button
submitButton.onclick = () =>{
//Get right answer
let theRightAnswer=questionsObject[currentIndex].right_answer;
    console.log(theRightAnswer);
    //increase index
    currentIndex++;
    //check the answer
    checkAnswer(theRightAnswer,questionsCount)
//As soon as I press the button I need the questions disappear and Quiz area
//remove previous question
quizArea.innerHTML="";
answersArea.innerHTML="";

//Add Question data
//get next question
addQuestionData(questionsObject[currentIndex],questionsCount);
//Handel Bullets
handelBullets();

clearInterval(countDownInterval);
//start countdown
countdown(5,questionsCount);

//show results
showResults(questionsCount);

};
        }
    };
    myRequest.open("GET","https://raw.githubusercontent.com/SamarZeinah/Templates/main/HTML%2C%20CSS%2C%20JavaScript%20Tutorials%20-%20Create%20Quiz%20Application/htmlQuestions.json",true);
    myRequest.send();
}
getQuestions();
//02-function creatBullets accept number==>number of questions and add this num to countspan
function creatBullets(num) {
    countSpan.innerHTML = num;

    // 05-creat spans depend on questionsCount
    for (let i = 0; i < num; i++) {
        // create span
        let theBullet = document.createElement("span");
        // 08-make first span active
        if(i===0)
        {
            theBullet.className="on";
        }
        // 07- Append Bullets to main Bullet container(06)
        bulletsSpanContainer.appendChild(theBullet);
    }
}



                      // #################### #################### ####################
function addQuestionData(Object,Count){
if(currentIndex<Count){

    //creat h2 question title
    let questionTitle=document.createElement("h2");
    //creat Question Text
    let questionText=document.createTextNode(Object['title']);
    //append text to h2
    questionTitle.appendChild(questionText);
    //append h2 to quizArea
    quizArea.appendChild(questionTitle);
    //creat the answers
    for(let i=1;i<=4;i++){
        //creat main answer div
        let mainDiv=document.createElement("div");
        //Add class to main div
        mainDiv.className='answer';
        //creat radio input
        let radioInput =document.createElement("input");
        //Add type +name+id+data-Atteibute
        radioInput.name='questions';
        radioInput.type='radio';
        radioInput.id=`answer_${i}`;
        radioInput.dataset.answer=Object[`answer_${i}`];

        //make first option selected
        if(i===1){
            radioInput.checked=true;
        }
        //creat label
        let theLabel=document.createElement("label");
        //add for Attribute
        theLabel.htmlFor=`answer_${i}`;
        //creat label text
        let textLable=document.createTextNode(Object[`answer_${i}`]);
        //add text to label
        theLabel.appendChild(textLable);
        //add input & label to main div
        mainDiv.appendChild(radioInput);
        mainDiv.appendChild(theLabel);

        //add main div to answers area
        //then i will choose answers area
        answersArea.appendChild(mainDiv);

    }
}   
}                   
function checkAnswer(rAnswer,count){
let answers=document.getElementsByName("questions");
let theChossenanswer;
for(let i=0;i<answers.length;i++){
    //to make sure that is answer that person checked
    if(answers[i].checked){
        theChossenanswer=answers[i].dataset.answer;
    }
}
if(rAnswer===theChossenanswer){
    rightAnswer++;
    console.log("Good answer");
}
}
function handelBullets(){
    let bulleitsSpans=document.querySelectorAll(".bulleits .spans span");
    let arrayOfSpans=Array.from(bulleitsSpans);
    arrayOfSpans.forEach((span,index) =>{
if(currentIndex===index){
    span.className="on";
}
    })
}
function showResults(Count){
    //if question ends results appears
    let theResults;
    if(currentIndex===Count){
        console.log("Question Is finished");
        quizArea.remove();
        answersArea.remove();
        submitButton.remove();
        bulleits.remove();
if(rightAnswer>(Count/2)&&rightAnswer<Count){
    theResults=`<span class="Good">Good</span>,${rightAnswer}from ${Count}Is Good.`;
}
else if(rightAnswer===Count){
    theResults=`<span class="prefect">Prefect</span>,All Answers Good`;

}
else {
    theResults=`<span class="bad">Bad</span>,${rightAnswer}from ${Count}`;

}
results.innerHTML=theResults;
results.style.padding="10px";
results.style.backgroundColor="white";
results.style.marginTop="10px";
    }
}
function countdown(duration,Count){
    if(currentIndex<Count){
let minutes,seconds;
countDownInterval=setInterval(function(){
minutes=parseInt(duration/60);
seconds=parseInt(duration%60);

minutes=minutes<10?`0${minutes}`:minutes;
seconds=seconds<10?`0${seconds}`:seconds;

countdownElement.innerHTML=`${minutes}:${seconds}`;
if(--duration<0){
clearInterval(countDownInterval);
submitButton.click();
}
},1000)
    }
}
