// Toggle show - Password Input
let togglePassword = document.getElementById("toggle-password");
let showPassword = document.getElementById("show-password");

togglePassword.onclick = function () {
  const isPasswordHidden = showPassword.type === "password";
  showPassword.type = isPasswordHidden ? "text" : "password";

  // Ganti icon class-nya
  togglePassword.classList.toggle("fa-eye-slash");
  togglePassword.classList.toggle("fa-eye");
};

// Toggle show - Confirm Password
let togglePasswordConfirm = document.getElementById("toggle-password-confirm");
let showPasswordConfirm = document.getElementById("show-password-confirm");

togglePasswordConfirm.onclick = function () {
  const isPasswordHidden = showPassword.type === "password";
  showPassword.type = isPasswordHidden ? "text" : "password";

  // Ganti icon class-nya
  togglePasswordConfirm.classList.toggle("fa-eye-slash");
  togglePasswordConfirm.classList.toggle("fa-eye");
};
