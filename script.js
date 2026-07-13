window.onload = function () {
    console.log("Welcome to PATCOLM");
};
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
