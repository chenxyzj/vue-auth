<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link  to="/" class="navbar-brand">Home</router-link>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>          
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
          <li class="nav-item">
            <router-link to="/login" class="nav-link" @click="logout">Logout</router-link>
          </li>
        </ul>        
      </div>
    </div>
  </nav>
</template>

<script>
// import { useStore } from 'vuex';
/* eslint-disable */ 
    export default {
        name: 'Nav',
        // data(){
        //     return{
        //         // store: useStore()
        //     }
        // },
        computed:{
            auth(){
                return this.$store.state.authenticated
            }
        },
        methods:{
            async logout(){
                await fetch('http://192.168.1.106:8000/api/logout', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                mode:'cors'
               })

               await this.$store.dispatch('set_auth',false)
            }
        }
    }
</script>

<style scoped>

</style>