<template>
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>
      <input v-model="data.name" class="form-control" placeholder="name" required>
      <input v-model="data.email" type="email" class="form-control" placeholder="name@example.com" required>
      <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
</template>

<script>
/* eslint-disable */ 
import {useRouter} from 'vue-router';
export default {
       name: 'Register' ,
       data() {
        return {
            data: {
                name: '',
                email: '',
                password: ''
            },
            router: useRouter()
        }
       },
       methods:{
         async submit() {
            // console.log(this.data)
            await fetch('http://192.168.1.106:8000/api/register', {
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
