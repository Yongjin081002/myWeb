const clock = document.querySelector("h2#clock");

function liveClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const mins = String(date.getMinutes()).padStart(2,'0');
    clock.innerText= (`${hours}:${mins}`);
}

liveClock()
setInterval(liveClock,1000);