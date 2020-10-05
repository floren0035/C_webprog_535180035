// Query Selector
function myHeading() {
    document.querySelector(".satu").style.backgroundColor = "blue";
}
function myParagraph() {
    document.querySelector(".tiga").style.backgroundColor = "orange";
}
function myGroup() {
    document.querySelector(".satu, .dua, .empat, .lima").style.backgroundColor = "red";
    document.querySelector("tiga").style.backgroundColor = "gray";
}
// Intro DOM
function myFunc() {
    var x = document.getElementById("tipe").nodeType;
    document.getElementById("demo").innerHTML = x;
}