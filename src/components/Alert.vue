<template>
    <div class="alert" :class="udin">{{ text }}, {{ udin }}</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        udin: {
            type: String,
            default: ''
        }
    }
}
</script>