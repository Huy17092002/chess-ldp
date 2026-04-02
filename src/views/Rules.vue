<template>
  <section class="">
    <div class="max-w-[1228px] mx-auto px-4">
      <!-- TITLE -->
      <div class="flex flex-col items-center">
        <h1 class="text-[40px] font-montserrat font-bold text-[#333E53]">
          Thể lệ
        </h1>
        <div class="h-[6px] w-[80px] bg-[#F26E33] rounded mb-10"></div>
      </div>

      <!-- WRAPPER -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- LEFT CARD -->
        <div
          class="w-full lg:w-[41%] bg-[#FFEDE9] p-6 lg:p-8 rounded-3xl lg:h-[437px] flex flex-col"
        >
          <!-- Title -->
          <p
            class="font-montserrat font-semibold text-[20px] lg:text-[24px] mb-4 flex items-center gap-2 text-[#862208]"
          >
            <img
              src="/src/assets/Group784.svg"
              alt="icon"
              class="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
            />
            Các bảng đấu
          </p>

          <!-- Content -->
          <div class="flex flex-col sm:flex-row items-center h-full">
            <!-- Chess Image -->
            <img
              src="/src/assets/image/tuong.png"
              alt="Chess"
              class="w-[100px] sm:w-[120px] lg:w-[147px] object-contain"
            />

            <!-- List -->
            <div class="flex flex-col gap-2 w-full">
              <div
                class="bg-[#F58A5C] px-4 py-2 text-white rounded-lg text-sm w-full xl:w-[215px]"
              >
                BẢNG 1: Lớp 1+2
              </div>

              <div
                class="bg-[#EB7044] px-4 py-2 text-white rounded-lg text-sm w-full xl:w-[231px]"
              >
                BẢNG 2: Lớp 3+4
              </div>

              <div
                class="bg-[#E15B33] px-4 py-2 text-white rounded-lg text-sm w-full xl:w-[247px]"
              >
                BẢNG 3: Lớp 5
              </div>

              <div
                class="bg-[#C94923] px-4 py-2 text-white rounded-lg text-sm w-full xl:w-[263px]"
              >
                BẢNG 4: Lớp 6
              </div>

              <div
                class="bg-[#A63613] px-4 py-2 text-white rounded-lg text-sm w-full xl:w-[279px]"
              >
                BẢNG 5: 7
              </div>

              <div
                class="bg-[#7A1F0A] px-4 py-2 text-white rounded-lg text-sm w-full xl:w-[295px]"
              >
                BẢNG 6: Lớp 8+9
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT CARD -->
        <div
          class="w-full lg:w-[58%] p-6 lg:p-8 rounded-3xl lg:h-[437px] relative overflow-hidden bg-[#D7E2FF]"
        >
          <!-- Background -->
          <div
            class="absolute top-0 right-0 w-full lg:w-[707px] h-full bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${maskBg})` }"
          ></div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col">
            <p
              class="font-montserrat font-semibold text-[20px] lg:text-[24px] mb-4 flex items-center gap-2 text-[#1F304F]"
            >
              <img
                src="/src/assets/Group783.svg"
                alt="icon"
                class="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
              />
              Nội dung thi đấu
            </p>

            <p
              class="font-montserrat text-[#333E53] text-[16px] lg:text-[17px] xl:text-[20px] font-semibold leading-7 lg:leading-10"
            >
              Tranh giải cá nhân nam, cá nhân nữ môn cờ vua
              <br />Vòng loại sẽ thi đấu online 7 ván, thời gian mỗi bên 10 phút
              <br />Sau khi kết thúc vòng loại, các học sinh vào vòng trong sẽ
              thi đấu online tại trường với vòng cấp phường và tiếp đến vòng cấp
              tỉnh/thành phố. <br />Vòng chung kết toàn quốc sẽ thi đấu 7 ván,
              thời gian mỗi bên 10 phút, thi đấu online tại trường học.
            </p>

            <div class="mt-6 lg:mt-auto flex justify-center lg:justify-end">
              <button
                class="font-montserrat font-bold bg-gradient-to-r from-[#1A2433] via-[#2E3A4D] to-[#6C7B95] text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition h-[47px] w-[147px]"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import maskBg from "../assets/image/Mask.png";
</script>
