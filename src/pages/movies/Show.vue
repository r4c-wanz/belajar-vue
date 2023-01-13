<template>
    <div>
        <div>
            {{ movie }}
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$route.params.id)
            
            fetch(`http://www.omdbapi.com/?apikey=&i=${this.$route.params.id}`).then(response => response.json())
            .then(data => {
                if(data.Response == 'True') {
                    this.movie = data
                }else {

                }
            })
        },
        data() {
            return {
                movie: null,
            }
        }
    }
</script>