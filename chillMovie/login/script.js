let togglePassword = document.getElementById("toggle-password");
let showPassword = document.getElementById("show-password");

togglePassword.onclick = function () {
  const isPasswordHidden = showPassword.type === "password";
  showPassword.type = isPasswordHidden ? "text" : "password";

  // Ganti icon class-nya
  togglePassword.classList.toggle("fa-eye-slash");
  togglePassword.classList.toggle("fa-eye");
};
