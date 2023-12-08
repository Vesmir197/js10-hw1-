'use strict';

const toggleButton = document.getElementById('toggleButton');
const message = document.querySelector('.message');

const savedState = localStorage.getItem('buttonState');
const initialState = savedState === 'on';
updateUI(initialState);

toggleButton.addEventListener('click', function () {
    const newState = handleClick();
    updateUI(newState);

    localStorage.setItem('buttonState', newState ? 'on' : 'off');
});

function handleClick() {
    return !getSavedState();
}

function updateUI(state) {
    toggleButton.textContent = state ? 'Turn off' : 'Turn on';
    document.body.style.backgroundColor = state ? 'darkgray' : 'white';

    const currentTime = new Date().toLocaleString();
    if (state) {
        const lastTurnOffTime = localStorage.getItem('lastTurnOffTime') || 'N/A';
        message.textContent = `Last turn on: ${lastTurnOffTime}`;
    } else {
        message.textContent = `Last turn off: ${currentTime}`;
        localStorage.setItem('lastTurnOffTime', currentTime);
    }
}

function getSavedState() {
    return localStorage.getItem('buttonState') === 'on';
};