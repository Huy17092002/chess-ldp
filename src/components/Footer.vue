<template>
  <div class="flex">
    <div
      class="h-[6px] w-[33%] bg-[#CDF2EB]"
      style="clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)"
    ></div>
    <div class="h-[6px] w-[70%] bg-[#F26E33] -ml-[20px]"></div>
  </div>
  <footer class="bg-[#f3f5f9] pt-2 border-t-4">
    <div
      class="max-w-[1228px] mx-auto px-4 md:px-6 lg:px-0 flex flex-col md:flex-row xl:flex-nowrap justify-between items-start gap-8 py-10"
    >
      <!-- Left: Logo -->
      <div
        class="w-full md:w-[45%] xl:w-auto flex justify-center md:justify-start"
      >
        <img
          src="/src/assets/Group 703.svg"
          alt="Đấu trường cờ vua"
          class="w-[150px] md:w-[180px] xl:w-[188px] object-contain"
        />
      </div>

      <!-- Middle: Thông tin -->
      <div
        class="w-full md:w-[45%] xl:max-w-[400px] text-sm text-gray-600 text-center md:text-left"
      >
        <p class="font-montserrat font-bold mb-2 text-[#333E53]">
          LIÊN HỆ VỚI CHÚNG TÔI
        </p>
        <p class="font-montserrat text-sm text-[#333E53]">
          <span class="font-bold">Email:</span>
          <a
            href="mailto:ecoms.contact@gmail.com"
            class="underline hover:text-blue-600"
          >
            ecoms.contact@gmail.com
          </a>
        </p>
        <p>
          <span class="font-montserrat font-bold text-[#333E53]">
            Hỗ trợ đăng ký: Thầy Toàn:
          </span>
          0976 093 810
        </p>
        <p>
          <span class="font-montserrat font-bold text-[#333E53]">Địa chỉ:</span>
          14 Lê Trực, phường Điện Biên, Ba Đình, Hà Nội
        </p>
      </div>

      <!-- Right: Social -->
      <div class="w-full md:w-[45%] xl:w-auto text-center md:text-left">
        <p class="font-montserrat font-semibold mb-3">Liên Hệ tài trợ</p>
        <p>
          <span class="font-montserrat font-bold text-[#333E53]">Hotline:</span>
          0976 093 810
        </p>
        <div class="flex gap-3 justify-center md:justify-start mt-2">
          <div>
            <img
              src="/src/assets/Group 3.svg"
              alt="icon"
              class="w-[30px] h-[30px]"
            />
          </div>

          <div>
            <img
              src="/src/assets/Group 1.svg"
              alt="icon"
              class="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
