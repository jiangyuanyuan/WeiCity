<template>
  <div id="container" class="mymap"></div>
</template>
<script>

  import AMap from 'AMap';   //在页面中引入高德地图

  export default {
    mounted(){
      this.loadmap();     //加载地图和相关组件
    },
    methods: {
      loadmap(){
        const map = new AMap.Map('container', {
          zoom: 9
        });
      }
    }
  }
</script>
<style scoped>
  .mymap{
    width: 300px;
    height: 300px;
  }
</style>

