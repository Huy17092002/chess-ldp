<template>
  <div class="bg-[#f5f7fb] py-10 md:py-12 px-4">
    <!-- TITLE -->
    <div class="text-center mt-[40px] md:mt-[60px]">
      <h1 class="text-[28px] md:text-[40px] font-bold text-[#333E53]">
        Thông tin cá nhân
      </h1>
      <div
        class="w-[50px] md:w-[60px] h-[3px] md:h-[4px] bg-orange-500 mx-auto mt-2 rounded"
      ></div>
    </div>

    <!-- CARD -->
    <div
      class="max-w-[1228px] mx-auto mt-8 md:mt-10 bg-cover bg-center"
      style="background-image: url(&quot;/src/assets/image/bg.png&quot;)"
    >
      <div
        class="max-w-[900px] mx-auto rounded-3xl px-5 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start"
      >
        <!-- LEFT -->
        <div
          class="md:w-[420px] md:mx-auto lg:w-[55%] space-y-2 md:space-y-3 text-[13px] md:text-[14px] text-[#333E53] leading-[28px] md:leading-[37px]"
        >
          <div class="flex justify-between sm:justify-start sm:gap-6">
            <div class="sm:w-40 text-[14px] md:text-[16px] font-bold">
              Họ và tên
            </div>
            <div class="text-gray-700 font-medium text-[14px] md:text-[16px]">
              Nguyễn Văn Chung
            </div>
          </div>

          <div class="flex justify-between sm:justify-start sm:gap-6">
            <div class="sm:w-40 text-[14px] md:text-[16px] font-bold">
              Số điện thoại
            </div>
            <div class="text-gray-700 font-medium text-[14px] md:text-[16px]">
              0983668669
            </div>
          </div>

          <div class="flex justify-between sm:justify-start sm:gap-6">
            <div class="sm:w-40 text-[14px] md:text-[16px] font-bold">
              Ngày sinh
            </div>
            <div class="text-gray-700 font-medium text-[14px] md:text-[16px]">
              06/06/2010
            </div>
          </div>

          <div class="flex justify-between sm:justify-start sm:gap-6">
            <div class="sm:w-40 text-[14px] md:text-[16px] font-bold">
              Giới tính
            </div>
            <div class="text-gray-700 font-medium text-[14px] md:text-[16px]">
              Nam
            </div>
          </div>

          <div class="flex justify-between sm:justify-start sm:gap-6">
            <div class="sm:w-40 text-[14px] md:text-[16px] font-bold">
              Nơi bạn sinh hoạt
            </div>
            <div class="text-gray-700 font-medium text-[14px] md:text-[16px]">
              CLB cờ vua Hai Bà Trưng
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="w-full lg:w-[45%] flex flex-col items-center">
          <div class="bg-white p-2 rounded-md shadow-sm">
            <img
              class="w-32 h-32 md:w-40 md:h-40"
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=test"
            />
          </div>

          <p
            class="text-[12px] md:text-[13px] text-gray-500 mt-4 text-center leading-5"
          >
            Quét mã QR để chuyển phí <br />
            Xác nhận tham gia thi đấu
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
