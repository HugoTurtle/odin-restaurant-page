import loadHome from './inital-page-load';
import loadMenu from './menu';
import loadContact from './contact';

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contactButton = document.querySelector('#contact');
    const main = document.querySelector('main');

    // Load the home page by default
    loadHome(main);

    // Helper to swap pages
    function setPage(loaderFn) {
        main.textContent = '';
        loaderFn(main);
    }

    homeButton.addEventListener('click', () => setPage(loadHome));
    menuButton.addEventListener('click', () => setPage(loadMenu));
    contactButton.addEventListener('click', () => setPage(loadContact));
});
