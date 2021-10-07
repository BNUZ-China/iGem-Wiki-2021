<template>
  <div class="bnuz-content-anchor-maq3zrn6 roundRect bnuz_content_paragraph" :hint_text="hint_text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bnuz_content_paragraph",
  props: ['hint_text']
}
</script>

<style scoped>
.bnuz_content_paragraph {
  margin-top: 32px;
  line-height: 32px;
}
</style>