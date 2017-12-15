import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import './css/normal.css';

Vue.use(VueRouter);
var vm=new Vue({
  mounted:function(){
      let oHtml=document.documentElement;
      if(oHtml.clientWidth>1100){
        oHtml.style.fontSize=1100/7.5+"px";
      }else{
        oHtml.style.fontSize=oHtml.clientWidth/7.5+"px";
      }
     
  },
  el: '#app',
  render: h => h(App)
})



