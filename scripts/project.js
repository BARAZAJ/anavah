window.onload = function() {

  // Fetch and display members
  async function fetchMembers() {
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

  

  // Call initial functions
  fetchMembers();
  displayFooterInfo();
  apifetch();

 

 
};
