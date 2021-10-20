<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content  nav_item_color="#ffd89f" top_distance="10">
      <bnuz_content_paragraph hint_text="Elimination module of enterogenic urine toxin">
        <h4>Elimination module of enterogenic urine toxin</h4>
        <p>Indoxyl sulfate is a key urinary toxin promoting the progression of chronic kidney disease. We planned to
          construct an intestinal colonization engineered bacterium using <em>E.coli</em> Nissle1917 as the chassis
          organism,
          and knock out the gene <em>TnaA</em>, which metabolizes tryptophan and produces indole, usingRed
          recombination.
          After gene knockout, the engineered bacteria will not be able to metabolize tryptophan to produce indole. We
          colonize engineered bacteria into the colon to competitively replace the original <em>E.coli</em> in the
          intestine.
          The indole production in the intestine is reduced, and the indoxyl sulfate produced by metabolism in the liver
          will
          also be greatly reduced accordingly, achieving the goal of eliminating indoxyl sulfate from the source and
          delaying
          the progression of chronic nephropathy.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 1 Red recombination knockout of TnaA gene eliminates the pathway of tryptophan metabolism to produce
            indole
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Enhance their ability to proliferate">
        <h4>Enhance their ability to proliferate</h4>
        For our engineered bacteria to successfully colonize the intestinal tract, we must not allow our immune system
        to reject us, but we also need to have a certain degree of competitiveness to compete with the intestinal flora.
        So, we chose nissle1917 as our chassis creature. This strain is a strain derived from the human intestinal
        tract, so it has low immunogenicity and is not easy to produce an immune response. At the same time, er to
        improve the colonization ability of engineered bacteria, we will overexpress glucose dehydrogenase (GDH) in the
        pentose phosphate pathway. This enzyme has been proven by the BNU-China team in 2018 to have a high effect on
        enhancing the competitiveness of engineered bacteria.
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 2 Function diagram of GDH
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Intestinal mucosal barrier repair module">
        <h4>Intestinal mucosal barrier repair module</h4>
        <p>When the original E. coli which metabolizes tryptophan to produce indole in intestinal tract is replaced by
          our engineered bacteria, some tryptophan will remain. On the one hand, we do not want to have too much
          tryptophan redundancy; on the other hand, we hope to be able to metabolize tryptophan to produce substances
          that are beneficial to the human body.</p>
        <p>Indolepropionic acid can scavenge free radicals, and strengthen the mucin barrier by increasing mucin (MUC2
          and MUC4) and goblet cell secretion products (TFF3 and RELMβ).In addition, IPA can weaken the expression of
          inflammatory factors caused by LPS <sup>[1]</sup>.So it is a very good substance to improve the intestinal mucosal
          barrier. In our engineered bacteria, a pathway that metabolizes tryptophan to produce indolepropionic acid can
          be constructed to consume the remaining tryptophan and strengthen the intestinal mucosal barrier.</p>
        <p>So we reconstructed a five-step reaction. We cloned its tryptophan aminotransferase (<em>TAA1</em>) from <em>Arabidopsis
          thaliana</em>, which can catalyze the production of indole pyruvate from tryptophan. Then cloned from <em>Clostridium
          sporogenes</em> four enzymes --<em>fldB</em>, <em>fldC</em>, <em>fldH</em>, and <em>acdA</em> in the fld gene
          cluster. <em>fldB</em> and <em>fldC</em> encode the 2-hydroxyacyl-CoA dehydratase protein family.
          <em>fldH</em> encodes phenyllactate dehydratase. <em>acdA</em> encodes 3-(aryl)acrylate reductase <em>.</em>
          Tryptophan is first catalyzed by tryptophan aminotransferase (<em>TAA1</em>) to produce indolepyruvate, and
          then indolepyruvate is catalyzed by phenyllactate dehydratase (<em>fldH</em>) to produce indole lactic acid.
          This enzyme is also the rate-limiting enzyme of the entire reaction <sup>[2]</sup>. Then indole lactic acid is catalyzed
          by the 2-hydroxyacyl-CoA dehydratase protein family encoded by <em>fldBC</em> to produce indole acrylic acid,
          and finally, indole acrylic acid is catalyzed by the 3-(aryl)acrylate reductase encoded by <em>acdA</em> to
          produce indole propionic acid. In this way, our engineered bacteria can metabolize tryptophan to produce
          indolepropionic acid and repair the intestinal mucosal barrier.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 3 Schematic diagram of Gibson reorganization
          </template>
          <template v-slot:image>
            <img :src="pic3" width="65%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 Function of indolepropionic acid
          </template>
          <template v-slot:image>
            <img :src="pic4" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Intestinal colony structure regulation module">
        <h4>Intestinal colony structure regulation module</h4>
        <p>Patients with CKD are often accompanied by intestinal flora imbalance, and the number, composition,
          distribution, and structure of intestinal flora have changed, which is manifested by the decrease of
          beneficial bacteria and the abnormal proliferation of pathogenic bacteria and conditional pathogens
          <sup>[3,4,5]</sup>.</p>
        <p>Therefore, we hope that our engineered bacteria can regulate the colony structure of the intestines, promote
          the proliferation of <em>lactobacilli, bifidobacteria</em> and other probiotics, and inhibit the proliferation
          of pathogenic bacteria such as <em>Clostridium sporogenes</em>. And galactooligosaccharide (GOS) is a very
          good choice. Studies have shown that galactooligosaccharide has a very good ability to promote the
          proliferation of intestinal probiotics such as bifidobacteria and lactobacilli, and it can inhibit the
          proliferation of intestinal pathogenic bacteria such as <em>Clostridium sporogenes</em> and reduce the
          production of intestinal endotoxins <sup>[6]</sup>. At the same time, galactooligosaccharides can alleviate the
          intestinal inflammation caused by LPS stimulation and enhance the human intestinal barrier function.</p>
        <p>We have heterologously expressed the β-galactosidase <em>bga2</em> of strain <em>Klebsiella oxytoca</em>
          ZJUH1705 in the engineered bacteria. It has been confirmed that this enzyme has up to 45% of the ability to
          catalyze lactose to form galacto-oligosaccharides. This is a very high catalytic ability <sup>[6]</sup>.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 5 GOS promotes the proliferation of Lactobacillus and Bifidobacterium
          </template>
          <template v-slot:image>
            <img :src="pic5" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph
        hint_text="Quorum sensing regulates the metabolism of engineered bacteria">
        <h4>Quorum sensing regulates the metabolism of engineered bacteria</h4>
        <p>On the one hand, we hope that the metabolism of engineered bacteria can efficiently perform their specific
          functions. Complete a specific job at a specific time. On the other hand, we do not want our engineered
          bacteria to disrupt the local microbial community after colonization. Therefore, we have added a quorum
          sensing system orthogonal to the native microorganisms in the design. When the engineered bacteria quantity is
          small, the expression of <em>GDH</em> by engineered bacteria enhances its competitiveness, enabling it to
          colonize rapidly and form a certain population quantity. After reaching a certain population size, due to the
          limitation of the quorum sensing mechanism, the engineered bacteria will slow down their proliferation speed
          to ensure that they do not interfere with the intestinal microbiota. Then began to express β-galactosidase to
          catalyze the production of galactooligosaccharides to promote the proliferation of probiotics. At the same
          time, the quorum sensing system can retain part of the original <em>E. coli</em> in the intestine and
          metabolize tryptophan to produce trace amounts of indole. Indole plays an important role in the formation of
          <em>E. coli</em> cell membranes. </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 6 When the number of engineered bacteria is small, expressing GDH promotes the proliferation of
            engineered bacteria
          </template>
          <template v-slot:image>
            <img :src="pic6" width="65%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 7 The engineered bacteria express β-galactosidase to regulate intestinal colony structure after
            colonization
          </template>
          <template v-slot:image>
            <img :src="pic7" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Biosafety module">
        <h4>Biosafety module</h4>
        <p>
          As a project aimed at implanting engineered bacteria into human body, biosafety has always been the most
          important issue. Two security modules are designed and tested for two different use cases. First of all, once
          the microorganisms are colonized in the human intestines, we hope that it is still under our control, that is,
          we hope that our users can terminate the use of our engineered bacteria at any time. Second, we do not want
          our bacteria to pollute the environment outside the human body.
        </p>
        <h5>The kill switch controlled by arabinose</h5>
        <p>
          To enable our users to specifically eliminate engineered bacteria, we put a gene that encodes a translation
          inhibitor (MazF) downstream of the L-arabinose activation promoter into our circuit. L -Arabinose is an
          inducer that is harmless to the human body and can be ingested directly. In addition, the arabinose content in
          the human diet is relatively low, so it will not accidentally trigger the death switch. At the same time, as a
          translation inhibitor, MazF does not cause bacterial cell lysis. Therefore, activating this "death switch"
          will not cause harm to native microorganisms.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 8 Arabinose induces expression of translation inhibitor to kill engineered bacteria
          </template>
          <template v-slot:image>
            <img :src="pic8" width="65%">
          </template>
        </bnuz_image_container>
        <h5><em>Can</em> defective engineered bacteria prevent escape</h5>
        <p>βcarbonic anhydrase is the key enzyme of Escherichia coli that rapidly metabolizes carbon dioxide and water
          into carbonic acid, hydrogen ion, and bicarbonate ion, which is encoded by the can gene. When the can gene
          functions normally, the presence of β carbonic anhydrase can enable <em>E. coli</em> to obtain enough carbonic
          acid and other substances in a normal atmospheric environment with a low carbon dioxide concentration, and
          metabolize normally <sup>[7]</sup>.</p>
        <p>As the ultimate goal of our team&#39;s engineered bacteria is to colonize the intestinal tract, and the
          intestinal tract is in a gas environment with high carbon dioxide concentration, our engineered <em>Escherichia
            coli</em> can encode carbonic anhydrase (CA) due to the <em>Can</em> gene of <em>Escherichia coli</em>,
          which can help carbon dioxide and water to be quickly converted into carbonic acid, protons and bicarbonate
          ions. In the intestinal tract where we want <em>E. coli</em> to survive, the concentration of carbon dioxide
          is high enough to automatically convert carbon dioxide into bicarbonate ions. However, when <em>E. coli</em>
          leaves the human body, the decrease of carbon dioxide concentration will lead to its death.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 9 Red recombination knocks out the Can gene.
          </template>
          <template v-slot:image>
            <img :src="pic9" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Reference">
        <h4>Reference</h4>
        <p>[1]Roager, H.M., Licht, T.R. Microbial tryptophan catabolites in health and disease. <em>Nat Commun</em> <strong>9,</strong> 3294 (2018).</p>
        <p>[2] Dodd D, Spitzer MH, Van Treuren W, Merrill BD, Hryckowian AJ, Higginbottom SK, Le A, Cowan TM, Nolan GP, Fischbach MA, Sonnenburg JL. A gut bacterial pathway metabolizes aromatic amino acids into nine circulating metabolites. Nature. 2017.</p>
        <p>[3] Vaziri ND, Zhao YY, Pahl MV. Altered intestinal microbial flora and impaired epithelial barrier structure and function in CKD: the nature, mechanisms, consequences and potential treatment [J]. Nephrol Dial Transplant, 2016, 31: 737-746</p>
        <p>[4] Vaziri ND, Wong J, Pahl M, et al. Chronic kidney disease alters intestinal microbial flora [J]. Kidney Int, 2013, 83: 308-315. </p>
        <p>[5] Zhang P, Wei M, Jiang HL, et al. Gut bacterial translocation contributes to microinflammationin experimental uremia [J]. Chin J Nephrol, 2013, 29: 611-615.</p>
        <p>[6] Zhu S Q. Preparation of oligomeric galactose by biocatalytic method [D]. Zhejiang University of Technology,2020. </p>
        <p>[7]Merlin, C., Masters, M., Mcateer, S., &amp; Coulson, A. (2003). Why is carbonic anhydrase essential to Escherichia coli. Journal of Bacteriology, 185(21), 6415–6424. </p>
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
import bnuz_image_container from "@/components/bnuz_image_container";

import head_image from '@/assets/head_images/PROJECT/bannerproject-DESIGN.png'

import conf from '@/wiki_config';
import pic1 from '@/assets/project/design/pic1.png'
import pic2 from '@/assets/project/design/pic2.png'
import pic3 from '@/assets/project/design/pic3.png'
import pic4 from '@/assets/project/design/pic4.png'
import pic5 from '@/assets/project/design/pic5.png'
import pic6 from '@/assets/project/design/pic6.png'
import pic7 from '@/assets/project/design/pic7.png'
import pic8 from '@/assets/project/design/pic8.png'
import pic9 from '@/assets/project/design/pic9.png'

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
      // TODO: set image URI
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/e/ef/T--BNUZ-China--bannerproject-DESIGN.2aca13a1.png\n',
      pic1: conf.isDev ? pic1 : "https://2021.igem.org/wiki/images/3/3d/T--BNUZ-China--pic1.a2250df6.png",
      pic2: conf.isDev ? pic2 : "https://2021.igem.org/wiki/images/9/91/T--BNUZ-China--pic2.5d60ee81.png",
      pic3: conf.isDev ? pic3 : "https://2021.igem.org/wiki/images/0/0d/T--BNUZ-China--pic3.16e76c9f.png",
      pic4: conf.isDev ? pic4 : "https://2021.igem.org/wiki/images/3/34/T--BNUZ-China--pic4.71808e5d.png",
      pic5: conf.isDev ? pic5 : "https://2021.igem.org/wiki/images/0/02/T--BNUZ-China--pic5.18dc752e.png",
      pic6: conf.isDev ? pic6 : "https://2021.igem.org/wiki/images/a/a2/T--BNUZ-China--pic6.ec6fe87a.png",
      pic7: conf.isDev ? pic7 : "https://2021.igem.org/wiki/images/d/dd/T--BNUZ-China--pic7.5c83e366.png",
      pic8: conf.isDev ? pic8 : "https://2021.igem.org/wiki/images/1/1f/T--BNUZ-China--pic8.4298e488.png",
      pic9: conf.isDev ? pic9 : "https://2021.igem.org/wiki/images/9/9c/T--BNUZ-China--pic9.f859645a.png",

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
