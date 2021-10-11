const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const h1 = document.querySelector("h1");

const countTo = "1 Jan 2022"

const countdown = setInterval(() => {
    const currentDate = new Date();
    const endDate = new Date(countTo);
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = `${days}`;
    hoursElement.innerHTML = `${format(hours)}`;
    minutesElement.innerHTML = `${format(minutes)}`
    secondsElement.innerHTML = `${format(seconds)}`;

    if (totalSeconds < 0) {
        clearInterval(countdown);
        h1.textContent = "THE TIME HAS COME!";
    }

})

// Using Ternary operator to append 0 to countdown numbers < 10
function format(count) {
    return count < 10 ? `0${count}` : count;
}