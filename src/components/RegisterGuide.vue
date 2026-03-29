<template>
  <section class="py-4">
    <div class="max-w-[1228px] mx-auto text-center px-4">
      <!-- Title -->
      <div class="flex flex-col items-center">
        <h1
          class="text-[32px] md:text-[36px] xl:text-[40px] font-bold text-[#333E53]"
        >
          Hướng dẫn đăng ký
        </h1>
        <div class="h-[6px] w-[80px] bg-[#F26E33] rounded mb-4"></div>
      </div>

      <!-- Text -->
      <p class="text-base md:text-lg mb-4">
        <span class="font-bold text-[#333E53]">Bước 1:</span>
        Click vào “Đăng ký dự thi” tại Trang chủ.
      </p>

      <!-- Slider -->
      <div class="relative flex items-center justify-center">
        <!-- Left Arrow -->
        <button
          class="absolute left-2 md:left-0 z-10 w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center bg-white rounded-full shadow hover:scale-105 transition"
        >
          <img
            src="/src/assets/Icon ion-ios-arrow-dropleft-circle.svg"
            alt="prev"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </button>

        <!-- Image -->
        <div class="w-full max-w-[1071px]">
          <img
            src="/src/assets/image/HD.png"
            alt="Hướng dẫn đăng ký"
            class="w-full rounded-2xl shadow h-[220px] sm:h-[300px] md:h-[420px] xl:h-[554px] /* giữ nguyên desktop */ object-cover"
          />
        </div>

        <!-- Right Arrow -->
        <button
          class="absolute right-2 md:right-0 z-10 w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center bg-white rounded-full shadow hover:scale-105 transition"
        >
          <img
            src="/src/assets/Icon ion-ios-arrow-dropright-circle.svg"
            alt="next"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
      </div>
    </div>
  </section>
</template>
