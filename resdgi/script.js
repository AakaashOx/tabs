const menuButton = document.getElementById('menuButton');
const menuButtonIcon = document.getElementById('menuButtonIcon');
const menu = document.getElementById('menu');
const menurgt = document.getElementById('usermright');
const createbtn = document.getElementById('crtbtn');
const crtbtndiv = document.getElementById('crtbtndiv');

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("#htnavbar a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      navLinks.forEach(function(link) {
        link.classList.remove("active"); // Remove active class from all links
      });
      event.target.classList.add("active"); // Add active class to the clicked link
    });
  });
});


function positionDivRelativeToButton() {
  const buttonRect = createbtn.getBoundingClientRect();
  const buttonTop = buttonRect.top + window.scrollY;
  const buttonLeft = buttonRect.left + window.scrollX;
  
  crtbtndiv.style.top = `${buttonTop + createbtn.offsetHeight + 5}px`;
  crtbtndiv.style.left = `${buttonLeft + (createbtn.offsetWidth / 2)}px`;
}

function createNew() {
  if (crtbtndiv.classList.contains('show')) {
      crtbtndiv.classList.remove('show');
      createbtn.classList.remove('tooltip-active'); // Hide tooltip
      createbtn.style.pointerEvents = 'auto'; // Re-enable pointer events for hover
  } else {
      crtbtndiv.classList.add('show');
      createbtn.classList.add('tooltip-active'); // Show tooltip
      createbtn.style.pointerEvents = 'none'; // Disable pointer events for hover
  }
  positionDivRelativeToButton();
  
  // Toggle the visibility of the tooltip content directly
  const tooltipContent = document.querySelector('#crtbtn::after');
  if (tooltipContent) {
      tooltipContent.style.visibility = crtbtndiv.classList.contains('show') ? 'hidden' : 'visible';
  }
}

document.body.addEventListener('click', function(event) {
  if (!crtbtndiv.contains(event.target) && event.target !== createbtn && !event.target.closest('button#crtbtn')) {
      if (crtbtndiv.classList.contains('show')) {
          crtbtndiv.classList.remove('show');
          createbtn.classList.remove('tooltip-active'); // Hide tooltip
          createbtn.style.pointerEvents = 'auto'; // Re-enable pointer events for hover
      }
  }
});

window.addEventListener('resize', positionDivRelativeToButton);
window.addEventListener('scroll', positionDivRelativeToButton);


function menubtn() {
  // Get the computed style of the menu element to check its left position
  const computedStyle = window.getComputedStyle(menu);

  // Check the computed style's left position to determine the current state
  const leftPosition = computedStyle.getPropertyValue('left');

  // Toggle the menu based on its current state
  if (leftPosition === '-320px') {
    menu.style.left = '0';
    document.addEventListener('click', closeMenuOutside);
  } else {
    menu.style.left = '-320px';
    document.removeEventListener('click', closeMenuOutside);
  }
}

function closebtnmenu(){
  menu.style.left = '-320px';
}

function closebtnmenurgt(){
  usermright.style.right = '-320px';
}

function closeMenuOutside(event) {
  // Close the menu if clicked outside of it and the menu button
  if (!menu.contains(event.target) && event.target !== menuButton && event.target !== menuButtonIcon) {
    menu.style.left = '-320px';
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
  
  if (menu.style.right === '-320px' || menu.style.right === '') {
    // Display the menu
    menu.style.right = '0';
  } else {
    // Hide the menu
    menu.style.right = '-320px';
  }
  document.addEventListener('click', function(event) {
      var menu = document.getElementById('usermright');
      var menuButton = document.getElementById('menurightButton');
      
      // Check if the clicked element is outside of the menu and the menu button
      if (!menu.contains(event.target) && event.target !== menuButton) {
        // Hide the menu
        menu.style.right = '-320px';
      }
    });
    
}

