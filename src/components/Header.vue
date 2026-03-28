<template>
  <header
    class="absolute top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md"
  >
    <div class="max-w-[1228px] mx-auto flex items-center justify-between py-2">
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="/src/assets/Group 703.svg"
          alt="Đấu trường cờ vua"
          class="w-[145px] h-[58px] object-contain"
        />
      </div>

      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-8 text-gray-700">
        <a href="#" class="text-[16px] font-bold">Giới thiệu</a>
        <a href="#" class="text-[16px] font-bold">Hướng dẫn đăng ký</a>
        <a href="#" class="text-[16px] font-bold">Cơ cấu giải thưởng</a>
        <a href="#" class="text-[16px] font-bold">Thể lệ</a>
        <a href="#" class="text-[16px] font-bold">Nhà tài trợ</a>
      </nav>

      <!-- Button -->
      <button
        class="w-[147px] h-[47px] text-white px-5 py-2 rounded-lg bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md"
      >
        Đăng nhập
      </button>
    </div>
  </header>
</template>
