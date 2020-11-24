// The hideShow function is the function called upon the "More About Me button click."
function hideShowSection() {
    let section = document.querySelector("#learn-more-section");
    let showHideBtn = document.querySelector("#hideShowBtn");

    if (section.style.display === 'none') {
        section.style.display = 'block';
        showHideBtn.innerHTML = "Hide More About Me"
    } else {
        section.style.display = 'none';
        showHideBtn.innerHTML = "Show More About Me"
    }
};