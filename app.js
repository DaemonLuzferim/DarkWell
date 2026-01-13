/* ===============================
   USUARIO POR DEFECTO
================================ */
const DEFAULT_USER = {
  username: "admin",
  password: "1234"
};

/* ===============================
   ELEMENTOS
================================ */
const authBox = document.getElementById("authBox");
const app = document.getElementById("app");
const activeUser = document.getElementById("activeUser");

const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");

const loginView = document.getElementById("loginView");
const registerView = document.getElementById("registerView");

/* ===============================
   TABS FUNCIONALES
================================ */
tabLogin.onclick = () => {
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  loginView.classList.remove("hidden");
  registerView.classList.add("hidden");
};

tabRegister.onclick = () => {
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  registerView.classList.remove("hidden");
  loginView.classList.add("hidden");
};

/* ===============================
   LOGIN
================================ */
function login() {
  const user = loginUser.value.trim();
  const pass = loginPass.value.trim();

  if (
    user === DEFAULT_USER.username &&
    pass === DEFAULT_USER.password
  ) {
    localStorage.setItem("user", user);
    startApp(user);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

/* ===============================
   REGISTER (SIMULADO)
================================ */
function register() {
  const user = regUser.value.trim();
  const p1 = regPass.value;
  const p2 = regPass2.value;

  if (!user || !p1 || !p2) {
    alert("Completa todos los campos");
    return;
  }

  if (p1 !== p2) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Simulación (sin backend)
  localStorage.setItem("user", user);
  startApp(user);
}

/* ===============================
   APP
================================ */
function startApp(user) {
  authBox.classList.add("hidden");
  app.classList.remove("hidden");
  activeUser.textContent = "🟢 " + user;
}

function logout() {
  localStorage.clear();
  location.reload();
}

/* ===============================
   COMENTARIOS
================================ */
function addComment() {
  const input = document.getElementById("commentInput");
  if (!input.value.trim()) return;

  const div = document.createElement("div");
  div.className = "comment";
  div.textContent = input.value;
  document.getElementById("commentsList").appendChild(div);
  input.value = "";
}

/* ===============================
   AUTO LOGIN
================================ */
const savedUser = localStorage.getItem("user");
if (savedUser) startApp(savedUser);
