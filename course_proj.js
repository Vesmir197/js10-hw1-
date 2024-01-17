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

dayPresetButton.addEventListener('click', () => setPresetDuration(6));
monthPresetButton.addEventListener('click', () => setPresetDuration(29));

function setPresetDuration(days) {
    // Use the selected start date, or default to the current date if none is selected
    const startDate = startDateInput.value ? new Date(startDateInput.value) : new Date();//It first checks if there's a value in startDateInput (which seems to be an input field for the user to select a start date). If there is a value, it creates a new Date object using that value; if not, it defaults to the current date.
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





function fetchCalendarificData(endpoint, params = {}) {
    const baseURL = 'https://calendarific.com/api/v2';
    const url = new URL(`${baseURL}${endpoint}`);
    url.search = new URLSearchParams({ ...params, api_key: 'W5eEVwyWjZbeHIQpNocUkDZEUAv9Vlid' });

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function populateCountriesDropdown(countries) {
    const countrySelect = document.getElementById('countrySelect');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country['iso-3166'];
        option.textContent = country.country_name;
        countrySelect.appendChild(option);
    });

    // Enable the year dropdown and populate it
    populateYearDropdown();
}

function populateYearDropdown() {
    const yearSelect = document.getElementById('yearSelect');
    const currentYear = new Date().getFullYear();

    for (let year = currentYear; year >= 2000; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    yearSelect.disabled = false;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    fetchCalendarificData('/countries')
        .then(data => {
            if (data && data.response && data.response.countries) {
                populateCountriesDropdown(data.response.countries);
            } else {
                console.error('No countries data found');
            }
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
});


document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();

    const countryInput = document.getElementById('countrySelect').value;
    const yearInput = document.getElementById('yearSelect').value;
    const resultsDiv = document.getElementById('results');

    if (countryInput && yearInput) {
        fetchCalendarificData('/holidays', { country: countryInput, year: yearInput })
            .then(data => {
                if (data && data.response && data.response.holidays) {
                    const holidays = data.response.holidays.map(holiday => `<li>${holiday.name} (${holiday.date.iso})</li>`).join('');
                    resultsDiv.innerHTML = `<ul>${holidays}</ul>`;
                } else {
                    resultsDiv.innerHTML = 'No holidays found for the selected country and year.';
                }
            });
    } else {
        resultsDiv.innerHTML = 'Please select a country and a year.';
    }
});

document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();

    const countryInput = document.getElementById('countrySelect').value;
    const yearInput = document.getElementById('yearSelect').value;
    const resultsDiv = document.getElementById('results');

    if (countryInput && yearInput) {
        fetchCalendarificData('/holidays', { country: countryInput, year: yearInput })
            .then(data => {
                if (data && data.response && data.response.holidays) {
                    resultsDiv.innerHTML = generateTable(data.response.holidays);
                } else {
                    resultsDiv.innerHTML = 'No holidays found for the selected country and year.';
                }
            });
    } else {
        resultsDiv.innerHTML = 'Please select a country and a year.';
    }
});

let sortAscending = true;

// Function to sort holidays
function sortHolidays(holidays, ascending) {
    return holidays.sort((a, b) => {
        const dateA = new Date(a.date.iso);
        const dateB = new Date(b.date.iso);
        return ascending ? dateA - dateB : dateB - dateA;
    });
}

// Function to generate the holidays table with a sort button
function generateTable(holidays) {
    let table = `<table><thead><tr><th>Date</th><th>Name of the Holiday</th></tr></thead><tbody>`;
    holidays.forEach(holiday => {
        table += `<tr><td>${holiday.date.iso}</td><td>${holiday.name}</td></tr>`;
    });
    table += '</tbody></table>';
    return table;
}

document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault();

    const countryInput = document.getElementById('countrySelect').value;
    const yearInput = document.getElementById('yearSelect').value;
    const resultsDiv = document.getElementById('results');

    if (countryInput && yearInput) {
        fetchCalendarificData('/holidays', { country: countryInput, year: yearInput })
            .then(data => {
                if (data && data.response && data.response.holidays) {
                    // Sort the holidays initially in ascending order
                    sortAscending = true;
                    displaySortedHolidays(data.response.holidays);
                } else {
                    resultsDiv.innerHTML = 'No holidays found for the selected country and year.';
                }
            });
    } else {
        resultsDiv.innerHTML = 'Please select a country and a year.';
    }
});

let currentHolidays = []; // Array to store the current holidays for sorting

document.addEventListener('DOMContentLoaded', function() {
    // ... other initialization code ...

    // Initialize event listener for the sort options dropdown
    document.getElementById('sort-options').addEventListener('change', sortAndDisplayHolidays);
});

function fetchAndDisplayHolidays() {
    const countryInput = document.getElementById('countrySelect').value;
    const yearInput = document.getElementById('yearSelect').value;
    const resultsDiv = document.getElementById('results');

    if (countryInput && yearInput) {
        fetchCalendarificData('/holidays', { country: countryInput, year: yearInput })
            .then(data => {
                if (data && data.response && data.response.holidays) {
                    currentHolidays = data.response.holidays; // Store fetched holidays
                    sortAndDisplayHolidays(); // Sort and display holidays
                } else {
                    resultsDiv.innerHTML = 'No holidays found for the selected country and year.';
                }
            });
    } else {
        resultsDiv.innerHTML = 'Please select a country and a year.';
    }
}

function sortAndDisplayHolidays() {
    const sortOption = document.getElementById('sort-options').value;
    const sortedHolidays = sortHolidays(currentHolidays, sortOption);
    displayHolidays(sortedHolidays);
}

function sortHolidays(holidays, sortOrder) {
    return holidays.slice().sort((a, b) => {
        const dateA = new Date(a.date.iso);
        const dateB = new Date(b.date.iso);
        return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
    });
}

function displayHolidays(holidays) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = generateTable(holidays);
}

// ... existing functions like generateTable remain the same ...

document.getElementById('searchButton').addEventListener('click', fetchAndDisplayHolidays);





 