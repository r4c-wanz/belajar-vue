<template>
    <div class="container-fluid">
        <h1 class="my-3 text-center">Movie List</h1>
        <h2 class="text-center">Total Movie: {{ totalMovies }}</h2>
        <div class="my-3">
            <input type="text" v-model="keyword" id="" class="form-control w-100" placeholder="Search Here...">
        </div>
        <div v-if="loading">
            <!-- <h1 class="text-center">Loading....</h1> -->
            <loading></loading>
        </div>
        <div v-else>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div v-else>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" v-for="movie in movies" :key="movie.imdbID">
                        <div class="card mb-3">
                            <div class="card-header">
                                <img :src="movie.Poster" alt="Movie Image" class="w-100">
                            </div>
                            <div class="card-body">
                                <h4><router-link to="'movie/'+movie.imdbID">{{ movie.Title }}</router-link></h4>
                                <p>Release Date: {{ movie.Year }}</p>
                                <hr>
                                <p>{{ movie.Type }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav v-if="totalMovies != 0" aria-label="Page navigation example" class="d-flex justify-content-center my-4">
                    <ul class="pagination">
                        <li class="page-item"><a @click="page--" class="page-link" href="#">Previous</a></li>
                        <div v-for="page in pagination" :key="page.pageId">
                            <li class="page-item"><a class="page-link" href="">{{ pagination }}</a></li>

                        </div>
                        <li class="page-item"><a @click="page++" class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '../../components/Loading.vue'
    export default {
        components: {
            Loading
        },
        data() {
            return {
                movies: [],
                totalMovies: 0,
                keyword: '',
                error: false,
                loading: false,
                page: 1,
                pagination: []
            }
        },
        watch: {
            keyword(value) {
                this.page = 1
                this.fetchMovie()
            },
            page(value) {
                if(value <= 0) {
                    this.page = 1
                }
                this.fetchMovie()
            },
            pagination() {
                
                this.pagination()
            }
        },
        methods: {
            fetchMovie() {
                this.loading = true
                fetch(`http://www.omdbapi.com/?apikey=&s=${this.keyword}&page=${this.page}`).then(response => response.json()).then(data => {
                    console.log(data)
                    if(data.Response == 'True') {
                        this.error = false
                        this.totalMovies = data.totalResults
                        this.movies = data.Search
                    }else {
                        this.error = data.Error
                    }

                    this.loading = false
                })
            },
            pagination() {
                fetch(`http://www.omdbapi.com/?apikey=&s=${this.keyword}&page=${this.page}`).then(response => response.json()).then(data => {
                    console.log(data)
                    counter = 1;
                    while( counter <  data.totalResults){
                        console.log( counter );
                        counter++;
                        console.log( 'Test' );
                    }
                })
            }
        }
    }
</script>