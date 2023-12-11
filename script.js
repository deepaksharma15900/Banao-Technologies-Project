// function toggleDropdown() {
//   var dropdown = document.getElementById("myDropdown");
//   dropdown.classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
var popup = document.querySelector(".popup");
var popup2 = document.querySelector(".popup2");
var main = document.querySelector("main")
function display(){
  popup.style.display = "block";
  // main.style.filter = "blur(5px) brightness(0.5)";
}
function invisible(){
  popup.style.display = "none";
}

function display2(){
  popup2.style.display = "block";
}
function invisible2(){
  popup2.style.display = "none";
}