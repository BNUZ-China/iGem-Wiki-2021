<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <div class="bnuz-header-image-container" @mouseover="headImageMouseOver" @mouseout="headImageMouseOut">
      <img :src="himg2" class="bnuz-switch-header-image" ref="himg1">
      <img :src="himg1" class="bnuz-switch-header-image bnuz-team-head-image-2" ref="himg2">
    </div>
    <BNUZ_Content nav_item_color="#01016e">
      <bnuz_content_paragraph hint_text="Student leader">
        <h4>Student leader</h4>
        <b>Liu Luxuan </b>: Team leader, experimental group leader, indolepopionic acid biosynthesis module,
          β-galactosidase module, glucose dehydrogenase overexpressing module and biosafety module designer, builder
        and tester, quorum sensing module designer. Participate in the design of mathematical modeling.<br>

        <b>Du Yunxi </b>: co-team leader, experiment arrangement and job division, TnaA knock-off module design, GDH
          primer design, participate in plasmid (fld, PMF, GDH, and LacZ) construction, participate in poster and wiki design, participate in communication with other groups.<br>

      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Experimental group">
        <h4>Experimental group</h4>
        <b>Huang Yu </b>: Experimental group member, participate in project designing (indolepopionic acid biosynthesis
            module), participate in several experiments (PMF, GDH plasmid construction), preparation of safety form.<br>
        <b>Ye Shudan </b>: experimental group member, participate in project designing and some experiments.<br>
        <b>Li Jixiao </b>: Experimental group member, participate in project designing (TnaA knock-off), participate in
                several experiments (GDH, PMF plasmid construction), participate in HP interview, preparation of human practice manuscript.<br>
        <b>Yan Bi-Ying </b>: Experimental group member, Gene function verification experiment designer (PMF, GDH, and
          lacZ), Experiments in construction of plasmid fld and PMF, and PMF module, GDH module and lacZ module functional test.<br>
        <b>Lu Jiayang </b>: Experimental group member, participate in the experiment process, participate in the design of
        quorum sensing module, preparation of the safety form and parts section of Wiki.<br>
        <b>Tan Jialun </b>: Experimental group member, glucose dehydrogenase overexpressing module designer.<br>
        <b>Su Zinan </b>: Experimental group member, participate in experiments in fld plasmid construction, several PCR
        for target DNA, participate in HP interview.<br>
        <b>Yang Wenjing </b>: Experimental group member, Participating in project selection, Looking for papers about the
        growth-promoting effect of GDH, Experiments (several PCR for target DNA, plasmid extraction, et.al), HP interview, and preparation of the Human Practice part of Wiki.<br>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Wiki & art group">
        <h4>Wiki & art group</h4>
        <b>Fan Si-Ting</b>: Wiki&art group leader. The promotion video designer (the storyboard). The poster designer
          (the background picture). The wiki designer (home page).<br>
        <b>Li Hao</b>: Wiki & art team member. Website builder, webpack4 "igem-webpack-plugin" maker.<br>
        <b>Deng Yingjia</b>: Wiki & art team member. Animation & poster maker, illustrator<br>
        <b>Gao Tianyu</b>: Wiki & art team member. Animation & poster maker, illustrator<br>

      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Model group">
        <h4>Model group</h4>
        <b>Lu Feiyang</b>: Modeling Group Leader,  Project&Parts Design, Collaboration, Software<br>
        <b> Xue Wanying</b>:  Modeling Group Member, Literature Research, Software<br>
        <b> Wu Jingyi</b>: Modeling Group Member, Literature Research, Collaboration<br>
        <b>Liang Liqi </b>: Modeling Group Member, Literature Research<br>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Thanks">
        <h4>Thanks</h4>
        <p><strong>General support</strong></p>
        <p>Thanks for the great support from College of Education for the Future and Center for Biological Science and Technology, Beijing Normal University at Zhuhai.</p>
        <p><strong>Project support and advice</strong></p>
        <p>Thanks to Profs. Genfa Zhang, Benqiong Xiang, Zhiwei Qin, Xudong Zhu, Xiaoyan Wang, and Zhong Guo, for their important guidance and detailed advices on our project. We appreciate them sincerely.</p>
        <p><strong>Fundraising help and advice</strong></p>
        <p>Thanks for the great fundraising support from Beijing Normal University at Zhuhai .</p>
        <p><strong>Lab support</strong></p>
        <p>Thanks for the lab support from College of Education for the Future, Beijing Normal University at Zhuhai and Center for Biological Science and Technology, Beijing Normal University. Our supervisor Prof. Genfa Zhang, our principal investigator Prof. Benqiong Xiang and Prof. Bo Wang helped us to maintain a great environment.</p>
        <p><strong>Difficult Technical support</strong></p>
        <p>Thanks for the technical support from BGI Geonomics and Center for Biological Science and Technology, Beijing Normal University.</p>
        <p><strong>Project advisor support</strong></p>
        <p>We appreciate our advisors Yihao Li, Weijia Wu, and Kangwen Lao for their assistance during our experiments. Many thanks to the team BNU-China for their sharing of experiences.</p>
        <p><strong>Presentation coaching</strong></p>
        <p>Thanks for our supervisor Prof. Genfa Zhang for training us to accomplish an impressive presentation, and Profs. Benqiong Xiang, Bo Wang, Xudong Zhu, Zhiwei Qin, Xiaoyan Wang, and Zhong Guo for their valuable advices. Thanks a lot to them!</p>
        <p><strong>Human practices support</strong></p>
        <p>Thanks for the great support from Beijing Normal University. Thanks to BYHEALTH, Anzhen Hospital, Drs. Ban Zhao and Qiang Qiu, Profs. Benqiong Xiang, Xudong Zhu, Mingzhang Wen and other members of Center for Biological Science and Technology, Beijing Normal University for helping us performing a human practice. Thanks to all the people who help us accomplish our questionnaire. We have learned a lot and detailed our project in this process.</p>
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

import head_image from '@/assets/head_images/team/team1.png'
import conf from "@/wiki_config";
import himg1 from "@/assets/head_images/team/team1.png";
import himg2 from "@/assets/head_images/team/team2.png";

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
      himg1: conf.isDev ? himg1 : 'https://2021.igem.org/wiki/images/1/1b/T--BNUZ-China--team1.3c1b1d5f.png\n',
      himg2: conf.isDev ? himg2 : 'https://2021.igem.org/wiki/images/4/4b/T--BNUZ-China--team2.041ed994.png\n',
      isHeadImage1: true
    }
  },
  methods: {
    headImageMouseOver: function () {
      this.$refs.himg1.classList = ['image-fade-out bnuz-switch-header-image']
      this.$refs.himg2.classList = ['image-fade-in bnuz-switch-header-image']
    },
    headImageMouseOut: function () {
      this.$refs.himg1.classList = ['image-fade-in bnuz-switch-header-image']
      this.$refs.himg2.classList = ['image-fade-out bnuz-switch-header-image bnuz-team-head-image-2']
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
  border: 2px solid rgba(0,0,115,0.79)
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.image-fade-in {
  animation: fade-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.image-fade-out {
  animation: fade-out;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.bnuz-header-image-container {
  width: 100%;
  height: calc(100vw / 2.7826086956521739130434782608696);
}

.bnuz-switch-header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vw / 2.7826086956521739130434782608696);
  background-repeat: no-repeat;
  background-size: contain;
}

.bnuz-team-head-image-1 {
  opacity: 1;
}

.bnuz-team-head-image-2 {
  opacity: 0;
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
