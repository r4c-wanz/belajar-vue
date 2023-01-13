<template>
    <div></div>
</template>

<script>
    export default {
        created() {
            console.log(this.$ruote.params)
            
            fetch(`http://www.omdbapi.com/?apikey=&i=${this.$ruote.params}`).then(response => response.json()).then(data => {})
        },
        data() {
            return {
                movie: null,
            }
        }
    }
</script>