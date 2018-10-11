<template>
    <div>
        <div class="top">
            <span>微信</span>
            <div>
                <i class="iconfont fz19 icon-sousuo"></i>
                <i class="iconfont fz19 icon-plus"></i>
            </div>
        </div>

        <ul class="ul scroll">
            <li v-for="(item,idx) in list" :key="idx" @click="detail(item)">
                <div class="badge">1</div>
                <div class="img-wrapper">
                    <img :src="item.img" alt="">
                </div>
                <div class="right-cont">
                    <div>
                        <span class="name">{{ item.name }}</span>
                        <span>{{ item.time }}</span>
                    </div>
                    <span>[转账] 请你确认收钱</span>
                </div>
            </li>
        </ul>

        <div class="footer">
            <div><i class="iconfont fz24 icon-duanxin"></i><span>微信</span></div>
            <div><i class="iconfont fz24 icon-contacts-o"></i><span>通讯录</span></div>
            <div><i class="iconfont fz22 icon-faxianicon"></i><span>发现</span></div>
            <div><i class="iconfont fz24 icon-wode"></i><span>我</span></div>
        </div>
    </div>
</template>
<script>
    import { imgs, names } from '../assets/mock'
    export default {
    	data() {
    		return {
    			list: [],
    			count: 150
    		}
    	},
    	created() {
    		// const count = this.$route.params.count
    		// if (!count) {
    		// 	this.$router.push({name: 'home'})
    		// }
    		this.render()
    	},
    	methods: {
    		render() {
    			const { count } = this
    			const arr = new Array(+count).fill(0).map((v, idx) => ({
    				name: names[idx],
    				img: imgs[idx],
    				time: '中午 12:31',
    				money: Math.random().toFixed(1)
    			}))
    			this.list = arr
    		},
    		detail(item) {
    			this.$router.push({
    				name: 'detail',
    				params: item
    			})
    		}
    	}
    }
</script>

<style lang="scss" scoped>
    .fz22 {
    	font-size: 22px;
    }
    .fz24 {
    	font-size: 24px;
    }
    .fz19 {
    	font-size: 19px;
    }
    .icon-duanxin {
    	color: rgb(26, 173, 25);
    }
    .badge {
    	width: 18px;
    	height: 18px;
        line-height: 20px;
    	border-radius: 50%;
    	background: red;
    	position: absolute;
    	left: 48px;
    	top: 1px;
    	color: white;
    	font-size: 10px;
    	text-align: center;
    }
    .top {
    	height: 50px;
    	background: black;
    	width: 100%;
    	color: white;
    	line-height: 50px;
    	padding: 0 10px;
    	display: flex;
    	box-sizing: border-box;
    	justify-content: space-between;
    	> span {
    		font-size: 16px;
    	}
    	> div {
    		display: flex;
    		align-items: center;
    		justify-content: space-between;
    		width: 60px;
    		padding-right: 10px;
    		img {
    			width: 20px;
    			margin-right: 40px;
    		}
    	}
    }
    .ul {
    	height: calc(100vh - 100px);
    	overflow: auto;
    	li {
    		width: 100%;
    		height: 66px;
    		border-bottom: 1px solid #ddd;
            position: relative;
    		> .img-wrapper {
    			margin-right: 10px;
    			height: 49px;
    			> img {
    				width: 49px;
    				height: 49px;
    			}
    		}
    		display: flex;
    		padding: 5px 10px;
    		box-sizing: border-box;
    		align-items: center;
    		> .right-cont {
    			flex: 1;
    			color: #666;
    			font-size: 12px;
    			display: flex;
    			height: 100%;
    			flex-direction: column;
    			justify-content: space-around;
    			> div {
    				display: flex;
    				justify-content: space-between;

    				.name {
    					color: black;
    					font-size: 14px;
    				}
    			}
    		}
    	}
    }
    .footer {
    	height: 50px;
    	position: fixed;
    	left: 0;
    	bottom: 0;
    	width: 100%;
    	border-top: 1px solid #ddd;
    	padding: 0 25px;
    	box-sizing: border-box;
    	color: #999;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	> div {
    		display: flex;
    		flex-direction: column;
    		font-size: 12px;
    		align-items: center;
    	}
    }
</style>
