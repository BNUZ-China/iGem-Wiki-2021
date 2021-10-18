<template>
  <div>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678"
     :onmouseover="this.src = himg2" :onmouseout="this.src = himg1">
  </div>
</template>

<script>
import conf from '@/wiki_config';
import himg1 from '@/assets/head_images/team/team1.png';
import himg2 from '@/assets/head_images/team/team2.png';

export default {
  name: "bnuz-team-headimage",
  data() {
    return {
      // TODO: set image URI
      himg1: conf.isDev ? himg1 : '',
      himg2: conf.isDev ? himg2 : ''
    }
  }
}
</script>

<style scoped>

</style>