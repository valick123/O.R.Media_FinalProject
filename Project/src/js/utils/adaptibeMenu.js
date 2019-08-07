export const adaptiveMenu = () => {
    let menuBtn = document.querySelector('.adaptiveMenuBtn');
    let menu = document.querySelector('.navList');
    menuBtn.addEventListener('click', () => {

        menu.classList.toggle('navList-active');
    })
}