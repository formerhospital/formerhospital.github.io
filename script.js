function hideBackArrow() {
    var backArrow = document.getElementById("backArrow");
    backArrow.style.display = "none";
}

function showBackArrow() {
    var backArrow = document.getElementById("backArrow");
    backArrow.style.display = "block";
}

function hideForwardArrow() {
    var forwardArrow = document.getElementById("forwardArrow");
    forwardArrow.style.display = "none";
}

function showForwardArrow() {
    var forwardArrow = document.getElementById("forwardArrow");
    forwardArrow.style.display = "block";
}

function testChange() {
    window.location.href = "testtransition.html"
}

function testRevert() {
    window.location.href = "index.html"
}