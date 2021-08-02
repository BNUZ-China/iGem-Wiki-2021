<template>
<div>
  <Content_navigation_item v-for="(dis, item) in anchor_distances"
                           :activate="item === active_item_index"
                           :key="item"
                           :click_link="dis">{{item}}</Content_navigation_item>
</div>
</template>

<script>
import Content_navigation_item from "@/components/content_navigation_item";

export default {
  name: "content_navigation",
  components: {Content_navigation_item},
  props: {
    active_item_index: Number,
    anchor_distances: Array
  }
}
</script>

<style scoped>

</style>