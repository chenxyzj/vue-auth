<template>
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please set your email</h1>
        <input v-model="data.email" type="email" class="form-control mb-2" placeholder="name@example.com" required>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        <h4>{{message}}</h4>
    </form>
</template>

<script>
/* eslint-disable */ 
import { useRouter } from "vue-router";
    export default {
        name: 'Forgot',
        data() {
        return {
            data: {
                   email: ''
            },
            message:'',
            router: useRouter()
        }
       },
       methods:{
         async submit() {
            // console.log(this.data)
            const response = await fetch('http://localhost:8000/api/forgot', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                mode: 'cors',
                body: JSON.stringify(this.data)
            })

            // console.log(response)
            const result = await response.json();
            this.message = result.message + '\n You will be redirected to login page after 5 seconds...';

            await new Promise((resolve,reject)=>{
                setTimeout(resolve,5000);
            })

            await this.router.push('/login')

         }
       }        
    }
</script>
