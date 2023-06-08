const ticketInput = document.getElementById("ticketInput");
const totalElement = document.getElementById("total");

ticketInput.addEventListener("input", calculateTotal);
function calculateTotal() {
  const ticketCount = parseInt(ticketInput.value);
  const ticketPrice = 50000;
  const total = ticketCount * ticketPrice;
  totalElement.innerHTML = "RP " + total.toLocaleString();
}
document.getElementById("btnInput").addEventListener("click", addToCart);
function addToCart(event) {
  event.preventDefault();

  // Ambil nilai film, jumlah tiket, dan jadwal dari input
  var movie = document.getElementById("movie-input").value;
  var ticket = document.getElementById("ticketInput").value;
  var schedule = document.getElementById("schedule-input").value;

  // Buat objek cartItem untuk menyimpan data tiket
  var cartItem = {
    movie: movie,
    ticket: ticket,
    schedule: schedule,
  };

  // Cek apakah ada data di local storage dengan key "cart"
  if (localStorage.getItem("cart") === null) {
    // Jika tidak ada, buat array kosong dan tambahkan cartItem
    var cart = [];
    cart.push(cartItem);
    // Simpan array cart ke local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // Jika sudah ada, ambil array cart dari local storage
    var cart = JSON.parse(localStorage.getItem("cart"));
    // Tambahkan cartItem ke array cart
    cart.push(cartItem);
    // Simpan array cart yang telah diperbarui ke local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Tampilkan data yang ada di local storage ke dalam container dengan id "cart-container"
  displayCart();
}
// Setelah deklarasi fungsi addToCart()
displayCart();

// Pada saat halaman dimuat pertama kali
window.onload = function () {
  displayCart();
};
function displayCart() {
  var cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Kosongkan konten container

  // Cek apakah ada data di local storage dengan key "cart"
  if (localStorage.getItem("cart") !== null) {
    // Jika ada, ambil array cart dari local storage
    var cart = JSON.parse(localStorage.getItem("cart"));

    // Iterasi setiap item di array cart dan buat elemen untuk menampilkannya
    cart.forEach(function (item) {
      var cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");

      var movieName = document.createElement("p");
      movieName.textContent = "Film: " + item.movie;

      var ticketQuantity = document.createElement("p");
      ticketQuantity.textContent = "Jumlah Tiket: " + item.ticket;

      var scheduleTime = document.createElement("p");
      scheduleTime.textContent = "Jadwal: " + item.schedule;

      cartItemDiv.appendChild(movieName);
      cartItemDiv.appendChild(ticketQuantity);
      cartItemDiv.appendChild(scheduleTime);

      cartContainer.appendChild(cartItemDiv);
    });
  }
}

let btnResett = document.querySelector("#btnReset");
btnResett.addEventListener("click", () => {
  // Menghapus semua item dari local storage
  localStorage.clear();
  location.reload();
});
