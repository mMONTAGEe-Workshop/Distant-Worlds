document.addEventListener('DOMContentLoaded', function () {
    // Get the container for the slideshow
    const slideshowContainer = document.getElementById('slideshow-container');

    // Array of image sources
    const imageSources = ['img/slideshow/earth.png', 'img/slideshow/dyson.png', 'img/slideshow/kitria.png', 'img/slideshow/vishap.png', 'img/slideshow/capitol.png', 'img/slideshow/novrutara.png', 'img/slideshow/kitrianebulaone.png']; // Add more images as needed

    // Shuffle the array to randomize the order
    shuffleArray(imageSources);

    // Populate the slideshow container with images
    for (let i = 0; i < imageSources.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add('slide', 'fade');

        const img = document.createElement('img');
        img.src = imageSources[i];
        img.alt = 'Image ' + (i + 1);

        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    }

    // Start the slideshow
    showSlides();
});

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Your existing showSlides function
function showSlides() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    // Initial display
    showSlide(slideIndex);

    // Set interval for each image to last 4 seconds
    setInterval(nextSlide, 8000);
}