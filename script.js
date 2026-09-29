const jumlahInput = document.querySelectorAll(".jumlah");

jumlahInput.forEach(function(input) {
    input.addEventListener("input", hitungTotal);
});

function hitungTotal() {

    let total = 0;

    jumlahInput.forEach(function(input) {

        let banyak = parseInt(input.value) || 0;
        let harga = parseInt(input.dataset.price) || 0;

        total += banyak * harga;

    });

    document.getElementById("totalHarga").textContent =
        "Rp" + total.toLocaleString("id-ID");
}


function pesanWhatsApp() {

    let pesan = "Halo Restoran Nikmat Rasa,%0A";
    pesan += "Saya ingin memesan:%0A%0A";

    let adaPesanan = false;

    jumlahInput.forEach(function(input) {

        let banyak = parseInt(input.value) || 0;

        if (banyak > 0) {

            adaPesanan = true;

            let nama = input.dataset.name;
            let harga = parseInt(input.dataset.price);
            let subtotal = banyak * harga;

            pesan += nama;
            pesan += " x " + banyak;
            pesan += " = Rp" + subtotal.toLocaleString("id-ID");
            pesan += "%0A";

        }

    });


    if (!adaPesanan) {

        alert(
            "Silakan pilih menu dan jumlah pesanan terlebih dahulu."
        );

        return;
    }


    let total = 0;

    jumlahInput.forEach(function(input) {

        let banyak = parseInt(input.value) || 0;
        let harga = parseInt(input.dataset.price) || 0;

        total += banyak * harga;

    });


    pesan += "%0ATotal Harga: Rp";
    pesan += total.toLocaleString("id-ID");

    pesan += "%0A%0ATerima kasih.";


    window.open(
        "https://wa.me/628557235383?text=" + pesan,
        "_blank"
    );
}


hitungTotal();