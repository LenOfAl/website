/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  var classname = document.getElementById("myDropdown").classList;

  if (classname.contains("show2")) {
    classname.remove("show2");
  } else {
    classname.add("show2");
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtnmain")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
