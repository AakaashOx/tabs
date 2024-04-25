const createbtn = document.getElementById('crtbtn');
const crtbtndiv = document.getElementById('crtbtndiv');

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
