<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">

    <b-container>
      <BNUZ_notebook_item name="Line0" tip="Jul.">
        <template v-slot:time>
          7.1-7.7
        </template>
        <template v-slot:text>
          <h5>IPA metabolic pathway(fld)</h5>
          GDXL synthesis
          <h5>Suicide switch(PMF)</h5>
          pBad promoter and MazF（PMF） synthesis

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line1">
        <template v-slot:time>
          7.8-7.14
        </template>
        <template v-slot:text>
          <h5>IPA metabolic pathway(fld)</h5>
          PCR TAA1,fldBC,acdA;Connecting to intermediate plasmid;Transformed to E.coli DH5α. Colony PCR
          <h5>Suicide switch(PMF)</h5>
          pBad promoter and MazF（PMF） synthesis

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line2">
        <template v-slot:time>
          7.15-7.22
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          Target fragment primer synthesis
          <h5>IPA metabolic pathway(fld)</h5>
          Intermediate plasmid extraction; PCR fldH, GDXL; Connecting fldH to intermediate plasmid;Transformed to E.coli DH5α; Colony PCR
          <h5>Suicide switch(PMF)</h5>
          pET28a plasmid extraction; Linearizaytion the pET28a plasmid; PCR PMF; Gel recovery and purification.
          <h5>competitive edge(GDH)</h5>
          E.coli DH5α genome extraction; PCR GDH;Connecting to intermediate plasmid;Transformed to E.coli DH5α. Colony PCR
          <h5>biosafety(can gene knock-out)</h5>
          Target fragment primer synthesis

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line3">
        <template v-slot:time>
          7.22-7.28
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          PCR target fragment from PBR322;  Gel recovery and purification; Transformed pKD46Gm into BL21(DE3)
          <h5>IPA metabolic pathway(fld)</h5>
          Intermediate plasmid extraction; Send the intermediate plasmid to be sequenced by the company.
          <h5>Suicide switch(PMF)</h5>
          T4 DNA ligation PMF with pET28a; Transformed to E.coli DH5α; Colony PCR; PMF plasmid extraction.
          <h5>competitive edge(GDH)</h5>
          Intermediate plasmid extraction; Send the intermediate plasmid to be sequenced by the company.
          <h5>biosafety(can gene knock-out)</h5>
          PCR target fragment from PBR322;  Gel recovery and purification; Transformed pKD46Gm into BL21(DE3)

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line4" tip="Aug.">
        <template v-slot:time>
          7.29-8.4
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          Colony PCR; Transformed target fragment into BL21(DE3)
          <h5>IPA metabolic pathway(fld)</h5>
          PCR TAA1, fldBC, fldH from intermediate plasmid; His-6p-MBP-RSFD plasmid extraction; Linearization the His-6p-MBP-RSFD plasmid; Gel recovery and purification.
          <h5>Overexpression β-Galactosidase</h5>
          Experiments design
          <h5>Suicide switch(PMF)</h5>
          PMF plasmid sequenced by the company; Transformed to E.coli BL21(DE3); Colony PCR.
          <h5>competitive edge(GDH)</h5>
          PCR GDH from intermediate plasmid; pET28a plasmid extraction; Linearization the pET28a plasmid; Gel recovery and purification.
          <h5>biosafety(can gene knock-out)</h5>
          Colony PCR; Transformed target fragment into BL21(DE3)

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line5">
        <template v-slot:time>
          8.5-8.11
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          Target fragment primer synthesis
          <h5>IPA metabolic pathway(fld)</h5>
          Gibson assembly TAA1, GDXL, fldH, His-6p-MBP-RSFD plasmid;Transformed to E.coli DH5α;Colony PCR; Plasmid extraction and sequenced by the company.
          <h5>Overexpression β-Galactosidase</h5>
          LacZ gene synthesis by company
          <h5>Suicide switch(PMF)</h5>
          Measure OD600 to draw the growth curve
          <h5>competitive edge(GDH)</h5>
          T4 DNA ligation GDH with pET28a; Transformed to E.coli DH5α; Colony PCR; PMF plasmid extraction.
          <h5>biosafety(can gene knock-out)</h5>
          Colony PCR; Sequenced by the company

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line6">
        <template v-slot:time>
          8.12-8.18
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          PCR target fragment from pET28a;  Gel recovery and purification; Transformed pKD46Gm into BL21(DE3)
          <h5>IPA metabolic pathway(fld)</h5>
          Linearization the assembly plasmid; Gel recovery and purification; T4 DNA ligation fldBC with assembly plasimd; Transformed to E.coli DH5α; Colony PCR; fld plasmid extraction and sequenced by the company
          <h5>Overexpression β-Galactosidase</h5>
          LacZ gene synthesis by company
          <h5>competitive edge(GDH)</h5>
          GDH plasmid sequenced by the company; Transformed to E.coli BL21(DE3); Colony PCR.
          <h5>biosafety(can gene knock-out)</h5>
          Cultured under different CO2 concentrations

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line7">
        <template v-slot:time>
          8.19-8.25
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          Colony PCR; Transformed target fragment into BL21(DE3)
          <h5>IPA metabolic pathway(fld)</h5>
          fld plasmid tranformed to E.coli BL21(DE3); Colony PCR; Fermentation;
          <h5>Overexpression β-Galactosidase</h5>
          LacZ gene synthesis by company
          <h5>competitive edge(GDH)</h5>
          Measure OD600 to draw the growth curve

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line8" tip="Sep.">
        <template v-slot:time>
          8.26-9.1
        </template>
        <template v-slot:text>
          <h5>IS elimination(TnaA knock-out)</h5>
          Colony PCR
          <h5>IPA metabolic pathway(fld)</h5>
          HPLC
          <h5>Overexpression β-Galactosidase</h5>
          pET28a plasmid extraction; Linearizaytion the pET28a plasmid; PCR LacZ; Gel recovery and purification.

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line9">
        <template v-slot:time>
          9.2-9.8
        </template>
        <template v-slot:text>
          <h5>IPA metabolic pathway(fld)</h5>
          total RNA extraction; Reverse transcription; cDNA PCR
          <h5>Overexpression β-Galactosidase</h5>
          T4 DNA ligation LacZ with pET28a; Transformed to E.coli DH5α; Colony PCR; LacZ plasmid extraction.

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line10">
        <template v-slot:time>
          9.9-9.15
        </template>
        <template v-slot:text>
          <h5>IPA metabolic pathway(fld)</h5>
          HPLC
          <h5>Overexpression β-Galactosidase</h5>
          LacZ plasmid sequenced by the company; Transformed to E.coli BL21(DE3); Colony PCR.

        </template>
      </BNUZ_notebook_item>


      <BNUZ_notebook_item name="Line11">
        <template v-slot:time>
          9.16-9.22
        </template>
        <template v-slot:text>
          <h5>Overexpression β-Galactosidase</h5>
          RNA extraction and reverse transcription; cDNA PCR

        </template>
      </BNUZ_notebook_item>
    </b-container>

    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import AppRoot from "@/AppRoot";
import BNUZ_notebook_item from '@/components/bnuz_notebook_item';

import head_image from '@/assets/head_images/PROJECT/notebook.png'
import conf from '@/wiki_config';

export default {
  name: 'App',
  components: {
    TopNavigationBar,
    AppRoot,
    Bottom,
    // eslint-disable-next-line vue/no-unused-components
    BNUZ_notebook_item
  },
  data() {
    return {
      text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/9/9d/T--BNUZ-China--notebook.8cbaec0d.png\n'
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
