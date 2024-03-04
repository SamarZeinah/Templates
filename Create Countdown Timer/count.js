//determine the time we will keep counting for(End of Year)
//1000 millisecond= second   ==>method getTime():To calculate time(milliSecond)
// Dec 31,2024 23:59:59 ==>end of year
let countDowndate=new Date("Dec 31,2024 23:59:59").getTime();

//start making the counter responsible for everything
//and every 1000 millisecond we will apply a specific thing
let counter=setInterval(()=>{
    //Get date Now
    let dateNow=new Date().getTime();
    //find difference between Now and countdown Date 
    //the difference between the date that i want to reach and the beginning date 
    // will give the number of milli seconds from now till the end
    let dateDifference=countDowndate-dateNow;

                                    //Get time units(days-monthes,years)
    //method Math.floor==>to bring the fractures closer
    
    // #1 Get days
    // dateDifference/1000/60/60/24==dateDifference(1000*60*60*24)
    let days=Math.floor(dateDifference/(1000*60*60*24));
    
    // #2 Get hours
    //The fraction that will remain in millisecond
    //  I work on it and get hours from it
    let hours=Math.floor((dateDifference%(1000*60*60*24))/1000/60/60);
    
    // #3 Get minutes
    let minutes=Math.floor((dateDifference%(1000*60*60))/1000/60);

    // #4 Get Seconds
    let seconds=Math.floor((dateDifference%(1000*60))/1000);
    
//document.querySelector(".days").innerHTML ==>to appear on the page
//days<10? `0${sdays}`:days ==>to put zero if days Ended 
    document.querySelector(".days").innerHTML=days<10? `0${sdays}`:days;
    document.querySelector(".hours").innerHTML=hours<10? `0${hours}`:hours;
    document.querySelector(".minutes").innerHTML=minutes<10? `0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML=seconds<10? `0${seconds}`:seconds;
//stop once if reaches zero
if(dateDifference<=0){
clearInterval(counter);
}
},1000);