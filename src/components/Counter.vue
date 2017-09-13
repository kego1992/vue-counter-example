<template>
    <div>
        <button @click="decrement">-</button>
        <span>{{count}}</span>
        <button @click="increment">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        }
    }
}
</script>

<style lang="scss" scoped>
    $button-size: 40px;
    button {
        display: inline-block;
        width: $button-size;
        height: $button-size / 2;
        background-color: #666;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
    }

    span {
        font-weight: bold;
        font-size: $button-size / 2;
    }

    div {
        text-align: center;
        padding: 1em;
        background-color: #fafafa;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
</style>