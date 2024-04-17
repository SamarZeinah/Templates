
// const wrapper = document.querySelector('.landingWrapper');
// const landingItems = document.querySelectorAll('.landingItem');
// console.log(wrapper);
// console.log(landingItems);
// landingItems.forEach((item,index) => {
//     item.addEventListener('click', selectItem(index));
// });

// function selectItem(e) {
//     wrapper.style.transform = `translateX(${-100 * index}vw)`;
// }


//start landing
const wrapper = document.querySelector(".landingWrapper");
const landingItems = document.querySelectorAll(".landingItem");

landingItems.forEach((item, index) => {
    item.addEventListener('click', () => selectItem(index));
});
function selectItem(index) {
//change current slide
wrapper.style.transform = `translateX(${-100 * index}vw)`;
//change the choosen product
chooseProduct=products[index];
currentProductTitle.textContent=chooseProduct.title;
currentProductIPrice.textContent=chooseProduct.price;
currentProductColors.textContent=chooseProduct.colors;
currentProductSizes.textContent=chooseProduct.size;
}

//End landing
// start product
let chooseProduct=products[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle")
const currentProductIPrice=document.querySelector(".productPrice")
const currentProductColors=document.querySelector(".color")
const currentProductSizes=document.querySelector(".sizes")


const products = [
    {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
        {
        code: "black",
        img: "./img/air.png",
        },
        {
        code: "darkblue",
        img: "./img/air2.png",
        },
    ],
    },
    {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
        {
        code: "lightgray",
        img: "./img/jordan.png",
        },
        {
        code: "green",
        img: "./img/jordan2.png",
        },
    ],
    },
    {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
        {
        code: "lightgray",
        img: "./img/blazer.png",
        },
        {
        code: "green",
        img: "./img/blazer2.png",
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
        img: "./img/crater.png",
    },
    {
        code: "lightgray",
        img: "./img/crater2.png",
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
        img: "./img/hippie.png",
    },
    {
        code: "black",
        img: "./img/hippie2.png",
    },
    ],
},
];

// End product

