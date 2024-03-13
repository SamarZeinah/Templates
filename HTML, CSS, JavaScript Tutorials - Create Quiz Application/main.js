// ##make bullites and Question number 
  // 01-Select element
let countSpan=document.querySelector(".quiz_info.count span");
//    06-select bulletis==>spans
let bulletsSpanContainer=document.querySelector(".bulleits .spans");
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
    
    //04-creatBullets+set Questions count
    creatBullets(questionsCount);
        }
    };
    // myRequest.open("GET","htmlQuestions.json",true);
    myRequest.open("GET","https://raw.githubusercontent.com/your-username/my-repo/main/htmlQuestions.json",true);
    myRequest.send();
}
getQuestions();
//02-function creatBullets accept number==>number of questions and add this num to countspan
function creatBullets(num){
    countSpan.innerHTML=num;

}

// 05-creat spans depend on  questionsCount
for(let i=0;i<num;i++){
    // creat span
    let theBullet=document.createElement("span");
    //07- Appen Bullets to main Bullet container(06)
    bulletsSpanContainer.appendChild(theBullet);

}