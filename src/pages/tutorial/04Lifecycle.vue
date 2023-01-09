<template>
    <div>
        <h1>Tutorial Lifecycle</h1>
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
            console.log(this.nama)
            this.nama = 'Bang Jono'
            console.log(this.nama)
        },
        mounted() {
            
        }
    }
</script>