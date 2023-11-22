
 // Mendapatkan referensi ke form
 const form = document.getElementById('kritikform');

 // Menambahkan event listener untuk form submission
 form.addEventListener('submit', function(event) {
     // Menghentikan perilaku default form submission
     event.preventDefault();

     // Menampilkan alert setelah form terkirim
     alert('Terima kasih atas kritik dan saran Anda!');

     // Optional: Lakukan apa pun yang perlu dilakukan setelah pengiriman form di sini
     // Misalnya, reset form setelah pengiriman
     form.reset();
 });
