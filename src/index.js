import './style.css'

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = 'Daizha Espiritu';
//     element.classList.add('hello');
//     return element;
//   }
  
  // document.body.appendChild(component());
document.addEventListener('DOMContentLoaded', function() {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-tab a');

  // Iterate over each navigation link
  navLinks.forEach(function(link) {
    // Add a click event listener to each link
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the target section ID from the link's href attribute
      const targetId = link.getAttribute('href');

      // Scroll to the target section smoothly
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
