const menu = () => {
    const burger = document.querySelector('.humburger-menu');
    const menu = document.querySelector('.menu');
    const itemsMenu = menu.querySelectorAll('.menu-list__item');

    burger.addEventListener('click', () => {
        menu.classList.add('menu-active');
    });

    itemsMenu.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('menu-active');
        })
    });

    document.addEventListener('click', (event) => {
        if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
            menu.classList.remove('menu-active');
        } 
    })
};

menu()

