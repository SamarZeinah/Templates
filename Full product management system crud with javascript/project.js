//function get Total==>take price and operate taxes & ads & discount
//function that creat product
//save data in local storage
//clear input data after create it
//read
//count
//delete
//update
//search
//clean data


//#01-call all inputs& outputs using id
let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let mood='create';
let temp;


//#02-function get total
function getTotal(){
    //function will not work unless there is value
if(price.value!=''){
let result=(+price.value + +taxes.value + +ads.value)- +discount.value;
//put result in total
total.innerHTML=result;
total.style.backgroundColor="#040";
}
else{
    total.innerHTML=' ';
    total.style.backgroundColor=" rgb(169, 15, 15);"; 
}
}


//#03-function that creat product
// The easiest place to save the data ==>Array
// because it allows me to delete and modify it
//if,else==>in case if i reload the page i find the data 
// because the java code works in order
let dataPro;
if(localStorage.product != null){
    dataPro=JSON.parse(localStorage.product); 
}
else{
    dataPro=[];
}
//the goal ==>when click on creat save data in array(dataPro)
submit.onclick=function(){
    //I have to collect data for one product in Object
    let newPro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
//#07-count
    //    dataPro.push(newPro)==>this line uesd to creat object
    // so i will make loop on it
if(mood==='create'){
    if(newPro.count>1){
        for(let i=0;i<newPro.count;i++){
            dataPro.push(newPro);
        }
            }
            else{
                dataPro.push(newPro);
            }
}
else{
dataPro[temp]=newPro;
mood='create';
submit.innerHTML='Create';
count.style.display='block';
}


    //go to local storage add save items that was in array ==>This will make the data available even if you reload
    // JSON.stringify(dataPro)==>local storage take string only
    localStorage.setItem('product',JSON.stringify(dataPro));
        //call function when click on button
    clearData()
    showData()

}


//#04-clear input data after create it
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    //total.innerHTMLnot (.value) because its not input;
    total.innerHTML='';
    count.value='';
    category.value='';
}

//#05-read==>data that was in local storage appear in page when click on button create
function showData(){
    getTotal()
    // make empty table and but on it data that was in dataPro(array)using for loop
let table='';
for(let i=0;i<dataPro.length;i++){
table+=`
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
`
}
document.getElementById('tbody').innerHTML=table;
//#06-make button Delete All if there is a data in page
let btndeleteall=document.getElementById('deleteall');
if(dataPro.length>0){
    btndeleteall.innerHTML=`
    <button onclick="deleteAll()" id="deleteall">Delete all(${dataPro.length})</button>
    `
    // btndeleteall.setAttribute(onclick,deleteAll());
}
else{
    btndeleteall.innerHTML='';  
}
}
//when i relode page the data still in page
showData()

//#06- delete Data
function deleteData(i){
    // array contact with local storage so when i delete from array it important to delete from local storage
dataPro.splice(i,1);
localStorage.product=JSON.stringify(dataPro);
//to delete data from html
showData()
}
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData()

}
//#08-update
function updateData(i){
    title.value=dataPro[i].title;
    price.value=dataPro[i].price;
    taxes.value=dataPro[i].taxes;
    ads.value=dataPro[i].ads;
    discount.value=dataPro[i].discount;
    count.style.display='none';
    category.value=dataPro[i].category;
    getTotal()
    submit.innerHTML="Update";
    mood='update';
    temp=i;
    //when click on button scroll go up
    scroll({
        top:0,
        behavior:'smooth',
    });

}
//#09-Search
let searchmood='title';
//call search input
let search=document.getElementById('search');
function getSearchMood(id){
if(id==='SearchTitle'){
    searchmood='title';
    search.placeholder='Search by Title';
}
else{
    searchmood='category';
    search.placeholder='Search by category';
}
search.focus();
search.value=' ';
showData()
}
function searchdata(value){
    let table='';
if(searchmood=='title'){
for(let i=0;i<dataPro.length;i++){
    if(dataPro[i].title.includes(value)){
        table+=`
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
`;
    }
    else{
        for(let i=0;i<dataPro.length;i++){
            if(dataPro[i].category.includes(value)){
                table+=`
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
        `;
    }
    

}
}

}

}
else{

}
document.getElementById('tbody').innerHTML=table;
}