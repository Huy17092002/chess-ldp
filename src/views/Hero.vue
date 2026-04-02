<template>
  <!-- HERO -->
  <section
    class="relative w-full min-h-[700px] xl:h-[900px] bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgChess})` }"
  >
    <div
      class="max-w-[1270px] mx-auto px-4 sm:px-6 md:px-[2rem] py-24 md:py-32 xl:py-[14rem] flex items-center"
    >
      <div class="w-full max-w-xl">
        <!-- LOGO -->
        <div class="flex flex-wrap gap-3 mb-4 items-center">
          <img class="h-8 md:h-10" src="/src/assets/LogoGD&TĐ-15.svg" />
          <img class="h-8 md:h-10" src="/src/assets/LogoGD&TĐ-11.svg" />
          <img class="h-8 md:h-10" src="/src/assets/ecoms-19.svg" />
        </div>

        <!-- TITLE -->
        <h1
          class="font-montserrat font-extrabold text-3xl sm:text-4xl xl:text-5xl text-gray-800 leading-tight"
        >
          GIẢI CỜ VUA <br />
          <span
            class="font-montserrat font-extrabold text-orange-500 leading-[1.4]"
            >BÁO GIÁO DỤC VÀ THỜI ĐẠI</span
          >
          2026
        </h1>

        <!-- COUNTDOWN -->
        <div
          class="w-full max-w-[521px] bg-[#E6FDFD] backdrop-blur mt-6 md:mt-8 px-4 md:px-6 py-4 rounded-2xl shadow text-center"
        >
          <p
            class="text-sm md:text-base text-[#333E53] mb-3 font-montserrat font-semibold"
          >
            THỜI GIAN ĐĂNG KÝ CÒN LẠI (HẾT NGÀY 28/4)
          </p>

          <div class="flex justify-center gap-3 md:gap-6">
            <div class="flex flex-col items-center">
              <span class="text-2xl md:text-4xl font-bold">14</span>
              <span class="text-xs text-gray-500">NGÀY</span>
            </div>

            <span class="text-xl md:text-3xl text-orange-500">:</span>

            <div class="flex flex-col items-center">
              <span class="text-2xl md:text-4xl font-bold">08</span>
              <span class="text-xs text-gray-500">GIỜ</span>
            </div>

            <span class="text-xl md:text-3xl text-orange-500">:</span>

            <div class="flex flex-col items-center">
              <span class="text-2xl md:text-4xl font-bold">45</span>
              <span class="text-xs text-gray-500">PHÚT</span>
            </div>

            <span class="text-xl md:text-3xl text-orange-500">:</span>

            <div class="flex flex-col items-center">
              <span class="text-2xl md:text-4xl font-bold">12</span>
              <span class="text-xs text-gray-500">GIÂY</span>
            </div>
          </div>
        </div>

        <!-- BUTTON -->
        <router-link to="/register">
          <!-- <button
            class="mt-6 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md"
          >
            Đăng ký dự thi
          </button> -->
          <button
            class="mt-6 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:scale-70"
          >
            Đăng ký dự thi
          </button>
        </router-link>
      </div>
    </div>
  </section>

  <!-- CARD (TÁCH RIÊNG KHỎI HERO) -->
  <section class="relative z-10 w-full -mt-[55px] pb-[30px]">
    <div class="max-w-[1228px] mx-auto px-4">
      <div
        class="bg-[#D7E2FF] rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 xl:p-10 flex flex-col-reverse lg:flex-row gap-6 md:gap-8"
      >
        <!-- IMAGE -->
        <div class="w-full lg:w-[40%] flex justify-center">
          <img
            src="/src/assets/image/ma.png"
            class="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] xl:max-w-[420px] object-contain"
          />
        </div>

        <!-- CONTENT -->
        <div
          class="w-full lg:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div class="flex flex-col items-center mb-3 md:mb-4">
            <h1 class="text-[40px] font-bold text-[#333E53]">Giới thiệu</h1>
            <div class="h-[6px] w-[80px] bg-[#F26E33] rounded"></div>
          </div>

          <h2
            class="font-montserrat font-bold text-[#333E53] xl:leading-[2.75rem] mb-2 md:mb-3 text-base sm:text-lg md:text-[1.2rem] xl:text-[32px] w-full sm:w-full md:w-[520px] xl:w-[676px] break-words"
          >
            GIẢI CỜ VUA BÁO GIÁO DỤC VÀ THỜI ĐẠI NĂM 2026
          </h2>

          <p
            class="font-montserrat text-xs sm:text-sm md:text-base xl:text-[20px] xl:leading-[2rem] max-w-[676px]"
          >
            Giải cờ vua báo giáo dục và thời đại năm 2026 được tổ chức theo hình
            thức thi đấu trực tuyến (online) nhằm cụ thể hoá Đề án “Phát hiện,
            bồi dưỡng và phát huy tài năng trẻ Việt Nam” giai đoạn 2022–2030,
            tạo sân chơi trí tuệ rộng khắp dành cho học sinh tiểu học và THCS
            trên toàn quốc. Thông qua nền tảng online, giải đấu mang đến sân
            chơi trí tuệ hiện đại, linh hoạt và dễ tiếp cận cho học sinh trên
            toàn quốc, giúp các em rèn luyện tư duy logic, phát triển khả năng
            sáng tạo và tính kỷ luật mọi lúc, mọi nơi. Đồng thời, giải đấu tạo
            điều kiện phát hiện và bồi dưỡng năng khiếu cờ vua, góp phần xây
            dựng lực lượng vận động viên trẻ cho tương lai. Với ưu thế tổ chức
            linh hoạt, cuộc thi bảo đảm các yêu cầu về chuyên môn, trật tự, an
            toàn tuyệt đối, công bằng và minh bạch, mọi thành viên tham gia phải
            thực hiện đúng các quy định và Điều lệ của Ban tổ chức (BTC) giải đề
            ra.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bgChess from "../assets/image/bg_chess.png";
</script>
