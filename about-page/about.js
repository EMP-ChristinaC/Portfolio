let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = Math.ceil(slides.length / 3);

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    resetProgressBars();
    animateProgressBars(currentIndex);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function resetProgressBars() {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = '0';
    });
}

function animateProgressBars(index) {
    const progressBarValues = [65, 40, 40, 100, 100, 80, 70, 50, 40, 55, 40]; // Manually set values for each progress bar
    for (let i = 0; i < 3; i++) {
        const progressBar = document.getElementById(`progressBar${index * 3 + i + 1}`);
        if (progressBar) {
            progressBar.style.width = `${progressBarValues[index * 3 + i]}%`;
        }
    }
}

setInterval(nextSlide, 10000);
window.onload = function() {
    animateProgressBars(currentIndex);
};


document.getElementById('progressBar12').style.width = '75%';
document.getElementById('progressBar13').style.width = '75%';
document.getElementById('progressBar14').style.width = '50%';