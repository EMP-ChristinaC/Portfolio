const popups = [
    {
        images: ['../image/Death.jpg'],
        title: "Death Trigger",
        text: "A collage of others work into one, a horrifying death awaits. This is what triggers the end of a life. "
    },
    {
        images: ['../image/Forgotten Front View.jpg', '../image/Forgotten Side View part 2.jpg', '../image/Forgotten Side View Part 1.jpg', '../image/Forgotten Back View.jpg'],
        title: "Forgotten",
        text: "A abandoned room covered in overgrown vegetation, a cold room but also warm at the same time."
    },
    {
        images: ['../image/Otterlette.jpg', '../image/Otterlette-Front-View.jpg', '../image/Otterlette-Side-View.jpg'],
        title: "Otterlette",
        text: "Inspired by the game Genshin Impact, this adorable otter aims to steal your heart."
    },
    {
        images: ['../image/Cat-front.jpg', '../image/Cat-side.jpg'],
        title: "Meow Meow",
        text: "Inspired by the game Neko Atsume, this fuffly cat likes to lazes around and do nothing."
    },
    {
        images: ['../image/duck-fam.jpg', '../image/duck-one.jpg', '../image/duck-two.jpg', '../image/duck-three.jpg', '../image/duck-four.jpg'],
        title: "Duck Family",
        text: "Inspired by people I hold dear, these ducks takes after them with their traits and lifestyle."
    }
];

let currentPopup = 0;
let currentIndex = 0;

function openPopup(index) {
    currentPopup = index;
    currentIndex = 0;
    document.getElementById('popup').style.display = 'flex';
    updatePopupImage();
}

function closePopup(event) {
    if (event.target === event.currentTarget || event.target.classList.contains('close')) {
        document.getElementById('popup').style.display = 'none';
    }
}

function prevImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + popups[currentPopup].images.length) % popups[currentPopup].images.length;
    updatePopupImage();
}

function nextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % popups[currentPopup].images.length;
    updatePopupImage();
}

function updatePopupImage() {
    document.getElementById('popup-image').src = popups[currentPopup].images[currentIndex];
    document.getElementById('popup-title').textContent = popups[currentPopup].title;
    document.getElementById('popup-text').textContent = popups[currentPopup].text;
}