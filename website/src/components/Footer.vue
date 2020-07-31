<template>
    <div>
        <footer id="main-footer">Copyright &copy; 2020</footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "../assets/styles/config.scss";

#main-footer{
    text-align: center;
    padding: 1rem;
    background: darken($primary-color, 10);
    color: set-text-color($primary-color);
    height: 6.5vh;
}
</style>