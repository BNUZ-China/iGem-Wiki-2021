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
            <BNUZ_content_modal name="modal1" title="Problem Investigation">
              <template slot="modal-icon">
                <svg t="1633850718187" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2482" width="200" height="200">
                  <path
                    d="M307.23 450.74m120 0l351.79 0q120 0 120 120l0 146.46q0 120-120 120l-351.79 0q-120 0-120-120l0-146.46q0-120 120-120Z"
                    fill="#E9F1FF" p-id="3714"></path>
                  <path
                    d="M808 864H216c-83.81 0-152-68.19-152-152V312c0-83.81 68.19-152 152-152h592c83.81 0 152 68.19 152 152v400c0 83.81-68.19 152-152 152zM216 224a88.1 88.1 0 0 0-88 88v400a88.1 88.1 0 0 0 88 88h592a88.1 88.1 0 0 0 88-88V312a88.1 88.1 0 0 0-88-88z"
                    fill="#2C5CCB" p-id="3715"></path>
                  <path
                    d="M484.76 592h-200a92.1 92.1 0 0 1-92-92V396a92.1 92.1 0 0 1 92-92h200a92.1 92.1 0 0 1 92 92v104a92.1 92.1 0 0 1-92 92z m-200-224a28 28 0 0 0-28 28v104a28 28 0 0 0 28 28h200a28 28 0 0 0 28-28V396a28 28 0 0 0-28-28zM799.38 384h-128a32 32 0 0 1 0-64h128a32 32 0 1 1 0 64zM799.38 544.82h-0.25l-128-1a32 32 0 0 1 0.24-64h0.26l128 1a32 32 0 0 1-0.25 64zM799.72 735.88h-575a32 32 0 1 1 0-64h575a32 32 0 0 1 0 64z"
                    fill="#2C5CCB" p-id="3716"></path>
                </svg>
              </template>
              <template slot="modal-body">
                <p class="modal-text">
                  To begin with, as one of our team member’s grandma is suffering from CKD, we paid our attention to CKD.
                  Then we conducted a survey, but we were surprisingly to find that many people knew little about CKD even
                  though its prevalence is getting higher and higher. And in our survey, people with CKD are not aware of
                  their CKD staging, which indicates that the “slient killer” hasn’t attracted enough attention yet. But
                  actually CKD is the 6th fastest growing cause of death globally, causing at least 2.4 milion deaths per
                  year. We also learned that there is currently still no cure for CKD and no means to revert it.
                  Therefore, we decided to focus our project on the treatment of CKD. And we also investigated people’s
                  understanding of synthetic biology, which encouraged us to do more with methods people are more willing
                  to (see Fig. 4) accept to raise the public’s knowledge. <a href="www.baidu.com" target="_blank">(you can find
                  it in
                  our science
                  communication)</a>
                </p>


                <img :src="p1_pic1">
                <img :src="p1_pic2">
                <img :src="p1_pic3">
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_left>
        <BNUZ_hp_modal_content_right>
          <template slot="text">
            Initial exploration
          </template>
          <template slot="icon">
            <BNUZ_content_modal>
              <template v-slot:modal-icon>
                <svg t="1634283688075" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3860"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M896.17 438.37m0 50.06l0 325.33q0 50.06-50.06 50.06l-30.38 0q-50.06 0-50.06-50.06l0-325.33q0-50.06 50.06-50.06l30.38 0q50.06 0 50.06 50.06Z"
                    fill="#E9F1FF" p-id="3861"></path>
                  <path
                    d="M609 438.36m0 50.06l0 325.33q0 50.06-50.06 50.06l-30.38 0q-50.06 0-50.06-50.06l0-325.33q0-50.06 50.06-50.06l30.38 0q50.06 0 50.06 50.06Z"
                    fill="#E9F1FF" p-id="3862"></path>
                  <path
                    d="M320.06 438.36m0 50.06l0 325.33q0 50.06-50.06 50.06l-30.38 0q-50.06 0-50.06-50.06l0-325.33q0-50.06 50.06-50.06l30.38 0q50.06 0 50.06 50.06Z"
                    fill="#E9F1FF" p-id="3863"></path>
                  <path
                    d="M270 895.92h-91.88a82.15 82.15 0 0 1-82.06-82.06V402a82.14 82.14 0 0 1 82.06-82.05H270A82.14 82.14 0 0 1 352.06 402v411.86A82.15 82.15 0 0 1 270 895.92z m-91.89-512A18.07 18.07 0 0 0 160.06 402v411.86a18.08 18.08 0 0 0 18.06 18.06H270a18.08 18.08 0 0 0 18.05-18.06V402A18.07 18.07 0 0 0 270 383.92zM558.94 895.92h-91.89A82.15 82.15 0 0 1 385 813.86V402a82.14 82.14 0 0 1 82.05-82.05h91.89A82.14 82.14 0 0 1 641 402v411.86a82.15 82.15 0 0 1-82.06 82.06z m-91.89-512A18.07 18.07 0 0 0 449 402v411.86a18.08 18.08 0 0 0 18.05 18.06h91.89A18.08 18.08 0 0 0 577 813.86V402a18.07 18.07 0 0 0-18.06-18.05zM846.12 895.92h-91.89a82.14 82.14 0 0 1-82.05-82.06V402a82.13 82.13 0 0 1 82.05-82.05h91.89A82.14 82.14 0 0 1 928.18 402v411.86a82.15 82.15 0 0 1-82.06 82.06z m-91.89-512A18.07 18.07 0 0 0 736.18 402v411.86a18.08 18.08 0 0 0 18.05 18.06h91.89a18.08 18.08 0 0 0 18.06-18.06V402a18.07 18.07 0 0 0-18.06-18.05z"
                    fill="#2C5CCB" p-id="3864"></path>
                  <path
                    d="M511.33 360.36a32 32 0 0 1-32-32V191.89H274.11a18.08 18.08 0 0 0-18.06 18.05v118.42a32 32 0 0 1-64 0V209.94a82.15 82.15 0 0 1 82.06-82h237.22a32 32 0 0 1 32 32v168.42a32 32 0 0 1-32 32z"
                    fill="#2C5CCB" p-id="3865"></path>
                  <path
                    d="M800.15 360.37a32 32 0 0 1-32-32v-118.4a18 18 0 0 0-18.05-18.06H509.51a32 32 0 0 1 0-64h240.63A82 82 0 0 1 832.19 210v118.4a32 32 0 0 1-32.04 31.97z"
                    fill="#2C5CCB" p-id="3866"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                Prof. Xvdong Zhu, Editor of Chinese Journal of Biotechnology, Research Fields & Emphasis: Fungal
                secondary metabolism and Synthetic Biology, Studies on RNAi and endogenous siRNA biology of fungi


                When we first started the design of our project, we were so confused and couldn’t work out quite a few
                questions. That’s when Prof. Xudong Zhu offered us a lot of help. After hearing the initial design of
                our project, Prof Zhu asked us one question: For the treatment of CKD, why not directly adjust the
                colony but directly regulate radon? The answer of this question is: colonies are not statistical, it is
                difficult to quantitative verification of the results of the program.
                Then Prof. Zhu gave us suggestions and answered our puzzles in terms of project design, modeling, and
                human practice.

                When talking about project design, Mr. Zhu first introduced us to two series of plasmids used in E.
                coli; then he told us about the issues that need to be paid attention to in strain selection; after
                that, he discussed with us about the detection of knockout ; Then he raised the problem that the fld
                gene cluster we want to insert may be too large to express; finally he reminded us that innovative
                elements are needed in the project design.
                On hearing our confusion in modeling part, Mr. Zhu suggested us that the content of the quorum sensing
                mechanism can be studied using modeling;
                The last part we discussed about is human practice. Prof. Zhu told us to "go out and investigate", that
                is, to get in touch with people from all walks of life in society, especially doctors and employees of
                biomedical companies. We need to investigate and understand the following two questions: 1. Whether the
                chronic kidney disease is serious and whether our project is important; 2. Whether our research can be
                put into production and own a market.


                After hearing the guidance from Prof. Zhu, we have a more accurate understanding about the IGEM
                competition, and from this we refined our plan and supplemented the deficiencies.
              </template>
            </BNUZ_content_modal>
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
import p1_pic1 from '@/assets/hp/general_hp/part1/pic1.png'
import p1_pic2 from '@/assets/hp/general_hp/part1/pic2.png'
import p1_pic3 from '@/assets/hp/general_hp/part1/pic3.png'

import conf from '@/wiki_config';

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
      // TODO: set image URI
      head_image: conf.isDev ? head_image : '',
      // TODO: set image URI
      p1_pic1: conf.isDev ? p1_pic1 : '',
      // TODO: set image URI
      p1_pic2: conf.isDev ? p1_pic2 : '',
      // TODO: set image URI
      p1_pic3: conf.isDev ? p1_pic3 : ''
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

.modal-text {
  font-size: 20px;
  line-height: 32px;
}
</style>
