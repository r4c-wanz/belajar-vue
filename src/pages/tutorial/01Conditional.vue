<template>
    <div>
        <h1>Tutorial if else</h1>
        <div v-if="status">SidoMuncul</div>
        <div v-else>Beras Kencur</div>
        <button @click="toggleStatus()">Ubah Status</button>
        <hr>
        <div v-if="tiket == 1">Joko Masuk</div>
        <div v-else-if="tiket == 2">Wendi Masuk</div>
        <div v-else>Fajar Masuk</div>
        <div>{{ tiket }}</div>
        <input type="number" min="0" max="10" v-model="tiket">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: true,
                tiket: 1
            }
        },
        methods: {
            toggleStatus() {
                this.status = !this.status
            }
        }
    }
</script>

<style>
    
</style>
