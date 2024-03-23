<template>
  <div id="top"></div>
  <div 
    class="header" >
    <div class="container">
      <a href="#" class="logo" :title="webSiteTitle"></a>

      <ul class="nav">
        <li><router-link :class="{ 'active': controllerName === 'index' }" to="/">首页</router-link></li>
        <li><router-link :class="{ 'active': controllerName === 'about' }" to="/about">帮鲜介绍</router-link></li>
        <li><router-link :class="{ 'active': controllerName === 'system' }" to="/system">成为店长</router-link></li>
        <li> <router-link :class="{ 'active': controllerName === 'team' }" to="/team">加盟合作</router-link></li>
        <li><router-link :class="{ 'active': controllerName === 'about' }" to="/buy">我要下单</router-link></li>
        <li><router-link :class="{ 'active': controllerName === 'Contact' }" to="/contact">联系我们</router-link></li>
        <div class="bk"></div>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useWindowScroll } from '@vueuse/core'
import { useRouter } from 'vue-router';

const router = useRouter();
const { x, y } = useWindowScroll()
console.log(x.value) 
// y.value = 100 // scroll y to 100
const controllerName = ref('');
const webSiteTitle = '帮鲜官网'; 

const setControllerName = (route) => {
  const path = route.path;
  controllerName.value = getControllerNameFromPath(path);
};

const getControllerNameFromPath = (path) => {
  if (path === '/') {
    return 'Index';
  } else {
    return path.replace('/', '');
  }
};



onMounted(() => {


  setControllerName(router.currentRoute.value);

});



</script>