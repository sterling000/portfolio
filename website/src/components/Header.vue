<template>
    <div id="nav">
        <p>This is the Header Component</p>
        <div id="google-signin-btn"></div>
        <a href="#" class="sign-out" @click="signOut" v-if="profile">Sign out</a>
        <div v-if="profile" class="">
            <h2>Signed In User Profile</h2>
            <pre>{{ profile }}</pre>
        </div>
        <div v-if="!profile">
            <h2>Signed out.</h2>
        </div>
    </div>
</template>

<script>
import {bus} from '../main';

export default {
    data() {
        return {
        }
    },
    computed:{
        profile(){ 
            return this.$store.state.profile;
        }
    },
    methods:{
        onSignin: function(googleUser){
            // Useful data for your client-side scripts:
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());

            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);
            this.$store.state.profile = profile;
            bus.$emit('signed-in', profile);
        },
        onFailure: function(error){
            console.log(error);
        },
        signOut: function(){
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                location.reload(true);
            });
        },
        renderGoogleLoginButton: function(){
            gapi.signin2.render('google-signin-btn', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'theme': 'dark',
                'onsuccess': this.onSignin,
                'onfailure': this.onFailure
            });
        }
    },
    mounted(){
        window.addEventListener("google-loaded", this.renderGoogleLoginButton);
    }
}
</script>