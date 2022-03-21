const timer = (deadline) => {  
    const timer = document.querySelector('.timer__time');

    const getTime = (deadline) => {
        const nowDate = Date.parse(new Date());
        const stopDate = Date.parse(deadline)
        const rangeDate = stopDate - nowDate;

        let day = Math.floor(rangeDate / (1000 * 60 * 60 * 24) % 30),
            hours = Math.floor((rangeDate / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((rangeDate / (1000 * 60)) % 60),
            seconds = Math.floor((rangeDate / 1000) % 60);

        return {
            day,
            hours,
            minutes,
            seconds,
            rangeDate,
        };
    };

    const check = (num) => {
        if (num < 10) {
            return `0${num}`
        } else {
            return `${num}`
        }
    }

    const updateClock = () => {
        const newTime = getTime(deadline);
        
        if (newTime.rangeDate < 0) {
            timer.textContent = `00:00:00`
        } else {
            timer.textContent = `${check(newTime.day)}:${check(newTime.hours)}:${check(newTime.minutes)}:${check(newTime.seconds)}`
            setTimeout(updateClock, 1000)
        }

    }

    updateClock()
};

timer('2022-03-31')