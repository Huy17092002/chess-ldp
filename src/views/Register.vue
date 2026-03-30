<script setup>
import { ref, computed } from "vue";

const showPassword = ref(false);

const form = ref({
  name: "",
  birth: "",
  gender: "",
  fide: "",
  phone: "",
  password: "",
  location: "",
  agree: false,
});

// validate đơn giản
const isValid = computed(() => {
  return (
    form.value.name.trim() !== "" &&
    form.value.birth !== "" &&
    form.value.gender !== "" &&
    form.value.phone.trim() !== "" &&
    form.value.password.length >= 6 &&
    form.value.location !== "" &&
    form.value.agree === true
  );
});

// submit
const handleSubmit = () => {
  if (!isValid.value) return;

  console.log("Form data:", form.value);
};
</script>

<template>
  <section class="bg-[#f3f5f9] py-20">
    <div class="max-w-[1228px] mx-auto px-4">
      <!-- Title -->
      <div class="text-center mt-10">
        <h1 class="text-[40px] font-bold text-[#333E53]">Đăng ký</h1>
        <div class="w-[60px] h-[4px] bg-orange-500 mx-auto mt-2 rounded"></div>
      </div>

      <!-- Form -->
      <div
        class="rounded-2xl p-8 mt-10 bg-cover bg-center"
        style="background-image: url(&quot;/src/assets/image/BG.png&quot;)"
      >
        <form
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-5 max-w-[800px] mx-auto"
        >
          <!-- Họ tên -->
          <div>
            <label class="text-sm font-semibold">
              Họ và tên <span class="text-orange-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Nhập họ và tên"
              class="mt-2 w-full border border-orange-300 focus:border-orange-500 outline-none rounded-lg px-4 py-3"
            />
          </div>

          <!-- Ngày sinh -->
          <div>
            <label class="text-sm font-semibold">
              Ngày sinh <span class="text-orange-500">*</span>
            </label>
            <input
              v-model="form.birth"
              type="date"
              class="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <!-- Giới tính + FIDE -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-semibold">
                Giới tính <span class="text-orange-500">*</span>
              </label>
              <select
                v-model="form.gender"
                class="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3"
              >
                <option value="other">Khác</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>

            <div>
              <label class="text-sm font-semibold"> FIDE ID (nếu có) </label>
              <input
                v-model="form.fide"
                type="text"
                placeholder="Nhập Fide ID"
                class="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3"
              />
            </div>
          </div>

          <!-- SĐT -->
          <div>
            <label class="text-sm font-semibold">
              Số điện thoại <span class="text-orange-500">*</span>
            </label>
            <input
              v-model="form.phone"
              type="text"
              placeholder="Nhập số điện thoại"
              class="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <!-- Mật khẩu -->
          <div>
            <label class="text-sm font-semibold">
              Mật khẩu <span class="text-orange-500">*</span>
            </label>

            <div class="relative mt-2">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Nhập mật khẩu (≥ 6 ký tự)"
                class="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10"
              />

              <button
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                @click="showPassword = !showPassword"
              >
                👁
              </button>
            </div>
          </div>

          <!-- Nơi sinh sống -->
          <div>
            <label class="text-sm font-semibold">
              Nơi bạn đang sinh hoạt <span class="text-orange-500">*</span>
            </label>
            <select
              v-model="form.location"
              class="mt-2 w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="">Chọn nơi bạn đang sinh hoạt</option>
              <option value="hn">Hà Nội</option>
              <option value="hcm">TP.HCM</option>
            </select>
          </div>

          <!-- Checkbox -->
          <div class="flex items-center gap-2 mt-2">
            <input
              v-model="form.agree"
              type="checkbox"
              class="accent-orange-500 w-[1.5rem] h-[1.5rem]"
            />
            <span class="text-sm text-gray-600">
              Tôi đảm bảo thông tin đã cung cấp là chính xác
            </span>
          </div>

          <!-- Button -->
          <button
            type="submit"
            :disabled="!isValid"
            :class="[
              'mt-4 py-3 rounded-lg font-semibold transition',
              isValid
                ? 'bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md hover:bg-orange-600 text-white'
                : 'bg-gray-400 text-white cursor-not-allowed',
            ]"
          >
            Đăng ký
          </button>

          <!-- Login -->
          <p class="text-center text-sm text-gray-500 mt-2">
            Bạn đã có tài khoản?
            <router-link to="/login">
              <span class="text-orange-500 cursor-pointer">
                Đăng nhập ngay
              </span>
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
