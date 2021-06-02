function myFunction() {
  // Declare variables
  var input, filter, ul,a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("nav-list");
  a = ul.getElementsByTagName("a");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < ul.length; i++) {
    a = ul[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      ul[i].style.display = "";
    } else {
      ul[i].style.display = "none";
    }
  }
}
