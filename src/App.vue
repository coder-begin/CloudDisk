<template>

    <div class="container">

		<div class="content">
			<router-view></router-view>
		</div>  
		
		<nav class="nav">
			<ul class="list">
			
					<router-link to="/home" tag="li" active-class="disk_active" class="disk_bg">
            <span>网盘</span>
          </router-link>
				
					<router-link to="/share" tag="li" active-class="share_active" class="share_bg">
            <span>分享</span>
          </router-link>
					
				
					<router-link to="/transmission"  tag="li" active-class="trans_active" class="trans_bg">
          
            <span>传输列表</span>
          
          </router-link>
					
				
			
					<router-link to="/see"  tag="li" active-class="see_active" class="see_bg">
          
            <span>看吧</span>
          
          </router-link>
					
					<router-link to="/more" tag="li" active-class="more_active" class="more_bg">
          
            <span>更多</span>
          
          </router-link>
					
			</ul>
		</nav>
    </div>
    
</template>

<script>
import VueRouter from "vue-router";
import routes from "./routes.js";

const router = new VueRouter({
  routes
});

export default {
  router: router,
  data:function(){
      return{
        isFocus:false,
      }
  },
  methods:{
    focusChange:function(){
      console.log(this.$route)
    }

  }
};
</script>

<style scoped>
.container {
  width: 7.5rem;
  position: relative;
    margin: 0 auto;
}
.content {
  width: 100%;
  height: 12.36rem;
  overflow-x: hidden;
  overflow-y: auto;

}
.nav {
  width: 7.5rem;
  height: 0.97rem;
  border-top: 0.01rem solid #ccc;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left:-3.75rem; 
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  line-height: 0.97rem;
}
.list li {
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  font-size: 0.2rem;
}
.list li *{
	margin-top: 0.33rem;
}
.router-link-active {
  color: #3888ff;
}
.disk_bg {
  width: 1.5rem;
  height: 0.97rem;
  background: url("./assets/sprite.png") no-repeat center center;
  background-position: -4.6rem -8.9rem;
  background-size: 10rem 10rem;
}
.share_bg {
  width: 1.5rem;
  height: 0.97rem;
  background: url("./assets/sprite.png") no-repeat center center;
  background-position: -4.6rem -1.2rem;
  background-size: 10rem 10rem;
}
.trans_bg {
  width: 1.5rem;
  height: 0.97rem;
  background: url("./assets/sprite.png") no-repeat center center;
  background-position: -4.6rem -2.3rem;
  background-size: 10rem 10rem;
}
.see_bg {
  width: 1.5rem;
  height: 0.97rem;
  background: url("./assets/sprite.png") no-repeat center center;
  background-position: -4.6rem -3.4rem;
  background-size: 10rem 10rem;
}
.more_bg {
  width: 1.5rem;
  height: 0.97rem;
  background: url("./assets/sprite.png") no-repeat center center;
  background-position: -4.6rem -4.5rem;
  background-size: 10rem 10rem;
}
.disk_active{
    width: 1.5rem;
    height: 0.97rem;
    background: url("./assets/sprite.png") no-repeat center center;
    background-position: -4.6rem -0.1rem;
    background-size: 10rem 10rem;
    color: #3888FF;
}

.share_active{
   width: 1.5rem;
    height: 0.97rem;
    background: url("./assets/sprite.png") no-repeat center center;
    background-position: -6.2rem -0.1rem;
    background-size: 10rem 10rem;
     color: #3888FF;
}

.trans_active{
  width: 1.5rem;
    height: 0.97rem;
    background: url("./assets/sprite.png") no-repeat center center;
    background-position: -4.6rem -7.8rem;
    background-size: 10rem 10rem;
     color: #3888FF;
}

.see_active{
  width: 1.5rem;
    height: 0.97rem;
    background: url("./assets/sprite.png") no-repeat center center;
    background-position: -4.6rem -6.7rem;
    background-size: 10rem 10rem;
     color: #3888FF;
}

.more_active{
  width: 1.5rem;
    height: 0.97rem;
    background: url("./assets/sprite.png") no-repeat center center;
    background-position: -4.6rem -5.6rem;
    background-size: 10rem 10rem;
     color: #3888FF;
}


</style>
