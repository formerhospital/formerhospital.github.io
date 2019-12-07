function consoleAlert() {
    console.log("May I please remind you that all the images and media on this site are subject to copyright laws. You must really want to see what's going on here if you came this far.")
}

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

function page2() {
    window.location.href = "2.html";
}

function page3() {
    window.location.href = "3.html";
}

function page4() {
    window.location.href = "4.html";
}

function page5() {
    window.location.href = "5.html";
}

function home() {
    window.location.href = "index.html";
}

// Left and Right arrow keys
$(function(){
    $('html').keydown(function(e){
        if (e.keyCode == 39) {
            if (window.location.pathname.split("/").pop() == "index.html") {
                window.location.href = "2.html";
            } else if (window.location.pathname.split("/").pop() == "2.html") {
                window.location.href = "3.html";
            } else if (window.location.pathname.split("/").pop() == "3.html") {
                window.location.href = "4.html";
            } else if (window.location.pathname.split("/").pop() == "4.html") {
                window.location.href = "5.html";
            } else if (window.location.pathname.split("/").pop() == "5.html") {
                window.location.href = "5.html";
            }
        } else if (e.keyCode == 37) {
            if (window.location.pathname.split("/").pop() == "2.html") {
                window.location.href = "index.html";
            } else if (window.location.pathname.split("/").pop() == "3.html") {
                window.location.href = "2.html";
            } else if (window.location.pathname.split("/").pop() == "4.html") {
                window.location.href = "3.html";
            } else if (window.location.pathname.split("/").pop() == "5.html") {
                window.location.href = "4.html";
            }
        }
    });


// Progress bar rainbow effect
setTimeout(function() {
    $(".bottomProgress").addClass("after");
    }, 500);
});

// Prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());

$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I      
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) { // Prevent Ctrl+Shift+C (for Firefox)     
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 75) { // Prevent Ctrl+Shift+K (for Firefox)     
        return false;
    } else if (event.ctrlKey && event.keyCode == 80) { // Prevent Ctrl+P (Printing)  
        return false;
    } else if (event.ctrlKey && event.keyCode == 67) { // Prevent Ctrl+C (Copying)  
        return false;
    } else if (event.ctrlKey && event.keyCode == 88) { // Prevent Ctrl+X (Cutting)  
        return false;
    } else if (event.ctrlKey && event.keyCode == 86) { // Prevent Ctrl+V (Pasting)  
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) { // Prevent Ctrl+U (Viewing Source in Chrome)  
        return false;
    } else if (event.ctrlKey && event.keyCode == 79) { // Prevent Ctrl+O (Opening Files)  
        return false;
    } else if (event.ctrlKey && event.keyCode == 79) { // Prevent Ctrl+S (Saving the page as HTML)  
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 80) { // Prevent Ctrl+Shift+P (Printing using System Dialogue)     
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) { // Prevent Ctrl+Shift+J (Viewing Developer Console)     
        return false;
    } else if (event.keyCode == 27) { // Prevent Esc (Stopping page from loading)     
        return false;
    }
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
      });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
}