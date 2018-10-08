<template>
    <div>
        <div class="top">
            <span>微信</span>
            <div>
                <img src="../assets/search.svg" alt="">
                <img src="../assets/plus.svg" alt="">
            </div>
        </div>
        <div class="config" v-if="showConfig">
            数量： <input type="number" v-model="count"> <br>
            <button @click="ok">确定</button>
        </div>
        <ul class="ul" v-else>
            <li v-for="(item,idx) in list" :key="idx">
                <img :src="item.img" alt="">
                <div>
                    <div>
                        <span class="name">{{  item.name  }}</span>
                        <span>{{  item.time  }}</span>
                    </div>
                    <span>[转账] 请你确认收钱</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {imgs,names} from '../assets/mock'
export default {
    data() {
        return {
            showConfig: true ,
            count: 5,
            list: []
        }
    },
    created() {
        if(!this.showConfig) {
            this.ok()
        }
    },
    methods: {
        ok() {
            const {count} = this
            const arr = new Array(+count).fill(0).map((v,idx) => ({
                name: names[idx],
                img: imgs[idx],
                time: '中午 12:31'
            }))
            this.list = arr
            this.showConfig = false
        }
    }
}
</script>

<style lang="scss" scoped>
.top {
    height: 48px;
    background: black;
    width: 100%;
    color: white;
    line-height: 48px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    >span {
        font-size: 16px;
    }
    >div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
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
        >img {
            width: 49px;
            height: 49px;
            margin-right: 10px;
        }
        display: flex;
        padding: 5px 10px;
        box-sizing: border-box;
        align-items: center;
        >div {
            flex: 1;
            color: #666;
            font-size: 12px;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
            >div {
                display: flex;
                justify-content: space-between;

                .name {
                    color: black;
                    font-size: 14px;
                    position: relative;
                    &::after {
                        width: 8px ;
                        height:  8px ;
                        border-radius: 50%;
                        background: red;
                        position: absolute;
                        left: -14px;
                        top: -5px ;
                        content: '';
                    }
                }
            }
        }
    }
}
</style>
