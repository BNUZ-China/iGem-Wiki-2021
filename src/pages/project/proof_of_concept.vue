<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#ffd89f" top_distance="10">
      <bnuz_content_paragraph hint_text="Overview">
        <h4>Overview</h4>
        <p>We successfully constructed a metabolic pathway for metabolizing tryptophan to produce indolepropionic acid.
          Indolepropionic acid has been proved to have a good role in repairing the intestinal mucosal barrier and can
          play a certain role in delaying the progression of chronic kidney disease. Meanwhile, <em>GDH</em> was
          overexpressed to enhance the intestinal colonization ability of engineered bacteria. Its function is verified
          by mathematical modeling. At the same time, we established a mathematical model of quorum sensing process,
          which provided a theoretical basis for subsequent regulation of intestinal colony structure and metabolism of
          engineered bacteria. We also successfully built the kill switch and anti-escape system, which created
          conditions for the practical application of our products.</p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Gibson assembly construct Indole-3-Propionic Acid Metabolism Pathway">
        <h4>Gibson assembly construct Indole-3-Propionic Acid Metabolism Pathway</h4>
        <p>We successfully constructed plasmids contained <em>TAA1, fldH, fldB, fldC, and acdA. TAA1, fldH and
          fldBC</em> are each initiated by a T7 promoter. <em>acdA</em> is transcribed by a self-contained promoter
          cloned from <em>Clostridium sporogenes.</em></p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 IPA synthesis plasmid map
          </template>
          <template v-slot:image>
            <img :src="pic1" width="45%">
          </template>
        </bnuz_image_container>
        <p>We transformed the plasmid into <em>E. coli</em> BL21(DE3) and induced it to express. After extracting total
          RNA, we obtained its cDNA by reverse transcription. We used cDNA as a template to amplify each fragment, then
          checked it by agarose gel electrophoresis. We chose <em>rsmA</em> (16S rRNA m(6)2A1518, m(6)2A1519
          dimethyltransferase) as the internal reference gene and set a negative control. Five genes in the IPA
          metabolic pathway had been well expressed (Fig.2) and the corresponding mRNAs have been successfully
          transcribed. The expression levels of internal reference genes in the experimental group (<em>rsmAE</em>) and
          the control group (<em>rsmAC</em>) were consistent.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2 Gene expression level verification (<em>TAA1</em>: Tryptophan aminotransferase 1, 1176bp, 1176bp; <em>fldH:</em>
            phenyllactate dehydrogenase, 996bp; <em>fldB:</em> 2-hydroxyacyl-CoA dehydratase protein family,1224bp; <em>fldC</em>:
            2-hydroxyacyl-CoA dehydratase protein family, 1125bp; <em>acdA</em>: 3-(aryl) acrylate reductase, 1134bp.
            <em>rsmAE</em>: 16S rRNA m(6)2A1518, m(6)2A1519 dimethyltransferase, 664bp, cloned from engineered <em>E.
            coli</em>. <em>rsmAC</em>: 16S rRNA m(6)2A1518, m(6)2A1519 dimethyltransferase, 664bp, cloned from control
            <em>E. coli</em>. NC: negative control)
          </template>
          <template v-slot:image>
            <img :src="pic2" width="65%">
          </template>
        </bnuz_image_container>
        <p>To test whether our engineered bacteria can metabolize tryptophan to produce indolepropionic acid, we used
          HPLC (High performance liquid chromatography) to detect the content of HPLC in the fermentation supernatant.
          We set up three biological replicates, namely IPA1, IPA2, and IPA3, as well as a control and a standard BZP1.
          We can learn that the experimental group and the standard have a peak at the same retention time (Fig.3),
          which proves the presence of Indole-3-propionic acid in the experimental group. Meanwhile, there was no peak
          in control group, which proved that <em>E. coli</em> could not metabolize tryptophan to produce indole
          propionic acid.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig. 3 Determination of indole propionic acid in supernatant by HPLC (IPA1, IPA2, IPA3 are experimental
            groups，BZP1 is positive control，Control is negative control)
          </template>
          <template v-slot:image>
            <img :src="pic3" width="35%">
          </template>
        </bnuz_image_container>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Overexpression of GDH">
        <h4>Overexpression of <em>GDH</em></h4>
        <p>To explore whether <em>GDH</em> can effectively promote the proliferation of engineered bacteria without
          IPTG induction, we have drawn the growth curve of engineered bacteria and normal bacteria. From the growth
          curve (Fig.4) we can learn that compared with <em>E. coli</em> that had not overexpressed <em>GDH</em>, our
          engineered bacteria had a certain proliferation advantage, although the effect is not obvious. We subsequently
          established a mathematical model of intestinal colony competition. The results showed that although
          <em>GDH</em> slightly enhanced the colonization advantage of engineered bacteria, it could be eventually well
          colonized in the intestinal tract.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.4 <em>GDH</em> overexpression promotes cell growth
          </template>
          <template v-slot:image>
            <img :src="pic4" width="65%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.5 <em>GDH</em> overexpression promotes cell growth (adapted, with permission from BNU-China 2019[1])
          </template>
          <template v-slot:image>
            <img :src="pic5" width="65%">
          </template>
        </bnuz_image_container>
        <p style="color: rgb(121,120,121); font-size: 18px;text-align: center">
          [1] Team: BNU-China/Design - 2019.igem.org
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Co-culture model">
        <h4>Co-culture model</h4>
        <p>Because the environment of intestine is too complex to control in wet experiments, our team decided to use
          mathematical modeling to simulate the value of engineered bacteria in the intestinal tract under different
          conditions. </p>
        <h5 id='assumption-1'>Assumption</h5>
        <ol start=''>
          <li>The temperature of the reaction system is constant.</li>
          <li>All the molecules are well mixed.</li>
          <li>All reactions, once occurring, can be accomplished in a fraction of a second.</li>
          <li>Pathogenic bacteria in the range of the model can be represented by the group with the highest weight.
          </li>

        </ol>
        <p>&nbsp;</p>
        <h5 id='model-1'>Model</h5>
        <p>Since human intestinal resources are limited, we chose to use the Logistic model to represent the changes in
          the
          number of strains over time in the body environment satisfying the hypothesis. </p>
        <p>Logistic model is a model that reflects the limited environment hindering the growth of content.:</p>
        <p>
          $$\frac{dN_1}{dt} = r_1 N_1\left( 1 - \frac{N_1}{K_1} \right)$$
        </p>
        <p>Because the intestinal environment is complex, the interaction between multiple bacteria should also be
          included
          in our model, so we tried to include intestinal <em>Escherichia coli</em> (which will be replaced in part by
          our
          engineered bacteria) and pathogenic bacteria which is directly related to CKD in the model. </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.418ex" height="2.765ex" role="img" focusable="false" viewBox="0 -877 1068.6 1222"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.781ex;">
              <defs>
                <path id="MJX-89-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-89-TEX-I-1D43E"
                      d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mfrac">
                    <g data-mml-node="mi" transform="translate(220.4,394) scale(0.707)">
                      <use data-c="1D441" xlink:href="#MJX-89-TEX-I-1D441"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(220,-345) scale(0.707)">
                      <use data-c="1D43E" xlink:href="#MJX-89-TEX-I-1D43E"></use>
                    </g>
                    <rect width="828.6" height="60" x="120" y="220"></rect>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">\frac{N}{K}</script>
          is regarded as the used space, and
          <mjx-container class="MathJax"
                         jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.387ex"
                 height="2.775ex" role="img" focusable="false" viewBox="0 -877 3707.1 1226.5"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.791ex;">
              <defs>
                <path id="MJX-90-TEX-SO-28"
                      d="M152 251Q152 646 388 850H416Q422 844 422 841Q422 837 403 816T357 753T302 649T255 482T236 250Q236 124 255 19T301 -147T356 -251T403 -315T422 -340Q422 -343 416 -349H388Q359 -325 332 -296T271 -213T212 -97T170 56T152 251Z">
                </path>
                <path id="MJX-90-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-90-TEX-N-2212"
                      d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                <path id="MJX-90-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-90-TEX-I-1D43E"
                      d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                </path>
                <path id="MJX-90-TEX-SO-29"
                      d="M305 251Q305 -145 69 -349H56Q43 -349 39 -347T35 -338Q37 -333 60 -307T108 -239T160 -136T204 27T221 250T204 473T160 636T108 740T60 807T35 839Q35 850 50 850H56H69Q197 743 256 566Q305 425 305 251Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mrow">
                    <g data-mml-node="mo" transform="translate(0 -0.5)">
                      <use data-c="28" xlink:href="#MJX-90-TEX-SO-28"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(458,0)">
                      <use data-c="31" xlink:href="#MJX-90-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1180.2,0)">
                      <use data-c="2212" xlink:href="#MJX-90-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mfrac" transform="translate(2180.4,0)">
                      <g data-mml-node="mi" transform="translate(220.4,394) scale(0.707)">
                        <use data-c="1D441" xlink:href="#MJX-90-TEX-I-1D441"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(220,-345) scale(0.707)">
                        <use data-c="1D43E" xlink:href="#MJX-90-TEX-I-1D43E"></use>
                      </g>
                      <rect width="828.6" height="60" x="120" y="220"></rect>
                    </g>
                    <g data-mml-node="mo" transform="translate(3249.1,0) translate(0 -0.5)">
                      <use data-c="29" xlink:href="#MJX-90-TEX-SO-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">\left( 1-\frac{N}{K} \right) </script>
          can be regarded as the unused space. If
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.804ex" height="1.885ex" role="img" focusable="false" viewBox="0 -683 1239.6 833"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.339ex;">
              <defs>
                <path id="MJX-94-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-94-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D441" xlink:href="#MJX-94-TEX-I-1D441"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(836,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-94-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">N_1</script>
          and
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.804ex" height="1.885ex" role="img" focusable="false"
                 viewBox="0 -683 1239.6 833" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.339ex;">
              <defs>
                <path id="MJX-93-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-93-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D441" xlink:href="#MJX-93-TEX-I-1D441"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(836,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-93-TEX-N-32"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">N_2</script>
          species use the same space, the &quot;used space&quot; of
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.804ex" height="1.885ex" role="img" focusable="false" viewBox="0 -683 1239.6 833"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.339ex;">
              <defs>
                <path id="MJX-93-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-93-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D441" xlink:href="#MJX-93-TEX-I-1D441"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(836,-150) scale(0.707)">
                      <use data-c="32" xlink:href="#MJX-93-TEX-N-32"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">N_2</script>
          population should be added to the Logistic equation of
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.804ex" height="1.885ex" role="img" focusable="false" viewBox="0 -683 1239.6 833"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.339ex;">
              <defs>
                <path id="MJX-94-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-94-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D441" xlink:href="#MJX-94-TEX-I-1D441"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(836,-150) scale(0.707)">
                      <use data-c="31" xlink:href="#MJX-94-TEX-N-31"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">N_1</script>
          . Thus, Lotka-Volterra interspecific competition model can be obtained:
        </p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n42" cid="n42" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="30.811ex" height="8.593ex" role="img" focusable="false"
                viewBox="0 -2149 13618.5 3798" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -3.731ex;">
                <defs>
                  <path id="MJX-80-TEX-S4-23A7"
                        d="M712 899L718 893V876V865Q718 854 704 846Q627 793 577 710T510 525Q510 524 509 521Q505 493 504 349Q504 345 504 334Q504 277 504 240Q504 -2 503 -4Q502 -8 494 -9T444 -10Q392 -10 390 -9Q387 -8 386 -5Q384 5 384 230Q384 262 384 312T383 382Q383 481 392 535T434 656Q510 806 664 892L677 899H712Z">
                  </path>
                  <path id="MJX-80-TEX-S4-23A9"
                        d="M718 -893L712 -899H677L666 -893Q542 -825 468 -714T385 -476Q384 -466 384 -282Q384 3 385 5L389 9Q392 10 444 10Q486 10 494 9T503 4Q504 2 504 -239V-310V-366Q504 -470 508 -513T530 -609Q546 -657 569 -698T617 -767T661 -812T699 -843T717 -856T718 -876V-893Z">
                  </path>
                  <path id="MJX-80-TEX-S4-23A8"
                        d="M389 1159Q391 1160 455 1160Q496 1160 498 1159Q501 1158 502 1155Q504 1145 504 924Q504 691 503 682Q494 549 425 439T243 259L229 250L243 241Q349 175 421 66T503 -182Q504 -191 504 -424Q504 -600 504 -629T499 -659H498Q496 -660 444 -660T390 -659Q387 -658 386 -655Q384 -645 384 -425V-282Q384 -176 377 -116T342 10Q325 54 301 92T255 155T214 196T183 222T171 232Q170 233 170 250T171 268Q171 269 191 284T240 331T300 407T354 524T383 679Q384 691 384 925Q384 1152 385 1155L389 1159Z">
                  </path>
                  <path id="MJX-80-TEX-S4-23AA"
                        d="M384 150V266Q384 304 389 309Q391 310 455 310Q496 310 498 309Q502 308 503 298Q504 283 504 150Q504 32 504 12T499 -9H498Q496 -10 444 -10T390 -9Q386 -8 385 2Q384 17 384 150Z">
                  </path>
                  <path id="MJX-80-TEX-I-1D451"
                        d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                  </path>
                  <path id="MJX-80-TEX-I-1D441"
                        d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                  </path>
                  <path id="MJX-80-TEX-N-31"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                  </path>
                  <path id="MJX-80-TEX-N-74"
                        d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z">
                  </path>
                  <path id="MJX-80-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                  </path>
                  <path id="MJX-80-TEX-N-72"
                        d="M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z">
                  </path>
                  <path id="MJX-80-TEX-LO-28"
                        d="M180 96T180 250T205 541T266 770T353 944T444 1069T527 1150H555Q561 1144 561 1141Q561 1137 545 1120T504 1072T447 995T386 878T330 721T288 513T272 251Q272 133 280 56Q293 -87 326 -209T399 -405T475 -531T536 -609T561 -640Q561 -643 555 -649H527Q483 -612 443 -568T353 -443T266 -270T205 -41Z">
                  </path>
                  <path id="MJX-80-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  <path id="MJX-80-TEX-I-1D43E"
                        d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                  </path>
                  <path id="MJX-80-TEX-I-1D6FC"
                        d="M34 156Q34 270 120 356T309 442Q379 442 421 402T478 304Q484 275 485 237V208Q534 282 560 374Q564 388 566 390T582 393Q603 393 603 385Q603 376 594 346T558 261T497 161L486 147L487 123Q489 67 495 47T514 26Q528 28 540 37T557 60Q559 67 562 68T577 70Q597 70 597 62Q597 56 591 43Q579 19 556 5T512 -10H505Q438 -10 414 62L411 69L400 61Q390 53 370 41T325 18T267 -2T203 -11Q124 -11 79 39T34 156ZM208 26Q257 26 306 47T379 90L403 112Q401 255 396 290Q382 405 304 405Q235 405 183 332Q156 292 139 224T121 120Q121 71 146 49T208 26Z">
                  </path>
                  <path id="MJX-80-TEX-N-32"
                        d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                  </path>
                  <path id="MJX-80-TEX-LO-29"
                        d="M35 1138Q35 1150 51 1150H56H69Q113 1113 153 1069T243 944T330 771T391 541T416 250T391 -40T330 -270T243 -443T152 -568T69 -649H56Q43 -649 39 -647T35 -637Q65 -607 110 -548Q283 -316 316 56Q324 133 324 251Q324 368 316 445Q278 877 48 1123Q36 1137 35 1138Z">
                  </path>
                  <path id="MJX-80-TEX-N-64"
                        d="M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z">
                  </path>
                  <path id="MJX-80-TEX-I-1D6FD"
                        d="M29 -194Q23 -188 23 -186Q23 -183 102 134T186 465Q208 533 243 584T309 658Q365 705 429 705H431Q493 705 533 667T573 570Q573 465 469 396L482 383Q533 332 533 252Q533 139 448 65T257 -10Q227 -10 203 -2T165 17T143 40T131 59T126 65L62 -188Q60 -194 42 -194H29ZM353 431Q392 431 427 419L432 422Q436 426 439 429T449 439T461 453T472 471T484 495T493 524T501 560Q503 569 503 593Q503 611 502 616Q487 667 426 667Q384 667 347 643T286 582T247 514T224 455Q219 439 186 308T152 168Q151 163 151 147Q151 99 173 68Q204 26 260 26Q302 26 349 51T425 137Q441 171 449 214T457 279Q457 337 422 372Q380 358 347 358H337Q258 358 258 389Q258 396 261 403Q275 431 353 431Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mrow">
                      <g data-mml-node="mo">
                        <use data-c="23A7" xlink:href="#MJX-80-TEX-S4-23A7" transform="translate(0,1250)">
                        </use>
                        <use data-c="23A9" xlink:href="#MJX-80-TEX-S4-23A9" transform="translate(0,-750)">
                        </use>
                        <use data-c="23A8" xlink:href="#MJX-80-TEX-S4-23A8" transform="translate(0,0)">
                        </use>
                        <svg width="889" height="280" y="1060" x="0" viewBox="0 49.3 889 280">
                          <use data-c="23AA" xlink:href="#MJX-80-TEX-S4-23AA" transform="scale(1,1.377)">
                          </use>
                        </svg>
                        <svg width="889" height="280" y="-840" x="0" viewBox="0 49.3 889 280">
                          <use data-c="23AA" xlink:href="#MJX-80-TEX-S4-23AA" transform="scale(1,1.377)">
                          </use>
                        </svg>
                      </g>
                      <g data-mml-node="mtable" transform="translate(889,0)">
                        <g data-mml-node="mtr" transform="translate(0,999.5)">
                          <g data-mml-node="mtd">
                            <g data-mml-node="mfrac">
                              <g data-mml-node="mrow" transform="translate(220,446.1) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D451" xlink:href="#MJX-80-TEX-I-1D451"></use>
                                </g>
                                <g data-mml-node="msub" transform="translate(520,0)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(836,-150) scale(0.707)">
                                    <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mrow" transform="translate(520.7,-345) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D451" xlink:href="#MJX-80-TEX-I-1D451"></use>
                                </g>
                                <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                   transform="translate(520,0)">
                                  <g data-mml-node="mi">
                                    <use data-c="74" xlink:href="#MJX-80-TEX-N-74"></use>
                                  </g>
                                </g>
                              </g>
                              <rect width="1444.2" height="60" x="120" y="220"></rect>
                            </g>
                            <g data-mml-node="mo" transform="translate(1962,0)">
                              <use data-c="3D" xlink:href="#MJX-80-TEX-N-3D"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(3017.7,0)">
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                                <g data-mml-node="mi">
                                  <use data-c="72" xlink:href="#MJX-80-TEX-N-72"></use>
                                </g>
                              </g>
                              <g data-mml-node="mn" transform="translate(425,-150) scale(0.707)">
                                <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                              </g>
                            </g>
                            <g data-mml-node="msub" transform="translate(3846.3,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(836,-150) scale(0.707)">
                                <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                              </g>
                            </g>
                            <g data-mml-node="mrow" transform="translate(5252.5,0)">
                              <g data-mml-node="mo" transform="translate(0 -0.5)">
                                <use data-c="28" xlink:href="#MJX-80-TEX-LO-28"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(597,0)">
                                <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(1319.2,0)">
                                <use data-c="2212" xlink:href="#MJX-80-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="mfrac" transform="translate(2319.4,0)">
                                <g data-mml-node="msub"
                                   transform="translate(236.3,446.1) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(836,-150) scale(0.707)">
                                    <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                                  </g>
                                </g>
                                <g data-mml-node="msub"
                                   transform="translate(220,-345) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D43E" xlink:href="#MJX-80-TEX-I-1D43E"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(882,-150) scale(0.707)">
                                    <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                                  </g>
                                </g>
                                <rect width="1109" height="60" x="120" y="220"></rect>
                              </g>
                              <g data-mml-node="mo" transform="translate(3890.7,0)">
                                <use data-c="2212" xlink:href="#MJX-80-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(4890.9,0)">
                                <use data-c="1D6FC" xlink:href="#MJX-80-TEX-I-1D6FC"></use>
                              </g>
                              <g data-mml-node="mfrac" transform="translate(5530.9,0)">
                                <g data-mml-node="msub"
                                   transform="translate(236.3,446.1) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(836,-150) scale(0.707)">
                                    <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                                  </g>
                                </g>
                                <g data-mml-node="msub"
                                   transform="translate(220,-345) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D43E" xlink:href="#MJX-80-TEX-I-1D43E"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(882,-150) scale(0.707)">
                                    <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                                  </g>
                                </g>
                                <rect width="1109" height="60" x="120" y="220"></rect>
                              </g>
                              <g data-mml-node="mo" transform="translate(6879.9,0) translate(0 -0.5)">
                                <use data-c="29" xlink:href="#MJX-80-TEX-LO-29"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtr" transform="translate(0,-999.5)">
                          <g data-mml-node="mtd">
                            <g data-mml-node="mfrac">
                              <g data-mml-node="mrow" transform="translate(220,446.1) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D451" xlink:href="#MJX-80-TEX-I-1D451"></use>
                                </g>
                                <g data-mml-node="msub" transform="translate(520,0)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(836,-150) scale(0.707)">
                                    <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="TeXAtom" transform="translate(508,-345) scale(0.707)"
                                 data-mjx-texclass="ORD">
                                <g data-mml-node="mi">
                                  <use data-c="64" xlink:href="#MJX-80-TEX-N-64"></use>
                                  <use data-c="74" xlink:href="#MJX-80-TEX-N-74"
                                       transform="translate(556,0)"></use>
                                </g>
                              </g>
                              <rect width="1444.2" height="60" x="120" y="220"></rect>
                            </g>
                            <g data-mml-node="mo" transform="translate(1962,0)">
                              <use data-c="3D" xlink:href="#MJX-80-TEX-N-3D"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(3017.7,0)">
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                                <g data-mml-node="mi">
                                  <use data-c="72" xlink:href="#MJX-80-TEX-N-72"></use>
                                </g>
                              </g>
                              <g data-mml-node="mn" transform="translate(425,-150) scale(0.707)">
                                <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                              </g>
                            </g>
                            <g data-mml-node="msub" transform="translate(3846.3,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(836,-150) scale(0.707)">
                                <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                              </g>
                            </g>
                            <g data-mml-node="mrow" transform="translate(5252.5,0)">
                              <g data-mml-node="mo" transform="translate(0 -0.5)">
                                <use data-c="28" xlink:href="#MJX-80-TEX-LO-28"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(597,0)">
                                <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(1319.2,0)">
                                <use data-c="2212" xlink:href="#MJX-80-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(2319.4,0)">
                                <use data-c="1D6FD" xlink:href="#MJX-80-TEX-I-1D6FD"></use>
                              </g>
                              <g data-mml-node="mfrac" transform="translate(2885.4,0)">
                                <g data-mml-node="msub"
                                   transform="translate(236.3,446.1) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(836,-150) scale(0.707)">
                                    <use data-c="31" xlink:href="#MJX-80-TEX-N-31"></use>
                                  </g>
                                </g>
                                <g data-mml-node="msub"
                                   transform="translate(220,-345) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D43E" xlink:href="#MJX-80-TEX-I-1D43E"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(882,-150) scale(0.707)">
                                    <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                                  </g>
                                </g>
                                <rect width="1109" height="60" x="120" y="220"></rect>
                              </g>
                              <g data-mml-node="mo" transform="translate(4456.7,0)">
                                <use data-c="2212" xlink:href="#MJX-80-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="mfrac" transform="translate(5456.9,0)">
                                <g data-mml-node="msub"
                                   transform="translate(236.3,446.1) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D441" xlink:href="#MJX-80-TEX-I-1D441"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(836,-150) scale(0.707)">
                                    <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                                  </g>
                                </g>
                                <g data-mml-node="msub"
                                   transform="translate(220,-345) scale(0.707)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D43E" xlink:href="#MJX-80-TEX-I-1D43E"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(882,-150) scale(0.707)">
                                    <use data-c="32" xlink:href="#MJX-80-TEX-N-32"></use>
                                  </g>
                                </g>
                                <rect width="1109" height="60" x="120" y="220"></rect>
                              </g>
                              <g data-mml-node="mo" transform="translate(6805.9,0) translate(0 -0.5)">
                                <use data-c="29" xlink:href="#MJX-80-TEX-LO-29"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(13618.5,0) translate(0 250)"></g>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
        <p>But due to the particularity of our project engineering <em>escherichia coli</em> (<em>E. coli</em> and the
          model
          of primary
          physical and chemical properties, and the model of pathogenic bacteria in the middle is a complex reaction
          relationship), we will expand this equation to three species competition, based on the experimental data and
          the
          Lotka - on the model of three species competition (include 1 engineering <em>E. coli</em> ; 2. primary <em>E.
            coli</em> ; 3.
          Pathogenic bacteria. As the probiotics content in the intestinal tract of CDK patients is close to 0, it is
          not
          considered here). </p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n44" cid="n44" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="48.792ex" height="9.84ex" role="img" focusable="false"
                viewBox="0 -2424.7 21566 4349.4" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -4.354ex;">
                <defs>
                  <path id="MJX-81-TEX-S4-23A7"
                        d="M712 899L718 893V876V865Q718 854 704 846Q627 793 577 710T510 525Q510 524 509 521Q505 493 504 349Q504 345 504 334Q504 277 504 240Q504 -2 503 -4Q502 -8 494 -9T444 -10Q392 -10 390 -9Q387 -8 386 -5Q384 5 384 230Q384 262 384 312T383 382Q383 481 392 535T434 656Q510 806 664 892L677 899H712Z">
                  </path>
                  <path id="MJX-81-TEX-S4-23A9"
                        d="M718 -893L712 -899H677L666 -893Q542 -825 468 -714T385 -476Q384 -466 384 -282Q384 3 385 5L389 9Q392 10 444 10Q486 10 494 9T503 4Q504 2 504 -239V-310V-366Q504 -470 508 -513T530 -609Q546 -657 569 -698T617 -767T661 -812T699 -843T717 -856T718 -876V-893Z">
                  </path>
                  <path id="MJX-81-TEX-S4-23A8"
                        d="M389 1159Q391 1160 455 1160Q496 1160 498 1159Q501 1158 502 1155Q504 1145 504 924Q504 691 503 682Q494 549 425 439T243 259L229 250L243 241Q349 175 421 66T503 -182Q504 -191 504 -424Q504 -600 504 -629T499 -659H498Q496 -660 444 -660T390 -659Q387 -658 386 -655Q384 -645 384 -425V-282Q384 -176 377 -116T342 10Q325 54 301 92T255 155T214 196T183 222T171 232Q170 233 170 250T171 268Q171 269 191 284T240 331T300 407T354 524T383 679Q384 691 384 925Q384 1152 385 1155L389 1159Z">
                  </path>
                  <path id="MJX-81-TEX-S4-23AA"
                        d="M384 150V266Q384 304 389 309Q391 310 455 310Q496 310 498 309Q502 308 503 298Q504 283 504 150Q504 32 504 12T499 -9H498Q496 -10 444 -10T390 -9Q386 -8 385 2Q384 17 384 150Z">
                  </path>
                  <path id="MJX-81-TEX-I-1D715"
                        d="M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z">
                  </path>
                  <path id="MJX-81-TEX-I-1D462"
                        d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                  </path>
                  <path id="MJX-81-TEX-N-31"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                  </path>
                  <path id="MJX-81-TEX-I-1D461"
                        d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                  </path>
                  <path id="MJX-81-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                  </path>
                  <path id="MJX-81-TEX-I-1D451"
                        d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                  </path>
                  <path id="MJX-81-TEX-N-25B3"
                        d="M75 0L72 2Q69 3 67 5T62 11T59 20Q59 24 62 30Q65 37 245 370T428 707Q428 708 430 710T436 714T444 716Q451 716 455 712Q459 710 644 368L828 27V20Q828 7 814 0H75ZM610 347L444 653Q443 653 278 347T113 40H775Q775 42 610 347Z">
                  </path>
                  <path id="MJX-81-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                  </path>
                  <path id="MJX-81-TEX-N-28"
                        d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                  </path>
                  <path id="MJX-81-TEX-I-1D44E"
                        d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                  </path>
                  <path id="MJX-81-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  <path id="MJX-81-TEX-I-1D44F"
                        d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                  </path>
                  <path id="MJX-81-TEX-N-32"
                        d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                  </path>
                  <path id="MJX-81-TEX-N-33"
                        d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                  </path>
                  <path id="MJX-81-TEX-N-29"
                        d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mrow">
                      <g data-mml-node="mo">
                        <use data-c="23A7" xlink:href="#MJX-81-TEX-S4-23A7" transform="translate(0,1525.7)">
                        </use>
                        <use data-c="23A9" xlink:href="#MJX-81-TEX-S4-23A9"
                             transform="translate(0,-1025.7)"></use>
                        <use data-c="23A8" xlink:href="#MJX-81-TEX-S4-23A8" transform="translate(0,0)">
                        </use>
                        <svg width="889" height="555.7" y="1060" x="0" viewBox="0 97.9 889 555.7">
                          <use data-c="23AA" xlink:href="#MJX-81-TEX-S4-23AA" transform="scale(1,2.733)">
                          </use>
                        </svg>
                        <svg width="889" height="555.7" y="-1115.7" x="0" viewBox="0 97.9 889 555.7">
                          <use data-c="23AA" xlink:href="#MJX-81-TEX-S4-23AA" transform="scale(1,2.733)">
                          </use>
                        </svg>
                      </g>
                      <g data-mml-node="mtable" transform="translate(889,0)">
                        <g data-mml-node="mtr" transform="translate(0,1473)">
                          <g data-mml-node="mtd">
                            <g data-mml-node="mfrac">
                              <g data-mml-node="mrow" transform="translate(220,446.1) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D715" xlink:href="#MJX-81-TEX-I-1D715"></use>
                                </g>
                                <g data-mml-node="msub" transform="translate(566,0)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(605,-150) scale(0.707)">
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mrow"
                                 transform="translate(448.9,-345.6) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D715" xlink:href="#MJX-81-TEX-I-1D715"></use>
                                </g>
                                <g data-mml-node="mi" transform="translate(566,0)">
                                  <use data-c="1D461" xlink:href="#MJX-81-TEX-I-1D461"></use>
                                </g>
                              </g>
                              <rect width="1313.4" height="60" x="120" y="220"></rect>
                            </g>
                            <g data-mml-node="mo" transform="translate(1831.2,0)">
                              <use data-c="3D" xlink:href="#MJX-81-TEX-N-3D"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(2886.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D451" xlink:href="#MJX-81-TEX-I-1D451"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(553,-150) scale(0.707)">
                                <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(4065.7,0)">
                              <use data-c="25B3" xlink:href="#MJX-81-TEX-N-25B3"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(5176.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(6407.7,0)">
                              <use data-c="2B" xlink:href="#MJX-81-TEX-N-2B"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(7407.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                              </g>
                            </g>
                            <g data-mml-node="mrow" transform="translate(8583.1,0)">
                              <g data-mml-node="mo">
                                <use data-c="28" xlink:href="#MJX-81-TEX-N-28"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(389,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44E" xlink:href="#MJX-81-TEX-I-1D44E"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(562,-150) scale(0.707)">
                                  <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(1576.8,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(2577,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(3796.1,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(5026.9,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(6027.1,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(7246.2,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(8477,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(9477.2,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(10696.3,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(11704.9,0)">
                                <use data-c="29" xlink:href="#MJX-81-TEX-N-29"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtr" transform="translate(0,-39.8)">
                          <g data-mml-node="mtd">
                            <g data-mml-node="mfrac">
                              <g data-mml-node="mrow" transform="translate(220,446.1) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D715" xlink:href="#MJX-81-TEX-I-1D715"></use>
                                </g>
                                <g data-mml-node="msub" transform="translate(566,0)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(605,-150) scale(0.707)">
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mrow"
                                 transform="translate(448.9,-345.6) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D715" xlink:href="#MJX-81-TEX-I-1D715"></use>
                                </g>
                                <g data-mml-node="mi" transform="translate(566,0)">
                                  <use data-c="1D461" xlink:href="#MJX-81-TEX-I-1D461"></use>
                                </g>
                              </g>
                              <rect width="1313.4" height="60" x="120" y="220"></rect>
                            </g>
                            <g data-mml-node="mo" transform="translate(1831.2,0)">
                              <use data-c="3D" xlink:href="#MJX-81-TEX-N-3D"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(2886.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D451" xlink:href="#MJX-81-TEX-I-1D451"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(553,-150) scale(0.707)">
                                <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(4065.7,0)">
                              <use data-c="25B3" xlink:href="#MJX-81-TEX-N-25B3"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(5176.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(6407.7,0)">
                              <use data-c="2B" xlink:href="#MJX-81-TEX-N-2B"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(7407.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                              </g>
                            </g>
                            <g data-mml-node="mrow" transform="translate(8583.1,0)">
                              <g data-mml-node="mo">
                                <use data-c="28" xlink:href="#MJX-81-TEX-N-28"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(389,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44E" xlink:href="#MJX-81-TEX-I-1D44E"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(562,-150) scale(0.707)">
                                  <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(1576.8,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(2577,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(3796.1,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(5026.9,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(6027.1,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(7246.2,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(8477,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(9477.2,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(10696.3,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(11704.9,0)">
                                <use data-c="29" xlink:href="#MJX-81-TEX-N-29"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mtr" transform="translate(0,-1563.5)">
                          <g data-mml-node="mtd">
                            <g data-mml-node="mfrac">
                              <g data-mml-node="mrow" transform="translate(220,457.1) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D715" xlink:href="#MJX-81-TEX-I-1D715"></use>
                                </g>
                                <g data-mml-node="msub" transform="translate(566,0)">
                                  <g data-mml-node="mi">
                                    <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(605,-150) scale(0.707)">
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mrow"
                                 transform="translate(448.9,-345.6) scale(0.707)">
                                <g data-mml-node="mi">
                                  <use data-c="1D715" xlink:href="#MJX-81-TEX-I-1D715"></use>
                                </g>
                                <g data-mml-node="mi" transform="translate(566,0)">
                                  <use data-c="1D461" xlink:href="#MJX-81-TEX-I-1D461"></use>
                                </g>
                              </g>
                              <rect width="1313.4" height="60" x="120" y="220"></rect>
                            </g>
                            <g data-mml-node="mo" transform="translate(1831.2,0)">
                              <use data-c="3D" xlink:href="#MJX-81-TEX-N-3D"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(2886.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D451" xlink:href="#MJX-81-TEX-I-1D451"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(553,-150) scale(0.707)">
                                <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(4065.7,0)">
                              <use data-c="25B3" xlink:href="#MJX-81-TEX-N-25B3"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(5176.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(6407.7,0)">
                              <use data-c="2B" xlink:href="#MJX-81-TEX-N-2B"></use>
                            </g>
                            <g data-mml-node="msub" transform="translate(7407.9,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                              </g>
                              <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                              </g>
                            </g>
                            <g data-mml-node="mrow" transform="translate(8583.1,0)">
                              <g data-mml-node="mo">
                                <use data-c="28" xlink:href="#MJX-81-TEX-N-28"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(389,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44E" xlink:href="#MJX-81-TEX-I-1D44E"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(562,-150) scale(0.707)">
                                  <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(1576.8,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(2577,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                    <use data-c="31" xlink:href="#MJX-81-TEX-N-31"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(3796.1,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="31" xlink:href="#MJX-81-TEX-N-31"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(5026.9,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(6027.1,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                    <use data-c="32" xlink:href="#MJX-81-TEX-N-32"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(7246.2,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="32" xlink:href="#MJX-81-TEX-N-32"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(8477,0)">
                                <use data-c="2212" xlink:href="#MJX-81-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="msub" transform="translate(9477.2,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D44F" xlink:href="#MJX-81-TEX-I-1D44F"></use>
                                </g>
                                <g data-mml-node="TeXAtom"
                                   transform="translate(462,-150) scale(0.707)"
                                   data-mjx-texclass="ORD">
                                  <g data-mml-node="mn">
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                    <use data-c="33" xlink:href="#MJX-81-TEX-N-33"
                                         transform="translate(500,0)"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="msub" transform="translate(10696.3,0)">
                                <g data-mml-node="mi">
                                  <use data-c="1D462" xlink:href="#MJX-81-TEX-I-1D462"></use>
                                </g>
                                <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                                  <use data-c="33" xlink:href="#MJX-81-TEX-N-33"></use>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(11704.9,0)">
                                <use data-c="29" xlink:href="#MJX-81-TEX-N-29"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(21566,0) translate(0 250)"></g>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="13.967ex" height="3.475ex" role="img" focusable="false" viewBox="0 -899.6 6173.2 1535.9"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -1.44ex;">
              <defs>
                <path id="MJX-95-TEX-N-394"
                      d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z">
                </path>
                <path id="MJX-95-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                </path>
                <path id="MJX-95-TEX-SO-2211"
                      d="M61 748Q64 750 489 750H913L954 640Q965 609 976 579T993 533T999 516H979L959 517Q936 579 886 621T777 682Q724 700 655 705T436 710H319Q183 710 183 709Q186 706 348 484T511 259Q517 250 513 244L490 216Q466 188 420 134T330 27L149 -187Q149 -188 362 -188Q388 -188 436 -188T506 -189Q679 -189 778 -162T936 -43Q946 -27 959 6H999L913 -249L489 -250Q65 -250 62 -248Q56 -246 56 -239Q56 -234 118 -161Q186 -81 245 -11L428 206Q428 207 242 462L57 717L56 728Q56 744 61 748Z">
                </path>
                <path id="MJX-95-TEX-I-1D45B"
                      d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-95-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-95-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-95-TEX-I-1D715"
                      d="M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z">
                </path>
                <path id="MJX-95-TEX-I-1D467"
                      d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z">
                </path>
                <path id="MJX-95-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
                </path>
                <path id="MJX-95-TEX-N-32"
                      d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="394" xlink:href="#MJX-95-TEX-N-394"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1110.8,0)">
                    <use data-c="3D" xlink:href="#MJX-95-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="munderover" transform="translate(2166.6,0)">
                    <g data-mml-node="mo">
                      <use data-c="2211" xlink:href="#MJX-95-TEX-SO-2211"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1089,477.1) scale(0.707)">
                      <use data-c="1D45B" xlink:href="#MJX-95-TEX-I-1D45B"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(1089,-285.4) scale(0.707)"
                       data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-95-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(345,0)">
                        <use data-c="3D" xlink:href="#MJX-95-TEX-N-3D"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(1123,0)">
                        <use data-c="31" xlink:href="#MJX-95-TEX-N-31"></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(4619.9,0)">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="msup" transform="translate(412.7,394) scale(0.707)">
                        <g data-mml-node="mi">
                          <use data-c="1D715" xlink:href="#MJX-95-TEX-I-1D715"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(650.8,363) scale(0.707)">
                          <use data-c="1D467" xlink:href="#MJX-95-TEX-I-1D467"></use>
                        </g>
                      </g>
                      <g data-mml-node="mrow" transform="translate(220,-423) scale(0.707)">
                        <g data-mml-node="mi">
                          <use data-c="1D715" xlink:href="#MJX-95-TEX-I-1D715"></use>
                        </g>
                        <g data-mml-node="msubsup" transform="translate(566,0)">
                          <g data-mml-node="mi">
                            <use data-c="1D465" xlink:href="#MJX-95-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="TeXAtom" transform="translate(605,353.6) scale(0.707)"
                             data-mjx-texclass="ORD">
                            <g data-mml-node="mn">
                              <use data-c="32" xlink:href="#MJX-95-TEX-N-32"></use>
                            </g>
                          </g>
                          <g data-mml-node="TeXAtom" transform="translate(605,-293.8) scale(0.707)"
                             data-mjx-texclass="ORD">
                            <g data-mml-node="mi">
                              <use data-c="1D456" xlink:href="#MJX-95-TEX-I-1D456"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                      <rect width="1313.4" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">\Delta =\sum_{i=1}^n{\frac{\partial ^z}{\partial x_{i}^{2}}}</script>
          —— the Laplacian
          operator
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.034ex" height="1.357ex" role="img" focusable="false" viewBox="0 -442 899 599.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-96-TEX-I-1D462"
                      d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-96-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D462" xlink:href="#MJX-96-TEX-I-1D462"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(605,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-96-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">u_i</script>
          —— the population density of competitive species
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="1.916ex" height="1.927ex" role="img" focusable="false" viewBox="0 -694 847 851.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-97-TEX-I-1D451"
                      d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                </path>
                <path id="MJX-97-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D451" xlink:href="#MJX-97-TEX-I-1D451"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(553,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-97-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">d_i</script>
          —— the diffusion rate of species
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="1.937ex" height="1.355ex" role="img" focusable="false" viewBox="0 -441 856 598.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-98-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                </path>
                <path id="MJX-98-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44E" xlink:href="#MJX-98-TEX-I-1D44E"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(562,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-98-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">a_i</script>
          —— the intrinsic growth rate of species
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.262ex" height="1.927ex" role="img" focusable="false" viewBox="0 -694 999.9 851.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-99-TEX-I-1D44F"
                      d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                </path>
                <path id="MJX-99-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44F" xlink:href="#MJX-99-TEX-I-1D44F"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                       data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-99-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(345,0)">
                        <use data-c="1D456" xlink:href="#MJX-99-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">b_{ii}</script>
          —— the coefficient of intraspecific competition
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.369ex" height="2.236ex" role="img" focusable="false" viewBox="0 -694 1047.3 988.2"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-100-TEX-I-1D44F"
                      d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                </path>
                <path id="MJX-100-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-100-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44F" xlink:href="#MJX-100-TEX-I-1D44F"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                       data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D456" xlink:href="#MJX-100-TEX-I-1D456"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(345,0)">
                        <use data-c="1D457" xlink:href="#MJX-100-TEX-I-1D457"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">b_{ij}</script>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="6.49ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2868.6 1000"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-101-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-101-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-101-TEX-N-2260"
                      d="M166 -215T159 -215T147 -212T141 -204T139 -197Q139 -190 144 -183L306 133H70Q56 140 56 153Q56 168 72 173H327L406 327H72Q56 332 56 347Q56 360 70 367H426Q597 702 602 707Q605 716 618 716Q625 716 630 712T636 703T638 696Q638 692 471 367H707Q722 359 722 347Q722 336 708 328L451 327L371 173H708Q722 163 722 153Q722 140 707 133H351Q175 -210 170 -212Q166 -215 159 -215Z">
                </path>
                <path id="MJX-101-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
                <path id="MJX-101-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mrow">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-101-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(389,0)">
                      <use data-c="1D456" xlink:href="#MJX-101-TEX-I-1D456"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1011.8,0)">
                      <use data-c="2260" xlink:href="#MJX-101-TEX-N-2260"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(2067.6,0)">
                      <use data-c="1D457" xlink:href="#MJX-101-TEX-I-1D457"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2479.6,0)">
                      <use data-c="29" xlink:href="#MJX-101-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">\left( i\ne j \right) </script>
          —— the coefficient of interspecific competition
        </p>
        <p>In addition, the concentration-time image and the concentration-concentration image of original <em>E.
          coli</em> and
          engineered <em>E. coli</em> was shown below:</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.6 Co-culture model (engineered <em>E. coli</em> without <em>GDH</em>)
          </template>
          <template v-slot:image>
            <img :src="fig1_1">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.7 Co-culture model (engineered <em>E. coli</em> with <em>GDH</em>)
          </template>
          <template v-slot:image>
            <img :src="fig1_2">
          </template>
        </bnuz_image_container>
        <p>Compared with image 1, <em>GDH</em> was added into image 2, which improved the competitiveness of engineered
          bacteria
          compared with original <em>E. coli</em>.</p>
        <p>Through the figures, we can see that after the expression of <em>GDH</em>, the population density of
          engineered
          bacteria
          increased rapidly due to its enhanced competitiveness. In the absence of <em>GDH</em> expression, the
          engineered
          bacteria
          maintained a relatively stable quantitative structure with the original <em>E. coli</em>. This conclusion also
          provides
          a
          theoretical basis for the setting of quorum sensing in our subsequent experiments.</p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Quorum Sensing model">
        <h4>Quorum Sensing model</h4>
        <h5>Assumption</h5>
        <ol start=''>
          <li>The invisible reverse reaction has no effect on the experiment.</li>
          <li>When bga2 is expressed, the quorum sensing period begins.</li>
          <li>The reaction process can be treated continuously.</li>
        </ol>
        <p>&nbsp;</p>
        <h5 id='model-2'>Model</h5>
        <p>When the engineered bacteria reached a certain number, according to the following quorum sensing system
          designed
          by us, the engineered bacteria would begin to express β-galactosidase and formally begin to regulate the
          intestinal colony structure. </p>
        <p>When the proportion of engineered bacteria in the environment is low, the concentration of released AHL is
          not
          high enough, and there is just a weak combination between AHL and LuxR. At this time, <em>GDH</em> expressed,
          enhancing
          the engineered bacteria&#39;s competitiveness.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.8 the quorum sensing system when the concentration of AHL is not enough
          </template>
          <template v-slot:image>
            <img :src="fig2_1" width="85%">
          </template>
        </bnuz_image_container>

        <p>As time goes on, due to the stronger competitiveness, our engineered bacteria have an advantage in
          competition
          with native <em>E. coli</em>. And when they reach a certain proportion, so as to the concentration of AHL
          reaches the
          threshold, there will be a strong combination between AHL and LuxR, at which time tetR and bga2 begin to
          express. At the same time, <em>GDH</em> will no longer express actively, which reduces the competitiveness of
          engineered
          bacteria, which also protects the intestinal microbiota to a certain extent. </p>
        <p>Through this quorum sensing system, part of the native <em>E. coli</em> in this environment can be retained.
          And also,
          indoles produced by tryptophan play an important role in the formation of <em>E. coli</em> cell membrane. </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.9 the quorum sensing system when the concentration of AHL is high enough
          </template>
          <template v-slot:image>
            <img :src="fig2_2" width="85%">
          </template>
        </bnuz_image_container>

        <p>&nbsp;</p>
        <p>For the computable part, simplify to: </p>
        <p>
          $$


          \begin{split}&\rightarrow LuxR\\AHL+LuxR &\leftrightarrow AHL\text{-}LuxR\\AHL\text{-}LuxR+P_{luxOFF}
          &\leftrightarrow P_{luxON}\\P_{luxON} &\rightarrow P_{luxON}+mRNA_{bga2}\\mRNA_{bga2} &\rightarrow
          bga2\\AHL&\rightarrow \\LuxR&\rightarrow \\AHL\text{-}LuxR&\rightarrow \\mRNA_{bga2}&\rightarrow
          \\bga2&\rightarrow\end{split}
          $$

        </p>
        <p>Among them,AHL transmission satisfies Fick&#39;s First law: </p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n85" cid="n85" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="13.551ex" height="1.902ex" role="img" focusable="false"
                viewBox="0 -683 5989.4 840.8" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -0.357ex;">
                <defs>
                  <path id="MJX-83-TEX-I-1D441"
                        d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                  </path>
                  <path id="MJX-83-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                  </path>
                  <path id="MJX-83-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                  </path>
                  <path id="MJX-83-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  <path id="MJX-83-TEX-I-1D437"
                        d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z">
                  </path>
                  <path id="MJX-83-TEX-N-2207"
                        d="M46 676Q46 679 51 683H781Q786 679 786 676Q786 674 617 326T444 -26Q439 -33 416 -33T388 -26Q385 -22 216 326T46 676ZM697 596Q697 597 445 597T193 596Q195 591 319 336T445 80L697 596Z">
                  </path>
                  <path id="MJX-83-TEX-I-1D450"
                        d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use data-c="1D441" xlink:href="#MJX-83-TEX-I-1D441"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(836,-150) scale(0.707)">
                        <use data-c="1D456" xlink:href="#MJX-83-TEX-I-1D456"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(1407.7,0)">
                      <use data-c="3D" xlink:href="#MJX-83-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2463.5,0)">
                      <use data-c="2212" xlink:href="#MJX-83-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(3241.5,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D437" xlink:href="#MJX-83-TEX-I-1D437"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(861,-150) scale(0.707)">
                        <use data-c="1D456" xlink:href="#MJX-83-TEX-I-1D456"></use>
                      </g>
                    </g>
                    <g data-mml-node="mi" transform="translate(4396.5,0)">
                      <use data-c="2207" xlink:href="#MJX-83-TEX-N-2207"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(5229.5,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D450" xlink:href="#MJX-83-TEX-I-1D450"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(466,-150) scale(0.707)">
                        <use data-c="1D456" xlink:href="#MJX-83-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
        <p>According to the Law of mass action, the following differential equation can be obtained:</p>
        <p>
          $$\begin{align}\frac{d\left[ AHL \right]}{dt}&=-d_{AHL}\left[ AHL \right] \\\frac{d\left[ LuxR
          \right]}{dt}&=\alpha _{LuxR}-k_{AHL\text{-}LuxR}\left[ AHL \right] \left[ LuxR \right]
          +k_{-AHL\text{-}LuxR}\left[ AHL\text{-}LuxR \right] -d_{LuxR}\left[ LuxR \right] \\\frac{d\left[
          AHL\text{-}LuxR \right]}{dt}&=k_{AHL\text{-}LuxR}\left[ AHL \right] \left[ LuxR \right]
          -k_{-AHL\text{-}LuxR}\left[ AHL\text{-}LuxR \right] \\\frac{d\left[ P_{LuxON} \right]}{dt}&=k_{PLuxON}\left[
          P_{LuxOFF} \right] \left[ AHL\text{-}LuxR \right] -k_{-P_{LuxON}}\left[ P_{LuxON} \right] \\\frac{d\left[
          mRNA_{bga2} \right]}{dt}&=L_{P_{Lux}}+k_{mRNA_{bga2}}\left[ P_{luxON} \right]-d_{mRNA_{bga2}}\left[
          mRNA_{bga2} \right]\\\frac{d\left[ bga2 \right]}{dt}&=k_{bga2}\left[ mRNA_{bga2} \right] -d_{bga2}\left[ bga2
          \right]\end{align}
          $$
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Biosafety">
        <h4>Biosafety</h4>
        <h5>Red recombination knocks out <em>Can</em> gene</h5>
        <p>

          We successfully knocked out the <em>Can</em> gene of the engineered bacteria through Red recombination. We
          used pBR322 plasmid as a template and amplified it with Pfu DNA Polymerase.
        </p>
        The product length was 1092bp.The concentration of the purified product in the gel slice: 20ng/μl.
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.10 Gel electrophoresis of the knockout fragment (CanB: Can gene knockout fragment, 1092bp)
            PCR detection was performed with a pair of primers outside the homology arm on the genome, and the length of
            the amplified product of the original strain was 911 bp. When Can is replaced by the ampicillin resistance
            gene, the length of the amplified product of primers is shortened to 1270bp. The PCR amplification results
            showed that all 10 clones were positive clones.
          </template>
          <template v-slot:image>
            <img :src="pic10" width="35%">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.11 Gel electrophoretogram of positive clones
            Selected the first clone for sequencing verification. The sequencing results were the same as the design. We
            designated it as the <em>Can</em> knockout strain, named: BL21(DE3)/Δcan::Ap
          </template>
          <template v-slot:image>
            <img :src="pic11" width="65%">
          </template>
        </bnuz_image_container>
        <p>

          To further confirm knocking out Can gene works as a kill switch, we did a phenotype test by coating our
          bacteria on different plates and placing them in different conditions.
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.12 Confirmation of can knockout in engineered bacteria
          </template>
          <template v-slot:image>
            <img :src="pic12" width="65%">
          </template>
        </bnuz_image_container>
        <p>
          As shown in Fig. 12, Δcan::Ap requires a higher CO2 level to survive. In doing so, we have proved that we have
          successfully knocked out the can gene.
        </p>
        <h5>L-arabinose induces the expression of transcription inhibitors</h5>
        <p>
          The purpose of the suicide induction module is to use L-arabinose to induce engineered bacteria in the
          intestine to stop proliferation when needed. We used two different concentrations of arabinose in our
          experiment. After induction, the survival rate of engineered bacteria in the experimental group decreased
          significantly (Fig.13). Meanwhile, the OD600 of the culture also decreased, indicating that high
          concentrations of arabinose induced bacterial lysis.
        </p>
        <p>
          Live cells are counted over time after induction, and the number is significantly reduced under the effect of
          MazF expression (Figure 13). The OD600 of the experimental group decreased significantly, which proved that
          suicide induced by high concentration of arabinose would cause cell lysis (Figure 14).
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.13 Viable cell count changes over time
          </template>
          <template v-slot:image>
            <img :src="pic13" width="65%">
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
import bnuz_image_container from "@/components/bnuz_image_container";

import AppRoot from "@/AppRoot";
import conf from '@/wiki_config';
import pic1 from '@/assets/project/poc/pic1.png'
import pic2 from '@/assets/project/poc/pic2.png'
import pic3 from '@/assets/project/poc/pic3.png'
import pic4 from '@/assets/project/poc/pic4.png'
import pic5 from '@/assets/project/poc/pic5.jpg'
import pic6 from '@/assets/project/poc/pic6.png'
import pic7 from '@/assets/project/poc/pic7.png'
import pic8 from '@/assets/project/poc/pic8.png'
import pic9 from '@/assets/project/poc/pic9.png'
import pic10 from '@/assets/project/poc/pic10.png'
import pic11 from '@/assets/project/poc/pic11.png'
import pic12 from '@/assets/project/poc/pic12.png'
import pic13 from '@/assets/project/poc/pic13.png'
import fig1_1 from "@/assets/model/fig1.1.svg";
import fig1_2 from "@/assets/model/fig1.2.svg";
import fig2_1 from "@/assets/model/fig2.1.png";
import fig2_2 from "@/assets/model/fig2.2.png";
import fig3 from "@/assets/model/fig3.png";

import head_image from '@/assets/head_images/PROJECT/proof_of_concept.png'

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
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/f/fc/T--BNUZ-China--proof_of_concept.8d9f37c5.png',
      pic1: conf.isDev ? pic1 : "https://2021.igem.org/wiki/images/9/97/T--BNUZ-China--pic1.8cfb27cd.png",
      pic10: conf.isDev ? pic10 : "https://2021.igem.org/wiki/images/8/85/T--BNUZ-China--pic10.bfe27fcc.png",
      pic11: conf.isDev ? pic11 : "https://2021.igem.org/wiki/images/0/05/T--BNUZ-China--pic11.6831ff5d.png",
      pic12: conf.isDev ? pic12 : "https://2021.igem.org/wiki/images/0/07/T--BNUZ-China--pic12.6a17773d.png",
      pic13: conf.isDev ? pic13 : "https://2021.igem.org/wiki/images/7/72/T--BNUZ-China--pic13.1277bef5.png",
      pic2: conf.isDev ? pic2 : "https://2021.igem.org/wiki/images/f/fb/T--BNUZ-China--pic2.cb62fe98.png",
      pic3: conf.isDev ? pic3 : "https://2021.igem.org/wiki/images/a/ac/T--BNUZ-China--pic3.c01ce817.png",
      pic4: conf.isDev ? pic4 : "https://2021.igem.org/wiki/images/a/a7/T--BNUZ-China--pic4.36b30878.png",
      pic5: conf.isDev ? pic5 : "https://2021.igem.org/wiki/images/c/cc/T--BNUZ-China--pic5.23380269.jpg",
      pic6: conf.isDev ? pic6 : "https://2021.igem.org/wiki/images/d/d6/T--BNUZ-China--pic6.1356a8c6.png",
      pic7: conf.isDev ? pic7 : "https://2021.igem.org/wiki/images/a/a5/T--BNUZ-China--pic7.58cd581d.png",
      pic8: conf.isDev ? pic8 : "https://2021.igem.org/wiki/images/5/5d/T--BNUZ-China--pic8.6deea242.png",
      pic9: conf.isDev ? pic9 : "https://2021.igem.org/wiki/images/d/d0/T--BNUZ-China--pic9.9044675a.png",
      fig1_1: conf.isDev ? fig1_1 : 'https://2021.igem.org/wiki/images/b/b3/T--BNUZ-China--fig1.1.335eb27e.svg\n',
      fig1_2: conf.isDev ? fig1_2 : 'https://2021.igem.org/wiki/images/6/63/T--BNUZ-China--fig1.2.76e973eb.svg\n',
      fig2_1: conf.isDev ? fig2_1 : 'https://2021.igem.org/wiki/images/d/dc/T--BNUZ-China--fig2.1.f9610e7b.png\n',
      fig2_2: conf.isDev ? fig2_2 : 'https://2021.igem.org/wiki/images/e/ef/T--BNUZ-China--fig2.2.c6633e56.png\n',
      fig3: conf.isDev ? fig3 : 'https://2021.igem.org/wiki/images/8/80/T--BNUZ-China--fig3.216e7e5f.png\n',
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
  border: 2px solid #ed8555
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
