<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#2a7216">
      <bnuz_content_paragraph hint_text="The structure of Indole propionic acid(IPA) metabolic pathway in E.coli.">
        <h4>The structure of Indole propionic acid(IPA) metabolic pathway in E.coli.</h4>
        <p>
          The tryptophan metabolic pathway of E. coli is of great value in production. Many research reform this
          pathway. The USAS-China team in 2018 knocked-out the tnaA gene which coding the tryptophan enzyme of E.
          coli<sup>[1]</sup>. At 2019, the CRISPR-Cas9 technique was used in the knock-out of tnaA<sup>[2]</sup>. This
          year, the TnaA gene was knocked out by Red recombination.
        </p>
        <p>
          After knocking out the pathway of tryptophan metabolism to produce indole, in order to eliminate accumulated
          tryptophan and achieve the purpose of repairing intestinal mucosal barrier, Our team successfully structured
          the IPA metabolic pathway by cloned and linked multiple genes from Arabidopsis thaliana and Clostridium
          sporogenes(Figure 1). The fld plasmid was transformed into E.coli BL21(DE3) and achieved the production of IPA
          from tryptophan(Figure 2).
        </p>
        <p>
          Through this metabolic pathway, the accumulated tryptophan after tnaA gene deletion can be changed into IPA,
          which is good for health. Our result provides programme and reference for the research of tryptophan metabolic
          pathway.
        </p>
        <div class="left-right-div">
          <bnuz_image_container>
            <template v-slot:caption>
              Fig.1 Map of fld plasmid
            </template>
            <template v-slot:image>
              <img :src="pic1" width="95%">
            </template>
          </bnuz_image_container>
          <bnuz_image_container>
            <template v-slot:caption>
              Fig.2 HPLC result of IPA
            </template>
            <template v-slot:image>
              <img :src="pic2" width="95%">
            </template>
          </bnuz_image_container>
        </div>

      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Over expression of glucose dehydrogenase without IPTG induction">
        <h4>Over expression of glucose dehydrogenase without IPTG induction</h4>
        <p>

          In order to let the engineering E.coli own a proliferation advantage compare to probiotics, we apply the
          project of BNU-China at 2018<sup>[3]</sup>. By cloned the GDH gene of E.coli and transformed into the
          engineering E.coli, we overexpress the glucose dehydrogenase
        </p>

        <p>
          Since our project serves for medical treatment, engineered bacteria need to be colonized in the intestine. To
          meet the application scenario, we did not use IPTG to induce the expression of engineered bacteria. After 24h
          OD600 measurement, data showed that GDH could still promote the proliferation of engineered bacteria without
          induction. Furthermore, we used the data from this experiment to establish a competition model between
          engineered bacteria, original E.coli and pathogenic bacteria in the intestinal environment. The results showed
          that although the effect of GDH on promoting colonization was not very significant at the experimental level,
          the weak competitive advantage was enough to allow the engineered bacteria to colonize in the intestine
          (Figure
          3).
        </p>
        <p>
          Our data shows that overexpress the glucose dehydrogenase to structure the proliferation advantage is still
          practicable for medical treatment, industrial production and other application scenarios that are not suitable
          for adding IPTG. We have accumulated feasible data and experience for projects in relevant fields.
        </p>

        <bnuz_image_container>
          <template v-slot:caption>
            Fig.3 GDH overexpression promotes cell growth
          </template>
          <template v-slot:image>
            <img :src="pic3" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph
        hint_text="The expression of translation inhibitor (MazF) expressed by the pBAD promoter under high-concentration of arabinose leading to the removement of target bacteria">
        <h4>The expression of translation inhibitor (MazF) expressed by the pBAD promoter under high-concentration of
          arabinose leading to the removement of target bacteria</h4>
        <p>

          To offer an specific way to remove the engineering bacteria for the user, we coded the gene of a translation
          inhibitor (MazF) into the downstream of the L-arabinose activating promoter. The BNU-China team, in their
          program in 2019, has proved that the engineering bacteria will be killed but not lysed[4]; It will not harm
          other native bacteria. Our team enlarge the concentration of arabinose to explore the efficiency of removement
          and lysis of bacteria under the induction of high-concentrated arabinose.
        </p>
        <p>

          As shown in the figure below(Figure 4), after being inducted, the livability of the engineering bacteria
          declined dramatically, while the OD600 rate of the bacteria from the control group decreased similarly, which
          proved that the induction of high-concentrated arabinose will lead to lysis of the bacteria.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 the suicide of bacteria inducted by high-concentrated arabinose.(A) After being inducted, the number
            per hour of living bacteria decreased significantly under the effect of MazF; (B) The OD600 rate of the
            experimental group shows a significant decreasing, which proved that the induction to suicide of the
            bacteria by high-concentration arabinose will lead to lysis of the bacteria.
          </template>
          <template v-slot:image>
            <div class="left-right-div">
              <bnuz_image_container>
                <template v-slot:caption>
                  A
                </template>
                <template v-slot:image>
                  <img :src="pic4" width="95%">
                </template>
              </bnuz_image_container>
              <bnuz_image_container>
                <template v-slot:caption>
                  B
                </template>
                <template v-slot:image>
                  <img :src="pic5" width="95%">
                </template>
              </bnuz_image_container>
            </div>
          </template>
        </bnuz_image_container>

      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Compile the 2021 Intestinal Program Reference Manual">
        <h4>Compile the 2021 Intestinal Program Reference Manual</h4>
        <p>
          We cooperate with SUSTech-China, BUCT, SZU-China, NJMU-China, HZAU-China, Nanjing-China to compile the 2021
          Intestinal Program Reference Manual(Figure 5).
        </p>

        <bnuz_image_container>
          <template v-slot:caption>
            Fig.5 The 2021 Intestinal Program Reference Manual
          </template>
          <template v-slot:image>
            <img :src="handbook" width="65%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Reference">
        <h4>References</h4>
        <p>
          [1]http://2018.igem.org/Team:UCAS-China<br>
          [2]HE Jing-hua, LE Ke-yi. (2019). CRISPR/Cas9-mediated tnaA knockout in Escherichia coli. Journal of biology.
          36(6), 17-19.<br>
          [3]http://2018.igem.org/Team:BNU-China<br>
          [4]http://2019.igem.org/Team:BNU-China<br>
        </p>
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

import head_image from '@/assets/head_images/PARTS/bannerPARTS-contribution.png'
import pic1 from '@/assets/parts/pic1.png'
import pic2 from '@/assets/parts/pic2.png'
import pic3 from '@/assets/parts/pic3.png'
import pic4 from '@/assets/parts/pic4.png'
import pic5 from '@/assets/parts/pic5.png'
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
      pic1: conf.isDev ? pic1 : '',
      pic2: conf.isDev ? pic2 : '',
      pic3: conf.isDev ? pic3 : '',
      pic4: conf.isDev ? pic4 : '',
      pic5: conf.isDev ? pic5 : '',
      handbook: conf.isDev ? handbook : ''
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
  border: 2px solid #007300;
}

.left-right-div {
  display: flex;
  align-items: center;
  justify-content: center;
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
