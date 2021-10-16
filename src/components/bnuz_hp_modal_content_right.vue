<template>
  <b-row class="bnuz-hp-content-modal-item bnuz-hp-content-modal-item-right">
    <b-col>
    </b-col>
    <b-col>
    </b-col>
    <b-col class="bnuz-hp-content-modal-item-icon">
      <slot name="icon"></slot>
    </b-col>
    <b-col class="bnuz-hp-content-modal-item-text">
      <slot name="text"></slot>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "bnuz_hp_modal_content_right",
  data() {
    return {
      modal_button_left_style: {
        left: -30 + 'px'
      },
      modal_button_right_style: {
        right: -30 + 'px'
      }
    }
  },
  computed: {}
}
</script>

<style scoped>
.roundRect {
  padding: 20px;
  background-color: rgb(220, 230, 237);
  border-radius: 20px;
  margin: 16px 0;
}

.bnuz_hp_content {
  position: relative;
}

.modal_button_container {
  position: absolute;
  top: -30px;
}

.modal_button {
  height: 64px;
  width: 64px;
  background-color: blue;
  border-radius: 32px;
}

.bnuz-hp-content-modal-item-icon {
  height: 14vh;
}

.bnuz-hp-content-modal-item-text {
  line-height: 15vh;
}

@font-face {
  font-family: "General_hp_title";
  /*TODO change url*/
  src: url('https://fonts.gstatic.com/s/merienda/v9/gNMAW3x8Qoy5_mf8uWu-FZ-13MY.woff2');
}

.bnuz-hp-content-modal-item-text {
  line-height: 54px;
  font-family: General_hp_title,serif;
  font-size: 32px;
  transform: translateX(-40px);
  text-align: start;
}
</style>