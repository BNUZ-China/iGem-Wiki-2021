<template>
  <div>
    <div class="zoom_container"
         ref="zoom_container"
         :class="{zoom_window: zoom}"
         :style="{transform: 'scale('+ (zoom_scale/10).toString()+ ')'}">
      <div @click="window_opened = true">
        <div class="mask_layer_container">
          <div class="window_container">
            <Window :opened="window_opened" window_side="left" v-on:window-open-end="windowsOpenEnd"></Window>
            <Window :opened="window_opened" window_side="right"></Window>
          </div>
        </div>
      </div>
      <img :src="wall" class="wall" alt="decoration">
    </div>
  </div>
</template>

<script>
import Window from "@/components/window";
import wall from "@/assets/wall3.png"

export default {
  name: "open_window",
  components: {Window},
  data() {
    return {
      zoom: false,
      window_opened: false,
      zoom_scale: 10,
      wall
    }
  },
  mounted() {
    this.$refs.zoom_container.addEventListener('animationend', this.windowZoomEnd);
    // this.onScrolling();
  },
  methods: {
    windowsOpenEnd: function () {
      this.zoom = true;
    },
    windowZoomEnd: function () {
      this.$refs.zoom_container.hidden = true;
      this.$emit('zoom-end')
    }
  }
}
</script>

<style scoped>
@keyframes zoom {
  0% {

  }
  100% {
    transform: scale(2.7);
    display: none;
  }
}

.zoom_window {
  /* FIXME zoom time set to 3s. only debug */
  animation: zoom 3s;
  animation-fill-mode: forwards;
}

.zoom_container {
  position: absolute;
  width: 100%;
  height: 100%;
  /*background-image: url("~@/assets/wall.png");*/
  /*z-index: 400;*/
}

.mask_layer_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /*z-index: 500;*/
}

.window_container {
  display: flex;
  flex-wrap: nowrap;
  border: 30px solid transparent;
  border-image: url("~@/assets/framework.png") 47;
  z-index: 700;
}

.wall {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 600;
  top: 0;
  left: 0;
  /*opacity: 0.3;*/
}
</style>