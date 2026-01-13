const authBox = document.getElementById("auth-container");
const app = document.getElementById("app");
const activeUser = document.getElementById("activeUser");

function showRegister() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

function register() {
  const user = regUser.value.trim();
  const pass = regPass.value;
  const pass2 = regPass2.value;

  if (!user || !pass) return alert("Completa todos los campos");
  if (pass !== pass2) return alert("Las contraseñas no coinciden");

  localStorage.setItem("user", user);
  loginSuccess(user);
}

function login() {
  const user = loginUser.value.trim();
  const storedUser = localStorage.getItem("user");

  if (!storedUser || storedUser !== user) {
    return alert("Usuario no registrado");
  }

  loginSuccess(user);
}

function loginSuccess(user) {
  authBox.classList.add("hidden");
  app.classList.remove("hidden");
  activeUser.textContent = "Activo: " + user;
}

function logout() {
  location.reload();
}

/* AUTO LOGIN */
const savedUser = localStorage.getItem("user");
if (savedUser) {
  loginSuccess(savedUser);
}
