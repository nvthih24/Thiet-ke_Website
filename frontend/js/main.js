function loadHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error loading " + file + ":", error));
}

// Gọi hàm để load header và footer (hoặc phần khác nếu có)
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("header-placeholder", "congcu/header.html");
  loadHTML("footer-placeholder", "congcu/footer.html");
});
