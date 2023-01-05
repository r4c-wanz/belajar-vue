<template>
    <div>
        <ul>
            <li v-for="guru in teachers" :key="guru.id">{{ guru.nama }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // teachers: ['Apel','Jeruk','Anggur','Lengkeng']
                teachers: [
                    {
                        id: 1,
                        nama: 'Apel'
                    },
                    {
                        id: 2,
                        nama: 'Jeruk'
                    },
                    {
                        id: 3,
                        nama: 'Anggur'
                    },
                    {
                        id: 4,
                        nama: 'Lengkeng'
                    }
                ]
            }
        }
    }
</script>

<style>
    
</style>
