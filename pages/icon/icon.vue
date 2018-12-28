<template>
    <view class="page">
        <view class="topBar">
            <view class="icon-item" >
                <uni-icon size="40" type="scan" color="#fff" ></uni-icon>
				扫一扫
            </view>
			<view class="icon-item" >
				<uni-icon size="40" type="help" color="#fff" ></uni-icon>
				诊断
			</view>
			<view class="icon-item" >
				<uni-icon size="40" type="gear-filled" color="#fff" ></uni-icon>
				设置
			</view>
        </view>
		<view>
			<scroll-view class="red" scroll-y :style="{height:height+'px'}">
				<view class="red"></view>
				<view class="red"></view>
				<view class="red"></view>
				<view class="red"></view>
			</scroll-view>
		</view>
		
    </view>
</template>

<script>
    import uniIcon from '../../components/uni-icon.vue'
    export default {
        data() {
            return {
                title: 'icon',
                activeIndex: -1,
				height:500
            };
        },
		onLoad() {
			var self = this;
			uni.setNavigationBarColor({
				frontColor: "#ffffff" ,
				backgroundColor: "#007AFF" ,
				splitLine:null
			})
			uni.getSystemInfo({
				success:function(res){
					var unit = res.windowWidth*res.pixelRatio/750;
					var left = res.windowHeight-200*unit;
					self.height = left;
					console.log(self.height)
				}
			})
		},
        components: {
            uniIcon
        },
        methods: {
            switchActive(index) {
                this.activeIndex = index
            }
        }
    }
</script>

<style>
    .icon-item {
        width: 105upx;
        height: 105upx;
        margin: 30upx;
    }
	.topBar {
		justify-content: center;
		text-align: center;
		display: flex;
		color: #fff;
		height: 200upx;
		background-color:#007AFF;
	}
	.red {
		background-color: #f33;
		height: 300upx;
	}
</style>
