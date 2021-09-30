<template>
  <div v-b-tooltip.hover :title="hint_text" @click="contentNavJumpto" :class="classString">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content_navigation_item",
  props: {activate: Boolean, click_link: Number, multiCol: Boolean, hint_text: String},
  methods: {
    contentNavJumpto: function () {
      // i是该按钮的序号
      var destination_height = this.click_link;
      window.scrollTo({
        top: destination_height - document.documentElement.clientHeight / 8 + 10,
        // top: destination_height,
        behavior: 'smooth'
      });

    }
  },
  computed: {
    classString: function () {
      var result = 'bnuz-content-nav-item-kp6mdeaz';
      if (this.activate) {
        result += ' bnuz-content-nav-item-active-kp6mdeaz';
      } else {
        result += ' bnuz-content-nav-item-no-active-kp6mdeaz'
      }
      if (this.multiCol) {
        result += ' bnuz-content-nav-item-grid-kp6mdeaz'
      } else {
        result += ' bnuz-content-nav-item-no-grid-kp6mdeaz'
      }
      return result;
    }
  }
}
</script>

<style scoped>
.bnuz-content-nav-item-kp6mdeaz {
  --nav_item_size: 54px;
  width: var(--nav_item_size);
  height: var(--nav_item_size);
  background-color: #e2e3e5;
  text-align: center;
  cursor: pointer;
  line-height: var(--nav_item_size);
  font-size: 2em;
  border-radius: 15px;
}

/* 单列独占样式 */
.bnuz-content-nav-item-no-grid-kp6mdeaz {
  margin: 10px;
}

/* 双列独占样式 */
.bnuz-content-nav-item-grid-kp6mdeaz {

}

/* 激活样式 */
.bnuz-content-nav-item-active-kp6mdeaz {
  /*font-size: x-lar */
  /*background-image: url("~@/assets/content_navigation/navitem_on.jpg");*/
  background-color: #90c1c2;
  color: black;
}

/*未激活样式*/
.bnuz-content-nav-item-no-active-kp6mdeaz {
  /*background-image: url("~@/assets/content_navigation/navitem_off.jpg");*/
  background-color: #667e80;
  color: white;
}
</style>