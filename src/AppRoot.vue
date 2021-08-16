<template>
  <div>
  <!--   content   -->
    <slot></slot>
  </div>
</template>

<script>
// import window from "@/components/window";

export default {
  name: "AppRoot",
  mounted() {
    // let imgs = document.getElementsByTagName('img');
    // for (let img of imgs) {
    //   let filename = img.src.split('/').pop();
    //   img.src = this.static_reflection_dict[filename]
    // }
    // window.isDev = true;
  }
}
</script>

<style scoped>

</style>