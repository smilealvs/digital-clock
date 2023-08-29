const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const clock = setInterval(function time () {
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let secs = dateToday.getSeconds();

    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;


    hours.textContent = hrs;
    minutes.textContent = mins;
    seconds.textContent = secs;
})