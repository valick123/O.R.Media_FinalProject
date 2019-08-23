export const adaptiveMenu = () => {
    let menuBtn = document.querySelector('.adaptiveMenuBtn');
    let menu = document.querySelector('.navList');
    menuBtn.addEventListener('click', () => {

        menu.classList.toggle('navList-active');
    })

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('navList__link')) {
            menu.classList.remove('navList-active')
        }
    })
}