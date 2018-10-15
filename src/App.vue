<template>
    <div id="app">
        <div class="top">
            <div class="left">
                <i class="iconfont icon-G"></i>
                <i class="iconfont icon-wifi"></i>
                中国联通
            </div>
            <span class="mid">{{time}}</span>
            <div class="right">
                <i class="iconfont icon-shengjingyin"></i>
                <i class="iconfont icon-suo"></i>
                <i class="iconfont icon-lanya"></i>              
                <i class="iconfont icon-iconset0251"></i>              
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
import {getTime} from './assets/utils'
import { setInterval } from 'timers';
export default {
    data() {
        return {
            time: ''
        }
    },
    created() {
        setInterval(() => {
            this.time = getTime('now').hhmm
        },1000)
    }
}
</script>
<style lang="scss" scoped>
.top {
    height: 20px;
    background: rgb(48,48,48);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: relative;
    >.left {
        color: white;
        font-size: 12px;
        i {
            font-size: 12px;
        }
    }
    i {
        color: white;
        font-size: 14px;
        margin-right: 3px;
    }
    >.mid {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 12px;
        color: white;
    }
    >.right {
        display: flex;
        align-items: center;
        >i {
            font-size: 12px;
        }
        .icon-iconset0251 {
            font-size: 17px;
        }
    }
}
</style>



