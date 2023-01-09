<template>
    <div class="container-fluid">
        <h1 class="my-3">Movie List</h1>
        <h2>Total Movie: </h2>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card">
                    <div class="card-header">

                    </div>
                    <div class="card-body">
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident soluta perspiciatis cumque quam odit neque earum qui, accusamus laborum iste, illum vel atque minima aliquam rerum dolores sit optio voluptate?</p>
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
                movies: []
            }
        },
        created() {
            fetch('http://www.omdbapi.com/?apikey=&s=Godzilla').then(response => response.json()).then(data => {
                console.log(data)
            })
        }
    }
</script>