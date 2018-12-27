<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="imageGrid">
					<text class="title">{{title}}</text>
				</view>
				<view class="text">
					<wxParse :content="article00"  />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="imageGrid">
					<text class="title">设备开机</text>
				</view>
				<view class="text">
					<wxParse :content="article01"  />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	
	var mdcontend = "按下列步骤检查:\r\n- 设备接入220v电源\r\n- 设备空开拨到on\r\n- 检查设备所有急停按钮是否已松开\r\n- 将启动钥匙旋至on\r\n- 检查水箱水位线是否在min之上"
	var mdcontend1 = "按下列步骤操作:\r\n- 按动开机按钮，设备开始自检开机\r\n- 设备自检完成后将触摸屏显示信息页面\r\n- 点击触摸屏控制选项卡，切换至控制界面\r\n- 选中红光指示和主光闸"
	
	export default {
		components: {
			wxParse
		},
		data() {
			return {
				title: '启动前的准备...',
				article00: marked(mdcontend),
				article01: marked(mdcontend1),
				indicatorDots: false,
				autoplay: false
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	@import url("../../components/mpvue-wxparse/src/wxParse.css");
	.content {
		text-align: center;
		height: 1200upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 76upx;
		line-height: 750upx;
		color: #00416d;
		font-weight: 300;
	}
	.imageGrid {

		background-color: #75d4f2;
		width: 100%;
		height: 750upx;
		text-align: center;
		line-height: 200upx;
	}
	.text {
		text-align: left;
		margin:0 20upx;
	}
	.swiper {
		height:100%
	}
</style>
