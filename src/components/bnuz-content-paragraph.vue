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

</style>