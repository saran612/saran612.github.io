
window.onload = function() {
    setTimeout(function() {
      document.getElementById('loader').classList.add('dis');
      document.getElementById('bg').classList.add('reveal');
    }, 1300);
  };

  const fonts = ["Roboto","Redressed","Montserrat",
     ,"Oswald","anta",
     "prompt","acme","after","Alston","Aclonica","Greathy",
     "Mushroom","Euphoria"];
  let index = 0;

  function changeFont() {
      index = (index + 1) % fonts.length;
      document.getElementById("loader").style.fontFamily = fonts[index];
  }
  
  setInterval(changeFont, 100);