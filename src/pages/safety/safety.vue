<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#9b2b28">
      <bnuz_content_paragraph hint_text="Laboratory safety">
        <h4>Laboratory safety</h4>
        <p>
          During the competition, we will conduct experiments in a biosafety level 1 laboratory. All the bacterial
          strain we use include Escherichia coli Nissle 1917（Biosafety Level 1）, E.coli DH5α（Biosafety Level 1）, E.coli
          BL21（Biosafety Level 1）, Clostridium sporogenes（Biosafety Level 2）, Bifidobacterium adolensentis（Biosafety
          Level 1） and Lactobacillus delbrueckii subsp. （Biosafety Level 1），which are all well studied and do not pose
          known serious threat to human health or the environment. In addition, our engineered E. coli has been designed
          safety modules that allow users to actively kill the E. coli any time. What’s more, to prevent pollution of
          the environment, we designed E. coli that unable to live without the human body. When they escape the human
          body, they will trigger a kill switch and be killed at once. All our experiments are carried out in strict
          regulation with disinfection and sterilization procedures to prevent the escape. Seeing the module safety
          section for details.
        </p>

        <p>
          The safety manager of our laboratory is Wang Bo, who is also the manager of many laboratories in the school.
          He has many years of laboratory management experience and can do a good job in safety management. Our
          laboratory also has a complete attendance registration system, which can quickly determine the responsible
          person after finding any problems.
        </p>
        <p>
          The laboratory is equipped with emergency sprinklers, eye washers, fume hoods and other devices to ensure our
          safety. Our laboratory also has perfect safety emergency facilities, which meet the safety protection
          requirements of biosafety level 1 laboratory.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 Part of the Laboratory equipment
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          We also have strict laboratory rules: No eating and drinking in laboratory，Wearing lab coats and gloves when
          working in the lab, and wear protective gloves when operating strains. All clean bench shall be sterilized
          with 75% ethanol before and after bacterial experiment. All containers must be sterilized at high temperature
          before and after use; All unnecessary equipment should be powered off after use. Autoclave can't run all
          night, and the laboratory oven must be checked every 15 minutes when it is used. The use of any chemical and
          instrument should be well documented and so on.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Laboratory safety training">
        <h4>Laboratory safety training</h4>
        <p>
          All members of the experimental group have completed the "Laboratory Safety and Environmental Protection"
          course, learned the basic safety operations of biological laboratories, safety management requirements and
          emergency response to accidents. Team members also gave a presentation on the theme of synthetic biology
          safety in class, popularizing the basic knowledge of synthetic biology and the safety rules that need to be
          followed.
        </p>
        <p>
          In addition, all members of the experimental group have had basic training in the operation of molecular
          biology experiments, and they understand the basic experimental operation methods and experimental safety
          rules to ensure the smooth and safe conduct of the experiment.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 Members of the experimental group took laboratory safety and environmental protection courses
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Security module">
        <h4>Security module</h4>
        <h5>[Arabinose]</h5>
        <p>
          Our project intends to partly treat chronic kidney disease by colonizing relatively complete engineered
          bacteria in the intestines. During the colonization of engineered bacteria, patients may wish to terminate
          treatment voluntarily due to the existence of various factors. In response to this possible situation, our
          team designed an arabinose promoter to control the expression of mazf. Mazf, a toxin protein, can specifically
          cleave the ACA sequence of free mRNA, thereby inhibiting the release of ribosomes and protein synthesis. The
          abnormally encoded polypeptide is released and degraded by intracellular proteases, which in turn causes cell
          death. And arabinose is a kind of sugar that the general population in life will not take under normal
          circumstances. There will not be too many accidents when the arabinose promoter induces the expression of mazf
          to kill the engineered bacteria. Therefore, patients can choose to take arabinose actively according to their
          own conditions to achieve the effect of killing engineered bacteria in the intestinal tract.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.3 Arabinose induced expression of translation inhibitors to kill engineered bacteria
          </template>
          <template v-slot:image>
            <img :src="pic3" width="65%">
          </template>
        </bnuz_image_container>
        <h5>[CO2 induced suicide system]</h5>
        <p>
          By consulting related literature, we learned that the human intestinal environment is a high CO2
          concentration environment, so we decided to use this feature to prevent the escape of
          engineered E.coli.
        </p>
        <p>
          The engineered E.coli we designed uses Crisp-Cas9 to achieve the knockdown of Can, making the E.coli unable to
          survive after leaving the human intestinal environment. The CAN of E.coli encodes carbonic anhydrase (CA), an
          enzyme that helps CO2 and H2O quickly convert into carbonate ions, hydrogen ions, and bicarbonate ions. E.
          coli requires bicarbonate as a metabolic substrate during its growth. Therefore, CAN knockdown E. coli will
          not be able to convert CO2 into bicarbonate fast enough to prevent it from spreading in a low carbon dioxide
          environment(natural environment) and eventually causes cell death. In the intestinal environment where E. coli
          survives, the concentration of CO2 is high enough (from 5% to 29%) to spontaneously convert CO2 into
          bicarbonate ions. However, when E. coli leaves the human body, the decrease in CO2 concentration will cause
          its death.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 Red recombination knock out of Can gene
          </template>
          <template v-slot:image>
            <img :src="pic4" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Regulations">
        <h4>Regulations</h4>
        <p>
          <a href="https://ssc.bnu.edu.cn/gzzd/sysaqglgz/94795.html">General requirements for laboratory biosafety
          (GB19489-2008)</a><br>
         <a href="https://www.who.int/publications/i/item/9789240011311"> Laboratory Biosafety Manual</a><br>
          <a href="http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=EB3B94B543F6E4CD18C044DE6AB64CEC">Laboratories -
            General requirements for biosafety</a><br>
          <a href="http://sthjj.beijing.gov.cn/bjhrb/resource/cms/2017/01/2017011014225176234.pdf">Technical Specifications for Laboratory Hazardous Waste Pollution Prevention and Control
            (2017)</a><br>
          <a href="http://www.gov.cn/zwgk/2005-05/23/content_256.htm">Regulations on Biosafety Management of Pathogenic Microorganism Laboratories            (2004)</a>

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

import head_image from '@/assets/head_images/safety/bannerSAFETY.png'
import pic1 from '@/assets/safety/pic1.png'
import pic2 from '@/assets/safety/pic2.jpg'
import pic3 from '@/assets/safety/pic3.png'
import pic4 from '@/assets/safety/pic4.png'

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
      head_image: conf.isDev ? head_image : '',
      pic1: conf.isDev ? pic1 : '',
      pic2: conf.isDev ? pic2 : '',
      pic3: conf.isDev ? pic3 : '',
      pic4: conf.isDev ? pic4 : ''
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: text_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

.bnuz-header-image {
  width: 100%;
  height: 40%;
}

.roundRect {
  padding: 20px;
  /*background-color: rgb(220, 230, 237);*/
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid #a62420;
}

p {
  font-size: 20px;
  font-family: text_font, serif;
}

p > a {
  color: #a62420;
}
</style>
