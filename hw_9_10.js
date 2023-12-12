'use strict';

const toggleButton = document.getElementById('toggleButton');
const message = document.querySelector('.message');

const savedState = localStorage.getItem('buttonState');
const initialState = savedState === 'on';
updateUI(initialState);

toggleButton.addEventListener('click', function () {
    const newState = handleClick();
    const currentTime = new Date().toLocaleString();

    if (newState) {
        localStorage.setItem('lastTurnOnTime', currentTime);
    } else {
        localStorage.setItem('lastTurnOffTime', currentTime);
    }

    localStorage.setItem('buttonState', newState ? 'on' : 'off');
    updateUI(newState);
});

function handleClick() {
    return !getSavedState();
}

function updateUI(state) {
    toggleButton.textContent = state ? 'Turn off' : 'Turn on';
    document.body.style.backgroundColor = state ? 'darkgray' : 'white';

    const lastTurnOnTime = localStorage.getItem('lastTurnOnTime') || 'N/A';
    const lastTurnOffTime = localStorage.getItem('lastTurnOffTime') || 'N/A';

    if (state) {
        message.textContent = `Last turn on: ${lastTurnOnTime}`;
    } else {
        //Перевіряю, чи lastTurnOffTime не є 'N/A' перед оновленням повідомлення
        message.textContent = lastTurnOffTime !== 'N/A' ? `Last turn off: ${lastTurnOffTime}` : '';
    }
}

function getSavedState() {
    return localStorage.getItem('buttonState') === 'on';
}

localStorage.clear();

