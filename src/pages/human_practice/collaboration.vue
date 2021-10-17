<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#0E4993">
      <bnuz_content_paragraph hint_text="Attending the 5th Southern China Regional Meeting">
        <h4>Attending the 5th Southern China Regional Meeting</h4>
        In August 6, 2021, our team attended the 5th Southern China Regional Meeting. A total of 18 teams attended that
        meeting. In that meeting, we made a project introduction and discussed with other teams. In the modeling part,
        other teams told us that we can observe and analyze the existing models to put forward a new hypothetical model
        of predictive properties. Through this suggestion, our Lotka-Volterra competition model joins the comparison
        before and after the addition of GDH, which is manifested in the change of the competition coefficient of
        engineering bacteria.
        <div class="image-container">
          <div>
            <img :src="pic0" width="800px">
            <p>
              Figure1. Online Southern China Regional Meeting
            </p>
          </div>
        </div>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Attending the iGEM Intestinal Congress">
        <h4>Attending the iGEM Intestinal Congress</h4>
        After Southern China Regional Meeting，We have a iGEM Intestinal Congress with team
        BUCT，HZAU-China，SZU-China，NJMU-China，NJU-China，SUSTech_Shenzhen. At the meeting, we discussed how to make
        gut-related projects have an engineering and standardized operation mode and form a research paradigm.
        We cooperated with team BUCT，HZAU-China，SZU-China，NJMU-China，NJU-China，SUSTech_Shenzhen to accomplish a file
        which showed a complete procedure of doing a gut-related synthetic biologic research project. We separated the
        contents into different aspects and each team finished their own part. We wrote about the species selection,
        quorum sensing, intestinal colonization, prevention of horizontal gene transfer, prevention of chassis escape,
        hardware and instrumentation, bioinformatics and ethics when doing gut-related research. Our team undertook the
        writing of species selection and quorum sensing. In order to accomplish this file, we first went through the
        team projects from 2009 to 2020 to sum up the species they used. Then we analyzed the advantages and
        disadvantages of the popular species to give guidance on selecting. When writing the quorum sensing part, we
        explained its theory, and our team members also went through other teams’ projects to list the smart and typical
        ones. Our work may bring help to future teams which are willing to achieve a gut-related project, it’s a
        concluding of information, and it’s a share of ideas and experiences.
        <!-- TODO Links  -->

        <div class="image-container">
          <div>
            <img :src="handbook" width="800px">
            <p>
              Figure2. Intestinal Program Reference Manual
            </p>
          </div>
        </div>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Attending the Eighth Conference of China iGEMer Community (CCIC)">
        <h4>Attending the Eighth Conference of China iGEMer Community (CCIC)</h4>
        There are 79 teams in China sharing their research results and experiences in the CCiC online and offline
        meetings through team presentations and posters. In the meeting, iGEM HQ, iGEM Safety and Security Committee,
        iGEM Engineering Committee, and iGEM Human Practices Committee were invited. The thematic reports on different
        topics and workshops were also carried out to answer the problems encountered in various iGEM projects. There
        are also a number of top experts from academia, industry and social science.
        <!-- TODO 链接到肠道手册 -->

        <div class="image-container">
          <div>
            <img :src="pic2" width="800px">
            <p>
              Figure3. Eighth Conference of China iGEMer Community (CCIC)
            </p>
          </div>
        </div>
        Our team won the Active Participation Award in the conference. More importantly, we have gained much in the
        CCIC. After completing the project introduction, the specialist asked us a question: Is an engineering bacterium
        effective in regulating itself, but effective in regulating the population density of other bacteria? Therefore,
        in the subsequent part of the experiment, we added a part about the effect of engineering bacteria expressing
        galactosidase on the population of lactic acid bacteria. In addition, our modeling group learned some
        experiences of parameter values in the model workshop, and read the papers recommended by CCIC.<br>
        <bnuz_image_container>
          <template v-slot:caption>
              Figure4. Receive the Active Participation Award
          </template>
          <template v-slot:image>
            <img :src="pic1" width="800px">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>
      <!--   TODO (!!!put the hp wiki link here)  图片见hp文案中五校联合的文案   -->
      <bnuz_content_paragraph hint_text="Host lecture and seminar on synthetic biology">
        <h4>Host lecture and seminar on synthetic biology</h4>
        Our team hosted an on-line lecture and a seminar on synthetic biology with the theme of “Synthetic biology with
        unlimited potential” in Sep. 12, 2021. The teams of BNU-China, BUCT, SZU-China and HZAU-China attended this
        meeting. We made a communication about the progresses of the project to better prepare for the upcoming wiki
        freeze.
        First, the BNU-China team shared the harvest during the preparation of the lecture and the possible application
        prospect of their project in intestinal flora. Then, our team (BNUZ-China) introduced our progress in gene
        knockout and high-performance liquid chromatography experiments. We are looking for solutions on how to
        simultaneously isolate and purify five proteins with similar molecular weight. BNU-China suggests that the
        separation can be performed by constructing different specific tags, such as his-tag. BUCT pointed out the
        experimental difficulties of building a suicide system and asked other teams for advice on the logic and
        rationality of HP. SZU-China team mentioned the LL37 antibacterial peptide used in the closed loop of their
        project, which was difficult to be characterized by SDS electrophoresis due to its small protein content. In the
        early bacteriostatic zone experiment, the effect was not ideal, and it is hoped that part of the verification
        can be carried out through the interaction of cell experiments in the future. Some data are difficult to obtain
        from the experimental group, and further literature analysis is required. At the same time, SZU-China shared the
        inspiration and process of developing a small game "Synthesis of large protein", which aroused great interest of
        everyone in the lecture. Later, HZAU-China pointed out that it was difficult for their small proteins to be
        characterized by SDS electrophoresis. At the same time, there are some difficulties in the purification and
        functional verification of small proteins. More complicate experiments are needed to verify protein function. It
        is too pressing for the time available. In the aspect of numerical modeling, the parameters are many and
        difficult to obtain. The quality of the parameters has a great influence on the model, so we want to estimate
        the parameters through a more appropriate parameter estimation method.
        You can click this link to know more about the lecture.
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

import head_image from '@/assets/head_images/human_practice.png'
import pic0 from '@/assets/hp/collaboration/pic0.png'
import pic1 from '@/assets/hp/collaboration/pic1.jpg'
import pic2 from '@/assets/hp/collaboration/pic2.jpg'
import handbook from '@/assets/hp/collaboration/handbook.jpg'
import conf from '@/wiki_config';

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
      // TODO: set image URI
      pic0: conf.isDev ? pic0 : '',
      // TODO: set image URI
      pic1: conf.isDev ? pic1 : '',
      // TODO: set image URI
      pic2: conf.isDev ? pic2 : '',
      // TODO: set image URI
      handbook: conf.isDev ? handbook : '',

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
  /*background-color: rgb(220, 230, 237);*/
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid #002971;
}

.bnuz-footer {
  /*background-color: #dce6ed;*/
}

.bnuz-contact-title {
  color: black;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.image-container > div > img {
  display: block;
}

.image-container > div {
  text-align: center;
}

.image-container > div > p {
  font-size: 18px;
  color: #5e615a;
}
</style>
