<template>
	<div class="bx-system flex flex-col">
		<img src="@/assets/images/system/bg.png" alt="" class="bg" />

		<div class="bg-w">
			<div class="p-title flex justify-center w-full">
				做店长 收益多
			</div>

			<div class="p-main flex w-full justify-center">

				<div class="wid112 flex justify-between">
					<div class="list flex flex-col items-center">

						<img src="@/assets/images/system/1.png" alt="" class="bg" />

						<div class="title">
							订单服务费
						</div>
						<div class="text">
							顾客下单就有
						</div>
					</div>


					<div class="list flex flex-col items-center">

						<img src="@/assets/images/system/2.png" alt="" class="bg" />

						<div class="title">
							职位灵活
						</div>
						<div class="text">
							不限职位 多份收入
						</div>
					</div>

					<div class="list flex flex-col items-center">

						<img src="@/assets/images/system/3.png" alt="" class="bg" />

						<div class="title">
							更多收益
						</div>
						<div class="text">
							店长可见 扫码加入
						</div>
					</div>


				</div>

			</div>
		</div>

		<div class="bg-g flex  justify-center">
			<div class="bg-g-inner flex flex-col">
				<div class="bg-title">
				申请方法
			</div>
			<div class="card-list flex">
				<div class="card flex justify-between">
					<div class="num">01</div>
					<div class="left">
						<div class="title">手机号码验证报名</div>
						<div class="text">输入手机号、验证码快速报名</div>
					</div>
					<div class="qr-img">
						<img src="@/assets/images/qr-code.png" alt="" class="bg" />
					</div>
				</div>
				<div class="icon flex flex-col justify-center">
					<el-icon>
						<ArrowRight />
					</el-icon>
				</div>

				<div class="card flex justify-between">
					<div class="num">02</div>
					<div class="left">
						<div class="title">完善信息填写</div>
						<div class="text">报名后3天，帮鲜将与您联系协助完善信息</div>
					</div>
					<div class="qr-img">
						<img src="@/assets/images/qr-code.png" alt="" class="bg" />
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>

</template>
<script setup>

</script>
<style lang="scss" scoped>
.bx-system {
	.bg-g {
		padding-top: 95px;
		box-sizing: border-box;
height: 600px;
background: #F9F9F9;
.bg-title {
font-weight: 500;
font-size: 36px;
color: #333333;
margin-bottom: 79px;
text-align: center;
}
	}
	.icon {
		padding-left: 68px;
		padding-right: 43px;
		.ep-icon {
			font-size: 22px;
			color: #333333;
		}
	}
	.card {
		width: 500px;
		height: 260px;
		background: #FFFFFF;
		border-radius: 20px;
		border: 1px solid #CCCCCC;
		position: relative;
		box-sizing: border-box;
		padding: 42px 32px 39px 32px;
		.num {
			position: absolute;
			width: 66px;
			height: 80px;
			font-family: MiSans, MiSans;
			font-weight: 500;
			font-size: 60px;
			color: #FEA201;
			opacity: .6;
		}
		.left {
			display: flex;
			flex-direction: column;
			margin-top: 42px;
			box-sizing: border-box;
			z-index: 1;
			.title {
				font-weight: 500;
				font-size: 30px;
				margin-bottom: 28px;
				color: #333333;
			}
			.text {
				font-weight: 400;
				font-size: 18px;
				color: #333333;
			}
		
		}
		.qr-img {
				width: 174px;
				height: 180px;
				.bg {
					width: 174px;
					height: 180px;	
				}
			}
	}
	.bg {
		width: 100%;
		height: 450px;
	}
	.wid112 {
		width: 1126px;
	}
	
	.bg-w {
		width: 100%;
		height: 576px;
		background: #FFFFFF;
	}

	.p-title {
		margin-top: 80px;
		font-weight: 500;
		font-size: 36px;
		color: #333333;
	}

	.p-main {
		margin-top: 70px;

		.list {
			.bg {
				width: 146px;
				height: 146px;
				margin-bottom: 30px;
			}

			.title {
				font-weight: 500;
				font-size: 30px;
				color: #333333;
			}

			.text {
				font-weight: 400;
				font-size: 26px;
				color: #999999;
			}
		}
	}
}
</style>