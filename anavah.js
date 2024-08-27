document.addEventListener('DOMContentLoaded', (event) => {
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});

// Function to adjust sidebar (if needed)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const button = document.getElementById('toggle-button');
    
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        mainContent.classList.remove('expanded');
        button.textContent = 'Hide Menu';
    } else {
        sidebar.classList.add('hidden');
        mainContent.classList.add('expanded');
        button.textContent = 'Menu';
    }
}


// slide show stuff
let slideIndex = 0;
let slideInterval;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  
    slides[slideIndex - 1].style.display = "block";  
}

function plusSlides(n) {
    clearInterval(slideInterval); // Stop the automatic slideshow
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlides();
    slideInterval = setInterval(showSlides, 3000); // Restart automatic slideshow
}

document.addEventListener('DOMContentLoaded', function () {
    showSlides();
    slideInterval = setInterval(showSlides, 3000); // Automatic slideshow
});

