function filterShoes() {
    const category = document.getElementById('category').value;
    const shoes = document.querySelectorAll('.shoe-item');

    shoes.forEach(shoe => {
        if (category === 'all') {
            shoe.style.display = 'block';
        } else {
            if (shoe.getAttribute('data-category') === category) {
                shoe.style.display = 'block';
            } else {
                shoe.style.display = 'none';
            }
        }
    });
}
function buy() {
document.getElementById("buyButton").addEventListener("click", function() {
    // Redirect to PayPal or initiate purchase process
    window.location.href = "https://www.paypal.com/checkoutnow?token=YOUR_PAYPAL_TOKEN";
})
};
// Function to search shoes by name
function searchShoes() {
    const searchInput = document.getElementById('searchBox').value.toLowerCase();
    const shoeItems = document.querySelectorAll('.shoe-item');
    
    shoeItems.forEach(shoe => {
        const shoeName = shoe.querySelector('h2').textContent.toLowerCase();
        if (shoeName.includes(searchInput)) {
            shoe.style.display = ''; // Show shoe if it matches
        } else {
            shoe.style.display = 'none'; // Hide shoe if it doesn't match
        }
    });
}

// Your existing filterShoes function goes here
function filterShoes() {
    const selectedCategory = document.getElementById('category').value;
    const shoeItems = document.querySelectorAll('.shoe-item');

    shoeItems.forEach(shoe => {
        const shoeCategory = shoe.getAttribute('data-category');
        if (selectedCategory === 'all' || shoeCategory === selectedCategory) {
            shoe.style.display = ''; // Show if it matches category
        } else {
            shoe.style.display = 'none'; // Hide if it doesn't match
        }
    });
}
// Function to filter shoes by category and price range
function filterShoes() {
    const selectedCategory = document.getElementById('category').value;
    const selectedPriceRange = document.getElementById('priceRange').value;
    const shoeItems = document.querySelectorAll('.shoe-item');

    shoeItems.forEach(shoe => {
        const shoeCategory = shoe.getAttribute('data-category');
        const shoePrice = parseInt(shoe.querySelector('.price').textContent.replace('₹', '').replace(',', ''));

        // Parse the selected price range
        let [minPrice, maxPrice] = selectedPriceRange === 'all' ? [0, Infinity] : selectedPriceRange.split('-').map(Number);

        // Show shoes that match the selected category and price range
        if ((selectedCategory === 'all' || shoeCategory === selectedCategory) && (shoePrice >= minPrice && shoePrice <= maxPrice)) {
            shoe.style.display = ''; // Show shoe
        } else {
            shoe.style.display = 'none'; // Hide shoe
        }
    });
}
// Array to hold cart items
let cart = [];

// Function to add items to the cart
function addToCart(shoeName, shoePrice) {
    // Add the selected shoe to the cart
    cart.push({ name: shoeName, price: shoePrice });
    
    // Display a confirmation message
    alert(shoeName + " has been added to your cart.");
    
    // Update the cart display
    updateCartDisplay();
}

// Function to handle the buy action
function buyNow(shoeName, shoePrice) {
    // Display a confirmation message for the purchase
    alert("You have bought " + shoeName + " for ₹" + shoePrice + ".");
    
    // You can add redirection to a payment page or checkout flow here
    // For example: window.location.href = 'checkout.html';
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceDisplay = document.getElementById('totalPrice');
    
    // Clear previous items
    cartItemsList.innerHTML = '';
    
    // Calculate total price
    let totalPrice = 0;
    
    // Add each item in the cart to the display list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });
    
    // Update total price display
    totalPriceDisplay.textContent = `Total: ₹${totalPrice}`;
}



const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

// Add event listeners for the stars
stars.forEach(star => {
    star.addEventListener('click', setRating);
    star.addEventListener('mouseover', highlightStars);
    star.addEventListener('mouseout', resetStars);
});

let currentRating = 0;

function setRating(event) {
    currentRating = event.target.getAttribute('data-value');
    ratingValue.innerText = `Rating: ${currentRating}`;
    updateStarAppearance(currentRating);
}

function highlightStars(event) {
    const hoverValue = event.target.getAttribute('data-value');
    updateStarAppearance(hoverValue);
}

function resetStars() {
    updateStarAppearance(currentRating);
}

function updateStarAppearance(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}
