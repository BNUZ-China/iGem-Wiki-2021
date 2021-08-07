<template>
  <div>
    <TopNavigationBar style="display: none">

    </TopNavigationBar>
    <Open_window>

    </Open_window>
<!--    <b-container class="homepage_hospital_container">-->
<!--      <b-col>-->
        <img src="static/images/homepage_hospital.png" class="homepage_hospital">
<!--      </b-col>-->
<!--    </b-container>-->
<!--    <Bottom></Bottom>-->
  </div>
</template>

<script>
import Open_window from "@/components/open_window";
import TopNavigationBar from "@/components/top_navigation_bar";
export default {
  name: "index",
  components: {TopNavigationBar, Open_window}
}
</script>

<style scoped>
/*.homepage_hospital_container {*/
/*  z-index: 2;*/
/*}*/
.homepage_hospital {
  /*margin-top: 40px;*/
  position: relative;
  z-index: 2;
  width: 100vw;
}
</style>