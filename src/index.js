import loadHome from './inital-page-load';
import loadMenu from './menu';
import loadContact from './contact';
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contactButton = document.querySelector('#contact');
    const main = document.querySelector('main');

    const buttons = [homeButton, menuButton, contactButton];

    // Load the home page by default
    loadHome(main);
    homeButton.classList.add('active');

    // Helper to swap pages
    function setPage(loaderFn, activeButton) {
        main.textContent = '';
        loaderFn(main);

        buttons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    homeButton.addEventListener('click', () => setPage(loadHome, homeButton));
    menuButton.addEventListener('click', () => setPage(loadMenu, menuButton));
    contactButton.addEventListener('click', () => setPage(loadContact, contactButton));
});
