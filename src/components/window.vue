<template>
  <div>
    <transition name="rotateWindow">
      <img :src="window_pic" alt="a window" :class="{rorateWindow: opened}">
    </transition>
  </div>
</template>

<script>
import window_pic from "@/assets/window.png";

export default {
  name: "window",
  data() {
    return {
      window_pic
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  }
}
</script>

<style scoped>
.rorateWindow {
  animation: rotateWindow 3s;
}

@keyframes rotateWindow {
  0% {

  }
  100% {
    transform: rotateY(80deg);
  }
}



</style>