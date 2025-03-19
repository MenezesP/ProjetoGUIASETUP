document.addEventListener('DOMContentLoaded', function () {
  fetch('../assets/components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
      iniciarMenuDropdown();
    })
    .catch(error => console.log('Erro ao carregar o header:', error));
});

function iniciarMenuDropdown() {
  let menu = document.getElementById("dropdown-menu");
  let button = document.getElementById("menu-button");
  let overlay = document.getElementById("overlay-menu");
  
  document.getElementById("menu-button").addEventListener("click", function(event) {
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
  });
  
  document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    }
  });
}