document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    // Disable F12
    if (event.key === 'F12') {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+J
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
    }
    // Disable Ctrl+U
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }
});

