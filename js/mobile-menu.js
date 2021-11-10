const mobilePanel = document.querySelector("#tm-mobile-panel"),
      overlayPanel = document.querySelector("#tm-overlay-mobile"),
      hamburgerMenu = document.querySelector("#tm-hamburger-menu"),
      closeMenu = document.querySelector("#tm-close-mobile-panel"),
      mobileLinks = Array.from(document.querySelectorAll(".tm-mobile-links"));

hamburgerMenu.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuWithoutEvent);
mobileLinks.forEach( el => el.addEventListener('click', closeMenuEvent) );
overlayPanel.addEventListener('click', closeMenuWithoutEvent);

function openMenu( e ) {
    e.preventDefault();
    mobilePanel.classList.add('tm-mobile-panel-open');
    overlayPanel.classList.add('tm-overlay-visible');
}

function closeMenuWithoutEvent( e ) {
    e.preventDefault();
    mobilePanel.classList.remove('tm-mobile-panel-open');
    overlayPanel.classList.remove('tm-overlay-visible');
}

function closeMenuEvent() {
    mobilePanel.classList.remove('tm-mobile-panel-open');
    overlayPanel.classList.remove('tm-overlay-visible');
}