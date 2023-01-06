<template>
    <div>
        <alert text="Login Bosss" udin="alert-success"></alert>
        <h1>Belajar Componnet</h1>
        <alert text="Logout Bosss" udin="alert-danger"></alert>
    </div>
</template>

<script>
    import Alert from '../../components/Alert.vue'
    
    export default {
        components: {
            Alert
        }
    }
</script>