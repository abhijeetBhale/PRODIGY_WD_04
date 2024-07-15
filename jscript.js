window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navigation-bar');
    const timeElement = document.querySelector('.time');

    if (window.scrollY > 50) {
        navBar.classList.add('scrolled');
        timeElement.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
        timeElement.classList.remove('scrolled');
    }
});