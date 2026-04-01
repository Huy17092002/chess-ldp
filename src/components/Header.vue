<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { isLogin, logout } from "../stores/auth";

const active = ref("");

const isOpen = ref(false);
const profileOpen = ref(false);

const menuRef = ref(null);
const profileRef = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const toggleProfile = () => {
  profileOpen.value = !profileOpen.value;
};

// click outside
const handleClickOutside = (e) => {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    isOpen.value = false;
  }

  if (profileRef.value && !profileRef.value.contains(e.target)) {
    profileOpen.value = false;
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
      class="max-w-[1440px] xl:max-w-[1280px] sm:max-w-full mx-auto flex items-center justify-between px-6 md:px-8 lg:px-10 py-2"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="/src/assets/Group703.svg"
          alt="Đấu trường cờ vua"
          class="w-[145px] h-[58px] object-contain"
        />
      </div>

      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-bold">
        <!-- Giới thiệu -->
        <div class="flex flex-col items-center">
          <router-link
            to="/"
            @click.prevent="active = 'gioi-thieu'"
            :class="
              active === 'gioi-thieu'
                ? 'text-[#F36B2A]'
                : 'hover:text-[#F36B2A]'
            "
          >
            Giới thiệu
          </router-link>
          <div
            v-if="active === 'gioi-thieu'"
            class="h-[2px] w-[60px] bg-[#F26E33] rounded"
          ></div>
        </div>

        <!-- Hướng dẫn -->
        <div class="flex flex-col items-center">
          <a
            href="#"
            @click.prevent="active = 'huong-dan'"
            :class="
              active === 'huong-dan' ? 'text-[#F36B2A]' : 'hover:text-[#F36B2A]'
            "
          >
            Hướng dẫn đăng ký
          </a>
          <div
            v-if="active === 'huong-dan'"
            class="h-[2px] w-[60px] bg-[#F26E33] rounded"
          ></div>
        </div>

        <!-- Giải thưởng -->
        <div class="flex flex-col items-center">
          <a
            href="#"
            @click.prevent="active = 'giai-thuong'"
            :class="
              active === 'giai-thuong'
                ? 'text-[#F36B2A]'
                : 'hover:text-[#F36B2A]'
            "
          >
            Cơ cấu giải thưởng
          </a>
          <div
            v-if="active === 'giai-thuong'"
            class="h-[2px] w-[60px] bg-[#F26E33] rounded"
          ></div>
        </div>

        <!-- Thể lệ -->
        <div class="flex flex-col items-center">
          <a
            href="#"
            @click.prevent="active = 'the-le'"
            :class="
              active === 'the-le' ? 'text-[#F36B2A]' : 'hover:text-[#F36B2A]'
            "
          >
            Thể lệ
          </a>
          <div
            v-if="active === 'the-le'"
            class="h-[2px] w-[60px] bg-[#F26E33] rounded"
          ></div>
        </div>

        <!-- Tài trợ -->
        <div class="flex flex-col items-center">
          <a
            href="#"
            @click.prevent="active = 'tai-tro'"
            :class="
              active === 'tai-tro' ? 'text-[#F36B2A]' : 'hover:text-[#F36B2A]'
            "
          >
            Nhà tài trợ
          </a>
          <div
            v-if="active === 'tai-tro'"
            class="h-[2px] w-[60px] bg-[#F26E33] rounded"
          ></div>
        </div>
      </nav>

      <!-- Right -->
      <div class="flex items-center gap-3">
        <!-- CHƯA LOGIN -->
        <router-link v-if="!isLogin" to="/login">
          <button
            class="hidden sm:block w-[142px] h-[47px] text-white font-montserrat font-bold rounded-lg bg-gradient-to-r from-[#D84315] to-[#F36B2A] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:scale-80"
            ref="profileRef"
            @click.stop="
              () => {
                toggleProfile();
                active = '';
              }
            "
          >
            Đăng nhập
          </button>
        </router-link>

        <!-- ĐÃ LOGIN -->
        <div v-else class="relative hidden md:block" ref="profileRef">
          <button
            @click.stop="
              () => {
                toggleProfile();
                active = '';
              }
            "
          >
            <img
              src="/src/assets/MaskGroup10428.svg"
              class="w-10 h-10 rounded-full border"
            />
          </button>

          <!-- dropdown -->
          <div
            v-if="profileOpen"
            class="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg"
          >
            <router-link
              to="/personal-card"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
            >
              Hồ sơ
            </router-link>

            <button
              @click="logout"
              class="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Đăng xuất
            </button>
          </div>
        </div>

        <!-- mobile btn -->
        <button class="md:hidden" @click.stop="toggleMenu">☰</button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="menu">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="md:hidden bg-white p-4 space-y-4 font-bold"
      >
        <router-link
          to="/"
          @click.prevent="active = 'gioi-thieu'"
          :class="
            active === 'gioi-thieu' ? 'text-[#F36B2A]' : 'hover:text-[#F36B2A]'
          "
        >
          Giới thiệu
        </router-link>
        <a href="#" class="block font-bold text-gray-700">Hướng dẫn đăng ký</a>
        <a href="#" class="block font-bold text-gray-700">Cơ cấu giải thưởng</a>
        <a href="#" class="block font-bold text-gray-700">Thể lệ</a>
        <a href="#" class="block font-bold text-gray-700">Nhà tài trợ</a>

        <router-link v-if="!isLogin" to="/login">
          <button class="w-full bg-orange-500 text-white py-2 rounded">
            Đăng nhập
          </button>
        </router-link>

        <div v-else class="flex items-center gap-3">
          <!-- Avatar -->
          <img
            src="/src/assets/MaskGroup10428.svg"
            class="w-10 h-10 rounded-full border"
          />

          <!-- Info + actions -->
          <div class="flex flex-col w-full">
            <router-link
              to="/personal-card"
              class="text-left font-medium hover:text-[#F36B2A]"
            >
              Hồ sơ
            </router-link>

            <button
              @click="logout"
              class="text-left text-red-500 hover:text-red-600"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.25s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* dropdown animation */
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
