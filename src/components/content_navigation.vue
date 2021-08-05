<template>
<div :class="multiCol ? 'navigation_grid_style' : ''">
  <Content_navigation_item v-for="(dis, item) in anchor_distances"
                           :activate="item === active_item_index"
                           :key="item"
                           :click_link="dis"
                           :multiCol="multiCol === 'true'">{{item}}</Content_navigation_item>
</div>
</template>

<script>
import Content_navigation_item from "@/components/content_navigation_item";

export default {
  name: "content_navigation",
  components: {Content_navigation_item},
  props: {
    active_item_index: Number,
    anchor_distances: Array,
    multiCol: Boolean
  }
}
</script>

<style scoped>
.navigation_grid_style {
  display: grid;
  grid-template-columns: repeat(2, 76px);
  column-gap: 24px;
  row-gap: 24px;
  width: 160px;
}
</style>