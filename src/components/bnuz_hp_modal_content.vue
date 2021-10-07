<template>
  <div>
    <div class="roundRect bnuz_hp_content">
      <!-- 原始文本 -->
      <slot name="direct-display-text"></slot>

      <div class="modal_button_container" :style="{left: (isLeft ? (-30 + 'px') : 'auto'), right: ((!isLeft) ? (-30 + 'px') : 'auto')}">
        <b-button class="modal_button" v-b-modal="name + '_i8dh51f3l'">

        </b-button>
      </div>

      <b-modal ok-only ok-title="I know!" size="xl" :title="name" :id="name + '_i8dh51f3l'">
        <slot name="modal-text"></slot>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "bnuz_hp_modal_content",
  props: {
    name: String,
    isLeft: Boolean
  },
  data() {
    return {
      modal_button_left_style: {
        left: -30 + 'px'
      },
      modal_button_right_style: {
        right: -30 + 'px'
      },
    }
  },
  computed: {
  }
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
</style>