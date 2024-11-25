document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        console.log(`Scroll Y: ${window.scrollY}, Last Scroll Y: ${lastScrollY}`); // Debug
        if (window.scrollY > lastScrollY) {
            console.log('Hiding header');
            header.classList.add('hidden');
        } else {
            console.log('Showing header');
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});
