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