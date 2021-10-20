<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#ffd89f">
      <bnuz_content_paragraph>
        <p>
          Chronic kidney disease (CKD) is an important problem endangering global public health security, with high incidence but low awareness. The living pressure of people with CKD increases, and because there is no good treatment for CKD at present, the burden of CKD patients gradually increases with the progress of the disease. Our project aims to provide a new type of biological therapy based on synthetic biology for CKD patients. A simple, effective and easy-to-operate solution should be given to the problem that is high cost, difficult handle and seriou burden for CKD patients in the existing treatment regimens.
        </p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph>
        <p>We modified the tryptophan metabolic pathway of intestinal <em>E. coli</em>, reducing its production of indole,
          which is the precursor of indophenol sulfate (IS), and the IS is a key intestinal toxin that promotes the
          progression of CKD. At the same time, engineered bacteria also has the effects of repairing intestinal
          mucosal barrier and promoting the proliferation of probiotics. This can adjust the patient's bowel back to
          normal. Click <a href="https://2021.igem.org/Team:BNUZ-China/Design">here</a> to learn more about our project.  To enable engineering bacteria
          to
          perform its
                              function, we need to colonize engineering bacteria in the intestine and competitively replace original <em>E. coli</em>.</p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph>
        <p>
          We designed engineered bacteria to enter the patient's gut by oral administration, replacing their original <em>E. coli</em>. The engineered bacteria will be wrapped in enteric-coated capsules. The capsules will be sealed and preserved into a low oxygen and high carbon dioxide concentration environment for transportation. In Generally, the capsules will be swallowed into the patient. Due to the protection of enteric-coated capsules, they will not be released in the stomach and be killed until they reach the intestine. Then the engineered bacteria will be released and begin to proliferate and colonize in the intestine of the patient. In order to take the place of the original bacteria, we overexpressed the glucose dehydrogenase (<em>GDH</em>) of engineering bacteria, which can help <em>E. coli</em> to have a higher proliferation rate. By this way the engineered bacteria will have a proliferation advantage relative to the original bacteria, and will gradually replace the original bacteria in the competition. Also, we do not expect the number of engineered bacteria to grow too high to disrupt the intestinal microbial community components, so we designed a quorum sensing system. When the number of engineered bacteria is small, the expression of <em>GDH</em> enhances its competitiveness, so that it can quickly colonize and form a certain population. After reaching a certain population number, due to the limitation from quorum sensing mechanism, engineering bacteria will slow down their proliferation rate, which ensure that they do not interfere with intestinal microflora. And then it will begin to express β-galactosidase to catalyze galactooligosaccharides, which promote the proliferation of probiotics.
        </p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph>
        <p>
          In order to let our users can independently control the number of engineered bacteria in their bodies, we set a killing switch, that is, to control their survival by oral administration of arabinose. When the medicine is delivered to the users, we use the form of medical bags to deliver the capsules, tablets containing specific amounts of arabinose and specification at the same time. We set the gradient experiment to verify the effect of arabinose concentration on the number of engineering bacteria. Taking the effective and appropriate concentration as the minimum arabinose content of the tablets, so users can choose the number of tablets to swallow according to the specification to achieve the purpose of autonomous control of the number of engineering bacteria. At the same time, in order to prevent engineered bacteria, escape to the environment, we knocked out the Can gene of engineering bacteria. In this way, the engineered bacteria can survive in the intestinal tract due to high carbon dioxide concentration. When it escapes to the atmosphere, it will die due to the low carbon dioxide concentration.
        </p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph>
        <p>
          Challenge：
          Due to the limitation, we have not carried out animal experiments and only carried out partial verification in vitro. However, we have done sufficient literature research and verification experiments. When conditions permit, we will process the improvement and optimization of this project and carry out in vivo experiments to further verify the treatment protocols for CKD patients.
        </p>
      </bnuz_content_paragraph>
    </BNUZ_Content>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import BNUZ_Content from "@/components/bnuz_content";
import Bottom from "@/components/bottom";
import bnuz_content_paragraph from "@/components/bnuz-content-paragraph";
import AppRoot from "@/AppRoot";
import conf from '@/wiki_config';

import head_image from '@/assets/head_images/PROJECT/bannerproject-implementation.png'

export default {
  name: 'App',
  components: {
    BNUZ_Content,
    AppRoot,
    Bottom,
    TopNavigationBar,
    bnuz_content_paragraph
  },
  data() {
    return {
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/a/ad/T--BNUZ-China--bannerproject-implementation.7956f581.png\n'
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
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid #ed8555;
}
@font-face {
  font-family: text_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

@font-face {
  font-family: Title_font;
  src: url("https://2021.igem.org/wiki/images/9/94/T--BNUZ-China--title_font.woff");
}

p {
  font-size: 20px !important;
  font-family: text_font, serif !important;
}

h1, h2, h3, h4, h5 {
  font-family: Title_font, serif !important;
}
</style>
