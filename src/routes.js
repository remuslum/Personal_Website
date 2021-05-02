import Education from './components/Education.vue'
import Home from './components/Home.vue'

export default [
    {path: '/education', component: Education, props : true} , 
    {path: '/', component: Home, props : true} 
]