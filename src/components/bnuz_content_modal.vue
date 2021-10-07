<template>
<div>
  <div>
    <!-- Using value -->
    <b-button v-b-modal="'my-modal'">Show Modal</b-button>

    <!-- The modal -->
    <b-modal id="my-modal">Hello From My Modal!</b-modal>
  </div>
</div>
</template>

<script>
export default {
  name: "bnuz_content_modal"
}
</script>

<style scoped>

</style>