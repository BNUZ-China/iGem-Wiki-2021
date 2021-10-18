<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#ffd89f" top_distance="10">
      <bnuz_content_paragraph hint_text="CRISPR-Cas9 knocks out TnaA">
        <h4>CRISPR-Cas9 knocks out <em>TnaA</em></h4>
        <p>We conducted Red recombination experiments twice, hoping to knock out the <em>TnaA</em> gene of the engineered bacteria, but neither of the two experiments produced positive clones. We believed that the replacement of the ORF of <em>TnaA</em> gene by Red recombination may lead to the death of the defective strain. We found that the CISPR/Cas9 technology can be used to knock out <em>TnaA</em>; so we will try to use this technology to edit the engineered bacteria in the subsequent improvement of the project.</p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Improve, build and test Quorum sensing module">
        <h4>Improve, build and test Quorum sensing module</h4>
        <p>In the process of project, we assumed that the number of engineering bacteria could be automatically controlled through the quorum sensing system of bacteria itself, and the number of engineering bacteria could be maintained at an appropriate amount automatically and for a long time, so that the optimal working effect of engineering bacteria could be exerted without manual control. Later we will refine and test our quorum sensing module.</p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Optimize indole-propionic acid metabolic pathway">
        <h4>Optimize indole-propionic acid metabolic pathway</h4>
        <p>Our engineered bacteria successfully expressed indolepropionic acid as verified by HPLC, indicating that we have successfully constructed indolepropionic acid metabolic pathway. However, there is still room for improvement of this module, and we hope to increase the output of IPA to achieve better treatment results. We will design several experiments to reconstruct the improved IPA metabolic pathway by replacing the connection sequence of five genes, for example, replacing the strong promoter, overexpressing the rate-limiting enzyme and so on, in an attempt to improve the expression of IPA.</p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Integrate modules into E. coli Nissle 1917">
        <h4>Integrate modules into <em>E. coli</em> Nissle 1917</h4>
        <p><em>Escherichia coli</em> Nissle1917 is a human strain, which is safe and harmless to human body. Our project is based on this strain to achieve the purpose of applying it in the treatment of CKD. However, all the modules we constructed have been expressed and verified in BL21 (DE3) strain. We will integrate all the successfully verified modules into <em>E. coli</em> Nissle 1917 in the subsequent improvement process, and conduct functional verification on the engineering <em>E. coli</em> Nissle 1917 strain again, expecting to obtain complete functional and harmless engineering bacteria.</p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Find a suitable method of colonization and transportation">
        <h4>Find a suitable method of colonization and transportation</h4>
        <p>We envision engineering bacteria wrapped in enteric-soluble capsules for our users to swallow. We will seal the product in low oxygen and high carbon dioxide environment for transportation. In the follow-up improvement, we will investigate the composition of enteric-soluble capsules, try to synthesize and make them, and apply the complete capsules to animal experiments. We will conduct direct injection and capsule swallowing experiments to verify whether our synthesized capsules are effective. Moreover, we will try to make the sealing bags needed for transportation, so as to improve the transportation conditions of our engineered bacteria.</p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Conduct animal experiments">
        <h4>Conduct animal experiments</h4>
        <p>Application of a medical product must go through animal experiment, due to the conditions and time limit, we are unable to carry out experiments <em>in vivo</em> and <em>in vitro</em> verification. Subsequently, we plan to use nissle1917 strains and retest, and carry out in vivo experiments, to validate the treatment effect in mice by using the model, in order to get more convincing experimental data in the body.</p>
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

import head_image from '@/assets/head_images/PROJECT/bannerproject-result.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content,
    bnuz_content_paragraph
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
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

p {
  font-size: 20px;
  font-family: text_font, serif;
}

h4 {
  font-family: Title_font, serif;
}
</style>
