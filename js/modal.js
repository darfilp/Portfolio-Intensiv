const modal = () => {
    const modalBtns = document.querySelectorAll('.more');
    const modal = document.querySelector('.modal');
    const closeBtn = modal.querySelector('.modal__close');
    const overlay = modal.querySelector('.overlay');

    modalBtns.forEach(modalBtn => {
        modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    });
    })


    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden')
    });

    overlay.addEventListener('click', () => {
        modal.classList.add('hidden')
    });
};

modal()