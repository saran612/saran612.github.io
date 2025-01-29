document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
    }
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }
});

window.onload = function() {
    setTimeout(function() {
      document.getElementById('bg').classList.add('reveal');
    }, 4000);
  };
  