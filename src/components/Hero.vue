<template>
  <!-- HERO -->
  <section
    class="relative w-full h-[900px] bg-no-repeat bg-cover"
    style="background-image: url(&quot;/src/assets/image/bg_chess.png&quot;)"
  >
    <div class="max-w-[1920px] mx-auto pl-[346px] py-[14rem] flex items-center">
      <div class="max-w-xl">
        <div class="flex gap-4 mb-4 items-center">
          <img src="/src/assets/Logo GD&TĐ-15.svg" alt="Giáo dục" />
          <img src="/src/assets/Logo GD&TĐ-11.svg" alt="Giáo dục" />
          <img src="/src/assets/ecoms-19.svg" alt="ecoms" />
        </div>

        <h1
          class="w-[521px] h-[170px] text-5xl font-bold text-gray-800 leading-tight"
        >
          GIẢI CỜ VUA <br />
          <span class="text-orange-500"> BÁO GIÁO DỤC VÀ THỜI ĐẠI </span>
          2026
        </h1>

        <div
          class="w-full max-w-[521px] h-[140px] bg-white/80 backdrop-blur mt-8 px-8 py-4 rounded-2xl shadow text-center"
        >
          <p
            class="text-[16px] text-[#333E53] mb-3 font-semibold tracking-wide"
          >
            THỜI GIAN ĐĂNG KÝ CÒN LẠI (HẾT NGÀY 28/4)
          </p>

          <div class="flex items-start justify-center gap-[1.5rem]">
            <!-- Day -->
            <div class="flex flex-col items-center">
              <div class="flex items-center">
                <span class="text-[40px] font-bold text-[#2E3A4D]">14</span>
              </div>
              <span class="text-[12px] text-gray-500 mt-0">NGÀY</span>
            </div>

            <span class="text-[32px] font-bold text-orange-500 mt-[6px]"
              >:</span
            >

            <!-- Hour -->
            <div class="flex flex-col items-center">
              <div class="flex items-center">
                <span class="text-[40px] font-bold text-[#2E3A4D]">08</span>
              </div>
              <span class="text-[12px] text-gray-500 mt-0">GIỜ</span>
            </div>

            <span class="text-[32px] font-bold text-orange-500 mt-[6px]"
              >:</span
            >

            <!-- Minute -->
            <div class="flex flex-col items-center">
              <div class="flex items-center">
                <span class="text-[40px] font-bold text-[#2E3A4D]">45</span>
              </div>
              <span class="text-[12px] text-gray-500 mt-0">PHÚT</span>
            </div>

            <span class="text-[32px] font-bold text-orange-500 mt-[6px]"
              >:</span
            >

            <!-- Second -->
            <div class="flex flex-col items-center">
              <div class="flex items-center">
                <span class="text-[40px] font-bold text-[#2E3A4D]">12</span>
              </div>
              <span class="text-[12px] text-gray-500 mt-0">GIÂY</span>
            </div>
          </div>
        </div>

        <button
          class="mt-6 text-white px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#D84315] to-[#F36B2A] shadow-md"
        >
          Đăng ký dự thi
        </button>
      </div>
    </div>

    <!-- CARD ĐÈ LÊN -->
    <div
      class="absolute left-1/2 -translate-x-1/2 top-full -translate-y-[40px] w-full max-w-[1228px]"
    >
      <div
        class="min-h-[670px] bg-[#F1F3FF] rounded-2xl shadow p-10 flex gap-8"
      >
        <!-- Image -->
        <div class="w-[470px] flex items-center justify-center">
          <img
            src="/src/assets/image/ma.png"
            alt="Giới thiệu giải cờ vua"
            class="w-full max-w-[420px] max-h-[480px] object-contain rounded-xl"
          />
        </div>

        <!-- Content -->
        <div class="w-[56%] flex flex-col items-start">
          <div class="flex flex-col items-center">
            <h1 class="text-[40px] font-bold text-[#333E53]">Giới thiệu</h1>
            <div class="h-[6px] w-[80px] bg-[#F26E33] rounded"></div>
          </div>
          <h1 class="font-semibold mb-2 text-[32px] text-[#333E53]">
            GIẢI CỜ VUA BÁO GIÁO DỤC VÀ THỜI ĐẠI NĂM 2026
          </h1>
          <p class="text-[#333E53] text-[20px]">
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
