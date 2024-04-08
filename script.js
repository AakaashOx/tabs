
function boxopen(event) {
    
    // Get all box elements
    var boxes = document.querySelectorAll('.box');

    // Remove border from all boxes
    boxes.forEach(function(box) {
        box.style.border = "2px solid #727272";
    });

    // Get the clicked box element
    var clickedBox = event.currentTarget;

    // Add border to the clicked box
    clickedBox.style.border = "10px solid #00ff4c";
    
}



