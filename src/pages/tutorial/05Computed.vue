<template>
    <div class="text-center">
        <h2>Perkalian</h2>
        <p class="my-3">{{ perkalian }}</p>
        <input type="number" v-model="num1">
        <input type="number" v-model="num2">
        <hr>
        <h2>Hitung Luas</h2>
        <p class="my-3">{{ luas }}</p>
        <input type="number" v-model="panjang">
        <input type="number" v-model="lebar">
        <hr>
    </div>
</template>

<script setup>
    import {ref, computed} from 'vue'
    let num1 = ref(0)
    let num2 = ref(0)
    let panjang = ref(0)
    let lebar = ref(0)
    let perkalian = computed(() => num1.value * num2.value)
    let luas = computed(() => panjang.value * lebar.value * 0.5)
</script>