<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_content>
      <bnuz_content_paragraph hint_text="PI">
        <b-container>
          <b-row>
            <b-col cols="5">

            </b-col>
            <b-col cols="7">
              <h3 class="teachers-title">Professor Genfa Zhang</h3>
              Primary PI, School of Life Sciences, Beijing Normal University. Professor Genfa
              Zhang is a well-known geneticist with international influence, an excellent educator and scientific
              researcher, a doctoral supervisor in the School of Life Sciences, Beijing Normal University, has served as
              a council member of the Chinese Society of Genetics for many times, and a council member of the 11th and
              12th Chinese Society of Botany. Served as the editorial board and reviewer of many important academic
              journals at home and abroad. Active in related genetics teaching and research, plant molecular genetics,
              and plant resistance molecular biology research fields.
            </b-col>
          </b-row>
        </b-container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Degradation of Cas9 at a proper rate In order to verify the function">
        <b-container>
          <b-row>
            <b-col cols="5">

            </b-col>
            <b-col cols="7">
              <h3 class="teachers-title">Professor Benqiong Xiang</h3>
              Secondary PI, is currently the Deputy Dean of the School of Life Science and
              director of the Experimental Teaching Center for Life Science and Technology at Beijing Normal University.
              She is also a member of the 11th Council of The Chinese Society of Biochemistry and Molecular Biology.
              Mainly responsible for the teaching of "biochemistry", "Genetic engineering" and "Introduction to
              Biotechnology" and other courses, compiled 6 textbooks, published 15 teaching research papers, and won 5
              provincial and ministerial level or above teaching awards. Supervised more than 20 postgraduate students
              and published more than 10 academic research papers in important journals at home and abroad.
            </b-col>
          </b-row>
        </b-container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Degradation of Cas9 at a proper rate In order to verify the function">
        <b-container>
          <b-row>
            <b-col cols="5">

            </b-col>
            <b-col cols="7">
              <h3 class="teachers-title">Associate Professor Bo Wang</h3>
              Instructors, head of the Biological Laboratory of Beijing Normal University,
              and class teacher of the 2020 biological science class. Mainly engaged in the development and application
              of biological resources, food nutrition and safety research. At present, he has presided over the
              completion of 11 scientific research projects at all levels and various types; 1 provincial-level teaching
              reform project, 2 school-level quality engineering projects; 1 national patent authorized; published more
              than 20 first author core papers, including 4 SCI papers . He has won awards such as "School-level
              Excellent Communist Party Member" and "School-level Class Teacher".
            </b-col>
          </b-row>
        </b-container>
      </bnuz_content_paragraph>

      <b-container>
        <h3 class="members-title">Student leader</h3><br>
        <b-row>
          <b-col align-self="center">
            <div class="card">
              <img :src="llx">
            </div>
          </b-col>
          <b-col align-self="center">
            <div class="card">
              <img :src="dyx">
            </div>
          </b-col>
        </b-row>
        <h3 class="members-title">Experimental Group</h3>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="hy">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="ywj">
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="ljx">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="yby">
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="ljy">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="tjl">
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="szn">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="ysd">
            </div>
          </b-col>
        </b-row>
        <h3 class="members-title">Wiki & Art Group</h3>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="fst">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="lh">
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="dyj">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="gty">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="ljz">
            </div>
          </b-col>
        </b-row>
        <h3 class="members-title">Model Group</h3>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="lfy">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="xwy">
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="card">
              <img :src="wjy">
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img :src="llq">
            </div>
          </b-col>
        </b-row>
      </b-container>
    </BNUZ_content>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import bnuz_content_paragraph from "@/components/bnuz-content-paragraph";
import AppRoot from "@/AppRoot";
import BNUZ_content from "@/components/bnuz_content";
import conf from '@/wiki_config';

import head_image from '@/assets/head_images/human_practice.png';
import dyj from '@/assets/members/dyj.png'
import dyx from '@/assets/members/dyx.png'
import fst from '@/assets/members/fst.png'
import gty from '@/assets/members/gty.png'
import hy from '@/assets/members/hy.png'
import lfy from '@/assets/members/lfy.png'
import lh from '@/assets/members/lh.png'
import ljx from '@/assets/members/ljx.png'
import ljy from '@/assets/members/ljy.png'
import ljz from '@/assets/members/ljz.png'
import llq from '@/assets/members/llq.png'
import llx from '@/assets/members/llx.png'
import szn from '@/assets/members/szn.png'
import tjl from '@/assets/members/tjl.png'
import wjy from '@/assets/members/wjy.png'
import xwy from '@/assets/members/xwy.png'
import yby from '@/assets/members/yby.png'
import ysd from '@/assets/members/ysd.png'
import ywj from '@/assets/members/ywj.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_content,
    // eslint-disable-next-line vue/no-unused-components
    bnuz_content_paragraph
  },
  data() {
    return {
      head_image,
      // TODO: set image URI
      dyj: conf.isDev ? dyj : '',
      dyx: conf.isDev ? dyx : '',
      fst: conf.isDev ? fst : '',
      gty: conf.isDev ? gty : '',
      hy: conf.isDev ? hy : '',
      lfy: conf.isDev ? lfy : '',
      lh: conf.isDev ? lh : '',
      ljx: conf.isDev ? ljx : '',
      ljy: conf.isDev ? ljy : '',
      ljz: conf.isDev ? ljz : '',
      llq: conf.isDev ? llq : '',
      llx: conf.isDev ? llx : '',
      szn: conf.isDev ? szn : '',
      tjl: conf.isDev ? tjl : '',
      wjy: conf.isDev ? wjy : '',
      xwy: conf.isDev ? xwy : '',
      yby: conf.isDev ? yby : '',
      ysd: conf.isDev ? ysd : '',
      ywj: conf.isDev ? ywj : ''
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

.members-title {
  text-align: center;
  margin: 12px auto;
}

.card-text {
  font-family: "Arial", serif;
  font-size: 17px;
}

.teachers-title {
  text-align: left;
}

.teachers-container {
  display: flex;
}

.card > img {
  width: 30vw;
  margin: 24px 0;
}

.card {
  border: none;
  align-items: center;
}
</style>
