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
            <button>Tambah 1</button>
            <button>Tambah 2</button>
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
            }
            tambah(){
                // this.count = this.count + 1
                // this.count += 1
                this.count++
            }
            kurang(){
                // this.count = this.count + 1
                // this.count += 1
                this.count--
            }
        }
    }
</script>

<style>
    
</style>
