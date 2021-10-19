<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#ffd89f" top_distance="10">
      <bnuz_content_paragraph hint_text="Overview">
        <h4>Overview</h4>
        <p>We failed to knock out the <em>TnaA gene</em>, and we plan to use CRISPR-Cas9 technology to continue the experiment. We have successfully constructed and characterized the metabolic pathway of indolepropionic acid from tryptophan. At the same time, we characterized whether <em>GDH</em> expression could promote engineered bacterial colonization without induction, and established relevant mathematical models. We have preliminarily characterized the galactose oligomeric module, and further experiments are needed to explain the function of this module. We successfully constructed the kill switch and anti-escape device to ensure the safety of our engineered bacteria. </p>
        </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Red recombination knock out TnaA">
        <h4>Red recombination knock out <em>TnaA</em></h4>
        <p>Firstly, we used Red recombination to knock out <em>TnaA</em> which metabolizes tryptophan to produce indole in <em>E. coli</em>. But both two attempts were failed. Therefore, we will choose CRISPR-Cas9 system to try again to knock out <em>TnaA</em>.</p>
        <h5>Experiment 1</h5>
        <p>We used pBR322 plasmid as a template and amplified it with Pfu DNA Polymerase.</p>
        <p>The product length was 1092bp.The concentration of the purified product in the gel slice is 20ng/μl</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 Gel electrophoresis of knockout fragment (TnaAB: TnaA gene knockout fragment, 1092bp)
          </template>
          <template v-slot:image>
            <img :src="pic1" width="45%">
          </template>
        </bnuz_image_container>
        <p>The knockout fragment of <em>TnaA</em> was transformed into BL21(DE3)/pKD46Gm competent cells. The transformed cells were plated on ampicillin plates and cultured at 37°C until monoclonal colonies were formed.No colonies grew after several days of cultivation. Repeated experiments have the same results.</p>

        <h5>Experiment 2</h5>
        <p>
          We used pET28a plasmid as a template and amplified it with Pfu DNA Polymerase.
        </p>
        <p>
          The product length was 967bp.The concentration of the purified product in the gel slice is 20ng/μl
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 Gel electrophoresis of knockout fragment (TnaAC: TnaA gene knockout fragment, 967bp)
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
        <p>PCR detection was performed with a pair of primers outside the homology arm on the genome, and the length of the amplified product of the original strain was 1644 bp. When <em>TnaA</em> is replaced by the kanamycin resistance gene, the length of the amplified product of primers is shortened to 1482bp.</p>
        <p>The PCR results showed that the length of the products of all clones was the same as the original strain. All the remaining clones were identified by PCR, and there were still no positive clones that successfully replaced with resistance gene.</p>

        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 3 Gel electrophoretogram of positive clones
            (Marker: DNA marker (100~5000 bp), Strip from top to bottom: 10000bp, 8000bp, 6000bp ,5000bp, 4000bp, 3000bp, 2500bp, 2000bp, 1500bp, 1000bp, 750bp, 500bp, 250bp, among which 3000bp strip and 1000bp strip are highlighted.)
          </template>
          <template v-slot:image>
            <img :src="pic3" width="35%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Gibson assembly construct Indole-3-Propionic Acid Metabolism Pathway">
        <h4>Gibson assembly construct Indole-3-Propionic Acid Metabolism Pathway</h4>
        <p>We successfully constructed plasmids contained <em>TAA1, fldH, fldB, fldC, and acdA. TAA1, fldH and
          fldBC</em> are each initiated by a T7 promoter. <em>acdA</em> is transcribed by a self-contained promoter
          cloned from <em>Clostridium sporogenes.</em> For more detailed characterization process, see <a
            href="proof_of_concept.vue">proof of
            concept</a></p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 IPA synthesis plasmid map
          </template>
          <template v-slot:image>
            <img :src="pic4" width="40%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Overexpression of GDH">
        <h4>Overexpression of GDH</h4>
        <p>
          To explore whether GDH can effectively promote the proliferation of engineered bacteria without IPTG induction, we have drawn the growth curve of engineered bacteria and normal bacteria. For more detailed characterization process, see <a
          href="proof_of_concept.vue">proof of
          concept</a>
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Expression of Klebsiella oxytoca strain ZJUH1705beta-galactosidase (bga2) gene">
        <h4>Expression of Klebsiella oxytoca strain ZJUH1705beta-galactosidase (bga2) gene</h4>
        <h5>Red recombination knocks out <em>Can</em> gene</h5>
        <p>We transformed the plasmid into <em>E.coli</em> BL21(DE3) and induced its expression. After the total RNA
          was extracted, the cDNA was obtained by reverse transcription. We use cDNA as a template to amplify each fragment, then check whether there is our target band by agarose gel electrophoresis. We chose <em>rsmA</em> (16S rRNA m(6)2A1518, m(6)2A1519 dimethyltransferase) as the reference gene and set a negative control. bga2 was well expressed (Fig.5) and the corresponding mRNA was successfully transcribed. The expression levels of reference genes in the experimental group (<em>rsmAE</em>) and the control group (<em>rsmAC</em>) were consistent.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.5 Gene expression level verification (bga2: beta-galactosidase, 3108bp. rsmAE: 16S rRNA m(6)2A1518,
            m(6)2A1519 dimethyltransferase,664bp, cloned from engineered E.coli. rsmAC: 16S rRNA m(6)2A1518, m(6)2A1519 dimethyl transferase, 664bp, cloned from control E.coli. NC: negative control)
          </template>
          <template v-slot:image>
            <img :src="pic5" width="35%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Biosafety">
        <h4>Biosafety</h4>
        <h5>Red recombination knocks out Can gene</h5>
        <p>
          We successfully knocked out the Can gene of the engineered bacteria through Red recombination. For more detailed characterization process, see <a
          href="proof_of_concept.vue">proof of
          concept</a>
        </p>
        <h5>L-arabinose induces the expression of transcription inhibitors</h5>
        <p>
          The purpose of the suicide induction module is to use L-arabinose to induce engineered bacteria in the
          intestine to stop proliferation when needed. We used two different concentrations of arabinose in our experiment. After induction, the survival rate of engineered bacteria in the experimental group decreased significantly. For more detailed characterization process, see <a
            href="proof_of_concept.vue">proof of
            concept</a>
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
import bnuz_image_container from "@/components/bnuz_image_container";

import AppRoot from "@/AppRoot";
import conf from '@/wiki_config';
import pic1 from '@/assets/project/result/pic1.png'
import pic2 from '@/assets/project/result/pic2.png'
import pic3 from '@/assets/project/result/pic3.png'
import pic4 from '@/assets/project/result/pic4.png'
import pic5 from '@/assets/project/result/pic5.png'


import head_image from '@/assets/head_images/PROJECT/bannerproject-result.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content,
    bnuz_content_paragraph,
    bnuz_image_container
  },
  data() {
    return {
      head_image,
      pic1: conf.isDev ? pic1 : '',
      pic2: conf.isDev ? pic2 : '',
      pic3: conf.isDev ? pic3 : '',
      pic4: conf.isDev ? pic4 : '',
      pic5: conf.isDev ? pic5 : ''
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
  border: 2px solid #ed8555
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
