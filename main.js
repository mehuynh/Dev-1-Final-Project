/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Function to show products based on selected year
function showProducts(year) {
    // Get the product container
    var productContainer = document.getElementById('productContainer');

    // Clear previous products
    productContainer.innerHTML = '';

    // Simulate fetching products data based on selected year
    var products = getProductsData(year);

    // Display products
    products.forEach(function(product) {
        var productBox = document.createElement('div');
        productBox.classList.add('product-box');

        // Add product image
        var productImage = document.createElement('img');
        productImage.src = 'compactimg/' + product.image; // Set the correct relative path to the image
        productBox.appendChild(productImage);

        // Create div for product details
        var productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        // Add product name
        var productName = document.createElement('p');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        productDetails.appendChild(productName);

        // Add expiration date
        var expirationDate = document.createElement('p');
        expirationDate.classList.add('product-expiration');
        expirationDate.textContent = "Expires on: " + product.expirationDate;
        productDetails.appendChild(expirationDate); // Append expiration date after product name

        // Append product details to product box
        productBox.appendChild(productDetails);

        // Append product box to product container
        productContainer.appendChild(productBox);
    });
}


// Function to simulate fetching products data based on selected year
function getProductsData(year) {
    // sample data
    if (year === 'Daily Routine 2024') {
        return [
            { name: 'Fenty Beauty Foundation', image: 'foundation.png', expirationDate: '2025-04-18' },
            { name: 'Kevyn Aucoin Volume Mascara', image: 'mascara.png', expirationDate: '2025-04-20' },
            // Add more products data here
        ];
    }
    // Add data for other years if needed
}
