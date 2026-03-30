<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { login } from "../stores/auth";

const router = useRouter();

const phone = ref("");
const password = ref("");
const showPassword = ref(false);
const remember = ref(false);

const phoneError = ref("");
const passwordError = ref("");

// validate
const validatePhone = () => {
  if (!phone.value) {
    phoneError.value = "Vui lòng nhập số điện thoại";
    return false;
  }
  if (!/^[0-9]{10}$/.test(phone.value)) {
    phoneError.value = "Số điện thoại phải đủ 10 số";
    return false;
  }
  phoneError.value = "";
  return true;
};

const validatePassword = () => {
  if (!password.value) {
    passwordError.value = "Vui lòng nhập mật khẩu";
    return false;
  }
  if (password.value.length < 6) {
    passwordError.value = "Mật khẩu tối thiểu 6 ký tự";
    return false;
  }
  passwordError.value = "";
  return true;
};

watch(phone, validatePhone);
watch(password, validatePassword);

const isValid = computed(() => {
  return /^[0-9]{10}$/.test(phone.value) && password.value.length >= 6;
});

// 🔥 LOGIN
const handleLogin = () => {
  if (!validatePhone() || !validatePassword()) return;

  login(); // cập nhật global state

  router.push("/");
};
</script>

<template>
  <section class="bg-[#f3f5f9] py-20">
    <div class="max-w-[1228px] mx-auto">
      <!-- Title -->
      <div class="text-center mt-10">
        <h1 class="text-[40px] font-bold text-[#333E53]">Đăng nhập</h1>
        <div class="w-[60px] h-[4px] bg-orange-500 mx-auto mt-2 rounded"></div>
      </div>

      <!-- Form box -->
      <div
        class="rounded-2xl p-8 mt-10 bg-cover bg-center"
        style="background-image: url(&quot;/src/assets/image/bg.png&quot;)"
      >
        <form class="flex flex-col gap-5 max-w-[644px] mx-auto">
          <!-- PHONE -->
          <div>
            <label class="text-sm font-semibold">Số điện thoại</label>
            <input
              v-model="phone"
              type="text"
              placeholder="Nhập số điện thoại"
              class="mt-2 w-full border rounded-lg px-4 py-3 outline-none"
              :class="
                phoneError
                  ? 'border-red-500'
                  : 'border-orange-300 focus:border-orange-500'
              "
            />
            <p v-if="phoneError" class="text-red-500 text-sm mt-1">
              {{ phoneError }}
            </p>
          </div>

          <!-- PASSWORD -->
          <div>
            <label class="text-sm font-semibold">Mật khẩu</label>

            <div class="relative mt-2">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu"
                class="w-full border rounded-lg px-4 py-3 pr-10 outline-none"
                :class="passwordError ? 'border-red-500' : 'border-gray-300'"
              />

              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                @click="showPassword = !showPassword"
              >
                👁
              </button>
            </div>

            <p v-if="passwordError" class="text-red-500 text-sm mt-1">
              {{ passwordError }}
            </p>
          </div>

          <!-- REMEMBER -->
          <div class="flex items-center justify-between text-sm mt-2">
            <label class="flex items-center gap-2">
              <input
                v-model="remember"
                type="checkbox"
                class="accent-orange-500 w-[1.5rem] h-[1.5rem]"
              />
              Ghi nhớ mật khẩu
            </label>

            <span class="text-gray-500 cursor-pointer"> Quên mật khẩu? </span>
          </div>

          <!-- BUTTON -->
          <button
            type="button"
            @click="handleLogin"
            :disabled="!isValid"
            :class="[
              'mt-4 py-3 rounded-lg font-semibold transition',
              isValid
                ? 'bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md text-white hover:bg-orange-600'
                : 'bg-gray-400 text-white cursor-not-allowed',
            ]"
          >
            Đăng nhập
          </button>

          <!-- REGISTER -->
          <p class="text-center text-sm text-gray-500 mt-2">
            Bạn chưa có tài khoản?
            <router-link to="/register" class="text-orange-500">
              Đăng ký
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
