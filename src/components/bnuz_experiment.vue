<template>
<div class="roundRect">
  <slot name="text"></slot>
  <b-button v-b-modal="`${name}-bnuz-experiment-modal-wajeblq31`" class="bnuz-content-modal-button">
    Click here for detailed steps
  </b-button>
  <b-modal size="xl" :id="`${name}-bnuz-experiment-modal-wajeblq31`" :title="title" ok-only>
    <slot name="modal-body"></slot>
  </b-modal>
</div>
</template>

<script>

export default {
  name: "bnuz_experiment",
  components: {
  },
  props: {
    name: String
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.roundRect {
  padding: 20px;
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid #ed8555
}
</style>