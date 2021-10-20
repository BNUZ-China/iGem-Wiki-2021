<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content top_distance="-10" nav_item_color="#0E4993">
      <bnuz_content_paragraph hint_text="Overview">
        <h4>Overview</h4>
        <p>
          As a therapeutic project, it is very important to know the target, material and usage of our products. In order to clarify the significance of our project and improve the project, we have conducted many interviews and surveys, asked our industry predecessors whether our results are significant and meaningful, and got a positive reply.
        </p>
        <p>
          As the students of Beijing Normal University, we believe it is our duty to conduct science education. In
          regards to our <a href="https://www.wjx.cn/vm/PdBJYo3.aspx">survey results</a> that people are more receptive
          to the popular science methods,
        </p>
        <p>
          we made many efforts in education, such as lectures, academic salons, online teaching for pupils, lab open
          day, brochures and posters. One of the most impressive activities is to discuss the ethical issues of
          synthetic biology with people. The views from different fields and professions also inspired us to think
          deeply. Because our school is a new campus of BNU, it is the first year of our school to participate in iGEM.
          Most younger siblings are not familiar with iGEM yet and shown great interest in it. So we hope to deepen
          people’s understanding of synthetic biology, iGEM, and our team's projects by educating, so as to let our team
          pass on next year.
        </p>
        <p>
          The following is a detailed description of the events.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Determination of the materials type">
        <h4>Determination of the materials type</h4>
        <p>During the investigation, we founded that the deterioration of chronic kidney disease (CKD) is closely related to enterotoxins. We decided to treat CKD by preventing the production of enterotoxins. At the same time, we founded that the simultaneous expression of five genes from <em>Clostridium sporogenes</em> and <em>Arabidopsis</em> can produce a kind of beneficial substance indole propionic acid. This can take advantage of the accumulated tryptophan.</p>
        <p>We sent the constructed vector to the engineering bacteria and identified the successful production of IPA by liquid chromatography.</p>
        <p>In order to clarify the significance of our project and improve the project, we have conducted many
          interviews and surveys, asked our industry predecessors whether our results are significant and meaningful,
          and got a positive reply. Click <a href="https://2021.igem.org/Team:BNUZ-China/Human_Practices">here</a> to know more. We will continue to improve our project.</p>

      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Our target and methods">
        <h4>Our target and methods</h4>
        <p>Our project aims to serve patients with CKD. Due to a series of problems such as time-consuming and high economic burden in the current treatment methods of CKD, patients are still a group of people with high physical and mental burden.</p>
        <p>BNUZ-China team achieved the goal of delaying the development of CKD by modifying the intestinal flora of patients. We designed to transform the human <em>E. coli</em> strain nissle1917 to make the engineered bacteria harmless and easy to cultivate and colonize. This treatment method is convenient and easy to operate. The engineered bacteria has high yield and low cost, which can reduce the burden of patients.</p>
        <p>We will design enteric coated capsules in which the engineering bacteria will be wrapped. The capsules will be sealed in sealed bags with high carbon dioxide and low oxygen for transportation and distribution. The patients will receive the capsule, arabinose tablets and arabinose dosage instructions at the same time. This simultaneous distribution allows patients and doctors to flexibly determine the number of engineered bacteria according to their personal conditions.</p>
        <p>
          Click <a href="https://2021.igem.org/Team:BNUZ-China/Implementation">here</a> to know more.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Lecture about iGEM and our project">
        <h4>Lecture about iGEM and our project</h4>
        <p>
          The Frontiers and Introductions to Synthetic Biology course provided us with an opportunity to showcase our
          project and iGEM. About synthetic biology, we all had some understanding in class, but iGEM, the teacher once
          mentioned, was very strange for students of other majors even those of the biology major. So, we first
          introduced the full name of iGEM, event content, competition flow and previous excellent projects. Many
          students were very interested in our introduction of previous excellent projects, and were surprised by the
          magic of synthetic biology.
        </p>
        <p>
          Then, we introduced our team's project, from the introduction of chronic kidney disease to the research
          thought of our project, so that people can understand the importance of gut microorganisms to the human body
          and the basic ideas and characteristics of synthetic biology from the project design. Then, students also put
          forward questions about the content of project design, its therapeutic effect and application prospects. We
          carried out discussions and shared our views and opinions. We are also pleased to be able to harvest ideas and
          suggestions from other professional students to improve our project. Overall, the presentation successfully
          stimulated students' curiosity and interest in synthetic biology and iGEM, and we are happy to find that many
          students are hopeful about the future development of synthetic biology.
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
          It’s the first year of our school to participate in iGEM. With the support of the school, we set up our own
          laboratory and quickly acquired many necessary instruments and reagents for molecular biology, and was
          constantly improving the construction. On May 17, 2021, we opened our laboratory and led some students from
          the humanities and social sciences, mathematics, geography etc. to visit our laboratory. Then, we introduced
          them to the laboratory's thermostat, including ultra-low temperature refrigerator, PCR instrument, centrifuge,
          high-pressure steam sterilization pot and other experimental instruments, the use of methods and safety
          precautions of those instruments. The students expressed their pleasure to be able to walk into the laboratory
          up close. They learned about those high-end precision instruments and a variety of reagents. Through our
          explanations, they experienced the rigor of the experiments, which had brought enlightment to their own
          professional researches as well. We believe that such laboratory open science activities are very meaningful.
          Unlike boring theoretical lectures, personally entering the laboratory is more conducive to people to
          understand science, and improve their scientific literacy.
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

          The rapid development of synthetic biology has attracted a wide attention, but its concept of designing and
          transforming life has also caused a series of security risks and ethical challenges. We discussed this issue
          in the course presentation of the Laboratory Safety and Environmental Protection. First, we explained the
          definition of synthetic biology and its development of landmark events. Subsequently, we elicited some
          problems that synthetic biology may bring, such as genetic changes, environmental disasters and other
          potential medical, environmental, security and other risks. It’s very exciting to receive the feedbacks from
          students. Some students said that artificial life is like a Pandora's box, which is full of unknowns. Others
          have also suggested that if synthetic biology technology is maliciously used to create pathogenic viruses,
          biological weapons, etc., what should be done? And if life can be "made", how can humans be defined? What is
          the future position? We were astonished that the topic had generated a heated discussion. Actually, it had
          inspired us to think about some of the ways that synthetic biology could be regulated.
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
          During the summer vacation, we did a volunteer teaching online. We introduced knowledge about the genetic
          engineering and synthetic biology to students from Jundian primary school in Fangxian, Hubei Province. The
          lecture was brought by the team members Yu Huang and Luxuan Liu. They showed the magic of biology to students
          living in the countryside, opening the door to a brand new world. Everyone found it novel knowing about the
          small creatures living in our guts and the idea of treating diseases by altering microbial genes. After this
          lecture, many of the students found great interest in biology, and told us that they would like to engage in
          biology-related work in the future. From this activity we realized the importance of knowledge dissemination.
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
          In order to spread knowledge about synthetic biology and show more people about our project, our team and four
          other teams co-organized a lecture. The lecture was held both online and offline, and the teams participating
          in this session include BNUZ-China, BNU-China, BUCT, SZU-China and HZAU-China. Our supervisors Profs. Zhang
          and Wang also participated.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.5 The instructor is listening carefully to the lecture
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
          The lecture was well received. A lot of students attended and all of them listened carefully and took notes.
          During the discussion session, the students were also very enthusiastic, debating and asking questions about
          the parts they had involved in or were interested in.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.7 Students are listening carefully to the lecture
          </template>
          <template v-slot:image>
            <img :src="pic7" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          After the lecture, many students were discussing the contents of the lecture. Therefore, we believe that the
          lecture was very success. We believe that in the near future, more and more students will participate in iGEM
          competition and synthetic biology research.
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
          From December 2020 to May 2021, we published 6 popular science on our team official account “北师大zh iGEM”.
          Through those articles, we introduced the projects of the excellent iGEM team in previous years to the
          teachers and students. Our purpose is to let everyone know more about what is iGEM competition, and publicize
          the "synthetic biology" to the public. The text of the article was written by the students from the
          experimental group after browsing the Wiki of the previous teams, and published through the editor by the
          students form art group. The popular science series has been read more than 1,000 views, and the most popular
          one has 325 views which introduced the 2019 WHU-China team who using synthetic biology for cultural relics
          restoration. After half a year of popular science, many students who pay attention to our public account said
          that our articles pulled down biology from the altar in his/her mind, making them find that synthetic biology
          is actually everywhere in our daily life.
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
          Moreover, we tried some other methods to communicate with the public. We preached our projects and knowledge
          about CKD in the forms of posters and brochure. Despite some limitations, we still tried our best to
          communicate with different audiences, including participating in a multi-school intestinal conference online
          and CCiC (Conference of China iGEMer Community).
        </p>
        <p>
          <a href="https://2021.igem.org/wiki/images/e/e2/T--BNUZ-China--Synthetic_biology_pamphlet.pdf">
            Click here to download the Synthetic biology pamphlet.
          </a>
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

import head_image from '@/assets/head_images/HUMANPRACTICE/communication.png'
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
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/a/a5/T--BNUZ-China--communication.e2d6dfec.png\n',
      pic1: conf.isDev ? pic1 : "https://2021.igem.org/wiki/images/8/8e/T--BNUZ-China--pic1.01088884.jpg",
      pic10: conf.isDev ? pic10 : "https://2021.igem.org/wiki/images/2/2f/T--BNUZ-China--pic10.08e20762.jpg",
      pic2: conf.isDev ? pic2 : "https://2021.igem.org/wiki/images/a/ac/T--BNUZ-China--pic2.67543b9d.jpg",
      pic3: conf.isDev ? pic3 : "https://2021.igem.org/wiki/images/8/84/T--BNUZ-China--pic3.9434f94f.jpg",
      pic4: conf.isDev ? pic4 : "https://2021.igem.org/wiki/images/8/83/T--BNUZ-China--pic4.ac9affc4.png",
      pic5: conf.isDev ? pic5 : "https://2021.igem.org/wiki/images/0/0e/T--BNUZ-China--pic5.1878c340.png",
      pic6: conf.isDev ? pic6 : "https://2021.igem.org/wiki/images/2/2e/T--BNUZ-China--pic6.7c507733.png",
      pic7: conf.isDev ? pic7 : "https://2021.igem.org/wiki/images/4/42/T--BNUZ-China--pic7.f406f646.png",
      pic8: conf.isDev ? pic8 : "https://2021.igem.org/wiki/images/4/49/T--BNUZ-China--pic8.af0c4cbf.png",
      pic9: conf.isDev ? pic9 : "https://2021.igem.org/wiki/images/5/56/T--BNUZ-China--pic9.1f4df59b.png",
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
