<template>
    <div id="nav">
        <div class='sign-out' @click="signOut" v-if="profile">Sign out</div>
        <div id="google-signin-btn" v-show="!profile"></div>
        <div class='profileImage' v-show="profile"></div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    computed:{
        profile(){ 
            return this.$store.state.profile;
        },
        profileImageUrl(){
            return this.$store.state.profile.getImageUrl();
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
            //bus.$emit('signed-in', profile);
            
            var signInBtn = document.querySelector('google-signin-btn');
            var profileImage = document.querySelector('.profileImage');
            profileImage.style.backgroundImage = "url('" + this.profileImageUrl + "')";
        },
        onFailure: function(error){
            console.log(error);
        },
        signOut: function(){
            console.log('sign-out');
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

<style lang="scss">
#nav{
    display: inline-block;
    z-index: 2;
    height: 6vh;
    width: 100%;

    .sign-out{
        display: inline-flex;
        float: right;
        background: #fff;
        width: 80px;
        height: 50px;
        padding: 10px;
        right: 35px;
        color: #000;
        margin: 5px;
        cursor: pointer;
        border-radius: 0.3rem;
    }

    .profileImage{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: #fff  2px solid;
        background-size: cover;
        float: right;
        background-color: #fff;
        margin: 5px;
    }

    #google-signin-btn{
        display: inline-flex;
        float: right;
        margin: 0;
        border: none;
        padding: 0;
    }
}


</style>