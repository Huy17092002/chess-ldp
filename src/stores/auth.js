import { ref } from "vue";

// đọc từ localStorage khi load app
export const isLogin = ref(localStorage.getItem("isLogin") === "true");

// login
export const login = () => {
  localStorage.setItem("isLogin", "true");
  isLogin.value = true;
};

// logout
export const logout = () => {
  localStorage.removeItem("isLogin");
  isLogin.value = false;
};
