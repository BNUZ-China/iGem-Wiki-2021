<template>
  <div @click="contentNavJumpto" :class="classString">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content_navigation_item",
  props: {activate: Boolean, click_link: Number, multiCol: Boolean},
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
  --nav_item_size: 80px;
  width: var(--nav_item_size);
  height: var(--nav_item_size);
  background-color: #e2e3e5;
  text-align: center;
  cursor: pointer;
}

/* 单列样式 */
.bnuz-content-nav-item-no-grid-kp6mdeaz {
  margin: 8px;
}

/* 双列样式 */
.bnuz-content-nav-item-grid-kp6mdeaz {

}

/* 激活样式 */
.bnuz-content-nav-item-active-kp6mdeaz {
  font-size: x-large;
  color: #0dcaf0;
}
</style>