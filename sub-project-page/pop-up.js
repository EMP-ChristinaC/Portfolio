const popups = [
    {
        images: ['../image/Death.jpg'],
        title: "Death Trigger",
        text: "A collage of others work into one, a horrifying death awaits. This is what triggers the end of a life."
    },
    {
        images: ['../image/Forgotten Front View.jpg', '../image/Forgotten Side View part 2.jpg', '../image/Forgotten Side View Part 1.jpg', '../image/Forgotten Back View.jpg'],
        title: "Forgotten",
        text: "An abandoned room covered in overgrown vegetation, a cold room but also warm at the same time."
    },
    {
        images: ['../image/Otterlette.jpg', '../image/Otterlette-Front-View.jpg', '../image/Otterlette-Side-View.jpg'],
        title: "Otterlette",
        text: "Inspired by the game Genshin Impact, this adorable otter aims to steal your heart."
    },
    {
        images: ['../image/Cat-front.jpg', '../image/Cat-side.jpg'],
        title: "Meow Meow",
        text: "Inspired by the game Neko Atsume, this fluffy cat likes to laze around and do nothing."
    },
    {
        images: ['../image/duck-fam.jpg', '../image/duck-one.jpg', '../image/duck-two.jpg', '../image/duck-three.jpg', '../image/duck-four.jpg'],
        title: "Duck Family",
        text: "Inspired by people I hold dear, these ducks take after them with their traits and lifestyle."
    },
    {
        images: ['../image/RuinesMorning.mp4', '../image/RuinesNight.mp4'],
        title: "Ruines",
        text: "Using Unreal Engine assets, I was able to create this small environment inspired by a ruined church."
    }
];

let currentPopup = 0;
let currentIndex = 0;

function openPopup(index) {
    currentPopup = index;
    currentIndex = 0;
    document.getElementById('popup').style.display = 'flex';
    updatePopupMedia();
}

function closePopup(event) {
    if (event.target === event.currentTarget || event.target.classList.contains('close')) {
        document.getElementById('popup').style.display = 'none';
    }
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + popups[currentPopup].images.length) % popups[currentPopup].images.length;
    updatePopupMedia();
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % popups[currentPopup].images.length;
    updatePopupMedia();
}

function updatePopupMedia() {
    const mediaContainer = document.getElementById('popup-media');
    const currentMedia = popups[currentPopup].images[currentIndex];

    // Clear the previous content
    mediaContainer.innerHTML = '';

    if (currentMedia.endsWith('.mp4')) {
        // Create a video element for MP4 files
        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        videoElement.setAttribute('autoplay', '');
        videoElement.innerHTML = `<source src="${currentMedia}" type="video/mp4">Your browser does not support the video tag.`;
        mediaContainer.appendChild(videoElement);
    } else {
        // Create an image element for non-video files
        const imgElement = document.createElement('img');
        imgElement.src = currentMedia;
        imgElement.alt = "Popup Media";
        mediaContainer.appendChild(imgElement);
    }

    // Update text and title
    document.getElementById('popup-title').textContent = popups[currentPopup].title;
    document.getElementById('popup-text').textContent = popups[currentPopup].text;
}
