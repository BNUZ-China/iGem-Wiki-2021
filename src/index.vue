<template>
  <AppRoot>
    <transition enter-active-class="animate__animated animate__bounceInDown animate__slow">
      <TopNavigationBar v-if="TopNavBarVisible">

      </TopNavigationBar>
    </transition>
    <Open_window @zoom-end="zoomEnd">

    </Open_window>
    <div class="navbar_space"></div>
    <div class="index-content">
      <img :src="homepage_hospital" alt="homepage hospital" class="homepage_hospital">
    </div>
  </AppRoot>
</template>

<script>
import Open_window from "@/components/open_window";
import TopNavigationBar from "@/components/top_navigation_bar";
import homepage_hospital from '@/assets/homepage_hospital.png';
import AppRoot from "@/AppRoot";
import conf from "@/wiki_config"

export default {
  name: "index",
  components: {AppRoot, TopNavigationBar, Open_window},
  data() {
    return {
      TopNavBarVisible: false,
      homepage_hospital: conf.isDev ? homepage_hospital : 'https://2021.igem.org/wiki/images/2/2e/T--BNUZ-China--homepage_hospital.png'
    }
  },
  methods: {
    zoomEnd: function () {
      this.TopNavBarVisible = true;
      setTimeout(function () {
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
      }, 2000)
    }
  }
}
</script>

<style scoped>
.navbar_space {
  width: 1px;
  height: 64px;
}

.homepage_hospital {
  width: 100%;
}

.index-content {
  margin: 0 6vw;
}
</style>