<template>
<div>
  <div class="zoom_container" ref="zoom_container">
    <div class="rotate_container">
      <div class="mask_layer_container">
        <div class="mask_layer mask_layer_left">
          <img src="static/images/window.png" class="mask_image">
        </div>
        <div class="mask_layer mask_layer_right">
          <img src="static/images/window.png" class="mask_image">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "open_window",
  mounted() {
    this.$refs.zoom_container.addEventListener('animationend', this.windowsOpenEnd);
  },
  methods: {
    windowsOpenEnd: function () {
      this.$refs.zoom_container.hidden = true;
    }
  }
}
</script>

<style scoped>
@keyframes mask_layer_left {
  0% {

  }
  100% {
    transform: rotateY(80deg);
  }
}

@keyframes mask_layer_right {
  0% {

  }
  100% {
    transform: rotateY(-80deg);
  }
}

@keyframes zoom {
  0% {

  }
  100% {
    transform: scale(2.7);
    display: none;
  }
}

.mask_layer {
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-delay: 1s;
}

.mask_layer_left {
  animation-name: mask_layer_left;
  transform-origin: 0 50%;
}

.mask_layer_right {
  animation-name: mask_layer_right;
  transform-origin: 100% 50%;
}

.rotate_container {
  perspective: 2100px;

  height: 50%;
}

.mask_layer_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.zoom_container {
  position: absolute;
  animation-name: zoom;
  animation-delay: 5s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  background-color: bisque;
  width: 100%;
  height: 100%;
}

.absolute_center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0%);
}
</style>