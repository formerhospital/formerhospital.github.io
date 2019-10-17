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
    window.location.href = "testtransition.html";
}

function home() {
    window.location.href = "index.html";
}

$(function(){
    $('html').keydown(function(e){
        if (e.keyCode == 39) {
            if (window.location.pathname.split("/").pop() == "index.html") {
                window.location.href = "testtransition.html";
            }
        } else if (e.keyCode == 37) {
            if (window.location.pathname.split("/").pop() == "testtransition.html") {
                window.location.href = "index.html";
            }  
        }
    });

setTimeout(function() {
    $(".bottomProgress").addClass("after");
    }, 500);
});

document.addEventListener('contextmenu', event => event.preventDefault());

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});