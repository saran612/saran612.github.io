
window.onload = function() {
    setTimeout(function() {
      document.getElementById('loader').classList.add('dis');
      document.getElementById('bg').classList.add('reveal');
    }, 1100);
  };

  const fonts = [,"Redressed","Montserrat","anta",
     "prompt","acme","after","Alston","Aclonica","Greathy",
     "Mushroom","Euphoria"];
  let index = 0;

  function changeFont() {
      index = (index + 1) % fonts.length;
      document.getElementById("loader").style.fontFamily = fonts[index];
  }

  
  setInterval(changeFont, 100);