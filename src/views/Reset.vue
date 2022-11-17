<template>
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please reset your password</h1>
      <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
      <input v-model="data.password_confirm" type="password" class="form-control" placeholder="Password Confirm" required>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
</template>

<script>
/* eslint-disable */ 
import { useRoute, useRouter } from "vue-router";
    export default {
        name: 'Reset',
        data(){
            const route = useRoute();
            return {
                data:{
                    token: route.params.token,
                    password: '',
                    password_confirm:''
                },
                router: useRouter()
            }
        },
       methods:{
         async submit() {
            // console.log(this.data)
            await fetch('http://localhost:8000/api/reset', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
                body: JSON.stringify(this.data)
            })

            await this.router.push('/login')
         }
       }  
    }
</script>