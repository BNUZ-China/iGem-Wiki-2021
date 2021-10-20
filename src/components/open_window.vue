<template>
  <div>
    <div class="zoom_container"
         ref="zoom_container"
         :class="{zoom_window: zoom}"
         :style="{transform: 'scale('+ (zoom_scale/10).toString()+ ')'}">
      <div @click="windowClicked" ref="windows">
        <!-- 被点击后立刻消失 -->
        <transition enter-active-class="animate__fadeIn animate__animated animate__fast"
                    leave-active-class="animate__fadeOut animate__animated animate_duration_500ms">
          <div class="click-hint" v-if="!isWindowClicked">
            <div class="click-hint-circle animate__animated animate__zoomIn">

            </div>
            <div class="click-hint-text">
              CLICK
            </div>
          </div>
        </transition>
        <div class="mask_layer_container">
          <div class="window_container">
            <Window :opened="isWindowOpened" window_side="left" v-on:window-open-end="windowsOpenEnd"></Window>
            <Window :opened="isWindowOpened" window_side="right"></Window>
          </div>
        </div>
      </div>
      <img :src="wall" class="wall" alt="decoration">
    </div>
  </div>
</template>

<script>
import Window from "@/components/window";
import wall_pic from "@/assets/wall3.png"
import conf from '@/wiki_config';

export default {
  name: "open_window",
  components: {Window},
  data() {
    return {
      zoom: false,
      isWindowOpened: false,
      zoom_scale: 10,
      isWindowClicked: false,

      wall: conf.isDev ? wall_pic : 'https://2021.igem.org/wiki/images/1/1a/T--BNUZ-China--wall3.16fdf0a0.png\n'
    }
  },
  mounted() {
    this.$refs.windows.addEventListener('animationend', function (e) {
      //若不中止冒泡则会触发下方的animationend事件
      e.stopPropagation()
    });
    this.$refs.zoom_container.addEventListener('animationend', this.windowZoomEnd);
  },
  methods: {
    windowClicked: function () {
      if (!this.isWindowOpened && (!this.isWindowClicked)) {
        this.isWindowClicked = true;
        let vue = this;

        // 延迟500ms开始开窗
        setTimeout(function () {
          vue.isWindowOpened = true;
          vue.$emit('window-open-start')
        }, 500)
      }
    },
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
  position: relative;
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
  /*border-image: url("~@/assets/framework.png") 47;*/
  border-image: url("https://2021.igem.org/wiki/images/a/a0/T--BNUZ-China--framework.12dc2082.png") 47;
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

.click-hint {
  position: absolute;
  top: 70%;
  left: calc(50% - 50px);
  z-index: 900;
  width: 100px;
  font-family: Arial,sans-serif;
}

.click-hint-circle {
  --size: 24px;
  width: var(--size);
  height: var(--size);
  border-radius: calc(var(--size) / 2);
  background-color: rgba(17, 17, 17, 0.2);
  animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  margin: 0 auto;
}

.click-hint-text {
  text-align: center;
  font-size: large;
  /*background-color: rgba(222, 221, 222, 0.5);*/
  text-shadow: white 0 0 10px;;
}

.animate_duration_500ms {
  animation-duration: 500ms;
}
</style>