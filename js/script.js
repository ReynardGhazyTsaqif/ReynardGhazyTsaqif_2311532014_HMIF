fetch('../html/header.html') // Sesuaikan jalur relatif ke header.html
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Memuat konten footer.html ke dalam elemen dengan id "footer"
fetch('../html/footer.html') // Sesuaikan jalur relatif ke footer.html
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });