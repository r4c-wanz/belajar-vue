<template>
    <div>
        <!-- <h1 v-once>Belajar Variable</h1> -->
        <h1>Hello World</h1>
        <hr>
        <p v-once>Hello {{ nama1 }}</p>
        <p>Hello {{ nama1 }}</p>
        <p>Halo <span v-html="nama2"></span></p>
        <button @click="changeName()" class="btn btn-primary">Ubah Nama</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
let nama1 = ref('Rob')
let nama2 = ref('Bob')

function changeName() {
    nama1.value = 'Tahu'
    nama2.value = 'Tempe'
}
</script>

<script>
    // export default {
    //     data() {
    //         return{
    //             nama: 'World',
    //             nama2: '<h1>Dunia</h1>'
    //         }
    //     }
    // }
</script>