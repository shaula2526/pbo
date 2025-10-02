class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;   // Atribut publik
        this.nim = nim;     // Atribut publik
        let _nilai = nilai; // Atribut private menggunakan closure

        // Getter untuk mengakses nilai
        this.getNilai = function() {
            return _nilai;
        };

        // Setter untuk mengubah nilai dengan validasi
        this.setNilai = function(nilaiBaru) {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
            } else {
                console.log('Nilai harus antara 0 dan 100');
            }
        };

        // Method untuk menampilkan informasi mahasiswa
        this.tampilkanInfo = function() {
            console.log(`Nama  : ${this.nama}`);
            console.log(`NIM   : ${this.nim}`);
            console.log(`Nilai : ${_nilai}`);
            console.log("-----------------------");
        };
    }
}

// Membuat objek mahasiswa
let prod1 = new Mahasiswa("Ahmad", "1234", 70);
let prod2 = new Mahasiswa("shaula muliawan", "202401110040", 85);

// Menampilkan info awal
console.log("=== Data Mahasiswa ===");
prod1.tampilkanInfo();
prod2.tampilkanInfo();

// Mengubah nilai
prod1.setNilai(90);
prod2.setNilai(95);

// Menampilkan info setelah perubahan
console.log("=== Setelah Nilai Diubah ===");
prod1.tampilkanInfo();
prod2.tampilkanInfo();
