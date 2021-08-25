<template>
  <nav class="bnuz-top-nav" :class="{'right-padding': rightPaddingForScrollbar}">
    <div class="nav justify-content-end">
      <div class="nav-item">
        <a class="nav-link" href="#">HOME</a>
      </div>
      <top_navigation_bar_dropdown title="PROJECT" :contents="[
        {text: 'A', link: 'www.baidu.com'},
        {text: 'B', link: 'cn.bing.com'}
      ]"></top_navigation_bar_dropdown>
      <div class="nav-item">
        <a class="nav-link" href="#">MODEL</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="#">SAFETY</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="#">HUMAN PRACTICES</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="#">PARTS</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="#">TEAM</a>
      </div>
    </div>
  </nav>
</template>

<script>
// import $ from 'jquery'
import top_navigation_bar_dropdown from "@/components/top_navigation_bar_dropdown";

export default {
  name: "top-navigation-bar",
  components: {top_navigation_bar_dropdown},
  props: {
    rightPaddingForScrollbar: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.bnuz-top-nav {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  height: 1.2cm;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;
  position: fixed;
  top: 18px;
  width: 100%;
  font-size: 16px;
}

.right-padding {
  padding-right: 17px;
}
</style>
