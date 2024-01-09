'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const body = document.getElementById('body');
    const lastToggle = document.getElementById('lastToggle');
    let isOn = localStorage.getItem('isOn') === 'true';
    let lastToggleTime = localStorage.getItem('lastToggleTime');

    const updateButtonAndBackground = () => {
        if (isOn) {
            button.textContent = 'Turned on';
            body.classList.add('dark');
            body.classList.remove('light');
            lastToggle.textContent = 'Last turn off: ' + lastToggleTime;
        } else {
            button.textContent = 'Turned off';
            body.classList.add('light');
            body.classList.remove('dark');
            lastToggle.textContent = 'Last turn on: ' + lastToggleTime;
        }
    };

    // Initialize
    updateButtonAndBackground();

    button.addEventListener('click', function () {
        isOn = !isOn;
        lastToggleTime = new Date().toLocaleString('uk-UA');
        localStorage.setItem('isOn', isOn);
        localStorage.setItem('lastToggleTime', lastToggleTime);
        updateButtonAndBackground();
    });
});