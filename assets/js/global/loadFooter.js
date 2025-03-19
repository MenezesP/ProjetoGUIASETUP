document.addEventListener('DOMContentLoaded', function () {
  fetch('../assets/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.log('Erro ao carregar o footer:', error));
});