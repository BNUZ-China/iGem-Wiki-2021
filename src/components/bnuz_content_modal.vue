<template>
<div>
  <b-button v-b-modal="`${name}-bnuz-content-modal-wfrjv7eit2`" class="bnuz-content-modal-button">
    <slot name="modal-icon"></slot>
  </b-button>
  <b-modal size="xl" :id="`${name}-bnuz-content-modal-wfrjv7eit2`" :title="title">
    <slot name="modal-body"></slot>
  </b-modal>
</div>
</template>

<script>
export default {
  name: "bnuz_content_modal",
  props: {
    name: String,
    title: String
  }
}
</script>

<style scoped>
.bnuz-content-modal-button, .bnuz-content-modal-button:hover,
.bnuz-content-modal-button:visited, .bnuz-content-modal-button:active, .bnuz-content-modal-button:focus {
  --all-color: rgba(255, 255, 255, 100);
  color: var(--all-color);
  background-color: var(--all-color);
  border-color: var(--all-color);
  outline: none;
  box-shadow: none;
}
</style>