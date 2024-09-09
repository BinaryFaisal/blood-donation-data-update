
// Form submission logic and popup handling
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes

    // Show the popup
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Close popup when "X" is clicked
    // document.getElementById('closePopup').onclick = function () {
    //     popup.style.display = 'none';
    // };

    // Close popup if the user clicks outside the popup content
    // window.onclick = function (event) {
    //     if (event.target === popup) {
    //         popup.style.display = 'none';
    //     }
    // };
});

// Script for Navigation bar
let menuList = document.getElementById("menuList");
window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 768) {
        menuList.style.height = 'auto';
    } else {
        menuList.style.height = '0px';
    }
});

function toggleMenu() {
    if (menuList.style.height == "0px") {
        menuList.style.height = "auto";
    }
    else {
        menuList.style.height = "0px";
    }
}

// This function is not necessary for users but for dev mode
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        menuList.style.height = 'auto';
    } else {
        menuList.style.height = '0px';
    }
});