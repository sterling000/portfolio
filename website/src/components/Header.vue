<template>
    <div id="app-header">
        <p>This is the Header Component</p>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><button v-on:click.prevent="login">Google</button></li>
        </ul>
    </div>
</template>

<script>
// import {bus} from '../main';

export default {
    methods:{
        login:function(){
            this.$emit('login');
        }
    }
}
</script>