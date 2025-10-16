//Kelompok 3
// Ezrina
// Shaula
// Aliqa
// Valdinata

class Kendaraan {
    constructor(merk) {
        this.merk = merk;
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        } 
    }

    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
}

class Mobil extends Kendaraan {
    maju() {
        return ${this.merk} melaju dengan kecepatan tinggi!;
    }
}

const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan tinggi!

// const kendaraanBaru = new Kendaraan("Generic"); // Error: Kelas abstrak tidak bisa diinstansiasi

// Interface sebagai objek blueprint
const kendaraanInterface = {
    maju: function () {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
};

class Sepeda {
    constructor(merk) {
        this.merk = merk;
    }

    maju() {
        return ${this.merk} melaju dengan tenaga manusia!;
    }
}

// Menguji apakah Sepeda mematuhi interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia!

if (typeof polygon.maju !== "function") {
    throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}

//class lain

class Pembayaran {
    constructor(jumlah) {
        this.jumlah = jumlah;
        
        if (this.constructor === Pembayaran) {
            throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
        }
    }

//Di gambar pertama tertulis: "Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung"
//Tapi error message asli kurang jelas.
    prosesPembayaran() {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
    }
}
//Di kode asli menggunakan backtick biasa ('), bukan template literal backtick (`). 
class KartuKredit extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
    }
}

class PayPal extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
    }
}
 //Output Console.log yang Tidak Jelas
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran());

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran());

