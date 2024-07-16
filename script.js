
window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        footer.style.opacity = 1;
    } else {
        footer.style.opacity = 0;
    }
});
