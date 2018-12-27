<template>
	<view class="content">
		<view class="imageGrid">
            <text class="title">{{title}}</text>
        </view>
		<view class="text">
			<wxParse :content="article"  />
		</view>
	</view>
</template>

<script>
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	
	var mdcontend = "按下列步骤检查:\r\n- 设备接入220v电源\r\n- 设备空开拨到on\r\n- 检查设备所有急停按钮是否已松开\r\n- 将启动钥匙旋至on"
	
	
	export default {
		components: {
			wxParse
		},
		data() {
			return {
				title: '启动前的准备...',
				article: marked(mdcontend)
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
		height: 400upx;
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
</style>
