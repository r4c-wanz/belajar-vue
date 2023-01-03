<template>
    <div>
        <h1 :title="messages">Halo Vue</h1>
        <p>{{messages}}</p>
        <button @click="ubahKata()">Ubah Kata</button>
        <hr />
        <div>
            {{ count }}
        </div>
        <div>
            <button @click="tambah()">Tambah 1</button>
            <button @click="kurang()">Kurang 1</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                messages: "Meledak",
                count: 0
            }
        },
        methods: {
            ubahKata(){
                this.messages = 'Mantapp'
            },
            tambah(){
                // this.count = this.count + 1
                // this.count += 1
                this.count++
            },
            kurang(){
                this.count--
            }
        }
    }
</script>

<style>
    
</style>
