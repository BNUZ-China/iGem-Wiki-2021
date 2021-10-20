<template>
  <AppRoot>
    <transition enter-active-class="animate__animated animate__bounceInDown animate__slow">
      <TopNavigationBar v-show="TopNavBarVisible" :right-padding-for-scrollbar="scrollbarSpace">

      </TopNavigationBar>
    </transition>
    <Open_window @zoom-end="zoomEnd" @window-open-start="openStart">

    </Open_window>
    <div class="navbar_space"></div>
    <img :src="homepage_hospital" alt="homepage hospital" class="homepage_hospital" v-show="openStarted">

    <div :class="{'scrollbar-space': scrollbarSpace}">
      <transition enter-active-class="animate__fadeIn animate__animated animate__fast animate__delay-2s">
        <div class="index-content" v-show="TopNavBarVisible">
          <div class="text">
            <p>
              Chronic kidney disease (CKD) is a major chronic disease with high incidence, poor prognosis and
              complicated
              complications, which has become a major public health problem endangering global public health.
            </p>

            <div class="article-image-container">
              <img :src="pic1" class="article-image">
            </div>
            <p>
              The treatment methods for clinical application include treatment of the causes of CKD, such as
              hypertension,
              diabetes and other diseases, while strictly controlling blood glucose, blood pressure and blood lipids,
              and
              adjusting the dietary structure of patients. Advanced CKD often take renal dialysis, renal transplantation
              and other methods of alternative treatment.
              With the development of CKD, renal function is gradually lost. Coupled with drug interference, intestinal
              flora homeostasis is imbalance and the structure of flora has changed greatly. The change of flora
              structure
              further leads to great changes in flora metabolism, a large number of enterogenous urotoxins and their
              precursors are synthesized. The change of this metabolic pathway leads to the further deterioration of
              intestinal environment and the severe impairment of intestinal mucosal barrier function.
            </p>
            <div class="article-image-container">
              <img :src="pic2" class="article-image">
            </div>
            <p>
              Previous studies have shown that indoxyl sulfate(IS), whose content is positively correlated with the
              amount
              of indole, is a key urinary toxin that promotes the progression of CKD. Tryptophan in food is first
              metabolized into indoles under the action of enteric E. coli. After indoles enter host cells, under the
              action of cytochrome P450 enzyme and sulfotransferase, they are metabolized into IS in liver cells.
            </p>
            <div class="article-image-container">
              <img :src="pic3" class="article-image">
            </div>
            <p>
              Aiming at the metabolic pathway of IS, our team knocked out the tnaa gene of E. coli that metabolizes
              tryptophan to produce indole, blocking the generation of IS from the source. In order to repair the
              intestinal mucosal barrier and consume the remaining tryptophan, we reconstructed a pathway to metabolize
              tryptophan to produce indole propionic acid. To promote the proliferation of probiotics and delay and
              treat
              CKD, we overexpressed β- Galactosidase that efficiently catalyzes the formation of galactooligosaccharides
              from lactose β- Galactosidase.
            </p>
            <div class="article-image-container" style="transform: translateX(-50px)">
              <img :src="pic4" class="article-image">
            </div>
          </div>
        </div>
      </transition>
      <Bottom v-show="TopNavBarVisible"></Bottom>
    </div>
  </AppRoot>
</template>

<script>
import Open_window from "@/components/open_window";
import TopNavigationBar from "@/components/top_navigation_bar";
import homepage_hospital from '@/assets/homepage.png';
import AppRoot from "@/AppRoot";
import conf from "@/wiki_config"
import Bottom from "@/components/bottom"
import ScrollReveal from "scrollreveal";
import font from '@/assets/IndieFlower-Regular.ttf'

import pic1 from '@/assets/homepage/pic1.png';
import pic2 from '@/assets/homepage/pic2.png';
import pic3 from '@/assets/homepage/pic3.png';
import pic4 from '@/assets/homepage/pic4.png';

export default {
  name: "index",
  components: {AppRoot, TopNavigationBar, Open_window, Bottom},
  data() {
    return {
      TopNavBarVisible: false,
      openStarted: false,
      scrollbarSpace: true,
      scrollReveal: ScrollReveal(),
      homepage_hospital: conf.isDev ? homepage_hospital :
        'https://2021.igem.org/wiki/images/8/8e/T--BNUZ-China--homepage.63801aff.png',
      // TODO: set image URI
      font: conf.isDev ? font : 'https://2021.igem.org/wiki/images/1/1c/T--BNUZ-China--Homapage_font.ttf',

      // TODO: set image URI
      pic1: conf.isDev ? pic1 : 'https://2021.igem.org/wiki/images/e/e6/T--BNUZ-China--pic1.aca53bc3.png\n',
      // TODO: set image URI
      pic2: conf.isDev ? pic2 : 'https://2021.igem.org/wiki/images/5/5d/T--BNUZ-China--pic2.56917586.png\n',
      // TODO: set image URI
      pic3: conf.isDev ? pic3 : 'https://2021.igem.org/wiki/images/a/a7/T--BNUZ-China--pic3.f2bb7a73.png\n',
      // TODO: set image URI
      pic4: conf.isDev ? pic4 : 'https://2021.igem.org/wiki/images/b/b7/T--BNUZ-China--pic4.bf944ec2.png\n'
    }
  },
  beforeCreate() {
    // var img = require(homepage_hospital)
    // let image = new Image()
    // image.src = img
  },
  mounted() {
    this.scrollReveal.reveal('.para1', {
      reset: true,
      origin: 'bottom',
      easing: 'ease-in-out',
      distance: '50px',
      opacity: 0.5,
      delay: 10000
    });
    console.log('end')
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  },
  methods: {
    openStart: function () {
      this.openStarted = true;
    },
    zoomEnd: function () {
      this.TopNavBarVisible = true;
      let vue = this;
      setTimeout(function () {
        vue.scrollbarSpace = false;
        document.getElementsByTagName('body')[0].style.overflowY = 'auto';
      }, 2000)
    }
  }
}
</script>

<style scoped>
.navbar_space {
  width: 1px;
  height: 1px;
}

.text {
  /*TODO homepage 字体*/
  background-color: rgba(255, 255, 255, 0.85);
  margin: 120vh 7vw 0;
  font-size: large;
  padding: 24px;
  font-family: Arial, sans-serif;
  line-height: 1.7em;
}

.top-nav-bar-space {
  width: 1px;
  height: 64px;
}

.scrollbar-space {
  margin-right: 17px;
}

.article-image-container {
  width: 100%;
  text-align: center;
}

.article-image {
  width: 80%;
  display: inline-block;
  text-align: center;
}

p {
  --marginTopBottom: 24px;
  margin-top: var(--marginTopBottom);
  margin-bottom: var(--marginTopBottom);
  font-size: 22px;
  line-height: 32px;
}

.roundRect {
  padding: 20px;
  background-color: rgb(220, 230, 237);
  border-radius: 20px;
  margin: 16px 0;
}

.homepage_hospital {
  width: 100vw;
  /*top: -100px;*/
  /*left: 8vw;*/
  position: absolute;
  top: 18px;
  left: 0;
  /*top: -100px;*/
  /*left: 8vw;*/
  z-index: -1;
}

.index-content {
  margin: -400px 8vw 0;
  margin: 40vh 8vw 0;
}

</style>