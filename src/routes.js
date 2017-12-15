import  Home from './components/Home.vue';
import  Share from './components/Share.vue';
import  Transmission from './components/Transmission.vue';
import  See from './components/See.vue';
import  More from './components/More.vue';



export default [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/transmission', component: Transmission },
    { path: '/see', component: See },
    { path: '/share', component: Share },
    { path: '/more', component: More },
    { path: '*', redirect: "/home" }
]