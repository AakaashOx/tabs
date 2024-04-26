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
  