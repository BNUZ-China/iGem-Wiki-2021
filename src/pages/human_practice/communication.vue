<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content top_distance="0" nav_item_color="#0E4993">
      <bnuz_content_paragraph hint_text="Overview">
        <h4>Overview</h4>
        <p>
          As the students of Beijing Normal University, we believe it is our duty to conduct science education. In regards to our survey results(问卷页面的链接) that people are more receptive to the popular science methods, we made many efforts in education, such as lectures, academic salons, online teaching for pupils, lab open day, brochures and posters. One of the most impressive activities is to discuss the ethical issues of synthetic biology with people. The views from different fields and professions also inspired us to think deeply. Because our school is a new campus of BNU, it is the first year of our school to participate in iGEM. Most younger siblings are not familiar with iGEM yet and shown great interest in it. So we hope to deepen people’s understanding of synthetic biology, iGEM, and our team's projects by educating, so as to let our team pass on next year. The following is a detailed description of the events.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Lecture about iGEM and our project">
        <h4>Lecture about iGEM and our project</h4>
        <p>
          The Frontiers and Introductions to Synthetic Biology course provided us with an opportunity to showcase our project and iGEM. About synthetic biology, we all had some understanding in class, but iGEM, the teacher once mentioned, was very strange for students of other majors even those of the biology major. So, we first introduced the full name of iGEM, event content, competition flow and previous excellent projects. Many students were very interested in our introduction of previous excellent projects, and were surprised by the magic of synthetic biology.
        </p>
        <p>
          Then, we introduced our team's project, from the introduction of chronic kidney disease to the research thought of our project, so that people can understand the importance of gut microorganisms to the human body and the basic ideas and characteristics of synthetic biology from the project design. Then, students also put forward questions about the content of project design, its therapeutic effect and application prospects. We carried out discussions and shared our views and opinions. We are also pleased to be able to harvest ideas and suggestions from other professional students to improve our project. Overall, the presentation successfully stimulated students' curiosity and interest in synthetic biology and iGEM, and we are happy to find that many students are hopeful about the future development of synthetic biology.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 Project showcase in Frontiers and Introductions to Synthetic Biology course
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Lab visit">
        <h4>Lab visit</h4>
        <p>
          It’s the first year of our school to participate in iGEM. With the support of the school, we set up our own laboratory and quickly acquired many necessary instruments and reagents for molecular biology, and was constantly improving the construction. On May 17, 2021, we opened our laboratory and led some students from the humanities and social sciences, mathematics, geography etc. to visit our laboratory. Then, we introduced them to the laboratory's thermostat, including ultra-low temperature refrigerator, PCR instrument, centrifuge, high-pressure steam sterilization pot and other experimental instruments, the use of methods and safety precautions of those instruments. The students expressed their pleasure to be able to walk into the laboratory up close. They learned about those high-end precision instruments and a variety of reagents. Through our explanations, they experienced the rigor of the experiments, which had brought enlightment to their own professional researches as well. We believe that such laboratory open science activities are very meaningful. Unlike boring theoretical lectures, personally entering the laboratory is more conducive to people to understand science, and improve their scientific literacy.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 Laboratory opening day
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Safety education">
        <h4>Safety education</h4>
        <p>

        The rapid development of synthetic biology has attracted a wide attention, but its concept of designing and transforming life has also caused a series of security risks and ethical challenges. We discussed this issue in the course presentation of the Laboratory Safety and Environmental Protection. First, we explained the definition of synthetic biology and its development of landmark events. Subsequently, we elicited some problems that synthetic biology may bring, such as genetic changes, environmental disasters and other potential medical, environmental, security and other risks. It’s very exciting to receive the feedbacks from students. Some students said that artificial life is like a Pandora's box, which is full of unknowns. Others have also suggested that if synthetic biology technology is maliciously used to create pathogenic viruses, biological weapons, etc., what should be done? And if life can be "made", how can humans be defined? What is the future position? We were astonished that the topic had generated a heated discussion. Actually, it had inspired us to think about some of the ways that synthetic biology could be regulated.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.3 Introduction of safety and ethics in synthetic biology 
          </template>
          <template v-slot:image>
            <img :src="pic3" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Rural teaching">
        <h4>Rural teaching</h4>
        <p>
        During the summer vacation, we did a volunteer teaching online. We introduced knowledge about the genetic engineering and synthetic biology to students from Jundian primary school in Fangxian, Hubei Province. The lecture was brought by the team members Yu Huang and Luxuan Liu. They showed the magic of biology to students living in the countryside, opening the door to a brand new world. Everyone found it novel knowing about the small creatures living in our guts and the idea of treating diseases by altering microbial genes. After this lecture, many of the students found great interest in biology, and told us that they would like to engage in biology-related work in the future. From this activity we realized the importance of knowledge dissemination.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 Volunteer teaching online
          </template>
          <template v-slot:image>
            <img :src="pic4" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Joint lecture on synthetic biology">
        <h4>Joint lecture on synthetic biology</h4>
        <p>
          In order to spread knowledge about synthetic biology and show more people about our project, our team and four other teams co-organized a lecture. The lecture was held both online and offline, and the teams participating in this session include BNUZ-China, BNU-China, BUCT, SZU-China and HZAU-China. Our supervisors Profs. Zhang and Wang also participated.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            The instructor is listening carefully to the lecture
          </template>
          <template v-slot:image>
            <img :src="pic5" width="65%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.6 Student leader introduces team projects
          </template>
          <template v-slot:image>
            <img :src="pic6" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          The lecture was well received. A lot of students attended and all of them listened carefully and took notes. During the discussion session, the students were also very enthusiastic, debating and asking questions about the parts they had involved in or were interested in.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Students are listening carefully to the lecture
          </template>
          <template v-slot:image>
            <img :src="pic7" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          After the lecture, many students were discussing the contents of the lecture. Therefore, we believe that the lecture was very success. We believe that in the near future, more and more students will participate in iGEM competition and synthetic biology research.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.8 Student leader answers questions
          </template>
          <template v-slot:image>
            <img :src="pic8" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Popularization of science by wechat subscription">
        <h4>Popularization of science by wechat subscription</h4>
        <p>
          From December 2020 to May 2021, we published 6 popular science on our team official account “北师大zh iGEM”. Through those articles, we introduced the projects of the excellent iGEM team in previous years to the teachers and students. Our purpose is to let everyone know more about what is iGEM competition, and publicize the "synthetic biology" to the public. The text of the article was written by the students from the experimental group after browsing the Wiki of the previous teams, and published through the editor by the students form art group. The popular science series has been read more than 1,000 views, and the most popular one has 325 views which introduced the 2019 WHU-China team who using synthetic biology for cultural relics restoration. After half a year of popular science, many students who pay attention to our public account said that our articles pulled down biology from the altar in his/her mind, making them find that synthetic biology is actually everywhere in our daily life.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.9 Team official account
          </template>
          <template v-slot:image>
            <img :src="pic9" width="65%">
          </template>
        </bnuz_image_container>

      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="iGEM and synthetic biology brochure">
        <h4>iGEM and synthetic biology brochure</h4>
        <p>
          Moreover, we tried some other methods to communicate with the public. We preached our projects and knowledge about CKD in the forms of posters and brochure. Despite some limitations, we still tried our best to communicate with different audiences, including participating in a multi-school intestinal conference online and CCiC (Conference of China iGEMer Community).
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.10 iGEM and synthetic biology brochure
          </template>
          <template v-slot:image>
            <img :src="pic10" width="65%">
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

import head_image from '@/assets/head_images/HUMANPRACTICE/bannerhumanp-education.png'
import conf from '@/wiki_config';
import pic1 from '@/assets/hp/communication/pic1.jpg'
import pic2 from '@/assets/hp/communication/pic2.jpg'
import pic3 from '@/assets/hp/communication/pic3.jpg'
import pic4 from '@/assets/hp/communication/pic4.png'
import pic5 from '@/assets/hp/communication/pic5.png'
import pic6 from '@/assets/hp/communication/pic6.png'
import pic7 from '@/assets/hp/communication/pic7.png'
import pic8 from '@/assets/hp/communication/pic8.png'
import pic9 from '@/assets/hp/communication/pic9.png'
import pic10 from '@/assets/hp/communication/pic10.jpg'

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
      pic1: conf.isDev ? pic1 : '',
      pic2: conf.isDev ? pic2 : '',
      pic3: conf.isDev ? pic3 : '',
      pic4: conf.isDev ? pic4 : '',
      pic5: conf.isDev ? pic5 : '',
      pic6: conf.isDev ? pic6 : '',
      pic7: conf.isDev ? pic7 : '',
      pic8: conf.isDev ? pic8 : '',
      pic9: conf.isDev ? pic9 : '',
      pic10: conf.isDev ? pic10 : '',
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
