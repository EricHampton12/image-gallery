var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  for(var i = 1; i <= 5; i++) { /* variable 1 represents picture, then loops thru other 4 photos */
   var newImage = document.createElement('img');
   newImage.setAttribute('src', 'images/pic' + i + '.jpg');
   thumbBar.appendChild(newImage);
   newImage.onclick = function(e) { /* begins new function to open next photo */
    var x = e.target.getAttribute('src');
    displayImage(x);
  }
 }
function displayImage(x) {
  displayedImage.setAttribute('src', x);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() { /* click begins function to darken image */
  let buttonClass = btn.getAttribute('class');
  if(buttonClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
  else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}
