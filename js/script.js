// script.js

// Function to load content from other HTML files
function loadContent(file) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("bannerContent").innerHTML = xhr.responseText;
    }
  };

  console.log(file)
  // Adjust the path to the HTML file if it's in a different directory
  xhr.open("GET", "components/" + file, true);
  xhr.send();
}
