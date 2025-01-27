// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Collapsible FAQ Section
document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
            header.classList.toggle('active');
        });
    });
});

// Dynamic Clock in Footer
function updateClock() {
    const clock = document.querySelector('.clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Hover Effect for Owner Cards
document.querySelectorAll('.owner img').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.boxShadow = '0 4px 10px rgba(255, 165, 0, 0.8)';
    });
    image.addEventListener('mouseleave', () => {
        image.style.boxShadow = 'none';
    });
});

// Special Offer Animation
function highlightOffers() {
    const offers = document.querySelectorAll('.special-offer');
    offers.forEach(offer => {
        offer.classList.add('highlight');
        setTimeout(() => offer.classList.remove('highlight'), 2000);
    });
}
setInterval(highlightOffers, 5000);
