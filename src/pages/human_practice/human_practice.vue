<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content_no_nav>
<!--   TODO no content nav   -->
      <BNUZ_hp_modal_content name="Para 1" is-left>
        <template v-slot:direct-display-text>
          <h4>First Heading</h4>
          Build a periodic expression module of Cas9
          To verify that our design enables Cas9 to be expressed periodically, we built a module for the periodic
          expression of Cas9, and the experiments were carried out as follows.
          1. Construct the recombinant plasmid pRH003-URA3-CLB2 promoter-Cas9 by in-fusion cloning. Then transform it
          into E. coli DH5α. Extract plasmids from transformants. The recombinant plasmids were confirmed by colony
          PCR and sequencing, then transformed into S. cerevisiae BY4741. Screen for transformants by SD-ura culture
          medium.
          2.Synchronize the cell cycle of S. cerevisiae population to G1 phase.
          3.Release yeast cells from synchronization. Remove a time-zero fraction. Collect fractions of culture every
          10 min for 150 min. Extract total protein for Western Blot. Strain without being transformed was used as a
          negative control. GAPDH was chosen as an internal reference.
          4.Obtain and analyze data. Draw the image of Cas9 protein levels over time.
        </template>
        <template v-slot:modal-text>
          By default, modals will not render their content in the document until they are shown (lazily rendered). Modals that, when visible, are rendered appended to the component will not affect layout, as they render as a placeholder comment ntion they are placed. Due to the portalling process, it can take two or more $nextTicks to render changes of the content into the target.
        </template>
      </BNUZ_hp_modal_content>

      <BNUZ_hp_modal_content name="Para 2">
        <template v-slot:direct-display-text>
          Build a periodic expression module of Cas9
          To verify that our design enables Cas9 to be expressed periodically, we built a module for the periodic
          expression of Cas9, and the experiments were carried out as follows.
          1. Construct the recombinant plasmid pRH003-URA3-CLB2 promoter-Cas9 by in-fusion cloning. Then transform it
          into E. coli DH5α. Extract plasmids from transformants. The recombinant plasmids were confirmed by colony
          PCR and sequencing, then transformed into S. cerevisiae BY4741. Screen for transformants by SD-ura culture
          medium.
        </template>
        <template v-slot:modal-text>
          By default, modals will ender their content in the document until they are shown (lazily rendered). Modals that, when visible, are rendered appended to the component will not affect layout, as they render as a placeholder comment ntion they are placed. Due to the portalling process, it can take two or more $nextTicks to render changes of the content into the target.
        </template>
      </BNUZ_hp_modal_content>
    </BNUZ_Content_no_nav>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import BNUZ_hp_modal_content from "@/components/bnuz_hp_modal_content";
import AppRoot from "@/AppRoot";
import BNUZ_Content_no_nav from "@/components/bnuz_content_no_nav";

import head_image from '@/assets/head_images/human_practice.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content_no_nav,
    BNUZ_hp_modal_content
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
</style>
