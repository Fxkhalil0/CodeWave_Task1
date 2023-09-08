const cardItemsData = [
    {
        imgSrc: './assets/images/store/Rectangle 62.png',
        title: 'Velvet Covered',
        colors: ['#9E6344', '#C4C4C4'],
        price: 39,
    },
    {
        imgSrc: './assets/images/store/Rectangle 47.png',
        title: 'Candle In Glass Holder',
        colors: ['#C4C4C4'],
        price: 14,
    },
    {
        imgSrc: './assets/images/store/Rectangle 48.png',
        title: 'Metal Photo Frame',
        colors: ['#F2C94C', '#C4C4C4'],
        price: 50,
    },
    {
        imgSrc: './assets/images/store/Rectangle 65.png',
        title: 'Round Floor Mat',
        colors: ['#ACAD92', '#C4C4C4'],
        price: 58,
    },
];
const productsCardItemsData = [
    {
        id: '1',
        imgSrc: './assets/images/home/products/Rectangle 5.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '2',
        imgSrc: './assets/images/home/products/Rectangle 6.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '3',
        imgSrc: './assets/images/home/products/Rectangle 7.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '4',
        imgSrc: './assets/images/home/products/Rectangle 8.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '5',
        imgSrc: './assets/images/home/products/Rectangle 9.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '6',
        imgSrc: './assets/images/home/products/Rectangle 10.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '7',
        imgSrc: './assets/images/home/products/Rectangle 11.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: '8',
        imgSrc: './assets/images/home/products/Rectangle 12.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: 30,
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the id parameter from the URL
var id = getParameterByName('id');
console.log('ID:', id);

var desc;

for (let i = 0; i < productsCardItemsData.length; i++) {
    if (id == productsCardItemsData[i].id) {
        desc = productsCardItemsData[i]
        console.log(desc)
    }
}

var firstImg = document.getElementById('first__img')
var secImg = document.getElementById('sec__img')
var thirdImg = document.getElementById('third__img')
var fourthImg = document.getElementById('fourth__img')
var title = document.getElementById('title')
var price = document.getElementById('price')
var description = document.getElementById('description')
var sizeMenu = document.getElementById('size__list')
var setSizeValue = document.getElementById('setSizeValue')

firstImg.setAttribute("src", desc.imgSrc)
secImg.setAttribute("src", desc.imgSrc)
thirdImg.setAttribute("src", desc.imgSrc)
fourthImg.setAttribute("src", desc.imgSrc)
title.innerHTML = desc.title
price.innerHTML = `${desc.price}$` 
description.innerHTML = desc.description

function openMenu(){
sizeMenu.style.display = "block";
}

function closeMenu(){
    sizeMenu.style.display = "none";

}

var sizeValue;

function size(x){
    sizeValue = x;
    setSizeValue.innerHTML = sizeValue
}

function clearSize(){
    setSizeValue.innerHTML = "Select Size";
}

function addBag(){
   var addLocalStorage = JSON.parse(localStorage.getItem("bag")) || []
   addLocalStorage.push({...desc, size: sizeValue , numOfPiece: 1})
   localStorage.setItem("bag", JSON.stringify(addLocalStorage))
}


function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('products__item', 'swiper-slide');

    const cardContent = `
        <figure>
            <img src="${cardData.imgSrc}" alt="">
        </figure>
        <div class="card__content__text">
            <h3>${cardData.title}</h3>
            <div class="product__colors">
                ${cardData.colors.map(color => `<p style="background-color: ${color};"></p>`).join('')}
            </div>
            <div class="price__actions">
                <p>${cardData.price}$</p>
                <div class="simillar__actions">
                    <button>ADD TO CART</button>
                    <i class="fa-regular fa-heart" style="color: #323334; font-size: 20px;"></i>
                </div>
            </div>
        </div>
    `;

    cardItem.innerHTML = cardContent;
    return cardItem;
}
const productsCardContainer = document.querySelector('.similar__main');

for (let i = 0; i < cardItemsData.length; i++) {
    const cardElement = createCard(cardItemsData[i]);
    productsCardContainer.appendChild(cardElement);
}

///////////////////////////// Slider ///////////////////////////////////
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    // spaceBetween: 0,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        567: {
            slidesPerView: 2,
        },
    },
});

var bag = JSON.parse(localStorage.getItem("bag"))
var bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag.length