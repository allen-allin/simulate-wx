<template>
    <div>
        <div class="top">
            <span>微信<span v-show="badge">({{badge}})</span>
            </span>
            <div>
                <i class="iconfont fz19 icon-sousuo"></i>
                <i class="iconfont fz19 icon-plus"></i>
            </div>
        </div>
        <!-- <div class="search">
            <div>
                <div>
                    <i class="iconfont fz16 icon-Icon_Magnifier"></i>&nbsp;&nbsp;搜索
                </div>
                <i class="iconfont fz16 icon-huatong"></i>
            </div>

        </div> -->
        <ul class="ul scroll">
            <li v-for="(item,idx) in list" :key="idx" @click="detail(item,idx)">
                <div class="badge" v-if="item.showBagde">1</div>
                <div class="img-wrapper">
                    <img :src="item.img" alt="">
                </div>
                <div class="right-cont">
                    <div>
                        <span class="name">{{ item.name }}</span>
                        <span>{{ item.time }}</span>
                    </div>
                    <span>[转账]{{item.showBagde ? '请你确认收钱': '你已确认收钱'}} </span>
                </div>
            </li>
        </ul>

        <div class="footer">
            <div class="badge" v-show="badge">{{badge}}</div>
            <div class="wx">
                <i class="iconfont fz24 icon-duanxin"></i>
                <span>微信</span>

            </div>
            <div><i class="iconfont fz24 icon-contacts-o"></i><span>通讯录</span></div>
            <div><i class="iconfont fz22 icon-faxianicon"></i><span>发现</span></div>
            <div><i class="iconfont fz24 icon-wode"></i><span>我</span></div>
        </div>
    </div>
</template>
<script>
    import { imgs, names } from '../assets/mock'
    import { getRandom, shuffle, getTime } from '../assets/utils'

    const initImgs = shuffle(imgs)
    const initNames = shuffle(names)

    export default {
    	data() {
    		return {
    			list: []
    		}
    	},
    	computed: {
    		badge() {
    			const n = this.list.filter(v => v.showBagde).length
    			return n > 99 ? 99 : n
    		}
    	},
    	created() {
    		const {
    			delay = 3,
    			count = 3,
    			duration = 10,
    			money = 88
    		} = this.$route.query

    		this.init(money)

    		setTimeout(() => {
    			let t = 0
    			const timer = setInterval(() => {
    				this.render(money)
    			}, 1000 / count)

    			const temp = setInterval(() => {
    				t++
    				if (t >= duration) {
    					clearInterval(timer)
    					clearInterval(temp)
    				}
    			}, 1000)
    		}, delay * 1000)
    	},
    	methods: {
    		init(money) {
    			const cache = JSON.parse(sessionStorage.getItem('cache'))
    			if (cache) {
    				this.list = cache
    			} else {
    				const arr = []
    				for (let idx = 0; idx < 10; idx++) {
    					var { str, tamp } = getTime()
    					arr.push({
    						name: initNames[idx],
    						img: initImgs[idx],
    						time: str,
    						tamp,
    						money: money.toFixed(2),
    						showBagde: false
    					})
    				}
    				this.list = arr.sort((a, b) => b.tamp - a.tamp)
    			}
    		},
    		render(money) {
    			const idx = getRandom(10, 250)
    			this.list.unshift({
    				name: initNames[idx],
    				img: initImgs[idx],
    				time: getTime('now').str,
    				money: money.toFixed(2),
    				showBagde: true
    			})
    		},
    		// render() {
    		// 	let range = [7, 17]
    		// 	let t = 0
    		// 	setInterval(() => {
    		// 		t++
    		// 		if (range.some(v => !(t % v))) {
    		// 			const idx = getRandom(10, 150)
    		// 			this.list.unshift({
    		// 				name: initNames[idx],
    		// 				img: initImgs[idx],
    		// 				time: getTime('now').str,
    		// 				money: Math.random().toFixed(1) * 100,
    		// 				showBagde: true
    		// 			})
    		// 		}
    		// 	}, 10000)
    		// },
    		detail(item, idx) {
    			const { list } = this
    			item.showBagde = false
    			list.splice(idx, 1)
    			list.unshift(item)
    			sessionStorage.setItem('cache', JSON.stringify(list))
    			this.$router.push({
    				name: 'detail',
    				query: item
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
    .fz16 {
    	font-size: 16px;
    }
    .icon-duanxin {
    	color: rgb(26, 173, 25);
    }
    .badge {
    	width: 22px;
    	height: 22px;
    	line-height: 22px;
    	border-radius: 50%;
    	background: red;
    	position: absolute;
    	left: 45px;
    	top: 2px;
    	color: white;
    	font-size: 10px;
    	text-align: center;
    	transform: scale(0.8);
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .top {
    	height: 50px;
    	background: rgb(48, 48, 48);
    	width: 100%;
    	color: white;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	padding: 0 20px 0 15px;
    	box-sizing: border-box;
    	.icon-plus {
    		margin-left: 45px;
    	}
    }
    .search {
    	height: 50px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	background: #f2f1f6;
    	border-bottom: 1px solid #ddd;
    	> div {
    		width: 96%;
    		height: 32px;
    		background: white;
    		border: 1px solid #ddd;
    		color: #999;
    		position: relative;
    		font-size: 15px;
    		> div {
    			position: absolute;
    			top: 50%;
    			left: 50%;
    			transform: translate(-50%, -50%);
    			display: flex;
    			align-items: center;
    		}
    		> i {
    			position: absolute;
    			top: 50%;
    			right: 5px;
    			transform: translateY(-50%);
    		}
    	}
    }
    .ul {
    	height: calc(100vh - 120px);
    	overflow: auto;
    	li {
    		width: 100%;
    		height: 66px;
    		border-bottom: 1px solid #ddd;
    		position: relative;
    		background: white;
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
    	background: #f6f6f6;
    	padding: 0 25px;
    	box-sizing: border-box;
    	color: #999;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    	.badge {
    		position: fixed;
    		bottom: 28px;
    		padding: 0 7px;
    		border-radius: 11px;
    		letter-spacing: 1px;
    		top: auto;
    		width: auto;
    		left: 38px;
    	}
    	> div {
    		display: flex;
    		flex-direction: column;
    		font-size: 12px;
    		align-items: center;
    	}
    }
</style>
