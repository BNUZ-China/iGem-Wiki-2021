<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content_no_nav>
      <BNUZ_content_paragraph>
        <h4>Overview</h4>
        In recent years, the incidence of chronic kidney disease has been increasing worldwide, and according to the
        World Health Organization's Global Health Estimates report released on December 9, 2020, kidney disease has
        risen to become one of the top ten causes of death in the world. Faced with such a critical situation, our team
        proposed a treatment plan for chronic kidney disease based on synthetic biology. In order to make our project
        more targeted, more effective, and to be better utilized in practice, we conducted questionnaires and analysis,
        cooperated with other teams from different universities, interviewed experts in relevant fields, and carried out
        a series of scientific communication activities. Then we obtained lots of professional opinions, so as to
        continuously make progress and improve our projects.
      </BNUZ_content_paragraph>
      <b-container class="bnuz-hp-content-modal-container">
        <BNUZ_hp_modal_content_left>
          <template slot="text">
            Problem Investigation
          </template>
          <template slot="icon">
            <BNUZ_content_modal name="modal1" title="Modal 1">
              <template slot="icon">
                <svg t="1633850718187" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2482" width="200" height="200">
                  <path
                    d="M895.946667 734.048l1.066666 1.013333a29.824 29.824 0 0 1 0 43.413334l-162.261333 152.96a31.925333 31.925333 0 0 1-22.762667 8.704 31.925333 31.925333 0 0 1-22.773333-8.704l-93.184-87.84a29.824 29.824 0 0 1 0-43.413334l1.077333-1.013333a32 32 0 0 1 43.904 0l70.976 66.901333 140.053334-132.021333a32 32 0 0 1 43.904 0zM768 85.333333c64.8 0 117.333333 52.533333 117.333333 117.333334v394.666666a32 32 0 0 1-64 0V202.666667a53.333333 53.333333 0 0 0-53.333333-53.333334H256a53.333333 53.333333 0 0 0-53.333333 53.333334v618.666666a53.333333 53.333333 0 0 0 53.333333 53.333334h234.666667a32 32 0 0 1 0 64H256c-64.8 0-117.333333-52.533333-117.333333-117.333334V202.666667c0-64.8 52.533333-117.333333 117.333333-117.333334zM554.666667 544a32 32 0 0 1 0 64H341.333333a32 32 0 0 1 0-64z m128-170.666667a32 32 0 0 1 0 64H341.333333a32 32 0 0 1 0-64z"
                    p-id="2483"></path>
                </svg>
              </template>
              <template slot="modal-body">
                <h3>Hello!</h3>
                <p>This is a modal!</p>
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_left>
        <BNUZ_hp_modal_content_right>
          <template slot="text">
            Initial exploration
          </template>
          <template slot="icon">
            BBBBBBB
          </template>
        </BNUZ_hp_modal_content_right>
      </b-container>
    </BNUZ_Content_no_nav>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import AppRoot from "@/AppRoot";
import BNUZ_Content_no_nav from "@/components/bnuz_content_no_nav";
import BNUZ_content_paragraph from '@/components/bnuz-content-paragraph'
import BNUZ_hp_modal_content_left from "@/components/bnuz_hp_modal_content_left";
import BNUZ_hp_modal_content_right from "@/components/bnuz_hp_modal_content_right";
import BNUZ_content_modal from '@/components/bnuz_content_modal';

import head_image from '@/assets/head_images/human_practice.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content_no_nav,
    BNUZ_content_paragraph,
    BNUZ_hp_modal_content_right,
    BNUZ_hp_modal_content_left,
    BNUZ_content_modal
  },
  data() {
    return {
      head_image
    }
  }
}
</script>

<style scoped>
.bnuz-header-image {
  width: 100%;
  height: 40%;
}

.roundRect {
  padding: 20px;
  background-color: rgb(220, 230, 237);
  border-radius: 20px;
  margin: 16px 0;
}

.bnuz-hp-content-modal-container {
  margin-top: 8vh;
  justify-content: center;
  align-items: center;
}

.bnuz-hp-content-modal-item {
  height: 15vh;
}

svg {
  height: 14vh;
}
</style>
