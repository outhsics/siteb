<template>
  <div class="bx-footer">
    <div class="footer-top flex">
      <div class="logo-box flex flex-col">
        <img src="@/assets/images/logo-bottom.png" alt="" class="logo-img">
        <div class="text"> 品质生活 在帮鲜</div>
      </div>

      <div class="logo-right-main">
        <div class="flex-list flex">
          <div class="flex flex-col mar60">
            <div class="title">联系我们</div>
            <div class="t">北京帮鲜科技有限公司</div>
            <div class="title">客服电话</div>
            <div class="t">400-6896989</div>
          </div>

          <div class="flex flex-col mar60">
            <div class="title">帮鲜介绍</div>
            <div class="t">模式</div>
            <div class="t">品质</div>
            <div class="t">保障</div>
          </div>


          <div class="flex flex-col mar60">
            <div class="title">加盟合作</div>
            <div class="t">入驻方式</div>
            <div class="t">申请方式</div>
          </div>
          <div class="flex flex-col mar60">
            <div class="title">我要下单</div>
            <div class="t">下单方式</div>
            <div class="t">下单说明</div>
          </div>

          <div class="flex flex-col mar60 last  justify-center  items-center">
            <div class="title">小程序二维码</div>

            <img src="@/assets/images/qr-code.png" alt="" class="qr-img">

          </div>



        </div>
      </div>

    </div>
    <div class="line"></div>


    <div class="footer-bottom flex justify-center items-center">

      <a class="href" href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank"
        rel="noopener noreferrer">
        @2024 帮鲜版权所有 京ICP备2023004793号-2
      </a>

    </div>
  </div>

</template>
<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  height: 1px;
  background: #FFFFFF;
  opacity: 0.2;
}

.logo-right-main {
  padding-top: 60px;
}

.mar60 {
  margin-right: 60px;

  &.last {
    margin-right: 0;
  }

  .qr-img {
    width: 96px;
    height: 96px;
  }

  .title {
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 7px;
  }

  .t {
    font-weight: 200;
    font-size: 16px;
    color: #FFFFFF;
    margin-bottom: 7px;

  }
}

.footer-top {
  height: 253px;
  padding-left: 334px;
}

.footer-bottom {
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0;
  cursor: pointer;

  .href {
    color: #FFFFFF;

    &:hover {
      color: #ccc;
      text-decoration: underline;

    }

  }
}

.bx-footer {
  width: 100%;
  height: 330px;
  background: #333333;
  box-sizing: border-box;

  .logo-box {
    padding-top: 87px;
    margin-right: 246px;

    .text {
      font-weight: 500;
      font-size: 22px;
      color: #FFFFFF;
    }
  }

  .logo-img {
    width: 84px;
    height: 40px;
    margin-bottom: 10px;
  }
}
</style>