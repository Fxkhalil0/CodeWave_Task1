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

    breakpoints:{
      1200:{

        slidesPerView: 3,
      },
      992:{
        slidesPerView: 2,
      },
      0:{
        slidesPerView: 0,
      },
    },
  });