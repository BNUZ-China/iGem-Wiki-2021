<template>
<!--  <div class="background_picture_style" :style="{backgroundImage: 'url('+src.toString()+')'}">-->
  <div class="background_picture_container">
    <img src="static/images/homepage_hospital.png" class="background_picture">
  </div>
</template>

<script>
export default {
  name: "background_picture",
  props: ['src']
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