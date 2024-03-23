<template>
	<div class="bx-team flex flex-col">

		<div class="team-header flex items-center justify-center">
			<div class="header-box flex flex-col justify-center items-center">

				<div class="p flex"> 欢迎加入 <img src="@/assets/images/team/left.png" alt="" class="bg" /> 帮鲜城市运营

					<img src="@/assets/images/team/right.png" alt="" class="bg" />
				</div>
				<div class="por-2">
					欢迎合作有保障 期待您的加入！
				</div>
				<img src="@/assets/images/qr-code.png" alt="" class="qr-img" />

			</div>

		</div>
		<div class="bg-g flex  justify-center">

			<div class="bg-g-inner flex flex-col">
				<div class="bg-title">
					申请流程
				</div>
				<div class="card-list flex">
					<div class="card flex justify-between">
						<img src="@/assets/images/team/01.png" alt="" class="bg" />
						<div class="left">
							<div class="title">联系我们</div>
							<div class="text">了解更多内容 请拨打客服电话：400-6896989</div>
						</div>

					</div>
					<div class="icon flex flex-col justify-center">
						<el-icon>
							<ArrowRight />
						</el-icon>
					</div>

					<div class="card flex justify-between">
						<img src="@/assets/images/team/02.png" alt="" class="bg" />

						<div class="left">
							<div class="title">平台审核</div>
							<div class="text">资质信息审核（1-2个工作日）</div>
						</div>

					</div>

					<div class="icon flex flex-col justify-center">
						<el-icon>
							<ArrowRight />
						</el-icon>
					</div>
					<div class="card flex justify-between">
						<img src="@/assets/images/team/03.png" alt="" class="bg" />

						<div class="left">
							<div class="title">正式入驻</div>
							<div class="text">签订协议 入驻合作</div>
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
.bx-team {
	.team-header {
		height: 450px;
		width: 100%;
		background-image: url(../../assets/images/team/bg.png);
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
				margin-bottom: 10px;

				.bg {
					width: 32px;
					height: 30px;

				}
			}

			.por-2 {
				font-weight: 400;
				font-size: 32px;
				color: #FFFFFF;
				margin-bottom: 10px;

			}

			.qr-img {
				width: 134px;
				height: 134px;
			}
		}
	}

	.bg-g {
		padding-top: 95px;
		box-sizing: border-box;
		height: 600px;
		background: #fff;

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
		width: 334px;
		height: 260px;
		background: #FFFFFF;
		border-radius: 20px;
		border: 1px solid #CCCCCC;

		position: relative;
		box-sizing: border-box;
		padding: 42px 32px;

		.bg {
			position: absolute;
			width: 75px;
			height: 80px;
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
		margin-top: 79px;

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