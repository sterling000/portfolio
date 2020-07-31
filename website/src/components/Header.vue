<template>
    <header>
        <div class="menu-btn" v-on:click='toggleMenu'>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

        <nav class="menu">
            <div class="menu-branding">
                <div class="portrait"></div>
            </div>
            <ul class="menu-nav">
                <li class="nav-item current">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/about" class="nav-link">About Me</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/work" class="nav-link">My Work</router-link>
                </li>
                <li class="nav-item ">
                    <router-link to="/contact" class="nav-link">How To Reach Me</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
    
<script>
export default {
    data(){
        return {
            showMenu: false
        }
    },
    methods:{
        toggleMenu(){
            if(!this.showMenu){
                this.menuBtn.classList.add('close');
                this.menu.classList.add('show');
                this.menuNav.classList.add('show');
                this.menuBranding.classList.add('show');
                this.navItems.forEach(item => item.classList.add('show'));

                this.showMenu = true;
            } else {
                this.menuBtn.classList.remove('close');
                this.menu.classList.remove('show');
                this.menuNav.classList.remove('show');
                this.menuBranding.classList.remove('show');
                this.navItems.forEach(item => item.classList.remove('show'));

                this.showMenu = false;
            }
        }
    },
    computed:{
        menuBtn(){
            return document.querySelector('.menu-btn');
        },
        menu(){
            return document.querySelector('.menu');
        },
        menuNav(){
            return document.querySelector('.menu-nav');
        },
        menuBranding(){
            return document.querySelector('.menu-branding');
        },
        navItems(){
            return document.querySelectorAll('.nav-item');
        },
    }    
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/config.scss";
@import "../assets/styles/menu.scss";

.text-secondary{
    color: $secondary-color;
}
@import "../assets/styles/mobile.scss"
</style>