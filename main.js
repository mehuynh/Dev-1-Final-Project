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
        productImage.src = 'makeupbagimg/' + product.image; 
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
            { name: 'Fenty Beauty Foundation', image: 'foundation2024.png', expirationDate: '2025-04-18' },
            { name: 'Tarte Shape Tape Full Coverage Concealer', image: 'concealer2024.png', expirationDate: '2025-04-18' },
            { name: 'Kevyn Aucoin Volume Mascara', image: 'mascara2024.png', expirationDate: '2025-04-20' },
            { name: 'Naked3 Eyeshadow Palette', image: 'eyeshadow2024.png', expirationDate: '2025-02-12' },
            { name: 'e.l.f. Glow Reviver Lip Oil', image: 'lipoil2024.png', expirationDate: '2026-05-19' },
            { name: 'MAC Lip Liner Pencil', image: 'lipliner.png', expirationDate: '2025-02-12' },
            
        ];
    }
    if (year === 'Daily Routine 2023') {
        return [
            { name: 'HUDA BEAUTY Foundation', image: 'foundation2023.png', expirationDate: '2025-04-18' },
            { name: 'e.l.f. Cosmetics Hydrating Camo Concealer', image: 'concealer2023.png', expirationDate: '2025-04-18' },
            { name: 'Maybelline Lash Sensational Mascara', image: 'mascara2023.png', expirationDate: '2025-03-05' },
            { name: 'Fenty Beauty Gloss Bomb Universal Lip Luminizer', image: 'lipgloss2023.png', expirationDate: '2025-02-12' },
            { name: 'MAC Lip Liner Pencil', image: 'lipliner.png', expirationDate: '2025-02-12' },
            
        ];
    }
    if (year === 'Daily Routine 2022') {
        return [
            { name: 'Maybelline Fit Me Matte + Poreless Oil Free Liquid Foundation', image: 'foundation2022.png', expirationDate: '2025-04-18' },
            { name: 'e.l.f. Cosmetics Hydrating Camo Concealer', image: 'concealer2023.png', expirationDate: '2025-04-18' },
            { name: 'Lash Idôle Lash-Lifting & Volumizing Mascara', image: 'mascara2022.png', expirationDate: '2025-04-20' },
            { name: 'Dior Addict Lip Glow Oil', image: 'lipgloss2022.png', expirationDate: '2025-02-12' },
            { name: 'MAC Lip Liner Pencil', image: 'lipliner.png', expirationDate: '2025-02-12' },
            
        ];
    }
    if (year === 'Daily Routine 2021') {
        return [
            { name: 'Maybelline Fit Me Matte + Poreless Oil Free Liquid Foundation', image: 'foundation2022.png', expirationDate: '2025-04-18' },
            { name: 'e.l.f. Cosmetics Hydrating Camo Concealer', image: 'concealer2023.png', expirationDate: '2025-04-18' },
            { name: 'Maybelline Lash Sensational Mascara', image: 'mascara2023.png', expirationDate: '2025-04-20' },
            { name: 'e.l.f. Glow Reviver Lip Oil', image: 'lipoil2024.png', expirationDate: '2025-02-12' },
            
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

const makeupDates = [
    { name: "Foundation", date: "2024-05-15" },
    { name: "Mascara", date: "2024-06-01" },
    { name: "Lipstick", date: "2024-05-30" }
];

//----------calendar for DOB-----------//
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar-container');

    calendarContainer.innerHTML = '';

    const makeupList = document.createElement('ul');

    makeupDates.forEach(makeup => {
        const listItem = document.createElement('li');
        listItem.textContent = `${makeup.name} - Expiring on ${makeup.date}`;
        makeupList.appendChild(listItem);
    });

    calendarContainer.appendChild(makeupList);
}

generateCalendar();
