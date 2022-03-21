const scroll = () => {
    const links = document.querySelectorAll('.menu-list__link');
    const mainBtn = document.querySelector('.main__button');
    const mainScroll = document.querySelector('.main__scroll');

    const allLinks = [...links, mainBtn, mainScroll]

    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id)
            console.log(section)

            if (section) {
                // section.scrollIntoView({ //метод не действут в Сафари seamless-scroll-polyfill
                //     block: 'start', // в какойчасти секции начинаем
                //     behavior: 'smooth'
                // })
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                })
            }
        })
    })
};

scroll();