const tabs = () => {
    const tabBtns = document.querySelectorAll('.design-list__item');
    const tabDesc = document.querySelectorAll('.design__descr');
    const imgs = document.querySelectorAll('.design-images');
    const photos = document.querySelectorAll('.feature__img');
    const titles = document.querySelectorAll('.design__title');

    const changeContent = (arrs, value) => {
        arrs.forEach((arr) => {
            if (arr.dataset.tabsField === value) {
                arr.classList.remove('hidden')
            } else {
                arr.classList.add('hidden')
            }
        });
    };
    
    tabBtns.forEach((btn, index) => {

        btn.addEventListener('click', (e) => {

            const target = e.target;

            const dataValue = btn.dataset.tabsHandler;

            changeContent(photos, dataValue)
            changeContent(imgs, dataValue);
            changeContent(tabDesc, dataValue);

            titles.forEach((title, indexT) => {
                if (indexT === index) {
                    title.classList.remove('hidden');
                    console.log(title)
                    document.title = title.textContent;
                } else {
                    title.classList.add('hidden');
                }
            })
            
            tabBtns.forEach(elem => {
                if (elem === target) {
                    elem.classList.add('design-list__item_active');
                } else {
                    elem.classList.remove('design-list__item_active');
                }
            })
        })
    })
};

tabs();