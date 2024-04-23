// ## 1 ## start landing
const wrapper = document.querySelector(".landingWrapper");
const landingItems = document.querySelectorAll(".nav-Bottom ul li");

landingItems.forEach((item, index) => {
    item.addEventListener('click', () => selectItem(index));
});

function selectItem(index) {
//change current slide
wrapper.style.transform = `translateX(${-100 * index}vw)`;
//change the choosen product depend on function make down
chooseProduct=products[index];
currentProductTitle.textContent=chooseProduct.title;
currentProductIPrice.textContent="$"+chooseProduct.price;
currentProductImg.src = chooseProduct.colors[0].img;
//change color of product
currentProductColors.forEach((color, index)=>{
    color.style.backgroundColor = chooseProduct.colors[index].code;
});

};

//End landing
// ## 2 ## start product
const products = [
    {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
        {
        code: "black",
        img: "./images/air.png",
        },
        {
        code: "darkblue",
        img: "./images/air2.png",
        },
    ],
    },
    {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
        {
        code: "gray",
        img: "./images/jordan.png",
        },
        {
        code: "green",
        img: "./images/jordan2.png",
        },
    ],
    },
    {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
        {
        code: "white",
        img: "./images/blazer.png",
        },
        {
        code: "green",
        img: "./images/blazer2.png",
        },
    ],
    },
    {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
        {
        code: "black",
        img: "./images/crater.png",
    },
    {
        code: "white",
        img: "./images/crater2.png",
    },
    ],
},
{
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
    {
        code: "gray",
        img: "./images/hippie.png",
    },
    {
        code: "black",
        img: "./images/hippie2 (1).png",
    },
    ],
},
];
// ## 3 ##call peroperits of product
let chooseProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductIPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");


//loop on colors of product
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",() => changeColor(index));
});
//function used to loop on colors of product to change it
function changeColor(index){
    currentProductImg.src=chooseProduct.colors[index].img;
}


//loop on size of product
currentProductSizes.forEach((size,index)=>{
size.addEventListener("click",()=>changeSize(size,index));
});
//function used to loop on Size of product 
// when click on it change color of background and color
function changeSize(size,index){
    currentProductSizes.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
};
const card=document.querySelector(".cardInfo");
const productButton=document.querySelector(".BuyButton_sm");
const closeButton=document.querySelector(".close");

console.log(closeButton);

productButton.addEventListener("click",()=>{
card.style.display="flex";
})
closeButton.addEventListener("click",()=>{
    card.style.display="none";
    })
// End product





