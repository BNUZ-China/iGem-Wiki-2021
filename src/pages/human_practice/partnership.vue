<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#0E4993" top_distance="15">
      <bnuz_content_paragraph hint_text="Overview">
        <p>
          In the context of globalization, many tasks are difficult to be accomplished by an individual or a small
          group. Long-term, in-depth cooperation is more valuable than communication. In the spirit of the globally
          connected iGEM community, we have established a deep partnership with BNU-China throughout the season. We have
          carried out in-depth cooperation in many fields such as project promotion, experiment, mathematical modeling,
          education and human practice. We hope to achieve the following four objectives:
        </p>
        <ul>

          <li>To facilitate the exchange of experience in scientific research</li>
          <li>Promote the effectiveness of model building</li>
          <li>Expand the coverage of communication to the public</li>
          <li>To promote cooperation in biological research and product developing in different fields</li>

        </ul>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Project Design-Build-Test-Learn">
        <h4>Project Design-Build-Test-Learn</h4>
        <p>
          During the design period of our project, we had close communication with the BNU-China team. We have weekly
          online meetings with the BNU-China team to share our brainstorming ideas. One of our team members had a family
          member with chronic kidney disease, so he wanted to develop an effective treatment for CKD. The BNU-China team
          gave us some inspiration to address the problem from the perspective of the intestinal flora and CKD in
          introducing their 2019 entry.
          After the preliminary confirmation of the project, we invited BNU-China instructor Professor Zhu Xudong to
          ZhuHai Campus to have in-depth offline communication with us. Gave us many suggestions to improve and develop
          the project.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 BNU-China Instructor communicated with BNUZ-China team members (Prof. Zhu Xudong is on the left of
            the
            first
            row)
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          During the implementation stage of the project, we have held meetings with BNUZ-China from time to
          time to discuss problems encountered in experiment, modeling, art and other aspects, and explore the
          solutions.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 BNUZ-China have an online meetup with BNU-China
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Experiment">
        <h4>Experiment</h4>
        <p>
          BNU-China→BNUZ-China：BNUZ-China has established a team to participate in iGEM for the first time, and Zhuhai
          Campus of Beijing Normal University is also a newly founded campus. Many experimental equipment is not perfect
          yet, so the BNU-China team has provided us with a lot of experimental help. First of all, our lab is a BSLI
          lab and we cannot operate BSLII Strains Clostridium sporogenes. Therefore, BNU-China helped us extract the
          Clostridium sporogenes genome for subsequent PCR amplification of target fragments. Secondly, high performance
          liquid chromatography (HPLC) was needed to detect whether indolepropionic acid was contained in our
          fermentation broth when verifying the metabolic pathway of indolepropionic acid. This experiment cannot be
          carried out under the current conditions of our laboratory. Therefore, BNU-China conducted HPLC experiments
          for us.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.3 BNU-China is extracting Clostridium sporogenes genome
          </template>
          <template v-slot:image>
            <img :src="pic3" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          BNUZ-China→BNU-China：BNU-China often had false positives when Gibson connection is used. Due to many relevant
          experiments, BNUZ-China team gives several relevant suggestions. The first is to increase the digestion time,
          so that the plasmid is linearized more thoroughly. Secondly, do not add controls during gel electrophoresis,
          and replace a new TAE buffer before each electrophoresis. Finally, when cutting gel, we must clean up the
          cutter and the table in advance. In the middle stage of the experiment, the BNU-China team found that DNA
          marker always appeared trailing phenomenon during the gel profile after the nucleic acid dye was changed once.
          BNUZ-China team members pointed out that might be caused by the mismatch between nucleic acid dye and Marker,
          and BNU-China obtained a good result after changing Marker product.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 Comparison before and after marker replacement
          </template>
          <template v-slot:image>
            <img :src="pic4" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Modeling">
        <h4>Modeling</h4>
        <h5>BNU-China→BNUZ-China</h5>
        <p>
          Since it was the first time for BNUZ-China to establish a team to participate in iGEM, the modeling team also
          encountered many difficulties in the initial stage of the project, such as: the modeling ideas are not clear
          and the pace of modeling is not easy to grasp. In view of this, we consulted the students of BNU-China
          modeling group online, exchanged projects and modeling ideas with each other, and learned a lot of practical
          modeling skills, including but not limited to: the selection of model parameters, sensitivity analysis, etc.
          Basis on it, we improved the modeling ideas of the quorum sensing part of our project, and completed model II
          (quorum sensing model) with cooperation of BNU-China.
        </p>
        <h5>BNUZ-China→BNU-China</h5>
        <p>
          During the project, due to the insufficient experimental data of BNU-China team to support the model fitting
          and direct verification, the modeling progress was sluggish. BNUZ-China modeling team shared with them their
          experience in selecting parameters including but not limited to the growth rate and competition coefficient of
          competitive models and their indirect processing methods of similar model species parameters. By these useful
          exchanged ideas, BNU-China team had successfully completed the establishment of quorum sensing model.
        </p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Education">
        <h4>Education</h4>
        <p>
          BNUZ-China, together with BNU-China, BUCT, SZU-China and HAZU-China, held popular science lectures on synthetic biology to popularize scientific knowledge about synthetic biology and genetic engineering to the public. The lecture received a lot of positive feedback, and many of the people who attended said it was very rewarding, changing many of their prejudices about genetic engineering, and  recognizing the wonders of synthetic biology.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.5 BNU-China introduces synthetic biology in life
          </template>
          <template v-slot:image>
            <img :src="pic5" width="65%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.6 BNUZ-China introduces iGEM and synthetic biology
          </template>
          <template v-slot:image>
            <img :src="pic6" width="65%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.7 Everyone listened carefully to the report
          </template>
          <template v-slot:image>
            <img :src="pic7" width="65%">
          </template>
        </bnuz_image_container>
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

import head_image from '@/assets/head_images/HUMANPRACTICE/bannerhumanp-partnership.png'
import conf from "@/wiki_config";
import pic1 from "@/assets/hp/partnership/pic1.jpg";
import pic2 from "@/assets/hp/partnership/pic2.png";
import pic3 from "@/assets/hp/partnership/pic3.jpg";
import pic4 from "@/assets/hp/partnership/pic4.png";
import pic5 from "@/assets/hp/partnership/pic5.jpg";
import pic6 from "@/assets/hp/partnership/pic6.png";
import pic7 from "@/assets/hp/partnership/pic7.png";

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
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/a/a6/T--BNUZ-China--bannerhumanp-partnership.acde9616.png\n',
      pic1: conf.isDev ? pic1 : "https://2021.igem.org/wiki/images/7/71/T--BNUZ-China--pic1.f3bf16a6.jpg",
      pic2: conf.isDev ? pic2 : "https://2021.igem.org/wiki/images/8/86/T--BNUZ-China--pic2.1766aeea.png",
      pic3: conf.isDev ? pic3 : "https://2021.igem.org/wiki/images/1/15/T--BNUZ-China--pic3.eb6a2aaa.jpg",
      pic4: conf.isDev ? pic4 : "https://2021.igem.org/wiki/images/2/20/T--BNUZ-China--pic4.664b8e3a.png",
      pic5: conf.isDev ? pic5 : "https://2021.igem.org/wiki/images/7/7d/T--BNUZ-China--pic5.93eb09bb.jpg",
      pic6: conf.isDev ? pic6 : "https://2021.igem.org/wiki/images/5/5c/T--BNUZ-China--pic6.a4ef6192.png",
      pic7: conf.isDev ? pic7 : "https://2021.igem.org/wiki/images/1/19/T--BNUZ-China--pic7.a5f5be94.png",

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
  border: 2px solid #002971;
  border-radius: 20px;
  margin: 16px 0;
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
