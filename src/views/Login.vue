<template>
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <input v-model="data.email" type="email" class="form-control" placeholder="name@example.com" required>
      <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
      <div class="mb-2">
          <router-link to="/forgot">Forgot password?</router-link>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
</template>

<script>
/* eslint-disable */ 
import { useRouter } from "vue-router";
    export default {
        name: 'Login',
        data() {
        return {
            data: {
                email: '',
                password: ''
            },
            router: useRouter()
        }
       },
       methods:{
         async submit() {
            console.log(this.data)
            await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify(this.data),
                mode: 'cors'
            })

            await this.router.push('/')
         }
       }        
    }
</script>

<style scoped>

</style>
