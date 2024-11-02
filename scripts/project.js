window.onload = function() {
  // Fetch and display members
  async function fetchMembers() {
      console.log("Fetching members...");
      try {
          const response = await fetch('members.json');  // Adjust path as necessary
          const members = await response.json();
          console.log(members); // Log the JSON data
          displayMembers(members);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  }

  // Function to display members in the container
  function displayMembers(members) {
      const container = document.getElementById('members-container');
      container.innerHTML = '';  // Clear any existing content

      members.forEach(member => {
          const card = document.createElement('div');
          card.classList.add('member-card');
          card.innerHTML = `
          <figure>
              <img src="${member.image_url}" alt="${member.company} logo">
              <figcaption>${member.name}</figcaption>
              <figcaption>${member.address}</figcaption>
          </figure>
          `;
          container.appendChild(card);
      });
  }

  // Display footer information
  function displayFooterInfo() {
      const yearElement = document.getElementById('year');
      const lastModifiedElement = document.getElementById('last-modified');

      yearElement.textContent = new Date().getFullYear();
      lastModifiedElement.textContent = document.lastModified;
  }

  // Fetch and display weather data
  async function apifetch() {
      const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=0.44186&lon=33.18033&appid=0d30100fd45e2d175df6babe27c43b43&units=metric';
      
      try {
          const response = await fetch(url);
          if (response.ok) {
              const data = await response.json();
              console.log(data);  // Check the fetched data structure in the console

              const temp = data.list[0].main.temp;
              const max = data.list[0].main.temp_max;
              const min = data.list[0].main.temp_min;
              const humidity = data.list[0].main.humidity;
              const sunrise = new Date(data.city.sunrise * 1000); // Convert Unix timestamp to JS Date object
              const sunset = new Date(data.city.sunset * 1000);   // Convert Unix timestamp to JS Date object
              const todaytemp = data.list[0].main.temp;
              const tuesdaytemp = data.list[1].main.temp;
              const wednesdaytemp = data.list[2].main.temp;

              // Update the DOM elements with the fetched data
              document.querySelector('#current-temp').textContent = `${temp.toFixed(1)}°C`;
              document.querySelector('#max').textContent = `${max.toFixed(1)}°C`;
              document.querySelector('#min').textContent = `${min.toFixed(1)}°C`;
              document.querySelector('#humidity').textContent = humidity;
              document.querySelector('#rise').textContent = sunrise;
              document.querySelector('#set').textContent = sunset;
              document.querySelector('#today').textContent = `${todaytemp.toFixed(1)}°C`;
              document.querySelector('#tuesday').textContent = `${tuesdaytemp.toFixed(1)}°C`;
              document.querySelector('#wednesday').textContent = `${wednesdaytemp.toFixed(1)}°C`;
          } else {
              throw Error(await response.text());
          }
      } catch (error) {
          console.log("Error fetching weather data:", error);
      }
  }

  // Call initial functions
  fetchMembers();
  displayFooterInfo();
  apifetch();

  // Scroll function to add 'scrolled' class to header
  const header = document.getElementById('header'); // Adjust this selector if necessary
  document.addEventListener("scroll", function() {
      if (window.scrollY > 10) { // Adjust threshold as needed
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });

  // Mobile menu functionality
  const hamburger = document.querySelector('.hamburger'); 
  const closeIcon = document.querySelector('.close-icon');
  const menu = document.querySelector('.mobile-nav');
  const hidemenu = document.querySelector('.logo');

  // Show the menu and toggle between hamburger and X icons
  hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
      hamburger.classList.toggle('active');
      closeIcon.classList.toggle('active');
      hidemenu.classList.add('hide');
  });

  // Hide the menu when the X icon is clicked
  closeIcon.addEventListener('click', () => {
      menu.classList.remove('show');
      hamburger.classList.remove('active');
      closeIcon.classList.remove('active');
      hidemenu.classList.remove('hide');
  });
};
