'use strict';


    const toggleButton = document.getElementById('toggleButton');

    const savedState = getSavedState();

    const initialState = setInitialState(savedState);

    updateUI(initialState);

    toggleButton.addEventListener('click', function () {
        const currentState = toggleButton.textContent.toLowerCase();
        const newState = handleClick(currentState);
        updateUI(newState);

        localStorage.setItem('buttonState', newState);
    });
;

function getSavedState() {
    return localStorage.getItem('buttonState');
    //
}

function setInitialState(savedState) {
    return savedState === 'on' ? 'on' : 'off';
}

function handleClick(currentState) {
    return currentState === 'turn off' ? 'on' : 'off';
}

function updateUI(state) {
    const toggleButton = document.getElementById('toggleButton');
    const message = document.querySelector('.message');

    toggleButton.textContent = state === 'on' ? 'Turn on' : 'Turn off';
    document.body.style.backgroundColor = state === 'on' ? 'darkgray' : 'white';

    if (state === 'on') {
        const lastTurnOffTime = localStorage.getItem('lastTurnOffTime');
        message.textContent = `Last turn off: ${lastTurnOffTime || 'N/A'}`;
    } else {
        const currentTime = new Date().toLocaleString();
        message.textContent = `Last turn on: ${currentTime}`;
        localStorage.setItem('lastTurnOffTime', currentTime);
    }
}
