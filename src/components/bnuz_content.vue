<template>
  <b-container class="bunz-content" ref="bnuz_content" v-scroll="onScrollBNUZ">
    <b-row align-h="end">
      <b-col cols="4" ref="bnuz-content-nav-container" :class="{
          'bnuz-content-nav': content_navigation_style.isNormal,
          'bnuz-content-nav-bottom': content_navigation_style.isBottom,
          'bnuz-content-nav-float': content_navigation_style.isFixed
        }" :style="{
          top: fixed_top,
          left: fixed_left
        }">
        <Content_navigation v-if="anchors_length !== undefined"
                            :anchor_distances="anchor_distances"
                            :active_item_index="active_navigation_item_index"
                            :multi-col="multiCol"></Content_navigation>
      </b-col>
      <b-col cols="7" ref="bnuz-content-container" class="bnuz-content-container">
        <div class="roundRect">
          <div class="bnuz-text">
            <slot></slot>
          </div>
        </div>
      </b-col>
      <b-col cols="1" class="col"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import Content_navigation from "@/components/content_navigation";

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

export default {
  name: "BNUZ_Content",
  components: {Content_navigation},
  data() {
    return {
      active_navigation_item_index: 0,
      content_navigation_style: {
        isNormal: true,
        isFixed: false,
        isBottom: false
      },
      // fixed状态下的top与left属性值
      fixed_top: 0,
      fixed_left: 0,

      anchor_distances: [],

      anchors_length: undefined,
      first_scroll: true,

      multiCol: false
    }
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll: function () {
      if (this.trigger_value !== undefined) return
      this.anchors = this.$refs.bnuz_content.getElementsByClassName('bnuz-content-anchor-maq3zrn6');
      this.anchors_length = this.anchors.length;

      var root_node = this.anchors[0];
      /**
       * 因为offsetTop的上界标准不是页面顶，所以要把所有的offsetParent的offsetTop求和
       */
      var getBaseTop = function () {
        var sum = 0;
        var this_node = root_node.offsetParent
        do {
          if (this_node.offsetTop !== undefined) sum += this_node.offsetTop;
          this_node = this_node.offsetParent;
        } while (this_node.offsetParent !== null);
        return sum;
      }

      var baseTop = getBaseTop();
      this.anchor_distances = [];
      for (var anchor of this.anchors) {
        this.anchor_distances.push(anchor.offsetTop + baseTop)
      }

      this.windowHeight = document.documentElement.clientHeight;
      this.trigger_value = this.windowHeight / 3;
    },
    updateNav: function () {
      // updateNav
      let scroll_location = document.documentElement.scrollTop;
      let k = undefined; // 表示第几个应该高亮
      let k_defined = false;

      for (let i = 0; i < this.anchors_length; i++) {
        if (scroll_location > this.anchor_distances[i] - this.windowHeight / 8) {
          k = i;
          k_defined = true;
        }
      }
      if (!k_defined) return;
      this.active_navigation_item_index = k;
    },
    moveNav: function () {
      // moveNav
      const trigger_value = this.trigger_value;
      const contentNav = this.$refs["bnuz-content-nav-container"];
      const contentText = this.$refs.bnuz_content;
      const boundingRect = contentNav.getBoundingClientRect();
      const top = trigger_value;
      const left = boundingRect.x;

      const numToPx = function (number) {
        return number.toString() + 'px';
      };

      // 到下方
      if (contentText.getBoundingClientRect().y < trigger_value) {
        // 判断是否到底部，双列
        const adder = this.multiCol ? contentNav.height : 0;
        if (this.windowHeight > contentText.getBoundingClientRect().bottom + adder) {
          // 底部
          this.content_navigation_style = {
            isNormal: true,
            isFixed: false,
            isBottom: true
          }
          this.fixed_top = 'auto';
          this.fixed_left = 'auto';
          return;
        }
        this.content_navigation_style = {
          isNormal: false,
          isFixed: true,
          isBottom: false
        }
        this.fixed_top = numToPx(top);
        this.fixed_left = numToPx(left);
      } else {
        // 返回的样式
        this.content_navigation_style = {
          isNormal: true,
          isFixed: false,
          isBottom: false
        }
        this.fixed_top = 'auto';
        this.fixed_left = 'auto';
      }
    },
    onScrollBNUZ: function () {
      //第一次运行
      if (this.first_scroll) {
        this.initScroll();
        this.first_scroll = false;
      }

      this.updateNav();
      this.moveNav();
    }
  }
}
</script>

<style scoped>
.bnuz-text {
  font-size: 20px;
  font-family: Arial, sans-serif;
}

.roundRect {
  padding: 20px;
  background-color: darkseagreen;
  border-radius: 20px;
}

.bunz-content {
  padding: 16px;
  margin-top: 64px;
}

.bnuz-content-nav {
  position: relative;
}

.bnuz-content-nav-bottom {
  align-self: flex-end;
}

.bnuz-content-nav-float {
  position: fixed;
  top: 400px;
  left: 100px;
  width: calc(100vw / 33);
}
</style>