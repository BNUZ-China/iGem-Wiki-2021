<template>
  <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
</template>

<script>
import head_image from '@/assets/description_headimage.png'

export default {
  name: "head_image",
  data() {
    return {
      head_image
    }
  }
}
</script>

<style scoped>
.bnuz-header-image {
  width: 100%;
  height: 40%;
}
</style>