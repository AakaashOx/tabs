const menuButton = document.getElementById('menuButton');
const menuButtonIcon = document.getElementById('menuButtonIcon');
const menu = document.getElementById('menu');
const createbtn = document.getElementById('crtbtn');
const crtbtndiv = document.getElementById('crtbtndiv');


function createNew() {
    // Toggle the visibility of crtbtndiv
    crtbtndiv.classList.toggle('show');
}

// Add event listener to detect clicks on the document body
document.body.addEventListener('click', function(event) {
    // Check if the clicked element is not inside crtbtndiv or createbtn
    if (!crtbtndiv.contains(event.target) && event.target !== createbtn && !event.target.closest('button#crtbtn')) {
        // Hide crtbtndiv if it is visible
        if (crtbtndiv.classList.contains('show')) {
            crtbtndiv.classList.remove('show');
        }
    }
});

function menubtn() {
  // Get the computed style of the menu element to check its left position
  const computedStyle = window.getComputedStyle(menu);

  // Check the computed style's left position to determine the current state
  const leftPosition = computedStyle.getPropertyValue('left');

  // Toggle the menu based on its current state
  if (leftPosition === '-250px') {
    menu.style.left = '0';
    document.addEventListener('click', closeMenuOutside);
  } else {
    menu.style.left = '-250px';
    document.removeEventListener('click', closeMenuOutside);
  }
}

function closeMenuOutside(event) {
  // Close the menu if clicked outside of it and the menu button
  if (!menu.contains(event.target) && event.target !== menuButton && event.target !== menuButtonIcon) {
    menu.style.left = '-250px';
    document.removeEventListener('click', closeMenuOutside);
  }
}

// Listen for clicks on the menu button
menuButton.addEventListener('click', menubtn);

// Listen for clicks on the SVG icon inside the menu button
menuButtonIcon.addEventListener('click', menubtn);


function toggleMenu() {
  var menu = document.getElementById('usermright');
  var menuButton = document.getElementById('menurightButton');
  
  if (menu.style.right === '-250px' || menu.style.right === '') {
    // Display the menu
    menu.style.right = '0';
  } else {
    // Hide the menu
    menu.style.right = '-250px';
  }
  document.addEventListener('click', function(event) {
      var menu = document.getElementById('usermright');
      var menuButton = document.getElementById('menurightButton');
      
      // Check if the clicked element is outside of the menu and the menu button
      if (!menu.contains(event.target) && event.target !== menuButton) {
        // Hide the menu
        menu.style.right = '-250px';
      }
    });
    
}

