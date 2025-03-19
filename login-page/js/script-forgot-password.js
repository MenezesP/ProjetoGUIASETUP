let menu = document.getElementById("screen-password");
let overlay = document.getElementById("overlay-menu");
let button = document.getElementById("forgot-password");

document.getElementById("forgot-password").addEventListener("click", function(){

  menu.classList.toggle("show");
  overlay.classList.toggle("show");

  document.getElementById("close").addEventListener("click", function(){
    menu.classList.remove("show");
    overlay.classList.remove("show");
  });
});


