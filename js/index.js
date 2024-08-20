//onCreate

window.addEventListener('load', function() {
    this.document.body.classList.add('body-fade-in')
})

// hide cursor, menu bar and hotkey hint

let timer;

function hideCursor() {
    document.body.style.cursor = 'none';
    document.getElementById('hotkey-hint').classList.remove('visible');
    document.getElementById('menu-bar').classList.remove('visible');
}

function resetTimer() {
    document.body.style.cursor = 'default';
    document.getElementById('hotkey-hint').classList.add('visible');
    document.getElementById('menu-bar').classList.add('visible');
    clearTimeout(timer);
    timer = setTimeout(hideCursor, 3000);
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('mousedown', resetTimer);
document.addEventListener('keypress', resetTimer);
document.addEventListener('touchstart', resetTimer);

resetTimer();

//clock

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const hourDigit1 = Math.floor(hours / 10);
    const hourDigit2 = hours % 10;
    const minuteDigit1 = Math.floor(minutes / 10);
    const minuteDigit2 = minutes % 10;

    document.getElementById('hour-digit-1').textContent = hourDigit1;
    document.getElementById('hour-digit-2').textContent = hourDigit2;
    document.getElementById('minute-digit-1').textContent = minuteDigit1;
    document.getElementById('minute-digit-2').textContent = minuteDigit2;
}

setInterval(updateClock, 1000);

updateClock()

//date

/* const dateElement = document.getElementById('date');
const today = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric' };
const formarttedDate = today.toLocaleDateString('en-US', options);

dateElement.textContent = formarttedDate; */

// I hope all your dreams come true :)

//menu
document.getElementById('settings-icon').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'settings.html';
});


//Proudly Nigerian