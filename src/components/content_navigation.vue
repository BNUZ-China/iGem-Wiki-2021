<template>
  <div class="content-navigation-background">
    <!--    <img :src="Nav_background">-->
    <div :class="multiCol ? 'navigation_grid_style' : ''"
         class="navigation_style">
      <Content_navigation_item v-for="(dis, item) in anchor_distances"
                               :activate="item === active_item_index"
                               :key="item"
                               :click_link="dis"
                               :multiCol="multiCol === 'true'"
      >{{ item }}
      </Content_navigation_item>
    </div>
  </div>
</template>

<script>
import Content_navigation_item from "@/components/content_navigation_item";
import Nav_background from '@/assets/content_navigation/nav_background.jpg';
// eslint-disable-next-line no-unused-vars
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
.navigation_grid_style {
  display: grid;
  grid-template-columns: repeat(2, 76px);
  column-gap: 24px;
  row-gap: 24px;
  /*width: 160px;*/
}

.content-navigation-background {
  background-image: url("~@/assets/content_navigation/nav_background.jpg");
  width: 285px;
  height: 534px; /* TODO 这里填写电梯背景图高度 */
  background-size: 285px;
  background-repeat: no-repeat;
}

/* TODO 在这里调整按钮的边距等数据 */
.navigation_style {

}
</style>