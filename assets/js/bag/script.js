const cardItemsData = [
    {
        imgSrc: './assets/images/store/Rectangle 62.png',
        title: 'Velvet Covered',
        colors: ['#9E6344', '#C4C4C4'],
        price: '39$',
    },
    {
        imgSrc: './assets/images/store/Rectangle 47.png',
        title: 'Candle In Glass Holder',
        colors: ['#C4C4C4'],
        price: '14$',
    },
    {
        imgSrc: './assets/images/store/Rectangle 48.png',
        title: 'Metal Photo Frame',
        colors: ['#F2C94C', '#C4C4C4'],
        price: '50$',
    },
    {
        imgSrc: './assets/images/store/Rectangle 65.png',
        title: 'Round Floor Mat',
        colors: ['#ACAD92', '#C4C4C4'],
        price: '58$',
    },
];

var leftSide = document.getElementById('left__side')
var bagItem = JSON.parse(localStorage.getItem("bag"))
console.log(bagItem)
for (let i = 0; i < bagItem?.length; i++) {
    leftSide.innerHTML += `<div class="product__item">
    <figure>
        <img src="${bagItem[i].imgSrc}" alt="">
    </figure>
    <div class="product__content">
        <div class="title__icon">
            <h3>${bagItem[i].title}</h3>
            <i class="fa-solid fa-xmark" style="color: #323334; font-size: 20px;" onclick = "removeItem(${bagItem[i].id})"></i>
        </div>
        <h3>${bagItem[i].price}</h3>
        <div class="product__desc">
            <p>Art. No.: <span>54637253</span></p>
            <p>Size: <span>${bagItem[i].size}</span></p>
            <p>Color: <span>${bagItem[i].color ? bagItem[i].color : "None"}</span></p>
            <p>Total: <span>${bagItem[i].price}</span></p>
        </div>
        <div class="fav__select">
            <i class="fa-regular fa-heart" style="color: #323334; font-size: 20px;"></i>
            <div class="select" onclick="openMenu()">
            <p onclick = "subNum(${bagItem[i].id})">-</p>
            <p>${bagItem[i].numOfPiece}</p>
                <p onclick = "addNum(${bagItem[i].id})">+</p>
            </div>
        </div>
    </div>
</div>`
}

function openMenu() {
    sizeMenu.style.display = "block";
}

function closeMenu() {
    sizeMenu.style.display = "none";

}

function addNum(x){
    let addItem = JSON.parse(localStorage.getItem('bag'))
    for(let i=0 ; i < addItem?.length ; i++){
        if(addItem[i].id == x){
            addItem[i].numOfPiece ++;
            addItem[i].price = addItem[i].price * addItem[i].numOfPiece
        }
    }
    localStorage.setItem('bag', JSON.stringify(addItem))
    window.location.reload();
}

function subNum(y) {
    let addItem = JSON.parse(localStorage.getItem('bag'));
    let found = false; // Flag to check if the product with the specified ID was found

    for (let i = 0; i < addItem?.length; i++) {
        if (addItem[i].id == y) {
            if (addItem[i].numOfPiece > 1) {
                addItem[i].numOfPiece--;
                addItem[i].price = addItem[i].price / (addItem[i].numOfPiece + 1);
            } else {
                found = true;
            }
        }
    }

    if (found) {
        alert("You cannot choose less than 1.");
    }

    localStorage.setItem('bag', JSON.stringify(addItem));
    window.location.reload();
}

function removeItem(z){
    let removeItem = JSON.parse(localStorage.getItem('bag'))
    for(let i=0 ; i < removeItem?.length ; i++){
        if(removeItem[i].id == z){
            removeItem.splice(i, 1)
        }

    }
    localStorage.setItem('bag', JSON.stringify(removeItem))
    window.location.reload();
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
                <p>${cardData.price}</p>
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

var totalPrice =0;
var bag = JSON.parse(localStorage.getItem("bag"))
for(let i =0 ; i < bag.length ; i++){
    totalPrice += bag[i].price
}

var priceElement = document.getElementById('total__price')
priceElement.innerHTML = `${totalPrice}$`

var bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag.length

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