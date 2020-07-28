<template>
  <div id="app">
    <p>this is the App</p>
    <app-header v-on:login='login'/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import * as queryString from 'query-string';

export default {
  components:{
    'app-header': Header
  },
  methods:{
    login: function(){
      const stringifiedParams = queryString.stringify({
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
        redirect_uri: process.env.VUE_APP_GOOGLE_REDIRECT_URL,
        scope: [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ].join(' '), // space seperated string
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
      });
      const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
      window.location.href = googleLoginUrl;
    }
  },
  mounted: async function(){
    const urlParams = queryString.parse(window.location.search);
    if(urlParams.error){
      console.log("Can't parse queryString");
    } else if(urlParams.code){
      console.log(urlParams);
      const response = await this.$http.post('https://oauth2.googleapis.com/token', {
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
        client_secret: process.env.VUE_APP_GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.VUE_APP_GOOGLE_REDIRECT_URL,
        grant_type: 'authorization_code',
        code: urlParams.code
      });

      console.log(response.data);
      
    }
  }
}
</script>

<style scoped>

</style>
