<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content>
      <bnuz_content_paragraph hint_text="Attending the 5th Southern China Regional Meeting">
        <h4>Attending the 5th Southern China Regional Meeting</h4>
        In 2021.08.06, our team attended the 5th Southern China Regional Meeting. A total of 18 teams participated. In
        this meeting, we made a project introduction and discussed with other teams. In the modeling part, other teams
        tell us that we can use the observation and analysis of the existing models to try to put forward a new
        hypothetical model of predictive properties. Through this suggestion, our Lotka-Volterra competition model joins
        the comparison before and after the addition of GDH, which is manifested in the change of the competition
        coefficient of engineering bacteria.
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Compiling the Intestinal iGEM Reference Handbook">
        <h4>Compiling the Intestinal iGEM Reference Handbook</h4>
        We cooperated with team BNU-China，BUCT，HZAU-China，SZU-China，NJMU-China，NJU-China，SUSTech_Shenzhen to accomplish
        a file which showed a complete procedure of doing a gut-related synthetic biologic research project. We
        separated the contents into different aspects and each team finished their own part. We wrote about the species
        selection, quorum sensing, intestinal colonization, prevention of horizontal gene transfer, prevention of
        chassis escape, hardware and instrumentation, bioinformatics and ethics when doing a gut-related research. Our
        team undertook the writing of species selection and quorum sensing. In order to accomplish this file, we first
        went through the team projects from 2009 to 2020 to sum up the species they used. Then we analyzed the
        advantages and disadvantages of the popular species to give guidance on selecting. When writing the quorum
        sensing part, we explained its theory, and our team members also went through other teams’ projects to list the
        smart and typical ones. Our work may bring help to future teams which are willing to achieve a gut-related
        project, it’s a concluding of information, and it’s a share of ideas and experiences.
        <img :src="handbook" width="500px">
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Attending the Eighth Conference of China iGEMer Community (CCIC)">
        <h4>Attending the Eighth Conference of China iGEMer Community (CCIC)</h4>
        Our team host a on-line lecture and seminar on synthetic biology with the theme of “Synthetic biology with
        unlimited potential” at Sep. 12, 2021. BNU-China, BUCT, SZU-China and HZAU-China attended this meeting. We made
        a communication about the progress of the project to better prepare for the upcoming wiki freeze.
        Our team briefly introduced the progress in gene knockout and high performance liquid chromatography in recent
        two months, which have already come to fruition. We also asked for a solution on how to isolate and purify five
        proteins with similar molecular weight at the same time. Other four teams suggested us to complete the remaining
        functional verification experiments. They suggested that we need to reserve at least 3 weeks to make a fully
        prepare for our wiki.
        Facing the upcoming wiki free, other teams suggested that we can try to increase business visit activities into
        our HP. Synthesized these suggestions, we put forward our follow-up plan about visiting the BYHEALTH and other
        HP relevant arrangements. We also gave suggestions for improvement to the HP, art and other arrangements of
        other teams, and the five teams also exchanged views on the arrangement of modeling.
        You can click this link to know more about the lecture. <br>
        Our team won Active Participation Award at the conference. More importantly, we have gained much in the CCIC.
        After completing the project introduction, the specialist put forward a question to us : Is an engineering
        bacteria effective in regulating itself, but effective in regulating the population density of other bacteria?
        Therefore, in the subsequent part of the experiment, we add a part about the effect of engineering bacteria
        expressing galactosidase on the population of lactic acid bacteria. In addition, our modeling group learned some
        experience of parameter values at the model workshop, and study the papers recommended by CCIC.<br>
        <b-container class="picture_container">
          <b-row align-v="center" align-h="center">
            <b-col cols="7">
              <img :src="pic1" width="550">
            </b-col>
            <b-col cols="5">
              <img :src="pic2" width="300">
            </b-col>
          </b-row>
        </b-container>
      </bnuz_content_paragraph>
      <!--   TODO (!!!put the hp wiki link here)  图片见hp文案中五校联合的文案   -->
      <bnuz_content_paragraph hint_text="Lecture and seminar on synthetic biology">
        <h4>Lecture and seminar on synthetic biology</h4>
        Our team host a on-line lecture and seminar on synthetic biology with the theme of “Synthetic biology with
        unlimited potential” at Sep. 12, 2021. BNU-China, BUCT, SZU-China and HZAU-China attended this meeting. We made
        a communication about the progress of the project to better prepare for the upcoming wiki freeze.
        Our team briefly introduced the progress in gene knockout and high performance liquid chromatography in recent
        two months, which have already come to fruition. We also asked for a solution on how to isolate and purify five
        proteins with similar molecular weight at the same time. Other four teams suggested us to complete the remaining
        functional verification experiments. They suggested that we need to reserve at least 3 weeks to make a fully
        prepare for our wiki.
        Facing the upcoming wiki free, other teams suggested that we can try to increase business visit activities into
        our HP. Synthesized these suggestions, we put forward our follow-up plan about visiting the BYHEALTH and other
        HP relevant arrangements. We also gave suggestions for improvement to the HP, art and other arrangements of
        other teams, and the five teams also exchanged views on the arrangement of modeling.
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
import AppRoot from "@/AppRoot";

import head_image from '@/assets/head_images/human_practice.png'
import pic1 from '@/assets/hp/collaboration/pic1.jpg'
import pic2 from '@/assets/hp/collaboration/pic2.jpg'
import handbook from '@/assets/hp/collaboration/handbook.jpg'

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
      head_image,
      pic1,
      pic2,
      handbook
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

.bnuz_content_paragraph {
  box-shadow: 2px 2px 5px #8080808f;
}

.bnuz-footer {
  /*background-color: #dce6ed;*/
}

.bnuz-contact-title {
  color: black;
}
</style>
