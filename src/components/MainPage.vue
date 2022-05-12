<template>
    <div>
        <h1>This is a {{ info }}</h1>
        <p>FIRST PAGE</p>
    </div>
</template>

<script>

export default {
    name: 'MainPage',
    data() {
        return {
            info : "MAIN PAGE"
        }
    }
}
</script>
