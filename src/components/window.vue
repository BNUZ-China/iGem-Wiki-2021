<template>
  <div class="rotate-container">
    <img :src="window_pic" alt="a window"
         :class="{'rorateWindow-left': opened && isLeft, 'rorateWindow-right': opened && (!isLeft)}"
         class="window" ref="window">
  </div>
</template>

<script>
import window_pic from '@/assets/window.png';

export default {
  name: "window",
  data() {
    return {
      isLeft: this.window_side.toLowerCase() === 'left',
      window_pic: window.isDev ? window_pic : 'https://2021.igem.org/wiki/images/2/2e/T--BNUZ-China--homepage_hospital.png'
    }
  },
  mounted() {
    this.$refs.window.addEventListener('animationend', this.emitOpenWindowEnd);

  },
  methods: {
    emitOpenWindowEnd: function (event) {
      event.stopPropagation();
      this.$emit('window-open-end' ,'')
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    /**
     * 必须是left或right
     */
    window_side: {
      type: String,
      validator: function (value) {
        return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }
    }
  }
}
</script>

<style scoped>
.rorateWindow-left {
  animation: rotateWindowLeft 3s;
  transform-origin: left;
}

@keyframes rotateWindowLeft {
  0% {

  }
  100% {
    transform: rotateY(80deg);
  }
}

.rorateWindow-right {
  animation: rotateWindowRight 3s;
  transform-origin: right;
}

@keyframes rotateWindowRight {
  0% {

  }
  100% {
    transform: rotateY(-80deg);
  }
}

.mask_layer_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.window {
  animation-fill-mode: forwards;
}

.rotate-container {
  perspective: 2100px;
  height: 50%;
}
</style>