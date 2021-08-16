<template>
<!--  <div class="background_picture_style" :style="{backgroundImage: 'url('+src.toString()+')'}">-->
  <div class="background_picture_container">
    <img :src="homepage_hospital" class="background_picture" alt="decoration">
  </div>
</template>

<script>
import homepage_hospital from '@/assets/homepage_hospital.png'
import conf from '@/wiki_config'

export default {
  name: "background_picture",
  props: ['src'],
  data() {
    return {
      // TODO homepage_hospital URI
      homepage_hospital: conf.isDev ? homepage_hospital : ''
    }
  }
}
</script>

<style scoped>
.background_picture_container {
  position: fixed;
  top: 0;
  left: 0;
  /*background-image: url("../assets/homepage_hospital.png");*/
  width: 100vw;
  height: 100vh;
  z-index: -100;
}

.background_picture {
  height: 100%;
  width: 100%;
  object-fit: scale-down;
}
</style>