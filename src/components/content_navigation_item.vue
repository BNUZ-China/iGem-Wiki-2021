<template>
  <div @click="contentNavJumpto" :class="button_style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "content_navigation_item",
  props: {activate: Boolean, click_link: Number},
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
    button_style: function () {
      return this.activate ?
        'bnuz-content-nav-item-active-kp6mdeaz bnuz-content-nav-item-kp6mdeaz' :
        'bnuz-content-nav-item-kp6mdeaz'
    }
  }
}
</script>

<style scoped>
.bnuz-content-nav-item-kp6mdeaz {
  width: 120px;
  height: 120px;
  background-color: #e2e3e5;
  margin: 16px;
  text-align: center;
  cursor: pointer;
}

/* 内容导航栏激活样式 */
.bnuz-content-nav-item-active-kp6mdeaz {
  font-size: x-large;
  color: #0dcaf0;
}
</style>