<template>
  <div class="content-navigation-background">
    <div :class="multiCol ? 'navigation_flex_style' : ''"
         class="navigation_style">
      <Content_navigation_item v-for="(dis, item) in anchor_distances"
                               :activate="item === active_item_index"
                               :key="item"
                               :click_link="dis"
                               :multiCol="multiCol === 'true'"
      >{{ item + 1}}
        <!-- TODO 这里设置电梯按钮文本 -->
      </Content_navigation_item>
    </div>
  </div>
</template>

<script>
import Content_navigation_item from "@/components/content_navigation_item";
import Nav_background from '@/assets/content_navigation/nav_background.jpg';
import conf from '@/wiki_config';

export default {
  name: "content_navigation",
  components: {Content_navigation_item},
  data() {
    return {
      // TODO: set image URI
      Nav_background: conf.isDev ? Nav_background : ''
    }
  },
  props: {
    active_item_index: Number,
    anchor_distances: Array,
    multiCol: Boolean
  }
}
</script>

<style scoped>
.navigation_flex_style {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 170px;
}

.content-navigation-background {
  --width: 250px;
  background-image: url("~@/assets/content_navigation/nav_background.jpg");
  width: var(--width);
  height: 467px; /* TODO 这里填写电梯背景图高度 */
  background-size: var(--width);
  background-repeat: no-repeat;

  /* 有关按钮对齐 */
  padding-top: 54%;
}

/* TODO 在这里调整按钮的边距等数据 */
.navigation_style {
  margin: 0 auto;
}
</style>