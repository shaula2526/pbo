// =====================
// CLASS USER
// =====================
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

// =====================
// CLASS AUTH
// =====================
class Auth {
    constructor() {
        this.initUser();
        this.initEvent();
    }

    initUser() {
        if (!localStorage.getItem("user")) {
            const defaultUser = new User("shaula", "12345");
            localStorage.setItem("user", JSON.stringify(defaultUser));
        }
    }

    initEvent() {
        document.getElementById("loginBtn")
            .addEventListener("click", () => this.login());

        document.getElementById("logoutBtn")
            .addEventListener("click", () => this.logout());

        document.getElementById("lupaPassword")
            .addEventListener("click", () => this.lupaPassword());
    }

    login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const status = document.getElementById("status");

        const user = JSON.parse(localStorage.getItem("user"));

        if (username === user.username && password === user.password) {
            localStorage.setItem("login", "true");
            status.textContent = "Login berhasil!";
            status.style.color = "green";
        } else {
            status.textContent = "Username atau password salah!";
            status.style.color = "red";
        }
    }

    logout() {
        const status = document.getElementById("status");
        localStorage.removeItem("login");
        status.textContent = "Logout berhasil!";
        status.style.color = "green";
    }

    lupaPassword() {
        const user = JSON.parse(localStorage.getItem("user"));
        alert("Password anda adalah: " + user.password);
    }
}

// =====================
// INISIALISASI
// =====================
new Auth();
