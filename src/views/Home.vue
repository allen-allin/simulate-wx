<template>
    <div class="home">
        <div>
            <span>频率：</span> <input type="number" v-model="count"> 人/秒 
        </div>
        <div>
            <span>持续时间：</span> <input type="number" v-model="duration"> 秒 
        </div>
        <div>
            <span>延迟：</span> <input type="number" v-model="delay"> 秒后开始
        </div>
        <div>
            <span>转账金额：</span> <input type="number" v-model="money"> 元
        </div>
        <button @click="ok">确定</button>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        data() {
            return {
                count: 3,
                duration: 10,
                delay: 3,
                money: 88
            }
        },
        methods: {
            ok() {
                sessionStorage.removeItem('cache')
                if(this.count === 0) {
                    alert('频率不能为0')
                    return
                }
                if(this.count > 6) {
                    alert('为保证效果，频率最大为6')
                    return
                }
                if(this.duration * this.count > 200) {
                    alert('为保证效果，频率 * 持续时间 不能超过200')
                    return
                }
                this.$router.push({
                    name: 'list',
                    query: {
                        count: this.count,
                        duration: this.duration,
                        delay: this.delay,
                        money: this.money
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
.home {
    padding-top: 100px;
    box-sizing: border-box;
    >div {
        width: 90%;
        display: flex;
        margin: 20px auto;
        > span {
            width: 80px;
        }
        input {
            width: 100px;
        }
    }
    >button {
        width: 50%;
        height: 40px;
        margin: 0 auto;
        display: block;
    }
}
</style>
