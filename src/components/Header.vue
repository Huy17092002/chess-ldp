<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// đóng khi click ngoài
const handleClickOutside = (e) => {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header
    class="absolute top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md"
  >
    <div
      class="max-w-[1440px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-full mx-auto flex items-center justify-between px-6 md:px-8 lg:px-10 py-2"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="/src/assets/Group 703.svg"
          alt="Đấu trường cờ vua"
          class="w-[145px] h-[58px] object-contain lg:w-[130px] lg:h-[52px] md:w-[110px] md:h-[45px] sm:w-[95px] sm:h-[40px]"
        />
      </div>

      <!-- Menu Desktop -->
      <nav
        class="hidden md:flex items-center gap-8 xl:gap-6 lg:gap-5 text-gray-700"
      >
        <a href="#" class="text-[16px] lg:text-[15px] font-bold">Giới thiệu</a>
        <a href="#" class="text-[16px] lg:text-[15px] font-bold"
          >Hướng dẫn đăng ký</a
        >
        <a href="#" class="text-[16px] lg:text-[15px] font-bold"
          >Cơ cấu giải thưởng</a
        >
        <a href="#" class="text-[16px] lg:text-[15px] font-bold">Thể lệ</a>
        <a href="#" class="text-[16px] lg:text-[15px] font-bold">Nhà tài trợ</a>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <!-- Button -->
        <button
          class="hidden sm:block w-[147px] h-[47px] lg:w-[130px] lg:h-[42px] md:w-[120px] md:h-[40px] text-white rounded-lg bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md"
        >
          Đăng nhập
        </button>

        <!-- Mobile menu button -->
        <button class="md:hidden z-50" @click.stop="toggleMenu">
          <span v-if="isOpen" class="text-2xl">✕</span>
          <span v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="menu">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
      >
        <a href="#" class="block font-bold text-gray-700">Giới thiệu</a>
        <a href="#" class="block font-bold text-gray-700">Hướng dẫn đăng ký</a>
        <a href="#" class="block font-bold text-gray-700">Cơ cấu giải thưởng</a>
        <a href="#" class="block font-bold text-gray-700">Thể lệ</a>
        <a href="#" class="block font-bold text-gray-700">Nhà tài trợ</a>

        <button
          class="w-full h-[44px] text-white rounded-lg bg-gradient-to-r from-[#D84315] to-[#F36B2A]"
        >
          Đăng nhập
        </button>
      </div>
    </transition>
  </header>
</template>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.25s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
