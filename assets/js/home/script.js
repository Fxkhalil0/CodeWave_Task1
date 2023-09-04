
//////////////////////////////Products List///////////////////////////

const cardItemsData = [
    {
        imgSrc: './assets/images/home/products/Rectangle 5.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 6.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 7.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 8.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 9.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 10.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 11.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        imgSrc: './assets/images/home/products/Rectangle 12.png',
        title: 'LINEN BEACH TOWEL',
        stars: 4,
        price: '30$',
        category: 'DECOR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card__item');

    const cardContent = `
        <figure>
            <img src="${cardData.imgSrc}" alt="">
        </figure>
        <div class="card__content__text">
            <h3>${cardData.title}</h3>
            <div class="rates">
                ${Array(cardData.stars).fill('<i class="fa-regular fa-star" style="color: #F2C94C;"></i>').join('')}
                ${Array(5 - cardData.stars).fill('<i class="fa-regular fa-star" style="color: #000000;"></i>').join('')}
            </div>
            <p>${cardData.price}</p>
        </div>
        <div class="hover__div">
            <div class="hover__text">
                <h3>${cardData.category}</h3>
                <p>${cardData.description}</p>
                <button>VIEW ALL</button>
            </div>
        </div>
    `;

    cardItem.innerHTML = cardContent;
    return cardItem;
}

const productsCardContainer = document.querySelector('.products__card');

cardItemsData.forEach((cardData) => {
    const cardElement = createCard(cardData);
    productsCardContainer.appendChild(cardElement);
});

//////////////////////////////Top Raiting List///////////////////////////
// Sample data for top-rated products
const topRatedProductsData = [
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
    {
        imgSrc: './assets/images/home/toprating/Rectangle 26.png',
        title: 'Tray with Foot',
        stars: 4,
        price: '$30',
    },
];

// Function to create a top-rated card element
function createTopRatedCard(productData) {
    const topRatedCard = document.createElement('div');
    topRatedCard.classList.add('top__raiting__card');

    const cardContent = `
        <div class="card__items">
            <figure>
                <img src="${productData.imgSrc}" alt="">
            </figure>
            <div class="top__raiting__content">
                <h3>${productData.title}</h3>
                <div class="rates">
                    ${Array(productData.stars).fill('<i class="fa-regular fa-star" style="color: #F2C94C;"></i>').join('')}
                    ${Array(5 - productData.stars).fill('<i class="fa-regular fa-star" style="color: #000000;"></i>').join('')}
                </div>
                <p>${productData.price}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    `;

    topRatedCard.innerHTML = cardContent;
    return topRatedCard;
}

const topRatedProductsContainer = document.querySelector('.top__rating__products');

for (let i = 0; i < 9; i++) {
    const randomProductIndex = Math.floor(Math.random() * topRatedProductsData.length);
    const randomProductData = topRatedProductsData[randomProductIndex];
    const topRatedCardElement = createTopRatedCard(randomProductData);
    topRatedProductsContainer.appendChild(topRatedCardElement);
}
