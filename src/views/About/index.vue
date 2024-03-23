<template>
  <div class="bx-about flex flex-col">
    <img src="@/assets/images/about/bg.png" alt="" class="bg" />

    <div class="p-title flex justify-center w-full">
      帮鲜到家介绍
    </div>

    <div class="p-bottom flex w-full justify-center">
      <div class="left">
        <div class="list mab92">
          <div class="list-top">
             <img src="@/assets/images/about/icon-1.png" alt="" class="bg" />
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
             <img src="@/assets/images/about/icon-2.png" alt="" class="bg" />
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
             <img src="@/assets/images/about/icon-3.png" alt="" class="bg" />
              <div class="title">
                平台保证  售后无忧 
              </div>
          </div>
          <div class="list-bottom">
            如果你购买的商品有任何问题，都可以联系团长，团长将为您妥善处理          </div>
        </div>
      </div>
      <div class="right">
    <img src="@/assets/images/about/2.png" alt="" class="bg" />

      </div>
    </div>
  </div>

</template>
<script setup>

</script>
<style lang="scss" scoped>
.bx-about {
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
    .left {
      margin-right: 178px;
      .mab92 {
        margin-bottom: 92px;
      }
      .list {
        .list-top {
          display: flex;
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
        .bg {
          margin-right: 11px;
          width: 34px;
          height: 34px;
        }
      }
    }
    
    .right {
      .bg {
        width: 700px;
        height:655px ;
      }
    }
  }
}
</style>