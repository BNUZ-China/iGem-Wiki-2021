<template>
  <AppRoot>
    <transition enter-active-class="animate__animated animate__bounceInDown animate__slow">
      <TopNavigationBar v-show="TopNavBarVisible" :right-padding-for-scrollbar="scrollbarSpace">

      </TopNavigationBar>
    </transition>
    <!--    <div v-if="!TopNavBarVisible" class="top-nav-bar-space"></div>-->
    <Open_window @zoom-end="zoomEnd" @window-open-start="openStart">

    </Open_window>
    <div class="navbar_space"></div>
    <img :src="homepage_hospital" alt="homepage hospital" class="homepage_hospital" v-if="openStarted">

    <div :class="{'scrollbar-space': scrollbarSpace}">
      <transition enter-active-class="animate__fadeIn animate__animated animate__fast animate__delay-2s">
        <div class="index-content" v-if="TopNavBarVisible">
          <div class="text">
            Obtaining the lineage information out of the transcriptomic information
            In order to read the lineage information out of the transcriptomic information, we design two double
            promoter modules. And we conducted the experiment to test the function of the cassette. To make results
            visible, we use gRNA that targets ADE2 gene. Cryptococcus neoformans will turn red if gRNA works. The
            experiments were carried as follows.
            1.Construct recombinant plasmids. Get pGAP from the genome of Cryptococcus neoformans. Insert it upstream
            of
            pU6 on PRH003 plasmid. Use the plasmid without pGAP as the control group.
            2.Transform the product (2.5μL) into DH5α competent cells (50μL), grow cells on agar plates (containing
            Ampicillin). Incubate plates at 37°C overnight. Colonies were screened by colony PCR and then grown at
            37℃,
            200rpm. Plasmids were extracted and sent for sequencing.
            3.Use Kpn1 to linearize the plasmids and transform them into Cryptococcus neoformans by electroporation.
            4.The C. neoformans was spread on YNBA selection medium, and transformants grew after being cultured in an
            incubator kept at 30℃ for 4 days. Then the culture was transferred to a refrigerator at 4℃.
            5.Red colonies were selected and inoculated into YPD medium, then placed in an incubator kept at 30℃ for 4
            days. Finally, it was kept in at 4℃ refrigerator.
            6.For both the experimental and the control groups, we first extracted the total mRNA of these red
            colonies
            by Trizol. Then the mRNA was reverse transcribed using oligo dT as the primer.
            7.To test whether gRNA can be transcribed, we performed PCR on the reverse transcription products by two
            specific primers. Then sequence the PCR product.
            We exchanged pGAL7 with pGAP and repeated steps 1-5. Then we selected red colonies and induced the
            expression by galactose.
            After expression for 30mins. We repeated steps 6-7.
            Obtaining the lineage information out of the transcriptomic information
            In order to read the lineage information out of the transcriptomic information, we design two double
            promoter modules. And we conducted the experiment to test the function of the cassette. To make results
            visible, we use gRNA that targets ADE2 gene. Cryptococcus neoformans will turn red if gRNA works. The
            experiments were carried as follows.
            1.Construct recombinant plasmids. Get pGAP from the genome of Cryptococcus neoformans. Insert it upstream
            of
            pU6 on PRH003 plasmid. Use the plasmid without pGAP as the control group.
            2.Transform the product (2.5μL) into DH5α competent cells (50μL), grow cells on agar plates (containing
            Ampicillin). Incubate plates at 37°C overnight. Colonies were screened by colony PCR and then grown at
            37℃,
            200rpm. Plasmids were extracted and sent for sequencing.
            3.Use Kpn1 to linearize the plasmids and transform them into Cryptococcus neoformans by electroporation.
            4.The C. neoformans was spread on YNBA selection medium, and transformants grew after being cultured in an
            incubator kept at 30℃ for 4 days. Then the culture was transferred to a refrigerator at 4℃.
            5.Red colonies were selected and inoculated into YPD medium, then placed in an incubator kept at 30℃ for 4
            days. Finally, it was kept in at 4℃ refrigerator.
            6.For both the experimental and the control groups, we first extracted the total mRNA of these red
            colonies
            by Trizol. Then the mRNA was reverse transcribed using oligo dT as the primer.
            7.To test whether gRNA can be transcribed, we performed PCR on the reverse transcription products by two
            specific primers. Then sequence the PCR product.
            We exchanged pGAL7 with pGAP and repeated steps 1-5. Then we selected red colonies and induced the
            expression by galactose.
            After expression for 30mins. We repeated steps 6-7.Obtaining the lineage information out of the
            transcriptomic information
            In order to read the lineage information out of the transcriptomic information, we design two double
            promoter modules. And we conducted the experiment to test the function of the cassette. To make results
            visible, we use gRNA that targets ADE2 gene. Cryptococcus neoformans will turn red if gRNA works. The
            experiments were carried as follows.
            1.Construct recombinant plasmids. Get pGAP from the genome of Cryptococcus neoformans. Insert it upstream
            of
            pU6 on PRH003 plasmid. Use the plasmid without pGAP as the control group.
            2.Transform the product (2.5μL) into DH5α competent cells (50μL), grow cells on agar plates (containing
            Ampicillin). Incubate plates at 37°C overnight. Colonies were screened by colony PCR and then grown at
            37℃,
            200rpm. Plasmids were extracted and sent for sequencing.
            3.Use Kpn1 to linearize the plasmids and transform them into Cryptococcus neoformans by electroporation.
            4.The C. neoformans was spread on YNBA selection medium, and transformants grew after being cultured in an
            incubator kept at 30℃ for 4 days. Then the culture was transferred to a refrigerator at 4℃.
            5.Red colonies were selected and inoculated into YPD medium, then placed in an incubator kept at 30℃ for 4
            days. Finally, it was kept in at 4℃ refrigerator.
            6.For both the experimental and the control groups, we first extracted the total mRNA of these red
            colonies
            by Trizol. Then the mRNA was reverse transcribed using oligo dT as the primer.
            7.To test whether gRNA can be transcribed, we performed PCR on the reverse transcription products by two
            specific primers. Then sequence the PCR product.
            We exchanged pGAL7 with pGAP and repeated steps 1-5. Then we selected red colonies and induced the
            expression by galactose.
            After expression for 30mins. We repeated steps 6-7.Obtaining the lineage information out of the
            transcriptomic information
            In order to read the lineage information out of the transcriptomic information, we design two double
            promoter modules. And we conducted the experiment to test the function of the cassette. To make results
            visible, we use gRNA that targets ADE2 gene. Cryptococcus neoformans will turn red if gRNA works. The
            experiments were carried as follows.
            1.Construct recombinant plasmids. Get pGAP from the genome of Cryptococcus neoformans. Insert it upstream
            of
            pU6 on PRH003 plasmid. Use the plasmid without pGAP as the control group.
            2.Transform the product (2.5μL) into DH5α competent cells (50μL), grow cells on agar plates (containing
            Ampicillin). Incubate plates at 37°C overnight. Colonies were screened by colony PCR and then grown at
            37℃,
            200rpm. Plasmids were extracted and sent for sequencing.
            3.Use Kpn1 to linearize the plasmids and transform them into Cryptococcus neoformans by electroporation.
            4.The C. neoformans was spread on YNBA selection medium, and transformants grew after being cultured in an
            incubator kept at 30℃ for 4 days. Then the culture was transferred to a refrigerator at 4℃.
            5.Red colonies were selected and inoculated into YPD medium, then placed in an incubator kept at 30℃ for 4
            days. Finally, it was kept in at 4℃ refrigerator.
            6.For both the experimental and the control groups, we first extracted the total mRNA of these red
            colonies
            by Trizol. Then the mRNA was reverse transcribed using oligo dT as the primer.
            7.To test whether gRNA can be transcribed, we performed PCR on the reverse transcription products by two
            specific primers. Then sequence the PCR product.
            We exchanged pGAL7 with pGAP and repeated steps 1-5. Then we selected red colonies and induced the
            expression by galactose.
            After expression for 30mins. We repeated steps 6-7.Obtaining the lineage information out of the
            transcriptomic information
            In order to read the lineage information out of the transcriptomic information, we design two double
            promoter modules. And we conducted the experiment to test the function of the cassette. To make results
            visible, we use gRNA that targets ADE2 gene. Cryptococcus neoformans will turn red if gRNA works. The
            experiments were carried as follows.
            1.Construct recombinant plasmids. Get pGAP from the genome of Cryptococcus neoformans. Insert it upstream
            of
            pU6 on PRH003 plasmid. Use the plasmid without pGAP as the control group.
            2.Transform the product (2.5μL) into DH5α competent cells (50μL), grow cells on agar plates (containing
            Ampicillin). Incubate plates at 37°C overnight. Colonies were screened by colony PCR and then grown at
            37℃,
            200rpm. Plasmids were extracted and sent for sequencing.
            3.Use Kpn1 to linearize the plasmids and transform them into Cryptococcus neoformans by electroporation.
            4.The C. neoformans was spread on YNBA selection medium, and transformants grew after being cultured in an
            incubator kept at 30℃ for 4 days. Then the culture was transferred to a refrigerator at 4℃.
            5.Red colonies were selected and inoculated into YPD medium, then placed in an incubator kept at 30℃ for 4
            days. Finally, it was kept in at 4℃ refrigerator.
            6.For both the experimental and the control groups, we first extracted the total mRNA of these red
            colonies
            by Trizol. Then the mRNA was reverse transcribed using oligo dT as the primer.
            7.To test whether gRNA can be transcribed, we performed PCR on the reverse transcription products by two
            specific primers. Then sequence the PCR product.
            We exchanged pGAL7 with pGAP and repeated steps 1-5. Then we selected red colonies and induced the
            expression by galactose.
            After expression for 30mins. We repeated steps 6-7.
          </div>
        </div>
      </transition>
      <Bottom v-if="TopNavBarVisible"></Bottom>
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

export default {
  name: "index",
  components: {AppRoot, TopNavigationBar, Open_window, Bottom},
  data() {
    return {
      TopNavBarVisible: false,
      openStarted: false,
      scrollbarSpace: true,
      homepage_hospital: conf.isDev ? homepage_hospital : 'https://2021.igem.org/wiki/images/2/2e/T--BNUZ-China--homepage_hospital.png'
    }
  },
  beforeCreate() {
    var img = require(homepage_hospital)
    let image = new Image()
    image.src = img
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    })
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

.homepage_hospital {
  width: 100vw;
  z-index: -1;
}

.index-content {
  margin: 10vh 8vw 0;
}

.text {
  /*TODO homepage 字体*/
  margin: 0 7vw;
  background-color: rgba(255, 255, 255, 1);
  font-size: large;
  padding: 24px;
}

.top-nav-bar-space {
  width: 1px;
  height: 64px;
}

.scrollbar-space {
  margin-right: 17px;
}
</style>