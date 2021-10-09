<template>
  <div class="content-navigation-background">
    <div :class="multiCol ? 'navigation_flex_style' : ''"
         class="navigation_style">
      <Content_navigation_item v-for="(dis, item) in anchor_distances"
                               :activate="item === active_item_index"
                               :key="item"
                               :click_link="dis"
                               :multiCol="multiCol === 'true'"
                               :hint_text="hint_text_array[item]"
                               :nav_item_color="nav_item_color"
      >
        <!-- TODO 这里设置电梯按钮文本 -->
      </Content_navigation_item>

      <div class="bnuz-cursor" :style="{
        maskImage: `url('${require('../assets/content_navigation/cursor.png')}')`,
        backgroundColor: nav_item_color,
        transform: `translateY(calc(-62px * ${hint_text_array.length - active_item_index} - 10px)) translateX(-50px)`
      }">

      </div>
    </div>

    <!--  移动光标  -->

  </div>
</template>

<script>
import Content_navigation_item from "@/components/content_navigation_item";
import Nav_background from '@/assets/content_navigation/nav_background.jpg';
import cursor from '@/assets/content_navigation/cursor.png'
import conf from '@/wiki_config';

export default {
  name: "content_navigation",
  components: {Content_navigation_item},
  data() {
    return {
      // TODO: set image URI
      Nav_background: conf.isDev ? Nav_background : '',
      cursor: conf.isDev ? cursor : ''
    }
  },
  props: {
    active_item_index: Number,
    anchor_distances: Array,
    multiCol: Boolean,
    nav_item_color: String
  },
  computed: {
    hint_text_array: function () {
      let anchors = document.getElementsByClassName('bnuz-content-anchor-maq3zrn6');
      let result = [];
      for (let anchor of anchors) {
        result.push(anchor.attributes['hint_text'].value)
      }
      return result;
    }
  }
}
</script>

<style scoped>
.navigation_flex_style {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  /*按钮水平对齐*/
  width: 150px;
}

.content-navigation-background {
  --width: 220px;
  /*background-image: url("~@/assets/content_navigation/nav_background.jpg");*/
  width: var(--width);
  height: 418px; /* TODO 这里填写电梯背景图高度 */
  background-size: var(--width);
  background-repeat: no-repeat;

  /* 有关按钮垂直对齐 */
  padding-top: 130px;
}

/* TODO 在这里调整按钮的边距等数据 */
.navigation_style {
  margin: 0 auto;
}

.bnuz-cursor {
  width: 50px;
  height: 50px;
  background-color: #f4615c;
  mask-repeat: no-repeat;
  mask-size: contain;
  transition: transform 1s;
}
</style>