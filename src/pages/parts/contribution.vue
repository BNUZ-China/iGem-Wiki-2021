<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content>
      <bnuz_content_paragraph hint_text="The structure of Indole propionic acid(IPA) metabolic pathway in E.coli.">
        <h4>The structure of Indole propionic acid(IPA) metabolic pathway in E.coli.</h4>
        The tryptophan metabolic pathway of E. coli is of great value in production. Many research reform this
        pathway. The USAS-China team in 2018 knocked-out the tnaA gene which coding the tryptophan enzyme of E.
        coli<sup>[1]</sup>. At 2019, the CRISPR-Cas9 technique was used in the knock-out of tnaA<sup>[2]</sup>. This
        year, the TnaA gene was knocked out by Red recombination.
        After knocking out the pathway of tryptophan metabolism to produce indole, in order to eliminate accumulated tryptophan and achieve the purpose of repairing intestinal mucosal barrier, Our team successfully structured the IPA metabolic pathway by cloned and linked multiple genes from Arabidopsis thaliana and Clostridium sporogenes(Figure 1). The fld plasmid was transformed into E.coli BL21(DE3) and achieved the production of IPA from tryptophan(Figure 2).
        Through this metabolic pathway, the accumulated tryptophan after tnaA gene deletion can be changed into IPA,
        which is good for health. Our result provides programme and reference for the research of tryptophan metabolic pathway.
        <bnuz_image_container>

        </bnuz_image_container>
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
import bnuz_image_container from "@/components/bnuz_image_container";

import head_image from '@/assets/head_images/PARTS/bannerPARTS-contribution.png'

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
