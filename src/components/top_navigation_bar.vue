<template>
  <nav class="bnuz-top-nav" :class="{'right-padding': rightPaddingForScrollbar}">
    <div class="bnuz-top-nav-wrapper">
      <div class="bnuz-top-nav-logo">
        <img :src="logo_src" alt="logo" class="bnuz-logo">
      </div>
      <div class="nav justify-content-end">
        <div class="nav-item">
          <a class="nav-link" href="https://2021.igem.org/Team:BNUZ-China">HOME</a>
        </div>
        <top_navigation_bar_dropdown title="PROJECT" :contents="[
        {text: 'Description', link: 'https://2021.igem.org/Team:BNUZ-China/Description'},
        {text: 'Design', link: 'https://2021.igem.org/Team:BNUZ-China/Design'},
        {text: 'Engineering', link: 'https://2021.igem.org/Team:BNUZ-China/Engineering'},
        {text: 'Experiment', link: 'https://2021.igem.org/Team:BNUZ-China/Experiment'},
        {text: 'Result', link: 'https://2021.igem.org/Team:BNUZ-China/Result'},
        {text: 'Proof of Concept', link: 'https://2021.igem.org/Team:BNUZ-China/Proof_Of_Concept'},
        {text: 'Implementation', link: 'https://2021.igem.org/Team:BNUZ-China/Implementation'},
        {text: 'Notebook', link: 'https://2021.igem.org/Team:BNUZ-China/Notebook'},
        {text: 'Future', link: 'https://2021.igem.org/Team:BNUZ-China/Future'}
      ]"></top_navigation_bar_dropdown>
        <div class="nav-item">
          <a class="nav-link" href="https://2021.igem.org/Team:BNUZ-China/Model">MODEL</a>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="https://2021.igem.org/Team:BNUZ-China/Safety">SAFETY</a>
        </div>
        <top_navigation_bar_dropdown title="HUMAN PRACTICE" :contents="[
        {text: 'Human practice', link: 'https://2021.igem.org/Team:BNUZ-China/Human_Practices'},
        {text: 'Partnership', link: 'https://2021.igem.org/Team:BNUZ-China/Partnership'},
        {text: 'Communication', link: 'https://2021.igem.org/Team:BNUZ-China/Communication'},
        {text: 'Collaboration', link: 'https://2021.igem.org/Team:BNUZ-China/Collaborations'},
        {text: 'Webpack Plugin', link: 'https://2021.igem.org/Team:BNUZ-China/webpack_plugin'}
      ]"></top_navigation_bar_dropdown>
        <top_navigation_bar_dropdown title="PARTS" :contents="[
        {text: 'Parts', link: 'https://2021.igem.org/Team:BNUZ-China/Parts'},
        {text: 'Contribution', link: 'https://2021.igem.org/Team:BNUZ-China/Contribution'}
      ]"></top_navigation_bar_dropdown>
        <top_navigation_bar_dropdown title="TEAM" :contents="[
        {text: 'Members', link: 'https://2021.igem.org/Team:BNUZ-China/Members'},
        {text: 'Attributions', link: 'https://2021.igem.org/Team:BNUZ-China/Attributions'}
      ]"></top_navigation_bar_dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
// import $ from 'jquery'
import top_navigation_bar_dropdown from "@/components/top_navigation_bar_dropdown";
import conf from '@/wiki_config';
import logo_src from '@/assets/logo.png';

export default {
  name: "top-navigation-bar",
  components: {top_navigation_bar_dropdown},
  data() {
    return {
      logo_src: conf.isDev ? logo_src : 'https://2021.igem.org/wiki/images/c/c0/T--BNUZ-China--logo.71811b93.png'
    }
  },
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

.bnuz-top-nav-wrapper {
  display: flex;
  justify-content: space-between;
}

.bnuz-logo {
  margin-top: 2.5px;
  --logo-size: 40px;
  width: var(--logo-size);
  height: var(--logo-size);
  margin-left: 100px;
  /*margin-top: ;*/
}
</style>
