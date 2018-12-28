<template>
	<view class="content">
		<view class="topBar">
			<view class="icon-item">
				<uni-icon size="40" type="scan" color="#8f8f94" index="1"></uni-icon>
			</view>
			<view class="icon-item">
				<uni-icon size="40" type="scan" color="#8f8f94" index="2"></uni-icon>
			</view>
		</view>
	</view>

</template>

<script>

	import uniIcon from '../../components/uni-icon.vue'
	
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				title: '启动前的准备...',
				indicatorDots: false,
				autoplay: false
				
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: "#ffffff" ,
				backgroundColor: "#007AFF" ,
				splitLine:null
			})
			uni.getSystemInfo({
				success:function(res){
					console.log(res.windowHeight)
				}
			})
		},
		methods: {
			setBg() {
				this.hasSetBg = !this.hasSetBg;
				uni.setNavigationBarColor({
					frontColor: this.hasSetBg ? "#ffffff" : "#000000",
					backgroundColor: this.hasSetBg ? "#007AFF" : "#F8F8F8"
				})
			}
		}
	}
</script>

<style>
	@import url("../../components/mpvue-wxparse/src/wxParse.css");
	
	.topBar {
		text-align: center;
		height: 200upx;
		background-color:#007AFF;
		display: inline-flex;
	}
	.topBar ul {
		text-decoration: none;
		list-style: none;
		color:#fff;
		margin:0;
		padding:0;
	}
	
	.icon-item {
		display: inline-flex;
		width: 130upx;
		height: 130upx;
		margin: 20upx;
		justify-content: center;
	}
	.icon-item span {
		display: block;

	}
	.icon-item .icon {
		width: 80upx;
		height: 80upx;
		background-repeat: no-repeat;
		background-size: 100%;
		margin:auto;
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
	.status-contents{
		height: var(--status-bar-height);
	}
	.top-view{
		width: 100%;
		position: fixed;
		top: 0;
	}
	.status{
		height:var(--status-bar-height);
	}
</style>
