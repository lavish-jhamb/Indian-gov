// ******* TABS FUNCTION *************
function openTabs(e, tabId) {
    const tabContent = document.querySelectorAll('.content');
    // hide all content
    tabContent.forEach((content) => {
        content.style.display = "none"
    })
    const tablinks = document.getElementsByClassName("tab-link");

    for(const button of tablinks){
        button.className = button.className.replace(" active-tabs", "");
    }
    e.currentTarget.className += " active-tabs";
    // show content based on id passed
    document.getElementById(tabId).style.display = "block";
}


// ACCORDION
// Get all Accordion and Panel
let accHeading = document.querySelectorAll(".accordion");
let accPanel = document.querySelectorAll(".accordion-panel");

for (let i = 0; i < accHeading.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading[i].onclick = function () {
            showPanel(this);
    };
}

// Function to Show a Panel
function showPanel(elem) {
    hidePanels();
    elem.classList.add("active-accordion");
    elem.nextElementSibling.style.maxHeight = "300px"
}

// Function to Hide all shown Panels
function hidePanels() {
    for (let i = 0; i < accPanel.length; i++) {
        accPanel[i].style.maxHeight = null;
        accHeading[i].classList.remove("active-accordion");
    }
}