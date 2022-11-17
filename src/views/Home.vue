<template>
    {{message}}
</template>

<script>
// import { useStore } from "vuex";
/* eslint-disable */ 
export default {
    name: 'Home',
    data(){
        return {
            message: 'You are not logged in.',
            // store: useStore()
        }
    },
    async mounted(){
        try {

            const response = await fetch('http://192.168.1.106:8000/api/user', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                mode: 'cors'
            })
            console.log("responseis:",response)
            if(response.ok) {
                const content = await response.json();
                console.log("contentis:",content)
                this.message = `Hello, ${content.name} !`
                // console.log("authenticated:",this.$store.state.authenticated)
                await this.$store.dispatch('set_auth',true)
            }
        } catch(e) {
            console.log('Err is:',e)
            await this.$store.dispatch('set_auth',false)
        }
    }
    
}
</script>
