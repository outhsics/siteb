<template>
	<div class="index-page">
		<div class="bg-header">
			<div class="box-bg">
				<div class="title-1 flex">
					品质生活在 <div class="primary-color">帮鲜</div>
				</div>
				<div class="line"></div>
				<div class="text-2"> 扫码小程序立即购</div>
				<div class="qr-img"></div>
			</div>
		</div>
		<div @click="handleTo(1)" class="box-text-list flex  justify-center">
			<div class="box flex flex-col items-center justify-center">
				<li  class="top flex items-center justify-center"><img src="@/assets/images/index-icon-1.png" alt=""
						class="img-1">
					<span >成为店长</span> <el-icon>
						<ArrowRight />
					</el-icon>
				</li>
				<div class="bottom flex">
					三重保障、稳定收入
				</div>
			</div>
			<div @click="handleTo(2)" class="box bg2  flex flex-col items-center justify-center">
				<li  class="top flex items-center justify-center"><img src="@/assets/images/index-icon-2.png" alt=""
						class="img-1">
					<span>加盟合作</span> <el-icon>
						<ArrowRight />
					</el-icon>
				</li>
				<div class="bottom flex">
					成为供货商、物流合作伙伴
				</div>
			</div>
			<div @click="handleTo(3)" class="box flex flex-col items-center justify-center">
				<li  class="top flex items-center justify-center"><img src="@/assets/images/index-icon-3.png" alt=""
						class="img-1">
					<span>我要下单</span> <el-icon>
						<ArrowRight />
					</el-icon>
				</li>
				<div class="bottom flex">
					当日下单、次日自提/送上门
				</div>
			</div>
		</div>

		<div class="box-main flex justify-center">
			<div class="box-main-inner flex justify-between">
				<div class="left">
					<div class="top">
						帮鲜到家
					</div>
					<div class="bottom">
						<div class="flex flex-col">

							<li>是一家以商品口感为核心 </li>
							<li>针对C端用户体验的线上生鲜平台</li>
							<li>线上下单+线下自提的半预购模式</li>
							<li>为顾客提供预定到店自提的便捷服务</li>
						</div>

					</div>

				</div>

				<div class="right">
					<img src="@/assets/images/index-bottom-right.png" alt="" class="img-2">
				</div>
			</div>
		</div>
	</div>


</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const handleTo = (v)=>{
	let map = {
		1:'/system',
		2:'/team',
		3:'/buy',
	}
	router.push(map[v] || '/');
}

</script>
<style lang="scss" scoped>
.index-page {
	overflow: hidden;
}

* {
	padding: 0;
	margin: 0;
}

.box-text-list {
	transform: translateY(-50px);
}

.box-main {
	width: 100%;

	.left {
		.top {
			font-weight: 500;
			font-size: 70px;
			color: #FEA201;
		}

		.bottom {
			font-weight: 400;
			font-size: 33px;
			color: #333333;
		}
	}

	.right {
		width: 652px;
		height: 697px;

		.img-2 {
			width: 772px;
			height: 697px;
		}

	}
}

.box {
	width: 370px;
	height: 197px;
	background: #40A55A;

	&.bg2 {
		background: #FEA201;

	}

	.top {
		span {
			font-weight: 500;
			font-size: 30px;
			color: #FFFFFF;
		}

		.ep-icon {
			font-size: 20px;

			color: #fff;
		}

		.img-1 {
			width: 34px;
			height: 34px;
			margin-left: 5px;
		}

	}

	.bottom {
		font-weight: 400;
		font-size: 18px;
		color: #FFFFFF;


	}
}

.bg-header {
	width: 100vw;
	height: 850px;
	position: relative;
	overflow: hidden;
	background-image: url(../../assets/images/home-banner-bg.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	.box-bg {
		width: 567px;
		height: 403px;
		margin-top: 229px;
		box-sizing: border-box;
		margin-left: 239px;
		background-image: url(../../assets/images/glaze.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		position: relative;
		padding: 26px 41px 28px;
		// backdrop-filter: blur(6px);
		backdrop-filter: blur(20px);

		.title-1 {
			width: 434px;
			height: 82px;
			font-family: MiSans, MiSans;
			font-weight: 600;
			font-size: 62px;
			color: #007B34;
			line-height: 82px;
			text-align: left;

			.primary-color {
				color: #FEA201;
			}
		}

		.line {
			width: 460px;
			height: 1px;
			background: #007B34;
			opacity: 0.5;
			margin-top: 13px;
			margin-bottom: 18px;
		}

		.text-2 {
			width: 272px;
			height: 40px;
			font-family: PingFangSC, PingFang SC;
			font-weight: 400;
			font-size: 28px;
			color: #007B34;
			line-height: 40px;
			letter-spacing: 6px;
			text-align: left;
			font-style: normal;
		}

		.qr-img {
			margin-top: 15px;
			box-sizing: border-box;
			width: 182px;
			height: 182px;
			background: #FFFFFF;
			border-radius: 32px;
			background-image: url(../../assets/images/qr-code.png);

			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
	}
}
</style>