<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <div class="bnuz-header-image-container" @mouseover="headImageMouseOver" @mouseout="headImageMouseOut">
      <img :src="himg2" class="bnuz-switch-header-image" ref="himg1">
      <img :src="himg1" class="bnuz-switch-header-image bnuz-team-head-image-2" ref="himg2">
    </div>
    <BNUZ_Content_No_Nav>
      <h3 class="members-title">PI</h3><br>
      <div class="pi-div" style="width: 100%">
          <img :src="zgf" class="pi-image">
          <img :src="xbq" class="pi-image">
          <img :src="wb" class="pi-image">
        </div>

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
    </BNUZ_Content_No_Nav>
    <Bottom_center></Bottom_center>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom_center from "@/components/bottom_center";
import bnuz_content_paragraph from "@/components/bnuz-content-paragraph";
import AppRoot from "@/AppRoot";
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

import zgf from '@/assets/members/zgf.png'
import xbq from '@/assets/members/xbq.png'
import wb from '@/assets/members/wb.png'

import himg1 from '@/assets/head_images/team/team1.png';
import himg2 from '@/assets/head_images/team/team2.png';
import BNUZ_Content_No_Nav from "@/components/bnuz_content_no_nav";

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom_center,
    TopNavigationBar,
    BNUZ_Content_No_Nav,
    // eslint-disable-next-line vue/no-unused-components
    bnuz_content_paragraph
  },
  data() {
    return {
      head_image,
      // TODO: set image URI
      dyj: conf.isDev ? dyj : "https://2021.igem.org/wiki/images/6/67/T--BNUZ-China--dyj.46c4e2eb.png",
      dyx: conf.isDev ? dyx : "https://2021.igem.org/wiki/images/d/d9/T--BNUZ-China--dyx.aeb781e1.png",
      fst: conf.isDev ? fst : "https://2021.igem.org/wiki/images/9/9a/T--BNUZ-China--fst.aac75dc5.png",
      gty: conf.isDev ? gty : "https://2021.igem.org/wiki/images/2/2e/T--BNUZ-China--gty.9057d172.png",
      hy: conf.isDev ? hy : "https://2021.igem.org/wiki/images/9/94/T--BNUZ-China--hy.a67cee70.png",
      lfy: conf.isDev ? lfy : "https://2021.igem.org/wiki/images/7/7e/T--BNUZ-China--lfy.9911a5f8.png",
      lh: conf.isDev ? lh : "https://2021.igem.org/wiki/images/0/01/T--BNUZ-China--lh.3996a41b.png",
      ljx: conf.isDev ? ljx : "https://2021.igem.org/wiki/images/6/61/T--BNUZ-China--ljx.eb4c169a.png",
      ljy: conf.isDev ? ljy : "https://2021.igem.org/wiki/images/2/23/T--BNUZ-China--ljy.48217aa7.png",
      ljz: conf.isDev ? ljz : "https://2021.igem.org/wiki/images/8/87/T--BNUZ-China--ljz.2e178763.png",
      llq: conf.isDev ? llq : "https://2021.igem.org/wiki/images/5/51/T--BNUZ-China--llq.6e45c705.png",
      llx: conf.isDev ? llx : "https://2021.igem.org/wiki/images/b/b8/T--BNUZ-China--llx.d9ef977e.png",
      szn: conf.isDev ? szn : "https://2021.igem.org/wiki/images/1/11/T--BNUZ-China--szn.2f16f942.png",
      tjl: conf.isDev ? tjl : "https://2021.igem.org/wiki/images/6/60/T--BNUZ-China--tjl.6e01e4de.png",
      wb: conf.isDev ? wb : "https://2021.igem.org/wiki/images/b/bc/T--BNUZ-China--wb.ad8ef1e6.png",
      wjy: conf.isDev ? wjy : "https://2021.igem.org/wiki/images/6/69/T--BNUZ-China--wjy.68674adb.png",
      xbq: conf.isDev ? xbq : "https://2021.igem.org/wiki/images/5/5c/T--BNUZ-China--xbq.2ab256df.png",
      xwy: conf.isDev ? xwy : "https://2021.igem.org/wiki/images/3/3d/T--BNUZ-China--xwy.651ef0ad.png",
      yby: conf.isDev ? yby : "https://2021.igem.org/wiki/images/5/54/T--BNUZ-China--yby.72c65051.png",
      ysd: conf.isDev ? ysd : "https://2021.igem.org/wiki/images/8/83/T--BNUZ-China--ysd.0302cb43.png",
      ywj: conf.isDev ? ywj : "https://2021.igem.org/wiki/images/9/92/T--BNUZ-China--ywj.e42a2f63.png",
      zgf: conf.isDev ? zgf : "https://2021.igem.org/wiki/images/4/4d/T--BNUZ-China--zgf.51d05974.png",

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

.bnuz-header-image:hover {
  height: 60%;
}

.roundRect {
  padding: 20px;
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid rgba(0,0,115,0.79)
}

.members-title {
  text-align: center;
  margin: 12px auto;
  width: 22vw;
  padding: 20px;
  border-top: 2px solid #deddde;
  border-bottom: 2px solid #deddde;
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

.left-right-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pi-image {
  width: 30%;
}

.pi-div {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
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
