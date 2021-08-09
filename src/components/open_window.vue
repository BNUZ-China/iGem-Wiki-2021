<template>
  <div>
    <div class="zoom_container"
         ref="zoom_container"
         :class="{zoom_window: zoom}"
         :style="{transform: 'scale('+ (zoom_scale/10).toString()+ ')'}">
      <div @click="window_opened = true">
        <div class="mask_layer_container">
          <Window :opened="window_opened" window_side="left" v-on:window-open-end="windowsOpenEnd"></Window>
          <Window :opened="window_opened" window_side="right"></Window>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Window from "@/components/window";

export default {
  name: "open_window",
  components: {Window},
  data() {
    return {
      zoom: false,
      window_opened: false,
      zoom_scale: 10,
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
      document.body.style.overflowX = 'auto';
      document.body.style.overflowY = 'auto';
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
  animation: zoom 3s;
  animation-fill-mode: forwards;
}

.zoom_container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.mask_layer_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>