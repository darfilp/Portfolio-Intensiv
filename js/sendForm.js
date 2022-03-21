const sendForm = () => {
    const forms = document.querySelectorAll('form');


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formDate = new FormData(form);
        const body = {};

        formDate.append('whereFrom', form.classList.value)

        formDate.forEach((value, name) => {
            body[name] = value;
        });

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
                
            })
            .then((date) => console.log('Отправлено'))
            .catch((error) => console.log(error.message))
            .finally(() => {
                form.reset();
            })

        console.log(body);
    })
    })

    
};

sendForm();