const main = () => {
    const countDate = new Date('June 23, 2023 00:00:00').getTime();
    const now =  new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    const textYears = Math.floor((gap / year))
    const textMonth = Math.floor((gap % year) / month);
    const textDay = Math.floor(((gap % month) / day) - 2);
    const textHour = Math.floor(((gap % day) / hour) + 1);
    const textMinutes = Math.floor(((gap % hour) / minute));
    const textSeconds = Math.floor((gap % minute) / second);
    
    document.querySelector('.years').innerHTML = textYears;
    document.querySelector('.month').innerHTML = `${textMonth < 10 ? '0' : ''}${textMonth}`;
    document.querySelector('.day').innerHTML = `${textDay < 10 ? '0' : ''}${textDay}`;
    document.querySelector('.hours').innerHTML = `${textHour < 10 ? '0' : ''}${textHour}`;
    document.querySelector('.minutes').innerHTML = `${textMinutes < 10 ? '0' : ''}${textMinutes}`;
    document.querySelector('.seconds').innerHTML = `${textSeconds < 10 ? '0' : ''}${textSeconds}`;
};

setInterval(main, 1000)
document.addEventListener('DOMContentLoaded', main);