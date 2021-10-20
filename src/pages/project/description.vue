<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#ffd89f" top_distance="15">
      <bnuz_content_paragraph hint_text="CKD">
        <h4>CKD</h4>
        <p>
          Chronic kidney disease (CKD) refers to a type of kidney disease in which the structure or function of the
          kidney is abnormal, and the duration is more than three months, and the kidney function slowly fails within
          a few months or even a few years <sup>[1]</sup>. Chronic kidney disease has a high incidence worldwide.
          According
          to the 2017 Global Kidney Disease Health Report <sup>[2]</sup>, the global incidence of CKD has exceeded 10%.
          Among
          them, the incidence of CKD in China is 10.8%, accounting for 17.29% of the global CKD patients. CKD has become
          a serious public health problem worldwide.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 Chronic Kidney Disease
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          The existing treatment methods for chronic kidney disease are mainly aimed at the host itself, including
          the prevention and treatment of hypertensive diabetes causing chronic kidney disease, and the control of
          blood sugar, blood lipid,and blood pressure <sup>[3]</sup>. In recent years, with the gradual discovery of
          the role
          of intestinal flora in diseases, targeting the metabolic pathways in the intestinal flora and regulating
          the biosynthesis of intestinal flora-host co-metabolites has become a new strategy to intervene in host
          diseases <sup>[4]</sup>.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="CKD and Intestinal flora">
        <h4>CKD and Intestinal flora</h4>
        <p>
          The intestinal flora is a complex community of microorganisms living in the human digestive tract. It maintains a relatively stable balance with the host and plays an important role in the host's physiological processes such as nutrition, metabolism, and immunity. In addition to the intestinal flora, the human intestine also has an intestinal mucosal barrier, which is an important structure for the intestine to resist external invasion, prevent harmful substances from entering the blood and maintain the intestinal microenvironment. The intestinal flora and the intestinal mucosal barrier together constitute the intestinal homeostasis system and jointly maintain the homeostasis and health of the host.[5,6]In the occurrence and development of CKD, it is often accompanied by intestinal flora and its metabolite metabolism disorder, intestinal barrier function impairment and other phenomena. It has important application prospect and scientific value to intervene the progress of chronic kidney disease based on the metabolic regulation of intestinal flora and its metabolites.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="CKD and Indoxyl-sulfate（IS）">
        <h4>CKD and Indoxyl-sulfate（IS）</h4>
        <p>
          Indoxyl-sulfate (IS) is a typical intestinal flora-host co-metabolite, a protein-bound urotoxin, and a key
          urotoxin that promotes the progression of CKD. IS can induce renal tubular cells to enter a state of
          oxidative stress, accelerate renal tubular cell damage and apoptosis, leading to renal interstitial fibrosis
          and glomerular sclerosis <sup>[7]</sup>. Tryptophan in food is first converted to indole under the action of the
          intestinal flora, and indole is converted to IS under the action of liver cytochrome P450 enzyme and
          sulfotransferase after entering the host cell <sup>[7,8]</sup>. Studies have shown that the level of indoxyl
          sulfate produced by liver metabolism is positively correlated with the level of indole <sup>[7]</sup>.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 Harm of indoxyl sulfate（adapted from PENG Yin. et.al. Acta Pharmaceutica Sinica,2020.[9]）
          </template>
          <template v-slot:image>
            <img :src="pic2" width="25%">
          </template>
        </bnuz_image_container>
        <p>
          At the same time, the number of probiotics in the gut has greatly decreased, and the number of pathogenic bacteria has greatly increased. The intestinal mucosal barrier was severely damaged [9].
        </p>
      </bnuz_content_paragraph>


      <bnuz_content_paragraph hint_text="E.Coli Keen Doctor">
        <h4>E.Coli Keen Doctor</h4>
        <p>With <i>Escherichia coli</i> Nissle 1917 as the chassis, BNUZ-China team developed a new type
        of intestinal colonization engineered bacteria, which knocked out the gene <i>TnaA</i> of the original
          <i>Escherichia coli</i> metabolizing tryptophan to produce indole, and overexpressed the engineered
            bacteria glucose dehydrogenase to enhance its competitiveness, thus achieving the purpose of replacing
        intestinal <i>Escherichia coli</i>, thus eliminating the generation of IS from the source. At the same time,
        we expressed the gene cluster that catalyzes tryptophan to produce indole propionic acid in engineered bacteria, and indole propionic acid can enhance intestinal mucosal barrier. In addition, the engineered bacteria will also catalyze lactose to form galactooligosaccharides by overexpressing β -galactosidase to promote the growth of other probiotics. Through the above-mentioned means, the enterotoxin indophenol sulfate can be eliminated from the source, and at the same time, the intestinal probiotics can be promoted to proliferate and the intestinal mucosal barrier can be repaired, to finally achieve the purpose of treating chronic kidney disease.</p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Reference">
        <h4>Reference</h4>
        <p>[1] Chen T, Harris DC. Challenges of chronic kidney disease prevention [J]. Med J Aust, 2015, 203: 209-210.</p>
        <p>[2] Bello AK, Levin A, Tonelli M, et al. Assessment of global kidney health care status [J]. JAMA, 2017, 317: 1864-1881.</p>
        <p>[3] Gao X, Mei CL. Guideline for screening, diagnosis, prevention and treatment of chronic kidney disease [J]. Chin J Pract Intern Med , 2017, 37: 28-34</p>
        <p>[4]Brown JM, Hazen SL. Targeting of microbe-derived metabolites to improve human health: the next frontier for drug discovery [J]. J Biol Chem, 2017, 292: 8560-8568</p>
        <p>[5] Mafra D, Lobo JC, Barros AF, et al. Role of altered intestinal microbiota in systemic inflammation and cardiovascular disease in chronic kidney disease [J]. Future Microbiol, 2014, 9: 399-410.</p>
        <p>[6] Yin JX, Lin DR. Intestinal flora and desease [J]. Bull Biol, 2004: 26-28.</p>
        <p>[7] Devlin AS, Marcobal A, Dodd D, et al. Modulation of a circulating uremic solute via rational genetic manipulation of the gut microbiota [J]. Cell Host Microbe, 2016, 20: 709-715.</p>
        <p>[8] Vanholder R, Schepers E, Pletinck A, et al. The uremic toxicity of indoxyl sulfate and p-cresyl sulfate: a systematic review [J]. J Am Soc Nephrol, 2014, 25: 1897-1907.</p>
        <p>[9] PENG Yin, XU Xue-jun, LI Jian-ping, et al. Strategy to delay the progression of chronic kidney disease by targeting gut microbiota and uremic toxins metabolism pathway. Acta Pharmaceutica Sinica,2020.</p>
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

import head_image from '@/assets/head_images/PROJECT/bannerproject-DES.png'

import conf from '@/wiki_config';
import pic1 from '@/assets/project/desciption/pic1.png'
import pic2 from '@/assets/project/desciption/pic2.png'

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
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/7/7a/T--BNUZ-China--bannerproject-DES.9cbc2de4.png\n',
      // TODO: set image URI
      pic1: conf.isDev ? pic1 : "https://2021.igem.org/wiki/images/d/d3/T--BNUZ-China--pic1.3fb567e7.png",
      pic2: conf.isDev ? pic2 : "https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--pic2.d70e511d.png",
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
