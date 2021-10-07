<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">

    <b-container>
      <b-row align-h="end">
        <b-col cols="2">
          <div class="roundRect">
            Oct.
          </div>
        </b-col>
        <b-col cols="10">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab" header-class="card-header-invisible">
                <b-button block v-b-toggle.accordion-1 variant="info" class="notebook_button_style">7.1-7.7</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <h5>IPA metabolic pathway(fld)</h5>
                    GDXL synthesis<br><br>
                    <h5>Suicide switch(PMF)</h5>
                    pBad promoter and MazF(PMF) synthesis
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info" class="notebook_button_style">Accordion 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info" class="notebook_button_style">Accordion 3</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import AppRoot from "@/AppRoot";

import head_image from '@/assets/head_images/human_practice.png'

export default {
  name: 'App',
  components: {
    TopNavigationBar,
    AppRoot,
    Bottom,
  },
  data() {
    return {
      text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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

.accordion {
  width: 60vw;
  margin: 40px auto 40px auto;
}

.notebook_button_style {
  height: 1.5cm;
  background-color: #b3c9ed;
  border-color: #b3c9ed;
}

.card-header-invisible {
  background-color: #FFFFFF00;
  border-color: #FFFFFF00;
}
</style>
