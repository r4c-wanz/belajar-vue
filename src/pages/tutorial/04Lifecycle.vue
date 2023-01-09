<template>
    <div>
        <h1>Tutorial Lifecycle</h1>
        <p id="textnya">Haloooo</p>
        {{ nama }}
        <button @click="nama='Superman'">Ubah Text</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nama: 'Bang Messi'
            }
        },
        created() {
            // Dijalanin pas layar masih putih / loading || Rekomendasi ubah data
            console.log('Created')
            console.log(this.nama)
            this.nama = 'Bang Jono'
            console.log(this.nama)
        },
        mounted() {
            // Dijalanin pas HTML muncul
            console.log('Mounted')
            console.log(this.nama)
            this.nama = 'Bang Juan'
            console.log(this.nama)
        },
        update() {
            console.log('Weh Brubah Nih Jadi'+this.nama)
        }
    }
</script>