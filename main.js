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
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function showProducts(year) {
    var productContainer = document.getElementById('productContainer');

    productContainer.innerHTML = '';

    var products = getProductsData(year);

    products.forEach(function(product) {
        var productBox = document.createElement('div');
        productBox.classList.add('product-box');

        var productImage = document.createElement('img');
        productImage.src = 'compactimg/' + product.image; 
        productBox.appendChild(productImage);

        var productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        var productName = document.createElement('p');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        productDetails.appendChild(productName);

        var expirationDate = document.createElement('p');
        expirationDate.classList.add('product-expiration');
        expirationDate.textContent = "Expires on: " + product.expirationDate;
        productDetails.appendChild(expirationDate); 

        productBox.appendChild(productDetails);

        productContainer.appendChild(productBox);
    });
}

/*=============== MAKEUP BAG ===============*/
function getProductsData(year) {
    if (year === 'Daily Routine 2024') {
        return [
            { name: 'Fenty Beauty Foundation', image: 'foundation.png', expirationDate: '2025-04-18' },
            { name: 'Kevyn Aucoin Volume Mascara', image: 'mascara.png', expirationDate: '2025-04-20' },
        ];
    }
}

/*=============== PROFILE PAGE ===============*/
// --------------change profile pic------------//
function previewProfilePhoto(event) {
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader(); 
        reader.onload = function(e) {
            const profileImage = document.getElementById('profile-image');
            profileImage.src = e.target.result; 
        }
        reader.readAsDataURL(file); 
    }
}

document.getElementById('profile-photo').addEventListener('change', previewProfilePhoto);

//-------------remove photo----------------- //
function removeImage() {
    const profileImage = document.getElementById('profile-image');
    profileImage.src = 'default.jpeg'; 
    document.getElementById('profile-photo').value = '';
}

document.querySelector('.remove-image-button').addEventListener('click', removeImage);
