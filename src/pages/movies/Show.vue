<template>
    <div>
        <div class="container-fluid mt-3">
            <div class="row">
                <div class="col-3">
                    <img :src="movie.Poster" alt="Movie Image" class="w-100" style="border-radius: 16px;" draggable="false"/>
                </div>
                <div class="col-9">
                    <div class="header-detail">
                        <h1 class="text-center">{{ movie.Title }}</h1>
                        <p>{{ movie.Year }} • {{ movie.Runtime }}</p>
                    </div>
                    <p>{{ movie.imdbRating }}</p>
                    <p>Genre: {{ movie.Genre }}</p>
                    <p>Production: {{ movie.Production }}</p>
                    <p>Director: {{ movie.Director }}</p>
                    <p>Actor: {{ movie.Actors }}</p>
                    <p>Plot: {{ movie.Plot }}</p>
                    <p>Ratings:
                        <ul v-for="rating in movie.Ratings">
                            <li>Source: {{ rating.Source }}</li>
                            <li>Value: {{ rating.Value }}</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        <!-- {{ movie }} -->
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
                }else {}
            })
        },
        data() {
            return {
                movie: null,
            }
        }
    }
</script>