<template>
  <div>
  <!--   content   -->
    <slot></slot>
  </div>
</template>

<script>
import static_reflection_dict from './static_reflection_dict'
// var sd = static_reflection_dict;
import window from "@/components/window";

export default {
  name: "AppRoot",
  data() {
    return {
      static_reflection_dict
    }
  },
  mounted() {
    // let imgs = document.getElementsByTagName('img');
    // for (let img of imgs) {
    //   let filename = img.src.split('/').pop();
    //   img.src = this.static_reflection_dict[filename]
    // }
    window.isDev = false;
  }
}
</script>

<style scoped>

</style>