<template>
    <div class="container-fluid">
        <h1 class="my-3 text-center">Movie List</h1>
        <h2 class="text-center">Total Movie: {{ totalMovies }}</h2>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" v-for="movie in movies" :key="movie.imdbID">
                <div class="card mb-3">
                    <div class="card-header">
                        <img :src="movie.Poster" alt="" class="w-100">
                    </div>
                    <div class="card-body">
                        <h4>{{ movie.Title }}</h4>
                        <p>Release Date: {{ movie.year }}</p>
                        <hr>
                        <p>{{ movie.Type }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: [],
                totalMovies: 0
            }
        },
        created() {
            fetch('http://www.omdbapi.com/?apikey=&s=').then(response => response.json()).then(data => {
                console.log(data)
                this.totalMovies = data.totalResults
                this.movies = data.search
            })
        }
    }
</script>