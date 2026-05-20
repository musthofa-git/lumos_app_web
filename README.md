# LUMOS_FE Menggunakan React + Vite

## Home Page
![HomePage](https://github.com/musthofa-git/lumos_app_web/blob/main/ScreenshotFE/Home_Page.jpg)

Gambar diatas merupakan Halaman Utama saat pertama kali membuka web LUMOS. Terdapat 3 ikon utama yaitu:
1. Ikon Login : Untuk login dan mengakses seluruh fitur dan menu dalam web
2. Ikon Monitoring : Ini adalah fitur menu utama dalam web ini yang berisi segala sesuatu fitur-fitur yang berhubungan dengan Aset Pencahayaan (dalam hal ini lampu)
3. Ikon Download : Bagian ini merupakan menu untuk mengakses rekap data lampu yang telah dipasang dan di ganti oleh petugas 

## Login Page
![HomePage](https://github.com/musthofa-git/lumos_app_web/blob/main/ScreenshotFE/Login_Page.jpg)

Gambar diatas merupakan Halaman Login untuk mengakses seluruh menu web LUMOS. Username dan Password didapatkan melalui registrasi oleh Admin dengan menyertakan nama dan password yang akan digunakan
Akun petugas ini hanya bisa dibuat dan dikelola oleh Admin melalui manajemen backend dan database sistem, tidak bisa didapatkan melalui pendaftaran akun menggunakan akun email seperti pada Sign Up di kebanyakan web app
Hal Ini dikarenakan web ini sifatnya hanya internal, dan tidak bersifat umum.

## Monitoring Page
![HomePage](https://github.com/musthofa-git/lumos_app_web/blob/main/ScreenshotFE/Monitoring_Page.jpg)

Gambar diatas merupakan Halaman Monitoring. Dalam halaman ini terdapat informasi yang akan ditampillkan seperti:
1. Pemilihan Lantai mulai dari lantai B hingga lantai 11 pada gedung Pascasarjana PENS.
2. Pemilihan Ruangan yang ada pada 1 lantai sesuai lantai yang sudah dipilih oleh user.
3. Denah Gedung, ini akan menampilkan denah gedung dalam 1 lantai tertentu sesuai dengan lantai yang sudah ditentukan sebelumnya.
   *point 1 - 3, data yang tampil di input oleh Admin SarPras PENS sesuai dengan data rill di lapangan.
4. Grafik jumlah penggantian lampu secara keseluruhan dengan pengelompokan setiap bulan selama 1 tahun penuh. Data ini didapat berdasarkan input yang dilakukan oleh petugas di lapangan.

  *Next UPDATE :
5. Dibagian bawah nantinya akan tampil data lampu yang telah terpasang beserta informasi tanggal pasang, ganti/pasang baru, dan estimasi umur lampu benbentuk Card.

## Manage Page
![HomePage](https://github.com/musthofa-git/lumos_app_web/blob/main/ScreenshotFE/Manage_Page.jpg)

Gambar diatas merupakan Halaman Manage. Pada halaman inilah petugas akan melakukan input data lampu sesuai kejadian riil yang akan/telah dilakukan baik berupa penambahan data lampu (Lampu Stok), penggantian lampu, dan input lampu yang telah terpasang dan belum terinput ke dalam sistem sebelumnya

## Calculate Page
![HomePage](https://github.com/musthofa-git/lumos_app_web/blob/main/ScreenshotFE/Calculate_Page.jpg)

Gambar diatas merupakan Halaman Hitung Estimasi. Pada halaman ini petugas dan admin dapat menghitung estimasi umur lampu berdasarkan variabel :
1. Klaim umur pabrikan (dalam satuan jam). *contoh: Daya Tahan Hingga 15000 jam pemakaian
2. Jumlah Jam pemakaian aktif dalam 1 hari
3. Jumlah Hari Aktif pemakaian dalam 1 minggu
4. Tanggal pemasangan lampu.

untuk logika perhitungannya, dapat dilihat pada file Hitung Estimasi dalam folder scr/utils

## Download Page
![HomePage](https://github.com/musthofa-git/lumos_app_web/blob/main/ScreenshotFE/Download_Page.jpg)

Gambar diatas merupakan Halaman Download. Pada halaman ini Admin maupun petugas dapat melihat rekapan data lampu yang ada, dan dapat mendownloadnya dalam bentuk format file PDF untuk kepentingan pelaporan kinerja sekaligus untuk bahan evaluasi dan pertimbangan pada rapat anggaran tahunan untuk menentukan jumlah dan merk lampu yang dibutuhkan dalam kurun waktu 1 tahun.


**Note :
1. Belum terintegrasi dengan BE dan Database, hanya FE interaktif.
2. Calculate Page sudah bisa digunakan karena tidak memerlukan koneksi ke BE dan database. Karena data yang diinputkan bersifat sementara dan perhitungan dilakukan langsung di FE.



