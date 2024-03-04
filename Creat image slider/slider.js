// Get slider items"photos"using [Array.from]
//make photos like array
var slider_images=Array.from(document.querySelectorAll('.slider-container img'));
console.table(slider_images);
//Get number of item in array to make pollte same number
var slidescount=slider_images.length;
console.log(slidescount);
//Set current slide
// البدايه بتاعتى ال هزود او هنقص منها
var currentslide=1;
//element that has slide number[slide#1]
var slideNumberElement=document.getElementById('slide-number');
//Get prev and next element
var nextbutton=document.getElementById('next');
var prevbutton=document.getElementById('prev');
//handel click on next and prev button
// بمعنى لما اضغط على اى واحد فيهم ينفذ الفانكشن
nextbutton.onclick=nextSlide;
prevbutton.onclick=prevSlide;
                                               // **********************
//creat main ul that contain pollets
var paginationelement =document.createElement('ul');
// set id on [ul]
paginationelement.setAttribute('id','pagination-ul');
// number of li in ul
//number of li based on slide count
for(var i=1;i<=slidescount;i++){
//creat li
var paginationitems=document.createElement('li');
// set id on [li]
paginationitems.setAttribute('data-index',i);
//set text in li
paginationitems.appendChild(document.createTextNode(i));
//add li in ul
paginationelement.appendChild(paginationitems);
}
//add ul to the page
document.getElementById('indicators').appendChild(paginationelement);
                                             // **********************
//Get'استدعاء' the new created ul
var paginationcreated=document.getElementById('pagination-ul');
// Get pagination using [Array.from]
//make li like array
var paginationBulltes=Array.from(document.querySelectorAll('#pagination-ul li'));
// Loop Through All Bullets Items
for (var i = 0; i < paginationBulltes.length; i++) {

    paginationBulltes[i].onclick = function () {

    currentslide = parseInt(this.getAttribute('data-index'));

    theChecker();

    }

}
//Run the cheaker function
theChecker();

//function of next slide
function nextSlide(){
theChecker();
if(nextbutton.classList.contains('disabled')){

}
else{
    
        // put on button of next lead to next number
    currentslide++;
    theChecker();

}
}
//function of prev slide
function prevSlide(){

if(prevbutton.classList.contains('disabled')){

}
else{
    
        // put on button of next lead to next number
    currentslide--;
    theChecker();

}
}
//creat cheaker function
// محتاجه اكتب رقم الاسلايد ال انا فيها فى الاسلايد نمبر
function theChecker(){
    //set slide number
    slideNumberElement.textContent='slide#'+(currentslide)+'of'+(slidescount);
//remove all active classes
removeAllActive();
    //set active class on current slide
//currentslide=1    currentslide-1=0 =>first index
slider_images[currentslide-1].classList.add('active');
//set active class on paginationitems[li]
paginationcreated.children[currentslide-1].classList.add('active');
// check if current slide is the first to but disabled
if(currentslide==1){
    //add disabled class on the prev button
    prevbutton.classList.add('disabled');

}
else{
    prevbutton.classList.remove('disabled');
}
// check if current slide is the last to but disabled
if(currentslide==5){
    //add disabled class on the next button
    nextbutton.classList.add('disabled');

}
else{
    nextbutton.classList.remove('disabled');
}


}
//function Remove active class from all elements
function removeAllActive(){
    //loop on photos
    slider_images.forEach(function(img){
        img.classList.remove('active');
    });
    //loop thtough pagination Bullets
    paginationBulltes.forEach(function(Bullet){
        Bullet.classList.remove('active');
    });

}
