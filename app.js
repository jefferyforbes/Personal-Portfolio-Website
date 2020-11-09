function learnMoreS() {
    let learnMoreBtn = document.querySelector("btn btn-primary")
    let learnMoreSection = document.getElementById("learn-more-section")
    if (learnMoreSection.style.display === "none") {
        learnMoreSection.style.display = "block";
    } else {
        learnMoreSection.style.display = "none"
    }
}