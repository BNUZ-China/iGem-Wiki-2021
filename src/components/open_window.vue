<template>
  <div>
    <div class="zoom_container" ref="zoom_container" :style="{transform: 'scale('+ (zoom_scale/10).toString()+ ')'}">
      <div class="rotate_container">
        <div class="mask_layer_container">
          <div class="mask_layer mask_layer_left" :style="{transform: 'rotateY(' + rotate_degree.toString() + 'deg)'}">
            <img :src="window_pic" class="mask_image">
          </div>
          <div class="mask_layer mask_layer_right"
               :style="{transform: 'rotateY(-' + rotate_degree.toString() + 'deg)'}">
            <img :src="window_pic" class="mask_image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import window_pic from '../assets/window.png';

export default {
  name: "open_window",
  data() {
    return {
      rotate_degree: 0,
      zoom_scale: 10,
      window_pic
    }
  },
  mounted() {
    this.$refs.zoom_container.addEventListener('animationend', this.windowsOpenEnd);
    this.onScrolling();
  },
  methods: {
    windowsOpenEnd: function () {
      this.$refs.zoom_container.hidden = true;
    },
    onScrolling: function () {
      var vue_app = this;
      document.body.addEventListener("wheel", function (event) {
        let direction = event.deltaY > 0;
        if (direction) {
          if (vue_app.rotate_degree <= 77) {
            vue_app.rotate_degree += 3;
          } else {
            if (vue_app.zoom_scale <= 27)
              vue_app.zoom_scale += 1;
          }
        } else {
          if (vue_app.rotate_degree >= 3) {
            vue_app.rotate_degree -= 3;
          } else {
            if (vue_app.zoom_scale > 10)
              vue_app.zoom_scale -= 1
          }
        }
      })
    }
  }
}
</script>

<style scoped>
/*@keyframes mask_layer_left {*/
/*  0% {*/

/*  }*/
/*  100% {*/
/*    transform: rotateY(80deg);*/
/*  }*/
/*}*/

/*@keyframes mask_layer_right {*/
/*  0% {*/

/*  }*/
/*  100% {*/
/*    transform: rotateY(-80deg);*/
/*  }*/
/*}*/

/*@keyframes zoom {*/
/*  0% {*/

/*  }*/
/*  100% {*/
/*    transform: scale(2.7);*/
/*    display: none;*/
/*  }*/
/*}*/

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
  /*background-color: bisque;*/
  width: 100%;
  height: 100%;
  z-index: 10;
}

.absolute_center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0%);
}
</style>