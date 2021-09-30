<template>
  <div class="bnuz-content-anchor-maq3zrn6 roundRect" :hint_text="hint_text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content_navigation_anchor",
  props: ['hint_text']
}
</script>

<style scoped>
.roundRect {
  padding: 20px;
  background-color: rgba(238, 214, 214, 0.72);;
  border-radius: 20px;
  margin: 16px 0;
}
</style>