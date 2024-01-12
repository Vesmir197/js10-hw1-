  const tab1Button = document.getElementById('tab1');
        const tab2Button = document.getElementById('tab2');
        const contentTab1 = document.getElementById('content-tab1');
        const contentTab2 = document.getElementById('content-tab2');
        const dateInputContainer = document.getElementById('date-input-container');
        const dateUnitButtons = document.getElementById('date-unit-buttons'); // Fix here
        const holidayInfoButtons = document.getElementById('holiday-info-buttons');
        
        function handleButtonClick(event) {
            // Initially hide content for both tabs
            contentTab1.style.display = 'none';
            contentTab2.style.display = 'none';
        
            // Hide day options and results table initially
            const dayOptionsContainer = document.getElementById('day-options-container');
            const resultsContainer = document.getElementById('results-container');
            const dayPresetButton = document.getElementById('day-preset-button');
            const monthPresetButton = document.getElementById('month-preset-button');
        
            dayOptionsContainer.style.display = 'none';
            resultsContainer.style.display = 'none';
            dayPresetButton.style.display = 'none';
            monthPresetButton.style.display = 'none';
        
            if (event.target.id === 'tab1') {
                // Show Date Range tab content
                contentTab1.style.display = 'block';
        
                // Show day options, results table, and preset buttons
                dayOptionsContainer.style.display = 'flex'; // Change to flex for horizontal layout
                resultsContainer.style.display = 'block';
                dayPresetButton.style.display = 'block';
                monthPresetButton.style.display = 'block';
            } else if (event.target.id === 'tab2') {
                // Show Holiday Info tab content
                contentTab2.style.display = 'block';
            }
        
            // Keep the calendar (date inputs) always visible
            const dateInputContainer = document.getElementById('date-input-container');
            dateInputContainer.style.display = 'block';
        }
        
        // Attach the event listener to the tab buttons
        tab1Button.addEventListener('click', handleButtonClick);
        tab2Button.addEventListener('click', handleButtonClick);

        document.querySelectorAll('input[name="day-option"]').forEach(radio => {
            radio.addEventListener('change', calculateDuration);
        });

        function calculateDuration() {
            const startDate = new Date(startDateInput.value);
            const endDate = new Date(endDateInput.value);
            let count = 0;
        
            if (startDate > endDate) {
                durationOutput.textContent = 'Start date must be before end date';
                return;
            }
        
            while (startDate <= endDate) {
                if (isWeekday(startDate) && (document.getElementById('weekdays').checked || document.getElementById('all-days').checked)) {
                    count++;
                } else if (isWeekend(startDate) && (document.getElementById('weekends').checked || document.getElementById('all-days').checked)) {
                    count++;
                }
                startDate.setDate(startDate.getDate() + 1);
            }
        
            durationOutput.textContent = `Total days: ${count}`;
        
            // Save to local storage
            saveToLocalStorage(startDateInput.value, endDateInput.value, count);
        
            // Display last 10 results
            displayLastResults();
        }
        
        function saveToLocalStorage(startDate, endDate, count) {
            // Get the existing results from local storage or initialize an empty array if none exist
            let results = JSON.parse(localStorage.getItem('calculationResults')) || [];
            // Add new result to the beginning of the array
            results.unshift({ startDate, endDate, count });
            // Keep only the last 10 results
            results = results.slice(0, 10);
            // Save back to local storage
            localStorage.setItem('calculationResults', JSON.stringify(results));
        }
        
        function displayLastResults() {
            const results = JSON.parse(localStorage.getItem('calculationResults')) || [];
            const resultsBody = document.getElementById('results-body');
        
            // Clear existing results
            resultsBody.innerHTML = '';
        
            // Add each result as a new row in the table
            results.forEach(result => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${result.startDate}</td><td>${result.endDate}</td><td>${result.count} days</td>`;
                resultsBody.appendChild(row);
            });
        }
        
        // Call displayLastResults when the page loads to show the stored results
        document.addEventListener('DOMContentLoaded', displayLastResults);
        
        function isWeekday(date) {
            return date.getDay() !== 0 && date.getDay() !== 6;
        }
        
        function isWeekend(date) {
            return date.getDay() === 0 || date.getDay() === 6;
        }

        tab1Button.addEventListener('click', handleButtonClick);
        tab2Button.addEventListener('click', handleButtonClick);

        const startDateInput = document.getElementById('start-date');
        const endDateInput = document.getElementById('end-date');
        const durationOutput = document.getElementById('duration-output');

        startDateInput.addEventListener('change', updateDuration);
        endDateInput.addEventListener('change', updateDuration);

        // Add event listeners to calculate different units of time in "Date Range" tab
        const daysButton = document.getElementById('days-button');
        const hoursButton = document.getElementById('hours-button');
        const minutesButton = document.getElementById('minutes-button');
        const secondsButton = document.getElementById('seconds-button');

        daysButton.addEventListener('click', () => calculateTime('days'));
        hoursButton.addEventListener('click', () => calculateTime('hours'));
        minutesButton.addEventListener('click', () => calculateTime('minutes'));
        secondsButton.addEventListener('click', () => calculateTime('seconds'));

        function updateDuration() {
            // Handle date range update here
            // This function can be similar to the one in the previous examples
        }

        function calculateTime(unit = 'days') {
            const startDate = new Date(startDateInput.value);
            const endDate = new Date(endDateInput.value);

            if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
                const duration = endDate.getTime() - startDate.getTime();

                switch (unit) {
                    case 'days':
                        durationOutput.textContent = `Duration: ${duration / (1000 * 60 * 60 * 24)} days`;
                        break;
                    case 'hours':
                        durationOutput.textContent = `Duration: ${duration / (1000 * 60 * 60)} hours`;
                        break;
                    case 'minutes':
                        durationOutput.textContent = `Duration: ${duration / (1000 * 60)} minutes`;
                        break;
                    case 'seconds':
                        durationOutput.textContent = `Duration: ${duration / 1000} seconds`;
                        break;
                    default:
                        durationOutput.textContent = 'Invalid unit';
                }
            } else {
                durationOutput.textContent = 'Invalid dates';
            }
        }


const dayPresetButton = document.getElementById('day-preset-button');
const monthPresetButton = document.getElementById('month-preset-button');

dayPresetButton.addEventListener('click', () => setPresetDuration(7));
monthPresetButton.addEventListener('click', () => setPresetDuration(30));

function setPresetDuration(days) {
    // Use the selected start date, or default to the current date if none is selected
    const startDate = startDateInput.value ? new Date(startDateInput.value) : new Date();
    const endDate = new Date(startDate);

    endDate.setDate(startDate.getDate() + days);

    startDateInput.valueAsDate = startDate;
    endDateInput.valueAsDate = endDate;
    calculateDuration(); // Call calculateDuration to handle the new date range
}

// Function to save a new result
function saveResult(startDate, endDate, result) {
    let results = getSavedResults();
    results.push({ startDate, endDate, result });

    // Keep only the last 10 results
    if (results.length > 10) {
        results = results.slice(-10);
    }

    localStorage.setItem('searchResults', JSON.stringify(results));
}

// Function to retrieve saved results
function getSavedResults() {
    const savedResults = localStorage.getItem('searchResults');
    return savedResults ? JSON.parse(savedResults) : [];
}

document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault(); // This will prevent the default form submission behavior
  
    const countryInput = document.getElementById('countrySelect').value;
    const resultsDiv = document.getElementById('results');
  
    if (countryInput) {
      fetchCalendarificData('/holidays', { country: countryInput, year: new Date().getFullYear() })
        .then(data => {
          if (data && data.response && data.response.holidays) {
            const holidays = data.response.holidays.map(holiday => `<li>${holiday.name} (${holiday.date.iso})</li>`).join('');
            resultsDiv.innerHTML = `<ul>${holidays}</ul>`;
          } else {
            resultsDiv.innerHTML = 'No holidays found for the selected country.';
          }
        });
    } else {
      resultsDiv.innerHTML = 'Please select a country.';
    }
  });
