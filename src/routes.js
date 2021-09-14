import {createRouter,createWebHistory} from "vue-router";
import aboutPage from './components/aboutPage.vue'
import Body from './components/body.vue'
const routes=[
    {
        path:'/aboutPage/:id',
        name:"about",
        component:aboutPage,
    },{
        path:"/",
    
        component:Body
    }
    
]




const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router;