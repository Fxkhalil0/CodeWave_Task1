//Display bag length on Navbar
var bag = JSON.parse(localStorage.getItem("bag")) || [];
var bagCount = document.getElementById('bagCount')
bagCount.innerHTML = bag.length

//Intialize the wishlist or put it as an empty array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


//All Cards Data
const cardItemsData = [
    {
        id: '18',
        imgSrc: './assets/images/store/Rectangle 62.png',
        title: 'Velvet Covered',
        colors: ['#9E6344', '#C4C4C4'],
        price: 111,
    },
    {
        id: '19',
        imgSrc: './assets/images/store/Rectangle 47.png',
        title: 'Candle In Glass Holder',
        colors: ['#C4C4C4'],
        price: 122,
    },
    {
        id: '20',
        imgSrc: './assets/images/store/Rectangle 48.png',
        title: 'Metal Photo Frame',
        colors: ['#F2C94C', '#C4C4C4'],
        price: 133,
    },
    {
        id: '21',
        imgSrc: './assets/images/store/Rectangle 65.png',
        title: 'Round Floor Mat',
        colors: ['#ACAD92', '#C4C4C4'],
        price: 144,
    },
    {
        id: 22,
        imgSrc: './assets/images/store/Rectangle 66.jpg',
        title: 'Class Light Holder',
        colors: ['#770505', '#EB5757'],
        price: 55,
    },
    {
        id: '23',
        imgSrc: './assets/images/store/Rectangle 67.png',
        title: 'Flannel Duvet Cover Set',
        colors: ['#C4C4C4'],
        price: 66,
    },
    {
        id: '24',
        imgSrc: './assets/images/store/Rectangle 70.png',
        title: 'Fitted Cotton Sheet',
        colors: ['#C4C4C4'],
        price: 220,
    },
    {
        id: '25',
        imgSrc: './assets/images/store/Rectangle 71.png',
        title: 'Small Candle in a Small Jar',
        colors: ['#770505', '#C4C4C4', '#EB5757'],
        price: 90,
    },
    {
        id: '26',
        imgSrc: './assets/images/store/Rectangle 72.png',
        title: 'Checked Duvet Cover Set',
        colors: ['#C4C4C4', '#6FCF97'],
        price: 130,
    },
    {
        id: '27',
        imgSrc: './assets/images/store/Rectangle 75.png',
        title: 'Washed Linen Pillowcase',
        colors: ['#C4C4C4'],
        price: 280,
    },
    {
        id: '28',
        imgSrc: './assets/images/store/Rectangle 76.png',
        title: 'Small Candle in a Small Jar',
        colors: ['#C4C4C4', '#DDC1B2'],
        price: 100,
    },
    {
        id: '29',
        imgSrc: './assets/images/store/Rectangle 77.png',
        title: 'Mini Porcelain Dish',
        colors: ['#C4C4C4', '#EB5757'],
        price: 77,
    },
];

//Created Card Dynamiclly
function createCard(cardData) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('products__item');

    const isInBag = bag.some(item => item.id === cardData.id);

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
                <div class="actions">
                <button onclick="addToCart('${cardData.id}')">
                ${isInBag ? "IN BAG" : "ADD TO CART"}
                </button>
                    <i id="heart-${cardData.id}" class="fa-regular fa-heart" style="color: #323334; font-size: 20px;" onclick="addToWishlist('${cardData.id}')"></i>
                </div>
            </div>
        </div>
    `;

    cardItem.innerHTML = cardContent;
    return cardItem;
}
function addToCart(productId) {
    const isItemInBag = bag.some(item => item.id === productId);

    if (isItemInBag) {
        alert("This item already added in your bag");
    } else {
        const productToAdd = cardItemsData.find(product => product.id === productId);

        if (productToAdd) {
            bag.push({ ...productToAdd, numOfPiece: 1, size: "None" });
            localStorage.setItem("bag", JSON.stringify(bag));
            alert("This item added successfully");
            window.location.reload();
        } else {
            alert("Product not found.");
        }
    }
}
function addToWishlist(productId) {
    const isItemInWishlist = wishlist.some(item => item.id === productId);

    if (isItemInWishlist) {
        alert("This item is already in your wishlist");
    } else {
        const productToAdd = cardItemsData.find(product => product.id === productId);

        if (productToAdd) {
            wishlist.push(productToAdd);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert("This item has been added to your wishlist");
            updateHeartIcon(productId);
        } else {
            alert("Product not found.");
        }
    }
}
function updateHeartIcon(productId) {
    const heartIcon = document.getElementById(`heart-${productId}`);
    if (heartIcon) {
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        heartIcon.style.color = "#DF1313";
    }
}

let priceProducts = []

//filtering by color
let filteredProducts = [];
function filterByColor(color) {
    // Filter products by color
    filteredProducts = cardItemsData.filter(product => product.colors.includes(color));

    // Clear the current products in the filtered__products container
    productsCardContainer.innerHTML = '';

    // Create and append the filtered products
    for (let i = 0; i < filteredProducts.length; i++) {
        const cardElement = createCard(filteredProducts[i]);
        productsCardContainer.appendChild(cardElement);
    }
}

//filtering by price
let filteredProductsByPrice = [];
function filterByPrice(priceRange) {
    // Split the price range into minimum and maximum values
    const [minPrice, maxPrice] = priceRange.split('-').map(parseFloat);
    if (!priceProducts.includes(minPrice)) {
        priceProducts.push(minPrice, maxPrice)
    }
    var min = 350;
    var maX = 0;
    console.log(priceProducts)
    for (let i = 0; i < priceProducts.length; i++) {
        if (min > priceProducts[i]) {
            min = priceProducts[i]
        }
        if (maX < priceProducts[i]) {
            maX = priceProducts[i]
        }
    }
    console.log(min, maX)
    filteredProductsByPrice = cardItemsData.filter(product => {
        const productPrice = parseFloat(product.price);
        return productPrice >= min && productPrice <= maX;
    });
    productsCardContainer.innerHTML = '';

    for (let i = 0; i < filteredProductsByPrice.length; i++) {
        const cardElement = createCard(filteredProductsByPrice[i]);
        productsCardContainer.appendChild(cardElement);
    }
}

const productsCardContainer = document.querySelector('.filtered__products');

for (let i = 0; i < cardItemsData.length; i++) {
    const cardElement = createCard(cardItemsData[i]);
    productsCardContainer.appendChild(cardElement);
}