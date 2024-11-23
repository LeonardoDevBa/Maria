const slides = [
    { image: 'image1.jpg', message: 'Mensagem 1' },
    { image: 'image2.jpg', message: 'Mensagem 2' },
    { image: 'image3.jpg', message: 'Mensagem 3' },
    { image: 'image4.jpg', message: 'Mensagem 4' }
];

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const slide = slides[currentIndex];
    
    // Atualiza a imagem e a mensagem
    const imageElement = document.getElementById('image');
    const messageElement = document.getElementById('message');
    
    // Faz a transição suave
    imageElement.style.opacity = 0;
    messageElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.src = slide.image;
        messageElement.textContent = slide.message;

        imageElement.style.opacity = 1;
        messageElement.style.opacity = 1;
    }, 500);  // Meio segundo para garantir que a transição ocorra suavemente
}
