/* ===============================
   USUARIO POR DEFECTO
================================ */
const DEFAULT_USER = {
  username: "admin",
  password: "1234"
};

/* ===============================
   ELEMENTOS REALES DEL HTML
================================ */
const authModal = document.getElementById("authModal");
const btnAuth = document.getElementById("btnAuth");
const btnLogout = document.getElementById("btnLogout");

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

const btnLogin = document.getElementById("btnLogin");
const btnRegister = document.getElementById("btnRegister");

const status = document.querySelector(".status");

/* ===============================
   ABRIR MODAL
================================ */
btnAuth.onclick = () => {
  authModal.classList.remove("hidden");
};

/* ===============================
   TABS FUNCIONALES
================================ */
tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

/* ===============================
   LOGIN
================================ */
btnLogin.onclick = () => {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (
    user === DEFAULT_USER.username &&
    pass === DEFAULT_USER.password
  ) {
    localStorage.setItem("user", user);
    authModal.classList.add("hidden");
    status.textContent = "🟢 " + user;
  } else {
    alert("Usuario o contraseña incorrectos");
  }
};

/* ===============================
   REGISTER (SIMULADO)
================================ */
btnRegister.onclick = () => {
  const user = document.getElementById("regUser").value.trim();
  const pass = document.getElementById("regPass").value.trim();

  if (!user || !pass) {
    alert("Completa los campos");
    return;
  }

  localStorage.setItem("user", user);
  authModal.classList.add("hidden");
  status.textContent = "🟢 " + user;
};

/* ===============================
   LOGOUT
================================ */
btnLogout.onclick = () => {
  localStorage.clear();
  location.reload();
};

/* ===============================
   AUTO LOGIN
================================ */
const savedUser = localStorage.getItem("user");
if (savedUser) {
  status.textContent = "🟢 " + savedUser;
}
