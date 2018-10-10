<template>
    <div class="home">
        数量： <input type="number" v-model="count"> <br>
        <button @click="ok">确定</button>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        data() {
            return {
                count: 5,
            }
        },
        methods: {
            ok() {
                this.$router.push({
                    name: 'list',
                    params: {
                        count: this.count
                    }
                })
            }
        }
    }
</script>
