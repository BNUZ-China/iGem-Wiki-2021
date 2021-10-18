<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image">
    <BNUZ_Content_no_nav>
      <bnuz_content_paragraph hint_text="Degradation of Cas9 at a proper rate In order to verify the function">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Biobrick</th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>BBa_K3784000</td>
            <td>coding</td>
            <td>acdA</td>
            <td>Encoding 3-(aryl) acrylate reductase</td>
          </tr>
          <tr>
            <td>BBa_K3784001</td>
            <td>coding</td>
            <td>fldB</td>
            <td>Encoding 2-hydroxyacyl-CoA dehydratase protein family</td>
          </tr>
          <tr>
            <td>
              <p>BBa_K3784002</p>
            </td>
            <td>
              <p>coding</p>
            </td>
            <td>
              <p>fldC</p>
            </td>
            <td>
              <p>Encoding 2-hydroxyacyl-CoA dehydratase protein family</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K3784003</p>
            </td>
            <td>
              <p>coding</p>
            </td>
            <td>
              <p>fldH</p>
            </td>
            <td>
              <p>Encoding phenyllactate dehydrogenase</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K3784004</p>
            </td>
            <td>
              <p>coding</p>
            </td>
            <td>
              <p>TAA1</p>
            </td>
            <td>
              <p>Encoding tryptophan aminotransferase of Arabidopsis thaliana</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K206000</p>
            </td>
            <td>
              <p>promoter</p>
            </td>
            <td>
              <p>pBAD(MazF promoter)</p>
            </td>
            <td>
              <p>L-arabinose induced promoter</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K302033</p>
            </td>
            <td>
              <p>coding</p>
            </td>
            <td>
              <p>MazF</p>
            </td>
            <td>
              <p>Encoding a translational inhibitor</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K2717000</p>
            </td>
            <td>
              <p>coding</p>
            </td>
            <td>
              <p>GDH</p>
            </td>
            <td>
              <p>Sequence of glucose dehydrogenase</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K3784005</p>
            </td>
            <td>
              <p>coding</p>
            </td>
            <td>
              <p>bga2</p>
            </td>
            <td>
              <p>Encoding &beta;-galactosidase</p>
            </td>
          </tr>
          </tbody>
        </table>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Degradation of Cas9 at a proper rate In order to verify the function">
        Since we knocked out genes related to indole metabolism, to consume the remaining tryptophan, we cloned a
        tryptophan aminotransferase gene (BBa_K3784005) from Arabidopsis thaliana, which encodes tryptophan
        aminotransferase to catalyze tryptophan to produce indolepyruvate. Next, we cloned four genes in the Fld gene
        cluster (BBa_K3784001, BBa_K3784002, BBa_K3784003, BBa_K3784004) from Clostridium sporogenes, which can encode a
        variety of enzymes to catalyze the production of indolepyruvate to indolepropionic acid, a beneficial substance
        that enhances the intestinal mucosal barrier.

        <div style="text-align: center; width: 100%">
          <img :src="pic1">
        </div>

        CKD patients are often accompanied by intestinal flora imbalance, which is manifested as the decrease of
        beneficial bacteria, and the abnormal proliferation of pathogenic bacteria and conditional pathogenic bacteria.
        Therefore, we cloned the β-galactosidase gene (BBa_K3784006) that can efficiently catalyze the formation of
        galactooligosaccharides to promote the proliferation of Lactobacillus and Bifidobacteria in the patient’s
        intestinal tract.
      </bnuz_content_paragraph>

      <bnuz_content_paragraph>
        <h4>Composite Parts</h4>
        <table class="table table-striped">
          <tbody>
          <tr>
            <th>
              <p>Biobrick</p>
            </th>
            <th>
              <p>Type</p>
            </th>
            <th>
              <p>Name</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>BBa_K3036005</p>
            </td>
            <td>
              <p>Arabinose-induced suicide switch</p>
            </td>
            <td>
              <p>PMF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>BBa_K3784006</p>
            </td>
            <td>
              <p>Using tryptophan as a metabolic material to produce IPA</p>
            </td>
            <td>
              <p>Fld</p>
            </td>
          </tr>
          </tbody>
        </table>
      </bnuz_content_paragraph>
    </BNUZ_Content_no_nav>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import BNUZ_Content_no_nav from "@/components/bnuz_content_no_nav";
import Bottom from "@/components/bottom";
import bnuz_content_paragraph from "@/components/bnuz-content-paragraph";
import AppRoot from "@/AppRoot";
import conf from '@/wiki_config';
import pic1 from '@/assets/parts/pic1.png'

import head_image from '@/assets/head_images/PARTS/bannerPARTS.png'

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content_no_nav,
    bnuz_content_paragraph
  },
  data() {
    return {
      // TODO: set image URI
      head_image: conf.isDev ? head_image : '',
      pic1: conf.isDev ? pic1 : ''
    }
  }
}
</script>

<style scoped>
:root {
  --dark-color: rgb(0, 115, 0);
  --light-color: #f7fff1;
}

.bnuz-header-image {
  width: 100%;
  height: 40%;
}

.roundRect {
  padding: 20px;
  /*border-width: 2px;*/
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid rgb(0, 115, 0);
}

th, td {
  text-align: center;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f7fff1;
}

.table td {
  border-top: none;
}

.table thead th {
  border-bottom: none;
}

.table th {
  border-top: none;
}
</style>
