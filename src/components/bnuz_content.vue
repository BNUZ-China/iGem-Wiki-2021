<template>
  <b-container class="bunz-content" ref="bnuz_content">
    <b-row align-h="end">
      <b-col cols="3">
        <Content_navigation v-if="anchors_length !== undefined"
                            :anchor_distances="anchor_distances"
                            :active_item_index="active_navigation_item_index"
                            :multi-col="multiCol"
                            ref="content_navigation"
                            class="bnuz-content-nav-sticky"></Content_navigation>
      </b-col>
<!--      <b-col cols="3" ref="bnuz-content-nav-container" :class="{-->
<!--          'bnuz-content-nav': content_navigation_style.isNormal,-->
<!--          'bnuz-content-nav-bottom': content_navigation_style.isBottom,-->
<!--          'bnuz-content-nav-float': content_navigation_style.isFixed-->
<!--        }" :style="{-->
<!--          top: fixed_top,-->
<!--          left: fixed_left-->
<!--        }">-->
<!--        -->
<!--      </b-col>-->
      <b-col cols="9" ref="bnuz-content-container" class="bnuz-content-container">
        <div class="roundRect">
          <div class="bnuz-text">
            <slot></slot>
          </div>
        </div>
      </b-col>

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

      multiCol: true,
      content_width: 300
    }
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll: function () {
      if (this.trigger_value !== undefined) return
      this.content_width = this.$refs.bnuz_content.width;
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
  background-color: rgba(238, 214, 214, 0.72);;
  border-radius: 20px;
}

.bunz-content {
  padding: 16px;
  margin-top: 64px;
  width: 85vw;
  max-width: 85vw;
  overflow: visible;
}

.bnuz-content-nav {
  position: relative;
}

.bnuz-content-nav-bottom {
  align-self: flex-end;
}

.bnuz-content-nav-float {
  position: fixed;
  top: 200px;
  left: 100px;
  /*width: calc(100vw / 33);*/
}

.bnuz-content-nav-sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 100px;
  overflow: visible;
}
</style>