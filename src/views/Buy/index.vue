<template>
  <div class="bx-buy flex flex-col">

    <div class="buy-header flex items-center justify-end">
      <div class="header-box flex flex-col justify-center items-center">

        <div class="p flex"> 真的真的好
        </div>
        <div class="por-2">
          微信扫码 立即下单
        </div>
        <img src="@/assets/images/qr-code.png" alt="" class="qr-img" />

      </div>

    </div>

    <div class="p-bottom flex w-full justify-center">
      <div class="left">
        <div class="list mab92">
          <div class="list-top">
            <img src="@/assets/images/buy/1.png" alt="" class="bg" />
            <div class="title">
              线上下单+线下自提
            </div>
          </div>
          <div class="list-bottom">
            消费者每天中午12点前下单，下午安排发货，次日便可到自提点取货
          </div>
        </div>

        <div class="list mab92">
          <div class="list-top">
            <img src="@/assets/images/buy/1.png" alt="" class="bg" />
            <div class="title">
              商品口感为核心
            </div>
          </div>
          <div class="list-bottom">
            优秀且成熟的前端采购和品鉴团队为客户精挑细选口感上乘的商品
          </div>
        </div>

        <div class="list mab92">
          <div class="list-top">
            <img src="@/assets/images/buy/1.png" alt="" class="bg" />
            <div class="title">
              平台保证 售后无忧
            </div>
          </div>
          <div class="list-bottom">
            如果你购买的商品有任何问题，都可以联系团长，团长将为您妥善处理 </div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/images/buy/bg2.png" alt="" class="bg" />

      </div>
    </div>
  </div>

</template>
<script setup>

</script>
<style lang="scss" scoped>
.bx-buy {

  .buy-header {
    height: 450px;
    width: 100%;
    padding-right: 343px;
    box-sizing: border-box;
    background-image: url(../../assets/images/buy/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .header-box {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 52px;
      color: #FFFFFF;
      text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

      .p {
        font-weight: 600;
        font-size: 44px;
        color: #FFFFFF;
        margin-bottom: 16px;


      }

      .por-2 {
        font-weight: 400;
        font-size: 22px;
        color: #FFFFFF;
        margin-bottom: 22px;

      }

      .qr-img {
        width: 160px;
        height: 160px;
        background: #FFFFFF;
        border-radius: 28px;
      }
    }
  }

  .bg {
    width: 100%;
    height: 450px;
  }

  .p-title {
    margin-top: 77px;
    height: 88px;
    font-weight: 500;
    font-size: 63px;
    color: #FEA201;
  }

  .p-bottom {
    margin-top: 32px;

    .left {
      margin-top: 68px;
      margin-right: 178px;

      .mab92 {
        margin-bottom: 92px;
      }

      .list {
        .list-top {
          display: flex;
          .bg {
          margin-right: 11px;
          width: 34px;
          height: 34px;
          margin-top: 6px;
        }
        }

        .list-bottom {
          margin-left: 45px;
          word-wrap: wrap;
          width: 373px;
          margin-top: 18px;
          font-weight: 400;
          font-size: 18px;
          color: #333333;
        }

        .title {
          font-weight: 500;
          font-size: 30px;
          color: #333333;
        }

     
      }
    }

    .right {
      .bg {
        width: 700px;
        height: 655px;
      }
    }
  }
}
</style>