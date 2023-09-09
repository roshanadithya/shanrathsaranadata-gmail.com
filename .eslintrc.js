/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  env: {
    "cypress/globals": true,
  },
  plugins: ["cypress"],
  // We're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but we have to
  // set the jest version explicitly.
  settings: {
    jest: {
      version: 28,
    },
  },
};
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const calendarContainer = document.getElementById('days');
const monthYearText = document.getElementById('month-year');

let currentDate = new Date();

function displayCalendar() {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  monthYearText.textContent = months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();

  let calendarDaysHTML = '';

  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDaysHTML += `<div class="day"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const isEvent = checkIfEventExists(date); // You should implement this function to check if an event exists on the given date

    calendarDaysHTML += `<div class="day ${isEvent ? 'event' : ''}">${day}</div>`;
  }

  calendarContainer.innerHTML = calendarDaysHTML;
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  displayCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  displayCalendar();
}

displayCalendar(); // Initial display
