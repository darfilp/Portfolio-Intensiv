const accordion = () => {
    const list = document.querySelector('.feature-list');
    const btns = list.querySelectorAll('.feature__link');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {

            btns.forEach(button => {
                button.classList.remove('feature__link_active');
                button.nextElementSibling.classList.add('hidden');
            });

            btn.classList.toggle('feature__link_active');
            btn.nextElementSibling.classList.toggle('hidden');
        })
    })

    //console.log(btn)
};

accordion();