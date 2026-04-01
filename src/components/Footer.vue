<template>
  <div class="w-full h-[6px] relative overflow-hidden">
    <div class="absolute left-0 top-0 h-full w-[31%] bg-[#CDF2EB]"></div>
    <div
      class="absolute top-0 h-full bg-[#F26E33]"
      style="
        left: calc(31% - 12px);
        width: calc(69% + 12px);
        clip-path: polygon(12px 0, 100% 0, 100% 100%, 0 100%);
      "
    ></div>
  </div>
  <footer class="bg-[#f3f5f9] pt-2 border-t-4">
    <div
      class="max-w-[1228px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row xl:flex-nowrap justify-between items-start gap-8 py-10"
    >
      <!-- Left: Logo -->
      <div
        class="w-full md:w-[45%] xl:w-auto flex justify-center md:justify-start"
      >
        <img
          src="/src/assets/Group703.svg"
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
              src="/src/assets/Group3.svg"
              alt="icon"
              class="w-[30px] h-[30px]"
            />
          </div>

          <div>
            <img
              src="/src/assets/Group1.svg"
              alt="icon"
              class="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
