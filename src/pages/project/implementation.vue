<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content>
      <bnuz_content_paragraph hint_text="Degradation of Cas9 at a proper rate In order to verify the function">
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
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Degradation of Cas9 at a proper rate In order to verify the function">
        <h4>Second Heading</h4>
        Degradation of Cas9 at a proper rate
        In order to verify the function of Clb2 (N124aa) as a degradation tag, we constructed the plasmids for an
        experimental and a control group. We hoped to characterize the protein degradation by determining the
        fluorescence intensity curve.
        1.The two plasmids were constructed with pYES2, containing GAL1 galactose inducible promoter and URA3 marker
        gene. The vector in the experimental group contains CLB2 (N124aa)- Linker-GFP, while the control group only
        contains GFP. The successfully constructed vectors were transformed into E.coli DH5α strain.
        2.After the plasmids were extracted and linearized, they were transformed into Saccharomyces cerevisiae
        BY4741. We used the fluorescence microscope and differential interference microscope to verify the
        transformants.
        3.Both experimental and control groups were cultured in SC medium at 30 ℃ until OD600 value reached about
        3.000, and then the expression was induced by galactose with a final concentration of 2%. After induction,
        the fluorescence intensity was measured by flow cytometry at half an hour interval.
        4.Cells were then inoculated into the medium containing glucose instead of galactose. In addition to being a
        carbon source, glucose also inhibits the expression of GFP by inhibiting the GAL1 promoter. Within 7 hours
        after inoculation, the fluorescence intensity was measured by flow cytometry at the same interval of half an
        hour.
        5.We used SPSS26.0 to process the data and determined the relationship between fluorescence intensity and
        time, as well as the protein concentration and time. Finally, we calculated the degradation rate of protein
        modified by Clb2 N124aa through modeling.
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="333">
        <h4>Third Heading</h4>
        Degradation of Cas9 at a proper rate
        In order to verify the function of Clb2 (N124aa) as a degradation tag, we constructed the plasmids for an
        experimental and a control group. We hoped to characterize the protein degradation by determining the
        fluorescence intensity curve.
        1.The two plasmids were constructed with pYES2, containing GAL1 galactose inducible promoter and URA3 marker
        gene. The vector in the experimental group contains CLB2 (N124aa)- Linker-GFP, while the control group only
        contains GFP. The successfully constructed vectors were transformed into E.coli DH5α strain.
        2.After the plasmids were extracted and linearized, they were transformed into Saccharomyces cerevisiae
        BY4741. We used the fluorescence microscope and differential interference microscope to verify the
        transformants.
        3.Both experimental and control groups were cultured in SC medium at 30 ℃ until OD600 value reached about
        3.000, and then the expression was induced by galactose with a final concentration of 2%. After induction,
        the fluorescence intensity was measured by flow cytometry at half an hour interval.
        4.Cells were then inoculated into the medium containing glucose instead of galactose. In addition to being a
        carbon source, glucose also inhibits the expression of GFP by inhibiting the GAL1 promoter. Within 7 hours
        after inoculation, the fluorescence intensity was measured by flow cytometry at the same interval of half an
        hour.
        5.We used SPSS26.0 to process the data and determined the relationship between fluorescence intensity and
        time, as well as the protein concentration and time. Finally, we calculated the degradation rate of protein
        modified by Clb2 N124aa through modeling.
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="444">
        <h4>Forth Heading</h4>
        Degradation of Cas9 at a proper rate
        In order to verify the function of Clb2 (N124aa) as a degradation tag, we constructed the plasmids for an
        experimental and a control group. We hoped to characterize the protein degradation by determining the
        fluorescence intensity curve.
        1.The two plasmids were constructed with pYES2, containing GAL1 galactose inducible promoter and URA3 marker
        gene. The vector in the experimental group contains CLB2 (N124aa)- Linker-GFP, while the control group only
        contains GFP. The successfully constructed vectors were transformed into E.coli DH5α strain.
        2.After the plasmids were extracted and linearized, they were transformed into Saccharomyces cerevisiae
        BY4741. We used the fluorescence microscope and differential interference microscope to verify the
        transformants.
        3.Both experimental and control groups were cultured in SC medium at 30 ℃ until OD600 value reached about
        3.000, and then the expression was induced by galactose with a final concentration of 2%. After induction,
        the fluorescence intensity was measured by flow cytometry at half an hour interval.
        4.Cells were then inoculated into the medium containing glucose instead of galactose. In addition to being a
        carbon source, glucose also inhibits the expression of GFP by inhibiting the GAL1 promoter. Within 7 hours
        after inoculation, the fluorescence intensity was measured by flow cytometry at the same interval of half an
        hour.
        5.We used SPSS26.0 to process the data and determined the relationship between fluorescence intensity and
        time, as well as the protein concentration and time. Finally, we calculated the degradation rate of protein
        modified by Clb2 N124aa through modeling.
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

import head_image from '@/assets/head_images/PROJECT/bannerproject-implementation.png'

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
  background-color: rgb(220, 230, 237);
  border-radius: 20px;
  margin: 16px 0;
}
</style>
