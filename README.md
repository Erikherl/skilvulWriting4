# Writing Week 4

## 1. Module-8 JS Asynchronous

<br>

### **Async Await**

Async Await sama seperti promise atau callback, yang memiliki tujuan untuk mengatasi masalah asynchronous pada Javascript. Untuk Asynch Await hasilnya harus berupa promise, yaitu sebuah janji yang dapat ditepati dan tidak ditepati

```js
const getAllUser = async ()=> {
	try {
		const result = await getUser()
		console.log(result)
	} catch (error) {
		console.log(error)
	}
}
```

Bila dibandingkan dengan promise, akan terlihat sama persis

```js
getAllUser() 
	.then(result => {
		console.log(result)
	})
	.catch(error){
		console.log(error)
	}
```

Bedanya pada Async Await menggunakan method `try` dan `catch`, sedangkan promise menggunakan `.then` dan `.catch`

<br>

### **Fetch**

Fetch merupakan method untuk menangkap sebuah data online atau data API untuk dapat digunakan ke project kita

Sebagai contoh disini akan mengambil sebuah data array dari sebuah nama nama pokemon

![Gambar Fetch](./1%20Asynchronous/Gambar%20Fetch.png)

*Gambar 1. Fetch Digimon*

Disini menggunakan method `.then` yang artinya menggunakan sebuah promise untuk menjalankan `fetch` tersebut. Secara mudahnya, fetch mengambil sebuah data melalui sebuah link yang kita berikan, dan kemudian promise adalah method selanjutnya ketika data sudah diterima

Kenapa ada `result.json` itu karena ketika mengambil data dari sebuah API, dia masih terbungkus seperti pada gambar 2 (bagian atas). Disini kita tidak memerlukan properti lainnya selain isi dari nama nama digimon sehingga bisa kita lakukan perintah `Response.json` untuk mengunboxing hal tersebut

![Gambar JSON](./1%20Asynchronous/Gambar%20JSON.png)

*Gambar 2. API to Json*

Lalu, bagaimana caranya untuk yang method Async Await? nah berikut cara menggunakannya pada gambar 3

![Gambar Async](./1%20Asynchronous/Gambar%20Async%20Fetch.png)

*Gambar 3. Async Fetch*

Penggunaannya hampir sama dengan promise, untuk async cukup membuat async ditambah dengan method fetch untuk mengambil data dari API, selanjutnya sama dengan promise

Kemudian, bagaimana untuk mengolah data tersebut? dengan kombinasi dari sebelumnya, kita dapat menggunakan `ForEach` sebagai method menguraikan object dari data API

![Gambar ForEach fetch](./1%20Asynchronous/Gambar%20ForEach%20Fetch.png)

*Gambar 4. ForEach Fetch*

Untuk `item.name` dan `item.img` setelah kata `item` kita perlu memperhatikan dari variabel/array di dalam object si Fetch tersebut, sehingga tidak bisa serta merta memanggil nama `item.kolorhijau` yang dimana akan menghasilkan undefined karena data tersebut tidak ada dalam object dari fetch

<br><br>

## 2. Module-7 Git & GitHub Lanjutan

<br>

### **Pengertian**

Pertama tama, Git dan GitHub adalah dua hal yang berbeda. Git itu sendiri adalah *tools* yang dapat kita gunakan untuk memodifikasi file dan folder dari project kita. Sedangkan GitHub adalah tempat untuk menyimpan project kita secara online atau yang disebut *repository* online.

Kenapa penting menggunakan Git dan juga GitHub? karena pada dunia industri sekarang yang membuat suatu program perlu untuk **berkolaborasi** dengan tim pengembang itu sendiri dan juga tim lainnya yang menguji sistem yang sudah dibuat. Selain itu, keuntungan menggunakan kedua hal tersebut dapat membuat satu program secara bersamaan tanpa perlu menunggu satu dengan yang lainnya selesai terlebih dahulu

<br>

### **Cara Kerja**

Bagaimana penggunaan dari Git dan GitHub? Nah, untuk alur *simple* nya dapat dilihat pada gambar 5.

![Gambar Alur Git & GitHub](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Alur%20Git%20%26%20GitHub.png)

*Gambar 5. Alur Kerja Git & GitHub*

Dapat dilihat dari gambar, *project* yang kita buat diatur terlebih dahulu pada Git *Tools*. Kemudian, Git akan melacak berbagai modifikasi yang kita buat selama kita menambah atau menghapus dari file file *project* kita. Setelah, semua *project* sudah *complete development*, yang perlu dilakukan adalah *setup* di Git untuk mengupload project yang dibuat ke *repository* GitHub

<br>

### **Penggunaan Git**

Dalam menggunakan Git kita dapat menggunakan *tools* "Git Bash" untuk versi Windows

![Gambar Git Awal](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Git%20Interface.png)

*Gambar 6. Tampilan Git Bash*


Selanjutnya, pada *project* masing masing silahkan jalankan perintah `git init` apabila belum ada git yang terinisiasi pada *project*

![Gambar Git Init](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Git%20Init.png)
*Gambar 7. Git Init & Git Status*

Pada Gambar 7 bisa dilihat setelah kita melakukan inisialisasi, maka dapat terlihat beberapa file dan *folder* yang belum ditambahkan ke dalam *repository* lokal sementara

Untuk menambahkan project kita ke dalam *staging* sementara itu dapat menjalankan perintah `git add .` yang akan secara otomatis menambahkan file dan *folder* ke dalam tahapan *staging* untuk persiapan *repository* sementara

![Gambar Git Add](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Add.png)

*Gambar 8. Git Add*

Pada gambar 8 sudah ditambahkan berbagai file yang sudah dibuat menjadi *staged* . Langkah selanjutnya menjalankan `Git Commit -m "Deskripsi Versi"` untuk melabeli *stage* tersebut menjadi *repository* sementara ini dan siap untuk ditembak ke GitHub yang sudah tersedia

![Gambar Git Commit](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Git%20Commit.png)

*Gambar 9. Git Commit*

Nah, dengan ini penggunaan git sudah siap untuk diluncurkan secara online. Sebelum masuk ke dalam GitHub, berikut adalah gambaran besar dalam melakukan beberapa perintah sebelumnya

![Gambar Alur Git](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Alur%20Git.png)

*Gambar 10. Alur Git*

<br>

### **GitHub**

Pada website [github.com](https://www.github.com) disinilah kita akan menyimpan *repository* secara online. Yang diperlukan adalah membuat akun atau masuk untuk dapat membuat *repository* baru

![Gambar Membuat Repository GitHub](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20GitHub%20Create%20Repository.png)

*Gambar 11. Create Repository in GitHub*

Untuk Gambar 11 adalah repository yang akan dibuat

![Gambar Tampilan Repository GitHub](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20GitHub%20Tampilan%20Repository.png)

*Gambar 12. Tampilan Repository GitHub*

Karena pada gambar 12 merupakan *repository* kosong kita dapat mengisinya dengan *project* yang sebelumnya sudah di *commit*, dengan menghubungkan terlebih dahulu link yang ada pada *repository*. Pada kasus ini menggunakan link https://github.com/Erikherl/skilvulWriting.git 

![Gambar Koneksi ke Repository](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Git%20Remote.png)

*Gambar 13. Git Remote*

Pada gambar 13 kita sudah berhasil membuat jembatan untuk menyambungkan dari komputer lokal ke *repository* GitHub. Selanjutnya kita dapat langsung *upload* dengan perintah `git push -u origin`

![Gambar GitHub Complete](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Github%20Complete.png)

*Gambar 14. Git berhasil terupload*


Terakhir, apabila kita ingin mengambil project pada *repository* tersebut, cukup jalankan perintah `git clone ` pada komputer lokal kita


Seandainya kita ingin mengganti perubahan yang belum dicommit, kita dapat menggunakan yang namanya `git checkout` sebagai reverse perubahan ke bentuk sebelumnya atau yang kita kenal dengan namanya undo

![Gambar Diff](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Diff.png)

*Gambar 15. Git Diff*

![Gambar Checkout](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20checkout%20reverse.png)

*Gambar 16. Git Checkout*

Ataupun kita dapat menggunakan `git reset` untuk mengembalikan perubahan yang terjadi

![Gambar Reset](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Reset.png)

*gambar 17. Git Reset*

Selanjutnya terdapat `git checkout -b`yang dapat menambahkan branch baru selain master, yang berguna apabila membutuhkan kolaborasi dengan tim untuk menyelesain suatu fitur atau program secara bersamaan, nah, untuk membuatnya mudah seperti pada gambar 18

![Gambar Branch](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Branch.png)

*Gambar 18. Git Checkout -b*

Selain itu, kita juga dapat merge sebuah branch dengan menggunakan `git merge`, untuk perintah kita perlu membuat sebuah branch baru, kemudian di branch baru lakukan sebuah perbuahan/modikasi, kemudian lakukan merge dengan cara menuju lokasi branch yang mau dimerge, baru lakukan perintah dari `git merge`, lebih lengkap ada pada gambar 19

![Gambar Merge](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Merge.png)

*Gambar 19. Git Merge*

Kolaborasi GitHub dapat dilakukan dengan cara masuk melalui website GitHub dan menuju ke repository yang dipunya dan ikuti gambar di bawah ini

![Gambar Kolaborasi](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Setting.png)

*Gambar 20. GitHub Setting*

![Gambar Kolaborasi2](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Collab.png)

*Gambar 21. GitHub Collaborations*

![Gambar Kolaborasi3](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20AddPeople.png)

*Gambar 22. GitHub Add People*

![Gambar Kolaborasi4](./2%20Git%20%26%20GitHub%20Dasar/Gambar%20Manage%20People.png)

*gambar 23. GitHub Manage People*


<br><br>

## 3. Module-9 Responsive Web

<br>

### **Pengertian**

Responsive Web Design adalah bertujuan untuk membuat desain website dapat diakses di platform manapun, tetap memiliki desain yang bagus dan konsisten

![Gambar Website](./3%20Responsive%20Web/Gambar%20Website%20GitHub.png)

*Gambar 24. Gambar Website GitHub*

![Gambar Mobile](./3%20Responsive%20Web/Gambar%20Mobile%20GitHub.png)

*Gambar 25. Gambar Mobile GitHub*

Dan platform lainnya seperti tablet. Ada banyak pengguna kita dari berbagai platform mengakses sebuah website, oleh karena itu pentingnya RWD ini dalam menerapkannya pada website masing masing

Untuk menerapkan RWD kita perlu tools yang sudah disediakan dari google, yaitu Chrome Dev Tools, yang dapat kita akses melalui keyboard `ctrl + shift + j`. Dimana dia akan menampilkan sebuah gambar seperti pada gambar 26, yang dapat membantu kita melihat dari segi website, mobile, dan juga tablet

![Gambar DevTools](./3%20Responsive%20Web/Gambar%20Devtools.png)

*Gambar 26. Gambar Web Dev Tools*

Selanjutnya, terdapat viewport yang dibungkus oleh tag `<meta>`. Tag meta adalah tag HTML yang biasanya digunakan untuk memberikan instruksi tertentu untuk web browser dan bot. Viewport adalah area web yang terlihat oleh user

![Gambar Viewport](./3%20Responsive%20Web/Gambar%20Viewport.png)

*Gambar 27. Gambar Viewport*

Dengan menggunakan tag `<meta name='viewport'>`, kita bisa mengatur viewport sesuai kebutuhan.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Relative CSS unit adalah satuan ukur yang ukurannya fleksibel mengikuti ukuran lainnya ataupun mengikuti kondisinya. Pada website memiliki beberapa, yang sering digunakan adalah 

1. em & ex

	Digunakan untuk pengaturan font, dimana pengaturan ini didasarkan dari ukuran font dasarnya. dimana em digunakan untuk tinggi, dan ex untuk lebar

	```html
	<p style="font-size:16px, line-height: 2em"> Test </p>
	```

	akan menghasilkan tinggi sebesar 2x16 = 32px

2. rem

	Suatu ukuran yang didasarkan pada font-size dari root element html, biasanya terdapat pada tag `<html>`

	```html
	<html style="font-size:16px">
		<div style="font-size:2rem">
	</html>
	```

	Akan menghasilkan font-size dengan ukuran 32 px

3. vw dan vh

	sama seperti em dan ex. Vw untuk ukuran lebar, sedangkan vh untuk ukuran tinggi. Kedua hal ini didasarkan dari ukuran 1% dari width/height viewport

	```html
	<h1 style="font-size: 10vh">
	test
	</h1>
	```

	Akan menghasilkan 10vh = 10% viewport. Ukuran inilah yang biasanya digunakan untuk mengatur ukuran yang lebih fleksibel dan responsive

4. %

	Seperti namanya, dia menggunakan ukuran dengan % atau persen yang mengacu pada ukuran parent elementnya

	```html
	<body style="font-size:16px">
		<div style="font-size:200%">
	</body>
	```

	Akan meghasilkan `div` dengan konten font yang berukuran 32px

<br>

Selanjutnya terdapat **media query** yang digunakan untuk mengatur styling tersendiri pada ukuran yang diinginkan

contoh penggunaan

```css
@media screen and (min-wdith: your pixel)

@media screen and (max-wdith: your pixel)
```

Kita dapat menggunakan min ataupun max sebagai patokan ukuran yang masuk ketika pengguna mencoba website

Contoh penggunaan sebelum media query

![Gambar Media Query Before](./3%20Responsive%20Web/Gambar%20Media%20Query.png)

*Gambar 28. Gambar Sebelum*

![gambar Media Query After](./3%20Responsive%20Web/Gambar%20Media%20Query%20After.png)

*Gambar 29. Gambar Setelah*

<br>

Selanjutnya terdapat flexbox dan grid. Untuk flexbox digunakan ketika ingin menggunakan sebuah konten yang hanya memiliki satu dimensi, misalkan arah kesamping, atau arah ke bawah (horizontal/vertikal)

Penggunaan flexbox sangat mudah, kita cukup gunakan `display:flex` sebagai awal dan selanjutnya adalah penggunaan dari masing masing flex

![Gambar Flexbox](./3%20Responsive%20Web/Gambar%20Flexbox.png)

*Gambar 30. Penggunaan flexbox-direction

Flexbox-direction digunakan untuk mengatur urutan dimulainya flex mulai dari row (kiri -> kanan), column (atas bawah) atau row-reverse dan column-reverse sebagai kebalikannya

![Gambar Flexbox2](./3%20Responsive%20Web/Gambar%20Flexbox2.png)

*Gambar 31. Penggunaan flex-wrap*

Flex-wrap digunakan ketika halaman mencapai batasnya, sehingga dia akan melakukan `<br>` secara otomatis sehingga tidak melebihi batas viewport

![Gambar Flexbox3](./3%20Responsive%20Web/Gambar%20Flexbox3.png)

*Gambar 32. Penggunaan justify-content*

justify-content digunakan untuk mengatur jarak antar konten ke konten lainnya

Selanjutnya terdapat sebuah grid, grid digunakan untuk mengatur sebuah konten yang memiliki 2 dimensi dimana terdapat konten horizontal dan vertikal


<br><br>

## 4. Module-10 Bootstrap

<br>

### **Pengertian**

Bootstrap digunakan untuk membuat tampilan yang sudah responsive. Dalam penggunaannya kita langsung dapat menggunakan framework dari bootstrap, dan hanya perlu menggunakan komponen yang sudah disediakan dari document bootstrapnya itu sendiri

![Gambar Bootstrap](./4%20Bootstrap/Gambar%20Bootstrap.png)

*Gambar 33. Bootstrap*

Untuk menggunakan bootstrap kita cukup mengimport framework tersebut ke dalam project kita melalui html

![Gambar Setup](./4%20Bootstrap/Gambar%20Setup.png)

*Gambar 34. Bootstrap Setup*

Kemudian, kita dapat menggunakan salah satunya itu adalah layout pada bootstrap

![Gambar Layout](./4%20Bootstrap/Gambar%20Layouting.png)

*Gambar 35. Bootstrap Layout*

Pada layout kita juga akan menerapkan seperti pada gambar dengan cara seperti pada gambar 36

![Gambar Layout2](./4%20Bootstrap/Gambar%20Layouting2.png)

*Gambar 36. html layout*

Kemudian, terdapat sebuah kontent yang dapat digunakan untuk mengatur sebuah konten di dalam html, salah satunya adalah penggunaan table. Apabila dilihat pada penggunaan html, table biasanya kita perlu untuk mengatur berapa jarak antar konten, border, dan sebagainya. Dalam bootstrap ini sudah dibuatkan secara jadinya table yang sudah responsif juga

![Gambar Content](./4%20Bootstrap/Gambar%20Content.png)

*Gambar 37 Bootstrap Content*

Selanjutnya kita terapkan pada html

![Gambar content2](./4%20Bootstrap/Gambar%20Content2.png)

*Gambar 38. html content*

Selanjutnya menggunakan component pada bootstrap, component yang dimaksud adalah sebuah tag khusus yang sama persis dengan tag html biasanya, namun dalam bootstrap sudah dipersiapkan tag yang sudah responsif dan juga menarik untuk dilihat

![Gambar Component](./4%20Bootstrap/Gambar%20Component.png)

*Gambar 39. Bootstrap Component*

Dalam penggunaan htmlnya seperti pada gambar 40

![Gambar Component2](./4%20Bootstrap/Gambar%20Component2.png)

*Gambar 40. html Component*

Terakhir adalah penggunaan bootstrap pada project real-time, disini saya sudah pernah menggunakan bootstrap sebagai project kuliah untuk membuat website e-commerce

![Gambar Project](./4%20Bootstrap/Gambar%20Project%20Bootstrap.png)

*Gambar 41. Tampilan Project*

Ini menggunakan layouting simple dari bootstrap dan juga function untuk membuat perhitungan dari bootstrap

![Gambar Project2](./4%20Bootstrap/Gambar%20Project%20Bootstrap2.png)

*Gambar 42. Tampilan Project in Mobile*

Tampilan tidak rusak dan tetap bagus dalam kondisi website ke mobile

![Gambar Project3](./4%20Bootstrap/Gambar%20Project%20Bootstrap3.png)

*Gambar 43. Tampilan Project in Mobile 2*