<template>
  <nav id="bnuz-nav">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <top_navigation_bar_dropdown title="PROJECT" :contents="[
        {text: 'A', link: 'www.baidu.com'},
        {text: 'B', link: 'cn.bing.com'}
      ]"></top_navigation_bar_dropdown>
      <li class="nav-item">
        <a class="nav-link" href="#">MODEL</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SAFETY</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">HUMAN PRACTICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PARTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">TEAM</a>
      </li>
    </ul>
  </nav>
</template>

<script>
// import $ from 'jquery'
import top_navigation_bar_dropdown from "@/components/top_navigation_bar_dropdown";

export default {
  name: "top-navigation-bar",
  components: {top_navigation_bar_dropdown},
}
</script>

<style scoped>
#bnuz-nav {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  height: 1.2cm;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 999;
  position: fixed;
  top: 18px;
  width: 100%;
}
</style>
