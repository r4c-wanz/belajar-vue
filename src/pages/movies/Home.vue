<template>
    <div class="container-fluid">
        <h1 class="my-3 text-center">Movie List</h1>
        <h2 class="text-center">Total Movie: {{ totalMovies }}</h2>
        <div class="my-3">
            <input type="text" v-model="keyword" id="" class="form-control w-100" placeholder="Search Here...">
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" v-for="movie in movies" :key="movie.imdbID">
                <div class="card mb-3">
                    <div class="card-header">
                        <img :src="movie.Poster" alt="Movie Image" class="w-100">
                    </div>
                    <div class="card-body">
                        <h4>{{ movie.Title }}</h4>
                        <p>Release Date: {{ movie.Year }}</p>
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
                totalMovies: 0,
                keyword: ''
            }
        },
        watch: {
            keyword(value) {
                this.fetchMovie()
            }
        },
        created() {
            this.fetchMovie()
        },
        methods: {
            fetchMovie() {
                fetch(`http://www.omdbapi.com/?apikey=&s=${this.keyword}&page=1`).then(response => response.json()).then(data => {
                    console.log(data)
                    if(data.Response) {
                        this.totalMovies = data.totalResults
                        this.movies = data.Search
                    }
                })
            }
        }
    }
</script>