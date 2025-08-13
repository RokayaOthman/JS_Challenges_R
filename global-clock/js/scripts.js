// A new array to store the json data
let countriesData = [];



// Let's also update the button text
const dropdownButton = document.querySelector('.dropdown-toggle');


// edit the default page when the user first lands the page

// A new variable to store the selected time zone
let selectedTimeZone = "Africa/Cairo"; // Default to Cairo
dropdownButton.textContent = "Cairo";
const cityNameDisplayed = document.querySelector('.current-name');
cityNameDisplayed.textContent = "Cairo";

fetch('countries.json')
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    fillDropdown(countriesData);

    
  });

// setting Cairo as the default timezone


function fillDropdown(countries) {
  // dropdown list 
  const theList = document.getElementById('countryList');
  //theList.innerHTML = ''; // Clear previous content

  countries.forEach(country => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a 
        class="dropdown-item" 
        href="#" 
        data-code="${country.code}" 
        data-locale="${country.locale}"
        data-timezone="${country.timezone}"
        data-name="${country.name}">
          ${country.name}
          <span class="fi fi-${country.code}"></span>
      </a>`;
    theList.appendChild(li);
  });
}

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


// Now What happens when I click a particular item from the dropdown list ? 
const theClickedCountry = document.getElementById('countryList');
theClickedCountry.addEventListener('click', function(e) {
  // Check if the clicked element is an anchor tag or a child of one
  let targetLink = e.target.closest('a');
  if (targetLink) {
    e.preventDefault();
    selectedTimeZone = targetLink.dataset.timezone;
    // Update the button text with the selected country name
    dropdownButton.textContent = targetLink.textContent.trim().split('\n')[0];

    // TODO : create an element here and add the name of the country and the current time in it to be clear to the user
    cityNameDisplayed.textContent = targetLink.dataset.name;

    // Re-run rotateClock to update the clock immediately
    rotateClock();
  }
});


function rotateClock() {
  const now = new Date();
  const options = { timeZone: selectedTimeZone, hour12: false };
  let [hours, minutes, seconds] = now
  .toLocaleTimeString('en-US', options)
  .split(':')
  .map(Number);
  
  const secondDegrees = (seconds / 60) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  // Use modulo 12 for the hour hand to work on a 12-hour clock
  const hourDegrees = ((hours % 12) / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
  let ampm = "AM";
  ampm = hours < 12 ? "AM" : "PM"; 
 
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  // for the digital clock :
  const timeDisplayed = document.querySelector('.current-time');
  timeDisplayed.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

}


// Initial call and then set the interval
rotateClock();
setInterval(rotateClock, 1000);






// Unrelated: add button for ticking sound
const soundButton = document.querySelector('.sound-button');
const tickingSound = document.querySelector("#audio");

// Start with sound paused
tickingSound.pause();

soundButton.addEventListener("click", () => {
  if (tickingSound.paused) {
    tickingSound.play();
    soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    tickingSound.pause();
    soundButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
});