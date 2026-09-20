// Create lightbox elements
const lightbox = document.createElement('div');
lightbox.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
`;

const lightboxImg = document.createElement('img');
lightboxImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
`;

const closeBtn = document.createElement('span');
closeBtn.innerHTML = '&times;';
closeBtn.style.cssText = `
    position: absolute;
    top: 20px; right: 30px;
    font-size: 40px;
    color: white;
    cursor: pointer;
`;

lightbox.appendChild(lightboxImg);
lightbox.appendChild(closeBtn);
document.body.appendChild(lightbox);

// Add click event to all > buttons
const buttons = document.querySelectorAll('.gallery div button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.parentElement.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});