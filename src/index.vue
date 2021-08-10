<template>
  <AppRoot>
    <TopNavigationBar style="display: none">

    </TopNavigationBar>
    <Open_window>

    </Open_window>
  </AppRoot>
</template>

<script>
import Open_window from "@/components/open_window";
import TopNavigationBar from "@/components/top_navigation_bar";
import homepage_hospital from '@/assets/homepage_hospital.png';
import AppRoot from "@/AppRoot";

export default {
  name: "index",
  // eslint-disable-next-line vue/no-unused-components
  components: {AppRoot, TopNavigationBar, Open_window},
  data() {
    return {
      homepage_hospital
    }
  }
}
</script>

<style scoped>
.homepage_hospital {
  /*margin-top: 40px;*/
  position: relative;
  z-index: 2;
  width: 100vw;
}
</style>