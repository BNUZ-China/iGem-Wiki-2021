<template>
  <nav class="bnuz-top-nav" :class="{'right-padding': rightPaddingForScrollbar}">
    <div class="bnuz-top-nav-wrapper">
      <div class="bnuz-top-nav-logo">
        <img :src="logo_src" alt="logo" class="bnuz-logo">
      </div>
      <div class="nav justify-content-end">
        <div class="nav-item">
          <a class="nav-link" href="/">HOME</a>
        </div>
        <top_navigation_bar_dropdown title="PROJECT" :contents="[
        {text: 'Description', link: '/Description.html'},
        {text: 'Design', link: '/Design.html'},
        {text: 'Experiment', link: '/Experiment.html'},
        {text: 'Results', link: '/Results.html'},
        {text: 'Contribution', link: 'Contribution.html'},
        {text: 'Notebook', link: 'Notebook.html'}
      ]"></top_navigation_bar_dropdown>
        <top_navigation_bar_dropdown title="MODEL" :contents="[
        {text: 'Introduction', link: 'Introduction.html'},
        {text: 'Models & Results', link: 'Models_and_results.html'},
        {text: 'Discussion', link: 'Discussion.html'}
      ]">
        </top_navigation_bar_dropdown>
        <div class="nav-item">
          <a class="nav-link" href="/Safety.html">SAFETY</a>
        </div>
        <top_navigation_bar_dropdown title="HUMAN PRACTICE" :contents="[
        {text: 'Human practice', link: 'Human_practice.html'},
        {text: 'Partnership', link: 'Partnership.html'},
        {text: 'Communication', link: 'Communication.html'},
        {text: 'Collaboration', link: 'Collaboration.html'}
      ]"></top_navigation_bar_dropdown>
        <top_navigation_bar_dropdown title="PARTS" :contents="[
        {text: 'Parts', link: 'Parts.html'},
        {text: 'Contribution', link: 'Contribution.html'}
      ]"></top_navigation_bar_dropdown>
        <top_navigation_bar_dropdown title="TEAM" :contents="[
        {text: 'Members', link: 'Members.html'},
        {text: 'Attributions', link: 'Attributions.html'},
        {text: 'Notebook', link: 'Notebook.html'}
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
      logo_src: conf.isDev ? logo_src : ''
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
