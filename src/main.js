import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import VueClipboard from 'vue3-clipboard'
import Vuex from 'vuex'
import { createStore } from 'vuex'


const store=createStore({
    state(){
        return{
            count:0
        };
    },
    mutations:{
        increment(state){
            state.count++
        }
    }
})




const app=createApp(App)
app.use(router)
app.use(Vuex)
app.use(store)
app.use(VueClipboard)
app.mount('#app')
