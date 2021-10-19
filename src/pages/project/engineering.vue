<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content_No_Nav>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="research">
        </template>
        <template v-slot:title>
          Research: How do we use synthetic biological treatments to cure CKD?
        </template>
        <template v-slot:description>
          Literature indicates that people only pay attention to the host itself and treat the diseases by regulating
          the metabolic pathways of the host cells. In recent years, it has become a new strategy to intervene host
          diseases by targeting metabolic pathways of the gut flora and controlling the biological synthesis of products
          from the gut flora-host co-metabolism with the discovery of the role of intestinal flora in diseases.
        </template>
      </bnuz_engineer>

      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="imagine">
        </template>
        <template v-slot:title>
          Imagine: Is it possible to cure CKD by colonizing engineered bacteria in gut?
        </template>
        <template v-slot:description>
          The development of CKD often combines with gut damage such as disorders of the gut flora and its metabolic
          pathways and the damage of gut barrier. Therefore, it is believed to have scientific value and application
          prospect that affect the development of CKD by controlling the gut flora and its metabolic pathways.
        </template>
      </bnuz_engineer>

      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="design">
        </template>
        <template v-slot:title>
          Design: Eliminating the indoxyl sulfate, a kind of enterogenic urinary toxin, by source control.
        </template>
        <template v-slot:description>
          We noticed that indoxyl-sulfate is the key toxin stimulating CKD, and indoleindole, the precusor substance of
          indoxyl-sulfate, is produced by <em>E. coli</em> in the gut. In addition, several researches shows that the
          production of indoxyl-sulfate is proportionate to the content of indoleindole in the gut. Therefore, it is
          possible to decrease the production of indoxyl-sulfate by source control and delaying the development of CKD
          by replacing the <em>E. coli</em> which product indoxyl-sulfate into the non-indoxyl-sulfate <em>E. coli</em>.
          To prove this expectation, the following tasks are necessary: Firstly, constructing tryptophan metabolism
          defection; Secondly, enlarge the competitiveness of the engineered bacteria to increase its colonizing ability
          in the gut.
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="building">
        </template>
        <template v-slot:title>
          Building: Red recombination to knock out the <em><em>TnaA</em></em> gene, overexpressing <em>GDH</em> gene
        </template>
        <template v-slot:description>
          <em>TnaA</em> gene encoding tryptophanase has the activity to metabolic tryptophan to indole. Our team knock out the
          <em>TnaA</em> gene in the engineered bacteria by Red recombination. Besides, we let the <em>GDH</em> gene, treated as the key
          enzyme in the pentose phosphate pathway and was defined to be positive enlarging the ability for bacteria
          proliferation, making the engineered bacteria be able to colonize in the gut.<br>
          <!--         TODO link -->
          Detailed information can be found at: <a href="https://2021.igem.org/Team:BNUZ-China/Experiment">experiment
        </a>
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="test">
        </template>
        <template v-slot:title>
          Test: Red recombination and growth curving.
        </template>
        <template v-slot:description>
          We tried to knock out the <em>TnaA</em> gene by Red recombination, but this experiment was failed.
          We drew the growth curve of describing the engineered bacteria and the wild-type <em>E. coli</em>, from which we learnt
          that <em>GDH</em> is positive during the colonization of engineereded bacteria. However, the effect is not significant
          without the induction of IPTG. But we used our mathematical model to show that a little bit of added
          competitiveness allows engineered bacteria to colonize well
          Detailed information can be found at: <a href="https://2021.igem.org/Team:BNUZ-China/Model">Model</a>
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="learn">
        </template>
        <template v-slot:title>
          Learn: The CRISPR-Cas9 and Quorum sensing methods are better ways
        </template>
        <template v-slot:description>
          We failed to knock out the <em>TnaA</em> gene by Red recombination. It was reported that the CRISPER-Cas9 technique was
          widely used for gene knock out. Therefore, we decided to repeat the experiment by using the CRISPER-Cas9
          system. We recognized that indole plays an important role in the formation of <em>E. coli</em> cell membrane, and
          tryptophan enzyme deficiency reduces the ability of biological membrane formation. indoleTherefore, we do not
          expect that the number of the engineered bacteria is too high, which will affect the stability of the whole
          intestinal colony, nor do we want the number of our engineered bacteria to be too small, which cannot achieve
          the purpose of reducing indoxyl sulfate.engineered
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="design">
        </template>
        <template v-slot:title>
          Design: Quorum sensing affects the metabolism of the engineered bacteria and the structure of gut flora
          systematically.
        </template>
        <template v-slot:description>
          We expected to build an orthogonal quorum sensing system with the wild microorganism. Due to the limitation of
          quorum system, when the number of engineered bacteria reaches the threshold, the proliferation will
          decelerate, while more functions will be activated. Patience suffered from CKD has a significant change in
          their gut flora structure, and the number of lactobacillus and Bifidobacterium decrease greatly. In addition,
          the intestinal barrier will also be damaged seriously. Due to this phenomenon, the engineered bacteria is
          expected to adjust the component of their gut flora and recovered the intestinal barrier when its
          proliferation slowed down. Galactooligosaccharide, a kind of functional oligose which is naturally synthesized
          by lactose, has a prominent benefit promoting the proliferation of probiotics. Our team set the gene of
          galactosidase, an enzyme to have high activity of catalytic formation of low lactose poly galactose from the
          <em>Klebsiella oxytoca</em> strain ZJUH1705 express, in the engineered bacteria.Indolepopionic acid (IPA)
          can
            remove
          the free radical. Besides, it can strengthen the intestinal barrier by enlarging the mucoprotein (MUC2 and
          MUC4) and metabolite from the goblet cells (TFF3 and RELMβ). Moreover, IPA can decrease the expression of the
          inflammatory factor from LPS. In conclusion, IPA is believed to be a valid micro molecule to improve the
          intestinal barrier.
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="building">
        </template>
        <template v-slot:title>
          Build: Engineered bacteria synthesizes galactooligosaccharide (GOS) and indolepopionic acid (IPA).
        </template>
        <template v-slot:description>
          Our team structured a pathway by the Gibson recombination method of producing indolepopionic acid from
          tryptophan. The genes came from clostridium sporogenes and the cDNA of Arabidopsis thaliana. Due to the time
          limitation, the part of quorum sensing is out of experiment. Detailed information can be found at: <a href="https://2021.igem.org/Team:BNUZ-China/Experiment">experiment
        </a>.
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="test">
        </template>
        <template v-slot:title>
          Test: PCR and HPLC
        </template>
        <template v-slot:description>
          Our team verified the level of gene expression and the final production though pathways IPA and GOS. Detailed
          information can be found at: Result.
        </template>
      </bnuz_engineer>
      <bnuz_engineer>
        <template v-slot:icon>
          <img :src="learn">
        </template>
        <template v-slot:title>
          Learn: find a proper concentration
        </template>
        <template v-slot:description>
          Since lactose is the substrate of GOS pathway, our team chose lactose and IPTG as the inductor of two
          comparative groups. The experiment results showed that the lactose, having the same concentration in milk, was
          significantly expressed in both paathways of GOS and IPA, which increases the possibility of application.
        </template>
      </bnuz_engineer>
    </BNUZ_Content_No_Nav>
    <bottom_center></bottom_center>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import AppRoot from "@/AppRoot";
import bnuz_engineer from '@/components/bnuz-engineer';
import bottom_center from '@/components/bottom_center';

import head_image from '@/assets/head_images/PROJECT/bannerproject-engineering.png'
import BNUZ_Content_No_Nav from "@/components/bnuz_content_no_nav";

import building from '@/assets/engineering/building.png';
import design from '@/assets/engineering/design.png';
import imagine from '@/assets/engineering/imagine.png'
import learn from '@/assets/engineering/learn.png'
import research from '@/assets/engineering/research.png'
import test from '@/assets/engineering/test.png'

import conf from '@/wiki_config';

export default {
  name: 'App',
  components: {
    BNUZ_Content_No_Nav,
    AppRoot,
    bottom_center,
    TopNavigationBar,
    bnuz_engineer
  },
  data() {
    return {
      head_image,
      // TODO: set image URI
      building: conf.isDev ? building : '',
      // TODO: set image URI
      design: conf.isDev ? design : '',
      // TODO: set image URI
      imagine: conf.isDev ? imagine : '',
      // TODO: set image URI
      learn: conf.isDev ? learn : '',
      // TODO: set image URI
      research: conf.isDev ? research : '',
      // TODO: set image URI
      test: conf.isDev ? test : '',
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
</style>
