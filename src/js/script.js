// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");
const summary = document.querySelectorAll("summary");


accordeon.querySelectorAll("summary").forEach((summary) => {
    summary.addEventListener("click", () => {
        accordeon.querySelectorAll("details").forEach((det) => { (det.open = false) });;
    });
})