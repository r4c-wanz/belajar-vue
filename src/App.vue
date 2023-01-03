<template>
    <div>
        <h1 :title="messages">Halo Vue</h1>
        <p>{{messages}}</p>
        <button @click="ubahKata()">Ubah Kata</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                messages: "Meledak"
            }
        },
        methods: {
            ubahKata(){
                this.messages = 'Mantapp'
            }
        }
    }
</script>

<style>
    
</style>
