const clickHeader = () => {
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');
    const bgMenu = document.getElementById('bg-menu');
    const closeMenu = document.getElementById('close-menu');
    const itemMenu = document.querySelectorAll('.header__item');
    const hidden = () => {
        navMenu.classList.remove('show');
        bgMenu.classList.remove('show');
    }
    btnMenu.addEventListener('click', () => {
        navMenu.classList.add('show');
        bgMenu.classList.add('show');
    });
    bgMenu.addEventListener('click', hidden);
    closeMenu.addEventListener('click', hidden);
    itemMenu.forEach(item => {
        item.addEventListener('click', hidden)
    })
}
clickHeader();