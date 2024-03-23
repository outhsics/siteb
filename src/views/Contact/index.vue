<template>
	<div class="bx-contact flex flex-col">
		<img src="@/assets/images/contact/bg.png" alt="" class="bg" />



		<div class="p-bottom flex w-full justify-center">
			<div class="left flex flex-col justify-between">
				<div class="box flex flex-col">
					<div class="title">公司地址</div>
					<div class="text">河北省保定市高碑店市金融街5号二楼帮鲜到家</div>
				</div>
				<div class="box flex flex-col">
					<div class="title">客服电话</div>
					<div class="text flex">了解更多内容 请拨打： <span>400-6896989</span></div>
				</div>
			</div>
			<div class="right">
				<div class="map" id="container"></div>

				<!-- <div id="map" style="width: 100%; height: 400px;"></div> -->
			</div>
		</div>
	</div>

</template>

<script setup>
import { onMounted } from 'vue';
import AMapLoader from "@amap/amap-jsapi-loader";

onMounted(() => {
  initMap(100,100)
})


const  initMap = async ()=> {
		window._AMapSecurityConfig = {
			securityJsCode: "2f1cfc3758a8e12af0504b1f31c6ee0f"
		};
		const AMap = await AMapLoader.load({
			key: "03475568cf97044ee9e05ed1e4c4c256",
			version: "2.0",
			plugins: [
				"AMap.PolygonEditor",
				"AMap.MouseTool",
			]
		});
		const map = new AMap.Map("container", {
			center: [115.90,39.35], // 设置中心点为用户当前位置
			viewMode: "2D", //是否为3D地图模式
			zoom: 16 //初始化地图级别
		});
	
	} 


</script>
<style lang="scss"  >
.map {
	width: 713px;
height: 448px;
}
.bx-contact {
	.bg {
		width: 100%;
	}

	.p-bottom {
		.box {
			span {
				color: #FEA201;
				font-weight: 400;
				font-size: 18px;
			}
		}
		margin-top: 104px;
		margin-bottom: 104px;
		.left {

			padding: 81px 112px 109px 0;
			.title {
				font-weight: 500;
				font-size: 30px;
				color: #333333;
				margin-bottom: 18px;
			}
			.text {
				font-weight: 400;
				font-size: 18px;
				color: #333333;
			}
		}

		.right {
		
		}
	}
}
</style>