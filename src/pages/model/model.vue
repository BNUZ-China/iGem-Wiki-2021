<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content top_distance="10" nav_item_color="#27196f">
      <bnuz_content_paragraph hint_text="Overview">
        <h1>Overview</h1>
        <h2>What is our model?</h2>
        <ul>
          <li>Interaction model between species (GDH effect, competition with other species, product&#39;s effect on
            other species)
          </li>
          <li>Description of Quorum Sensing process (Help optimize reaction conditions and promoter selection)</li>

        </ul>
        <p>&nbsp;</p>
        <h2>What can our model do?</h2>
        <ol>
          <li>Describe the process of deterministic development over time through deterministic function of time, like
            ODE or PDE.
          </li>
          <li>Describe a process that is not deterministic over time (repeated observations of such a process generally
            produce different results) through random variables, such as random variables that follow normal
            distribution.
          </li>

        </ol>
        <h2>How will we construct the model?</h2>
        <p>We divided all the modeling work into three parts: Model 1 Co-culture model , Model 2 Quorum Sensing model
          and Model EXTRA Gillespie model. </p>
        <p>In the initial stage of the experiment, we simulated the intestinal environment containing common probiotics,
          pathogenic bacteria and protoescherichia coli, and predicted the value of engineered bacteria in this
          environment, and with relevant parameters gained from relevant literature, specific experiment or cooperative
          teams, so as to obtain the Lotka-Volterra interaction model between bacteria in this virtual intestinal
          environment.</p>
        <p>In the middle of the experiment, when the amount of engineered bacteria in the intestinal environment had
          reached a considerable proportion and played a preliminary role in promoting probiotics, we changed to use the
          quorum sensing model to explain the new environment and analyze all the relevant species in it. The
          engineering bacteria we selected was Escherichia coli, so we used the quorum sensing model for Gram-negative
          bacteria, through which we will explain how the content of pathogenic bacteria in the intestinal tract will
          change over time, and design an optimization model for expression time of GDH and bga2 based on the model.</p>
        <p>At the late stage of the experiment, under ideal conditions, the probiotics in the intestinal environment of
          the patient returned to the normal level and the pathogenic bacteria content decreased significantly. And at
          this time, we conduct a new model to explain the new one. Besides, we construct a four-step catalytic reaction
          of indole propionic acid from tryptophan in the experiment with using Gillespie algorithm and Michaelis-Menten
          equation . </p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Model 1 Co-culture model">
        <h1 id='model-1-co-culture-model'>Model 1 Co-culture model</h1>
        <p>Because the environment of intestine is too complex to control in wet experiments, our team decided to use
          mathematical modeling to simulate the value of engineered bacteria in the intestinal tract under different
          conditions. </p>
        <h2 id='assumption-1'>Assumption</h2>
        <ol start=''>
          <li>The temperature of the reaction system is constant.</li>
          <li>All the molecules are well mixed.</li>
          <li>All reactions, once occurring, can be accomplished in a fraction of a second.</li>
          <li>Pathogenic bacteria in the range of the model can be represented by the group with the highest weight.
          </li>

        </ol>
        <p>&nbsp;</p>
        <h2 id='model-1'>Model</h2>
        <p>Since human intestinal resources are limited, we chose to use the Logistic model to represent the changes in
          the
          number of strains over time in the body environment satisfying the hypothesis. </p>
        <p>Logistic model is a model that reflects the limited environment hindering the growth of content.:</p>
        <p>
          $$\frac{dN_1}{dt} = r_1 N_1\left( 1 - \frac{N_1}{K_1} \right)$$
        </p>
        <p>Because the intestinal environment is complex, the interaction between multiple bacteria should also be
          included
          in our model, so we tried to include intestinal escherichia coli (which will be replaced in part by our
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
        <p>But due to the particularity of our project engineering escherichia coli (e. coli and the model of primary
          physical and chemical properties, and the model of pathogenic bacteria in the middle is a complex reaction
          relationship), we will expand this equation to three species competition, based on the experimental data and
          the
          Lotka - on the model of three species competition (include 1 engineering E. coli ; 2. primary E.coli ; 3.
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
        <p>In addition, the concentration-time image and the concentration-concentration image of original E.coli and
          engineered E.coli was shown below:</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1.1 Co-culture model (engineered E.coli without GDH)
          </template>
          <template v-slot:image>
            <img :src="fig1_1">
          </template>
        </bnuz_image_container>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1.2 Co-culture model (engineered E.coli with GDH)
          </template>
          <template v-slot:image>
            <img :src="fig1_2">
          </template>
        </bnuz_image_container>
        <p>Compared with image 1, GDH was added into image 2, which improved the competitiveness of engineered bacteria
          compared with original E.coli.</p>
        <p>Through the figures, we can see that after the expression of GDH, the population density of engineered
          bacteria
          increased rapidly due to its enhanced competitiveness. In the absence of GDH expression, the engineered
          bacteria
          maintained a relatively stable quantitative structure with the original E.coli. This conclusion also provides
          a
          theoretical basis for the setting of quorum sensing in our subsequent experiments.</p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Model 2 Quorum Sensing model">
        <h1>Model 2 Quorum Sensing model</h1>
        <h2>Assumption</h2>
        <ol start=''>
          <li>The invisible reverse reaction has no effect on the experiment.</li>
          <li>When bga2 is expressed, the quorum sensing period begins.</li>
          <li>The reaction process can be treated continuously.</li>
        </ol>
        <p>&nbsp;</p>
        <h2 id='model-2'>Model</h2>
        <p>When the engineered bacteria reached a certain number, according to the following quorum sensing system
          designed
          by us, the engineered bacteria would begin to express β-galactosidase and formally begin to regulate the
          intestinal colony structure. </p>
        <p>When the proportion of engineered bacteria in the environment is low, the concentration of released AHL is
          not
          high enough, and there is just a weak combination between AHL and LuxR. At this time, GDH expressed, enhancing
          the engineered bacteria&#39;s competitiveness.</p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2.1 the quorum sensing system when the concentration of AHL is not enough
          </template>
          <template v-slot:image>
            <img :src="fig2_1" width="85%">
          </template>
        </bnuz_image_container>

        <p>As time goes on, due to the stronger competitiveness, our engineered bacteria have an advantage in
          competition
          with native E.coli. And when they reach a certain proportion, so as to the concentration of AHL reaches the
          threshold, there will be a strong combination between AHL and LuxR, at which time tetR and bga2 begin to
          express. At the same time, GDH will no longer express actively, which reduces the competitiveness of
          engineered
          bacteria, which also protects the intestinal microbiota to a certain extent. </p>
        <p>Through this quorum sensing system, part of the native E.coli in this environment can be retained. And also,
          indoles produced by tryptophan play an important role in the formation of E.coli cell membrane. </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.2.2 the quorum sensing system when the concentration of AHL is high enough
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
          $$\begin{align}\frac{d\left[ AHL \right]}{dt}&=-d_{AHL}\left[ AHL \right] \\\frac{d\left[ LuxR \right]}{dt}&=\alpha _{LuxR}-k_{AHL\text{-}LuxR}\left[ AHL \right] \left[ LuxR \right] +k_{-AHL\text{-}LuxR}\left[ AHL\text{-}LuxR \right] -d_{LuxR}\left[ LuxR \right] \\\frac{d\left[ AHL\text{-}LuxR \right]}{dt}&=k_{AHL\text{-}LuxR}\left[ AHL \right] \left[ LuxR \right] -k_{-AHL\text{-}LuxR}\left[ AHL\text{-}LuxR \right] \\\frac{d\left[ P_{LuxON} \right]}{dt}&=k_{PLuxON}\left[ P_{LuxOFF} \right] \left[ AHL\text{-}LuxR \right] -k_{-P_{LuxON}}\left[ P_{LuxON} \right] \\\frac{d\left[ mRNA_{bga2} \right]}{dt}&=L_{P_{Lux}}+k_{mRNA_{bga2}}\left[ P_{luxON} \right]-d_{mRNA_{bga2}}\left[ mRNA_{bga2} \right]\\\frac{d\left[ bga2 \right]}{dt}&=k_{bga2}\left[ mRNA_{bga2} \right] -d_{bga2}\left[ bga2 \right]\end{align}
          $$
        </p>
      </bnuz_content_paragraph>
      <bnuz_content_paragraph hint_text="Model EXTRA 4-step enzymatic reaction">
        <h1 id='model-extra-4-step-enzymatic-reaction'>Model EXTRA 4-step enzymatic reaction</h1>
        <h2 id='assumption-3'>Assumption</h2>
        <ol start=''>
          <li>In order to simplify the calculation, there was only one intermediate complex
            <mjx-container class="MathJax"
                           jax="SVG" style="position: relative;">
              <svg xmlns="http://www.w3.org/2000/svg" width="3.855ex"
                   height="1.952ex" role="img" focusable="false" viewBox="0 -705 1704 862.8"
                   xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
                <defs>
                  <path id="MJX-102-TEX-I-1D438"
                        d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z">
                  </path>
                  <path id="MJX-102-TEX-I-1D446"
                        d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                  </path>
                  <path id="MJX-102-TEX-I-1D456"
                        d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mi">
                      <use data-c="1D438" xlink:href="#MJX-102-TEX-I-1D438"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(764,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D446" xlink:href="#MJX-102-TEX-I-1D446"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(646,-150) scale(0.707)">
                        <use data-c="1D456" xlink:href="#MJX-102-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
            <script type="math/tex">ES_i</script>
            in each enzymatic reaction step.
          </li>
          <li>The system runs for a long time, allowing the reaction to reach equilibrium.</li>
          <li>Enzymes meet the conservation equation of enzyme before and after the reaction.</li>

        </ol>
        <h2 id='model-3'>Model</h2>
        <p>Reading the literature, we know that Clostridium sporosporum can convert tryptophan to indolepropionic acid
          in
          the following four enzymatic reactions: </p>
        <p>
          <bnuz_image_container>
            <template v-slot:caption>
<!--              TODO caption -->
            </template>
            <template v-slot:image>
              <img :src="fig3" width="65%">
            </template>
          </bnuz_image_container>
        </p>
        <p>Our project planned to clone the corresponding enzyme from the FLD gene cluster of Clostridium sporospora,
          but
          due to the limitation of laboratory conditions, we could not carry out offline experiments, so we decided to
          use
          the program to simulate the relevant process. </p>
        <p>&nbsp;</p>
        <h3 id='michaelis-menten-equation'>Michaelis-Menten equation</h3>
        <p>We know that there are empirical models for single substrate enzymatic reactions as follows: </p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n106" cid="n106" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="28.863ex" height="3.562ex" role="img" focusable="false"
                viewBox="0 -1324.3 12757.6 1574.3" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -0.566ex;">
                <defs>
                  <path id="MJX-85-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                  <path id="MJX-85-TEX-I-1D438"
                        d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z">
                  </path>
                  <path id="MJX-85-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
                  <path id="MJX-85-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D446"
                        d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                  </path>
                  <path id="MJX-85-TEX-N-2194"
                        d="M263 479Q267 501 271 506T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H835Q729 349 696 475Q691 493 691 500Q691 511 711 511Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q144 292 194 349T263 479Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D43E"
                        d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                  </path>
                  <path id="MJX-85-TEX-N-2192"
                        d="M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D458"
                        d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D450"
                        d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D44E"
                        d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D461"
                        d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                  </path>
                  <path id="MJX-85-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mrow">
                      <g data-mml-node="mo">
                        <use data-c="5B" xlink:href="#MJX-85-TEX-N-5B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(278,0)">
                        <use data-c="1D438" xlink:href="#MJX-85-TEX-I-1D438"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1042,0)">
                        <use data-c="5D" xlink:href="#MJX-85-TEX-N-5D"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(1542.2,0)">
                      <use data-c="2B" xlink:href="#MJX-85-TEX-N-2B"></use>
                    </g>
                    <g data-mml-node="mrow" transform="translate(2542.4,0)">
                      <g data-mml-node="mo">
                        <use data-c="5B" xlink:href="#MJX-85-TEX-N-5B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(278,0)">
                        <use data-c="1D446" xlink:href="#MJX-85-TEX-I-1D446"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(923,0)">
                        <use data-c="5D" xlink:href="#MJX-85-TEX-N-5D"></use>
                      </g>
                    </g>
                    <g data-mml-node="mover" transform="translate(4021.2,0)">
                      <g data-mml-node="mo">
                        <use data-c="2194" xlink:href="#MJX-85-TEX-N-2194"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(9.2,739.1) scale(0.707)">
                        <g data-mml-node="mi">
                          <use data-c="1D43E" xlink:href="#MJX-85-TEX-I-1D43E"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(882,-150) scale(0.707)">
                          <use data-c="1D446" xlink:href="#MJX-85-TEX-I-1D446"></use>
                        </g>
                      </g>
                    </g>
                    <g data-mml-node="mrow" transform="translate(5299,0)">
                      <g data-mml-node="mo">
                        <use data-c="5B" xlink:href="#MJX-85-TEX-N-5B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(278,0)">
                        <use data-c="1D438" xlink:href="#MJX-85-TEX-I-1D438"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1042,0)">
                        <use data-c="1D446" xlink:href="#MJX-85-TEX-I-1D446"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1687,0)">
                        <use data-c="5D" xlink:href="#MJX-85-TEX-N-5D"></use>
                      </g>
                    </g>
                    <g data-mml-node="mover" transform="translate(7541.8,0)">
                      <g data-mml-node="mo" transform="translate(44.3,0)">
                        <use data-c="2192" xlink:href="#MJX-85-TEX-N-2192"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(0,733.6) scale(0.707)">
                        <g data-mml-node="mi">
                          <use data-c="1D458" xlink:href="#MJX-85-TEX-I-1D458"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(554,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use data-c="1D450" xlink:href="#MJX-85-TEX-I-1D450"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(433,0)">
                            <use data-c="1D44E" xlink:href="#MJX-85-TEX-I-1D44E"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(962,0)">
                            <use data-c="1D461" xlink:href="#MJX-85-TEX-I-1D461"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g data-mml-node="mrow" transform="translate(8908.1,0)">
                      <g data-mml-node="mo">
                        <use data-c="5B" xlink:href="#MJX-85-TEX-N-5B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(278,0)">
                        <use data-c="1D443" xlink:href="#MJX-85-TEX-I-1D443"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1029,0)">
                        <use data-c="5D" xlink:href="#MJX-85-TEX-N-5D"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(10437.4,0)">
                      <use data-c="2B" xlink:href="#MJX-85-TEX-N-2B"></use>
                    </g>
                    <g data-mml-node="mrow" transform="translate(11437.6,0)">
                      <g data-mml-node="mo">
                        <use data-c="5B" xlink:href="#MJX-85-TEX-N-5B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(278,0)">
                        <use data-c="1D438" xlink:href="#MJX-85-TEX-I-1D438"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(1042,0)">
                        <use data-c="5D" xlink:href="#MJX-85-TEX-N-5D"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
        <p>We call it the Equilibrium-state model, or Michaelis-Menten model. </p>
        <p>Combining with the law of mass action and the conservation equation of enzyme, we can get the following
          equation:
        </p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n109" cid="n109" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="26.736ex" height="5.475ex" role="img" focusable="false"
                viewBox="0 -1460 11817.3 2420" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -2.172ex;">
                <defs>
                  <path id="MJX-86-TEX-I-1D463"
                        d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z">
                  </path>
                  <path id="MJX-86-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                  </path>
                  <path id="MJX-86-TEX-I-1D451"
                        d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                  </path>
                  <path id="MJX-86-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                  <path id="MJX-86-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
                  </path>
                  <path id="MJX-86-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
                  <path id="MJX-86-TEX-I-1D461"
                        d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                  </path>
                  <path id="MJX-86-TEX-I-1D449"
                        d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z">
                  </path>
                  <path id="MJX-86-TEX-N-6D"
                        d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z">
                  </path>
                  <path id="MJX-86-TEX-N-61"
                        d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z">
                  </path>
                  <path id="MJX-86-TEX-N-78"
                        d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z">
                  </path>
                  <path id="MJX-86-TEX-I-1D446"
                        d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                  </path>
                  <path id="MJX-86-TEX-I-1D43E"
                        d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                  </path>
                  <path id="MJX-86-TEX-I-1D45A"
                        d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z">
                  </path>
                  <path id="MJX-86-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mi">
                      <use data-c="1D463" xlink:href="#MJX-86-TEX-I-1D463"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(762.8,0)">
                      <use data-c="3D" xlink:href="#MJX-86-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mfrac" transform="translate(1818.6,0)">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(220,710)">
                        <g data-mml-node="mi">
                          <use data-c="1D451" xlink:href="#MJX-86-TEX-I-1D451"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(520,0)">
                          <use data-c="5B" xlink:href="#MJX-86-TEX-N-5B"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(798,0)">
                          <use data-c="1D443" xlink:href="#MJX-86-TEX-I-1D443"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(1549,0)">
                          <use data-c="5D" xlink:href="#MJX-86-TEX-N-5D"></use>
                        </g>
                      </g>
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(693,-686)">
                        <g data-mml-node="mi">
                          <use data-c="1D451" xlink:href="#MJX-86-TEX-I-1D451"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(520,0)">
                          <use data-c="1D461" xlink:href="#MJX-86-TEX-I-1D461"></use>
                        </g>
                      </g>
                      <rect width="2027" height="60" x="120" y="220"></rect>
                    </g>
                    <g data-mml-node="mo" transform="translate(4363.3,0)">
                      <use data-c="3D" xlink:href="#MJX-86-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(5419.1,0)">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D449" xlink:href="#MJX-86-TEX-I-1D449"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(616,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mo">
                            <use data-c="6D" xlink:href="#MJX-86-TEX-N-6D"></use>
                            <use data-c="61" xlink:href="#MJX-86-TEX-N-61" transform="translate(833,0)">
                            </use>
                            <use data-c="78" xlink:href="#MJX-86-TEX-N-78"
                                 transform="translate(1333,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g data-mml-node="mfrac" transform="translate(7401,0)">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(1607.6,710)">
                        <g data-mml-node="mo">
                          <use data-c="5B" xlink:href="#MJX-86-TEX-N-5B"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(278,0)">
                          <use data-c="1D446" xlink:href="#MJX-86-TEX-I-1D446"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(923,0)">
                          <use data-c="5D" xlink:href="#MJX-86-TEX-N-5D"></use>
                        </g>
                      </g>
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(220,-710)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D43E" xlink:href="#MJX-86-TEX-I-1D43E"></use>
                            </g>
                            <g data-mml-node="mi" transform="translate(882,-150) scale(0.707)">
                              <use data-c="1D45A" xlink:href="#MJX-86-TEX-I-1D45A"></use>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(1775.1,0)">
                          <use data-c="2B" xlink:href="#MJX-86-TEX-N-2B"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(2775.3,0)">
                          <use data-c="5B" xlink:href="#MJX-86-TEX-N-5B"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(3053.3,0)">
                          <use data-c="1D446" xlink:href="#MJX-86-TEX-I-1D446"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(3698.3,0)">
                          <use data-c="5D" xlink:href="#MJX-86-TEX-N-5D"></use>
                        </g>
                      </g>
                      <rect width="4176.3" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
        <p>The equation describes the rate of enzymatic reaction satisfying the hypothesis. </p>
        <p>Considering the current situation, we can further combine the environmental total principle of the Logistic
          equation to obtain the enzyme reaction rate equation after adding inhibitors as follows：</p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n112" cid="n112" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24.138ex" height="7.283ex" role="img" focusable="false"
                viewBox="0 -1460 10669 3219" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -3.98ex;">
                <defs>
                  <path id="MJX-87-TEX-I-1D463"
                        d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z">
                  </path>
                  <path id="MJX-87-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                  </path>
                  <path id="MJX-87-TEX-I-1D449"
                        d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z">
                  </path>
                  <path id="MJX-87-TEX-N-6D"
                        d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z">
                  </path>
                  <path id="MJX-87-TEX-N-61"
                        d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z">
                  </path>
                  <path id="MJX-87-TEX-N-78"
                        d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z">
                  </path>
                  <path id="MJX-87-TEX-N-22C5"
                        d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z">
                  </path>
                  <path id="MJX-87-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                  <path id="MJX-87-TEX-I-1D446"
                        d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                  </path>
                  <path id="MJX-87-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
                  <path id="MJX-87-TEX-I-1D43E"
                        d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                  </path>
                  <path id="MJX-87-TEX-I-1D45A"
                        d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z">
                  </path>
                  <path id="MJX-87-TEX-LO-28"
                        d="M180 96T180 250T205 541T266 770T353 944T444 1069T527 1150H555Q561 1144 561 1141Q561 1137 545 1120T504 1072T447 995T386 878T330 721T288 513T272 251Q272 133 280 56Q293 -87 326 -209T399 -405T475 -531T536 -609T561 -640Q561 -643 555 -649H527Q483 -612 443 -568T353 -443T266 -270T205 -41Z">
                  </path>
                  <path id="MJX-87-TEX-N-31"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                  </path>
                  <path id="MJX-87-TEX-N-2B"
                        d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                  </path>
                  <path id="MJX-87-TEX-I-1D43C"
                        d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z">
                  </path>
                  <path id="MJX-87-TEX-LO-29"
                        d="M35 1138Q35 1150 51 1150H56H69Q113 1113 153 1069T243 944T330 771T391 541T416 250T391 -40T330 -270T243 -443T152 -568T69 -649H56Q43 -649 39 -647T35 -637Q65 -607 110 -548Q283 -316 316 56Q324 133 324 251Q324 368 316 445Q278 877 48 1123Q36 1137 35 1138Z">
                  </path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mi">
                      <use data-c="1D463" xlink:href="#MJX-87-TEX-I-1D463"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(762.8,0)">
                      <use data-c="3D" xlink:href="#MJX-87-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="mfrac" transform="translate(1818.6,0)">
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(2472.5,710)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D449" xlink:href="#MJX-87-TEX-I-1D449"></use>
                            </g>
                            <g data-mml-node="TeXAtom" transform="translate(616,-150) scale(0.707)"
                               data-mjx-texclass="ORD">
                              <g data-mml-node="mo">
                                <use data-c="6D" xlink:href="#MJX-87-TEX-N-6D"></use>
                                <use data-c="61" xlink:href="#MJX-87-TEX-N-61"
                                     transform="translate(833,0)"></use>
                                <use data-c="78" xlink:href="#MJX-87-TEX-N-78"
                                     transform="translate(1333,0)"></use>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2204.1,0)">
                          <use data-c="22C5" xlink:href="#MJX-87-TEX-N-22C5"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(2704.4,0)">
                          <use data-c="5B" xlink:href="#MJX-87-TEX-N-5B"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(2982.4,0)">
                          <use data-c="1D446" xlink:href="#MJX-87-TEX-I-1D446"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(3627.4,0)">
                          <use data-c="5D" xlink:href="#MJX-87-TEX-N-5D"></use>
                        </g>
                      </g>
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(220,-1109.5)">
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D43E" xlink:href="#MJX-87-TEX-I-1D43E"></use>
                            </g>
                            <g data-mml-node="mi" transform="translate(882,-150) scale(0.707)">
                              <use data-c="1D45A" xlink:href="#MJX-87-TEX-I-1D45A"></use>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mrow" transform="translate(1719.5,0)">
                          <g data-mml-node="mo" transform="translate(0 -0.5)">
                            <use data-c="28" xlink:href="#MJX-87-TEX-LO-28"></use>
                          </g>
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(597,0)">
                            <g data-mml-node="mn">
                              <use data-c="31" xlink:href="#MJX-87-TEX-N-31"></use>
                            </g>
                            <g data-mml-node="mo" transform="translate(722.2,0)">
                              <use data-c="2B" xlink:href="#MJX-87-TEX-N-2B"></use>
                            </g>
                            <g data-mml-node="mfrac" transform="translate(1722.4,0)">
                              <g data-mml-node="TeXAtom"
                                 transform="translate(300.7,516.8) scale(0.707)"
                                 data-mjx-texclass="ORD">
                                <g data-mml-node="mo">
                                  <use data-c="5B" xlink:href="#MJX-87-TEX-N-5B"></use>
                                </g>
                                <g data-mml-node="mi" transform="translate(278,0)">
                                  <use data-c="1D43C" xlink:href="#MJX-87-TEX-I-1D43C"></use>
                                </g>
                                <g data-mml-node="mo" transform="translate(782,0)">
                                  <use data-c="5D" xlink:href="#MJX-87-TEX-N-5D"></use>
                                </g>
                              </g>
                              <g data-mml-node="TeXAtom" transform="translate(220,-345) scale(0.707)"
                                 data-mjx-texclass="ORD">
                                <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                                  <g data-mml-node="msub">
                                    <g data-mml-node="mi">
                                      <use data-c="1D43E" xlink:href="#MJX-87-TEX-I-1D43E">
                                      </use>
                                    </g>
                                    <g data-mml-node="mi"
                                       transform="translate(882,-150) scale(0.707)">
                                      <use data-c="1D43C" xlink:href="#MJX-87-TEX-I-1D43C">
                                      </use>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <rect width="1111" height="60" x="120" y="220"></rect>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(3670.5,0) translate(0 -0.5)">
                            <use data-c="29" xlink:href="#MJX-87-TEX-LO-29"></use>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(6209.2,0)">
                          <use data-c="2B" xlink:href="#MJX-87-TEX-N-2B"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(7209.4,0)">
                          <use data-c="5B" xlink:href="#MJX-87-TEX-N-5B"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(7487.4,0)">
                          <use data-c="1D446" xlink:href="#MJX-87-TEX-I-1D446"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(8132.4,0)">
                          <use data-c="5D" xlink:href="#MJX-87-TEX-N-5D"></use>
                        </g>
                      </g>
                      <rect width="8610.4" height="60" x="120" y="220"></rect>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
        <h3 id='gillespie-algorithm'>Gillespie Algorithm</h3>
        <p>Since the biochemical reaction molecules in the organism are small and the reaction speed is very slow
          compared
          with that of ordinary chemistry, the randomness of the reaction is obvious. Therefore, Monte Carlo sampling
          can
          be used to simulate the random dynamic behavior of the chemical system when dealing with the biochemical
          reaction system mentioned above. </p>
        <p>Considering that there are
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="10.304ex" height="2.262ex" role="img" focusable="false"
              viewBox="0 -750 4554.2 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-103-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-103-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-103-TEX-N-2A7E"
                      d="M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM674 172Q692 172 694 154Q694 142 687 137Q685 135 395 -2L107 -138H101Q83 -136 83 -118Q83 -106 96 -100Q100 -98 380 35T665 170T674 172Z">
                </path>
                <path id="MJX-103-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-103-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D441" xlink:href="#MJX-103-TEX-I-1D441"></use>
                  </g>
                  <g data-mml-node="mrow" transform="translate(1054.7,0)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-103-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(389,0)">
                      <use data-c="1D441" xlink:href="#MJX-103-TEX-I-1D441"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1554.8,0)">
                      <use data-c="2A7E" xlink:href="#MJX-103-TEX-N-2A7E"></use>
                    </g>
                    <g data-mml-node="mn" transform="translate(2610.6,0)">
                      <use data-c="31" xlink:href="#MJX-103-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3110.6,0)">
                      <use data-c="29" xlink:href="#MJX-103-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">N\left( N\geqslant 1 \right)</script>
          kinds of molecules,
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="12.673ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 5601.5 1000"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-104-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z">
                </path>
                <path id="MJX-104-TEX-I-1D446"
                      d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                </path>
                <path id="MJX-104-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-104-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                </path>
                <path id="MJX-104-TEX-N-22EF"
                      d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z">
                </path>
                <path id="MJX-104-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-104-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mrow">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-104-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(500,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D446" xlink:href="#MJX-104-TEX-I-1D446"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(646,-150) scale(0.707)">
                        <use data-c="31" xlink:href="#MJX-104-TEX-N-31"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(1549.6,0)">
                      <use data-c="2C" xlink:href="#MJX-104-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(1994.2,0)">
                      <use data-c="22EF" xlink:href="#MJX-104-TEX-N-22EF"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3332.9,0)">
                      <use data-c="2C" xlink:href="#MJX-104-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(3777.6,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D446" xlink:href="#MJX-104-TEX-I-1D446"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(646,-150) scale(0.707)">
                        <use data-c="1D441" xlink:href="#MJX-104-TEX-I-1D441"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(5101.5,0)">
                      <use data-c="7D" xlink:href="#MJX-104-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">\left\{ S_1, \cdots , S_N \right\} </script>
          , and
          <mjx-container class="MathJax"
                         jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="6.526ex"
                 height="1.731ex" role="img" focusable="false" viewBox="0 -683 2884.6 765"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.186ex;">
              <defs>
                <path id="MJX-105-TEX-I-1D440"
                      d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z">
                </path>
                <path id="MJX-105-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                </path>
                <path id="MJX-105-TEX-N-35"
                      d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D440" xlink:href="#MJX-105-TEX-I-1D440"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1328.8,0)">
                    <use data-c="3D" xlink:href="#MJX-105-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(2384.6,0)">
                    <use data-c="35" xlink:href="#MJX-105-TEX-N-35"></use>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">M=5</script>
          basic reaction channels,
          <mjx-container class="MathJax" jax="SVG"
                         style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.713ex" height="2.262ex"
                 role="img" focusable="false" viewBox="0 -750 5619.1 1000" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-106-TEX-N-7B"
                      d="M434 -231Q434 -244 428 -250H410Q281 -250 230 -184Q225 -177 222 -172T217 -161T213 -148T211 -133T210 -111T209 -84T209 -47T209 0Q209 21 209 53Q208 142 204 153Q203 154 203 155Q189 191 153 211T82 231Q71 231 68 234T65 250T68 266T82 269Q116 269 152 289T203 345Q208 356 208 377T209 529V579Q209 634 215 656T244 698Q270 724 324 740Q361 748 377 749Q379 749 390 749T408 750H428Q434 744 434 732Q434 719 431 716Q429 713 415 713Q362 710 332 689T296 647Q291 634 291 499V417Q291 370 288 353T271 314Q240 271 184 255L170 250L184 245Q202 239 220 230T262 196T290 137Q291 131 291 1Q291 -134 296 -147Q306 -174 339 -192T415 -213Q429 -213 431 -216Q434 -219 434 -231Z">
                </path>
                <path id="MJX-106-TEX-I-1D445"
                      d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                </path>
                <path id="MJX-106-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-106-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                </path>
                <path id="MJX-106-TEX-N-22EF"
                      d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z">
                </path>
                <path id="MJX-106-TEX-N-35"
                      d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z">
                </path>
                <path id="MJX-106-TEX-N-7D"
                      d="M65 731Q65 745 68 747T88 750Q171 750 216 725T279 670Q288 649 289 635T291 501Q292 362 293 357Q306 312 345 291T417 269Q428 269 431 266T434 250T431 234T417 231Q380 231 345 210T298 157Q293 143 292 121T291 -28V-79Q291 -134 285 -156T256 -198Q202 -250 89 -250Q71 -250 68 -247T65 -230Q65 -224 65 -223T66 -218T69 -214T77 -213Q91 -213 108 -210T146 -200T183 -177T207 -139Q208 -134 209 3L210 139Q223 196 280 230Q315 247 330 250Q305 257 280 270Q225 304 212 352L210 362L209 498Q208 635 207 640Q195 680 154 696T77 713Q68 713 67 716T65 731Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mrow">
                    <g data-mml-node="mo">
                      <use data-c="7B" xlink:href="#MJX-106-TEX-N-7B"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(500,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D445" xlink:href="#MJX-106-TEX-I-1D445"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(792,-150) scale(0.707)">
                        <use data-c="31" xlink:href="#MJX-106-TEX-N-31"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(1695.6,0)">
                      <use data-c="2C" xlink:href="#MJX-106-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(2140.2,0)">
                      <use data-c="22EF" xlink:href="#MJX-106-TEX-N-22EF"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3478.9,0)">
                      <use data-c="2C" xlink:href="#MJX-106-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(3923.6,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D445" xlink:href="#MJX-106-TEX-I-1D445"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(792,-150) scale(0.707)">
                        <use data-c="35" xlink:href="#MJX-106-TEX-N-35"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(5119.1,0)">
                      <use data-c="7D" xlink:href="#MJX-106-TEX-N-7D"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">\left\{ R_1, \cdots , R_5 \right\}</script>
          , in the system.
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="26.95ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 11912 1000"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-107-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z">
                </path>
                <path id="MJX-107-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-107-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
                <path id="MJX-107-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
                <path id="MJX-107-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                </path>
                <path id="MJX-107-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-107-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                </path>
                <path id="MJX-107-TEX-N-22EF"
                      d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z">
                </path>
                <path id="MJX-107-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D44B" xlink:href="#MJX-107-TEX-I-1D44B"></use>
                  </g>
                  <g data-mml-node="mrow" transform="translate(1018.7,0)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-107-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(389,0)">
                      <use data-c="1D461" xlink:href="#MJX-107-TEX-I-1D461"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(750,0)">
                      <use data-c="29" xlink:href="#MJX-107-TEX-N-29"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(2435.4,0)">
                    <use data-c="3D" xlink:href="#MJX-107-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mrow" transform="translate(3491.2,0)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-107-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(389,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D44B" xlink:href="#MJX-107-TEX-I-1D44B"></use>
                      </g>
                      <g data-mml-node="mn" transform="translate(861,-150) scale(0.707)">
                        <use data-c="31" xlink:href="#MJX-107-TEX-N-31"></use>
                      </g>
                    </g>
                    <g data-mml-node="mrow" transform="translate(1820.2,0)">
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-107-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(389,0)">
                        <use data-c="1D461" xlink:href="#MJX-107-TEX-I-1D461"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(750,0)">
                        <use data-c="29" xlink:href="#MJX-107-TEX-N-29"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(2959.2,0)">
                      <use data-c="2C" xlink:href="#MJX-107-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(3403.9,0)">
                      <use data-c="22EF" xlink:href="#MJX-107-TEX-N-22EF"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(4742.6,0)">
                      <use data-c="2C" xlink:href="#MJX-107-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="msub" transform="translate(5187.2,0)">
                      <g data-mml-node="mi">
                        <use data-c="1D44B" xlink:href="#MJX-107-TEX-I-1D44B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(861,-150) scale(0.707)">
                        <use data-c="1D441" xlink:href="#MJX-107-TEX-I-1D441"></use>
                      </g>
                    </g>
                    <g data-mml-node="mrow" transform="translate(6892.8,0)">
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-107-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(389,0)">
                        <use data-c="1D461" xlink:href="#MJX-107-TEX-I-1D461"></use>
                      </g>
                      <g data-mml-node="mo" transform="translate(750,0)">
                        <use data-c="29" xlink:href="#MJX-107-TEX-N-29"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(8031.8,0)">
                      <use data-c="29" xlink:href="#MJX-107-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script
            type="math/tex">X\left( t \right) =\left( X_1\left( t \right) , \cdots , X_N\left( t \right) \right)
          </script>
          represents the state of the system at time
          <mjx-container class="MathJax" jax="SVG"
                         style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="0.817ex" height="1.441ex"
                 role="img" focusable="false" viewBox="0 -626 361 637" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" style="vertical-align: -0.025ex;">
              <defs>
                <path id="MJX-111-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D461" xlink:href="#MJX-111-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">t</script>
          .
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="5.567ex" height="2.262ex" role="img" focusable="false"
              viewBox="0 -750 2460.6 1000" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-109-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z">
                </path>
                <path id="MJX-109-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-109-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-109-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
                <path id="MJX-109-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-109-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(861,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-109-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="mrow" transform="translate(1321.6,0)">
                    <g data-mml-node="mo">
                      <use data-c="28" xlink:href="#MJX-109-TEX-N-28"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(389,0)">
                      <use data-c="1D461" xlink:href="#MJX-109-TEX-I-1D461"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(750,0)">
                      <use data-c="29" xlink:href="#MJX-109-TEX-N-29"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">X_i\left( t \right) </script>
          represents the number of molecule
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.127ex" height="1.952ex" role="img" focusable="false" viewBox="0 -705 940 862.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-117-TEX-I-1D446"
                      d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                </path>
                <path id="MJX-117-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D446" xlink:href="#MJX-117-TEX-I-1D446"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(646,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-117-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">S_i</script>
          in the system at time
          <mjx-container class="MathJax" jax="SVG"
                         style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="0.817ex" height="1.441ex"
                 role="img" focusable="false" viewBox="0 -626 361 637" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" style="vertical-align: -0.025ex;">
              <defs>
                <path id="MJX-111-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mi">
                    <use data-c="1D461" xlink:href="#MJX-111-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">t</script>
          .
        </p>
        <p>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.496ex" height="1.668ex" role="img" focusable="false" viewBox="0 -443 1103.3 737.2"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-112-TEX-I-1D463"
                      d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z">
                </path>
                <path id="MJX-112-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
                <path id="MJX-112-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D463" xlink:href="#MJX-112-TEX-I-1D463"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(518,-150) scale(0.707)"
                       data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D457" xlink:href="#MJX-112-TEX-I-1D457"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(412,0)">
                        <use data-c="1D456" xlink:href="#MJX-112-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">v_{ji}</script>
          represents the variable caused by molecule
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.127ex" height="1.952ex" role="img" focusable="false" viewBox="0 -705 940 862.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-117-TEX-I-1D446"
                      d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                </path>
                <path id="MJX-117-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D446" xlink:href="#MJX-117-TEX-I-1D446"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(646,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-117-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">S_i</script>
          due to
          <mjx-container class="MathJax" jax="SVG"
                         style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.564ex" height="2.211ex"
                 role="img" focusable="false" viewBox="0 -683 1133.3 977.2" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-123-TEX-I-1D445"
                      d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                </path>
                <path id="MJX-123-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D445" xlink:href="#MJX-123-TEX-I-1D445"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(792,-150) scale(0.707)">
                      <use data-c="1D457" xlink:href="#MJX-123-TEX-I-1D457"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">R_j</script>
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="27.244ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 12041.8 1000"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-115-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-115-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
                <path id="MJX-115-TEX-N-3D"
                      d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                </path>
                <path id="MJX-115-TEX-N-31"
                      d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                </path>
                <path id="MJX-115-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                </path>
                <path id="MJX-115-TEX-N-22EF"
                      d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z">
                </path>
                <path id="MJX-115-TEX-I-1D440"
                      d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z">
                </path>
                <path id="MJX-115-TEX-N-3B"
                      d="M78 370Q78 394 95 412T138 430Q162 430 180 414T199 371Q199 346 182 328T139 310T96 327T78 370ZM78 60Q78 85 94 103T137 121Q202 121 202 8Q202 -44 183 -94T144 -169T118 -194Q115 -194 106 -186T95 -174Q94 -171 107 -155T137 -107T160 -38Q161 -32 162 -22T165 -4T165 4Q165 5 161 4T142 0Q110 0 94 18T78 60Z">
                </path>
                <path id="MJX-115-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-115-TEX-I-1D441"
                      d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                </path>
                <path id="MJX-115-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mo">
                    <use data-c="28" xlink:href="#MJX-115-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(389,0)">
                    <use data-c="1D457" xlink:href="#MJX-115-TEX-I-1D457"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1078.8,0)">
                    <use data-c="3D" xlink:href="#MJX-115-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(2134.6,0)">
                    <use data-c="31" xlink:href="#MJX-115-TEX-N-31"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2634.6,0)">
                    <use data-c="2C" xlink:href="#MJX-115-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3079.2,0)">
                    <use data-c="22EF" xlink:href="#MJX-115-TEX-N-22EF"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(4417.9,0)">
                    <use data-c="2C" xlink:href="#MJX-115-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4862.6,0)">
                    <use data-c="1D440" xlink:href="#MJX-115-TEX-I-1D440"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(5913.6,0)">
                    <use data-c="3B" xlink:href="#MJX-115-TEX-N-3B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(6358.2,0)">
                    <use data-c="1D456" xlink:href="#MJX-115-TEX-I-1D456"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(6981,0)">
                    <use data-c="3D" xlink:href="#MJX-115-TEX-N-3D"></use>
                  </g>
                  <g data-mml-node="mn" transform="translate(8036.8,0)">
                    <use data-c="31" xlink:href="#MJX-115-TEX-N-31"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(8536.8,0)">
                    <use data-c="2C" xlink:href="#MJX-115-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(8981.4,0)">
                    <use data-c="22EF" xlink:href="#MJX-115-TEX-N-22EF"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(10320.1,0)">
                    <use data-c="2C" xlink:href="#MJX-115-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(10764.8,0)">
                    <use data-c="1D441" xlink:href="#MJX-115-TEX-I-1D441"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(11652.8,0)">
                    <use data-c="29" xlink:href="#MJX-115-TEX-N-29"></use>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">(j=1, \cdots, M; i = 1, \cdots, N)</script>
          , that is, the number of molecule
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.127ex" height="1.952ex" role="img" focusable="false" viewBox="0 -705 940 862.8"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-117-TEX-I-1D446"
                      d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                </path>
                <path id="MJX-117-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D446" xlink:href="#MJX-117-TEX-I-1D446"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(646,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-117-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">S_i</script>
          changes from
          <mjx-container class="MathJax" jax="SVG"
                         style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.127ex" height="1.952ex"
                 role="img" focusable="false" viewBox="0 -705 940 862.8" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" style="vertical-align: -0.357ex;">
              <defs>
                <path id="MJX-117-TEX-I-1D446"
                      d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                </path>
                <path id="MJX-117-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D446" xlink:href="#MJX-117-TEX-I-1D446"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(646,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-117-TEX-I-1D456"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">S_i</script>
          to
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.452ex" height="2.363ex" role="img" focusable="false"
                 viewBox="0 -750 4619.7 1044.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-118-TEX-I-1D44B"
                      d="M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z">
                </path>
                <path id="MJX-118-TEX-I-1D456"
                      d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z">
                </path>
                <path id="MJX-118-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-118-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
                <path id="MJX-118-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
                <path id="MJX-118-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                </path>
                <path id="MJX-118-TEX-I-1D463"
                      d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z">
                </path>
                <path id="MJX-118-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44B" xlink:href="#MJX-118-TEX-I-1D44B"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(861,-150) scale(0.707)">
                      <use data-c="1D456" xlink:href="#MJX-118-TEX-I-1D456"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(1155,0)">
                    <use data-c="28" xlink:href="#MJX-118-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1544,0)">
                    <use data-c="1D461" xlink:href="#MJX-118-TEX-I-1D461"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1905,0)">
                    <use data-c="29" xlink:href="#MJX-118-TEX-N-29"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(2516.2,0)">
                    <use data-c="2B" xlink:href="#MJX-118-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(3516.4,0)">
                    <g data-mml-node="mi">
                      <use data-c="1D463" xlink:href="#MJX-118-TEX-I-1D463"></use>
                    </g>
                    <g data-mml-node="TeXAtom" transform="translate(518,-150) scale(0.707)"
                       data-mjx-texclass="ORD">
                      <g data-mml-node="mi">
                        <use data-c="1D457" xlink:href="#MJX-118-TEX-I-1D457"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(412,0)">
                        <use data-c="1D456" xlink:href="#MJX-118-TEX-I-1D456"></use>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">X_i(t)+v_{ji}</script>
          after reaction
          <mjx-container class="MathJax" jax="SVG"
                         style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.564ex" height="2.211ex"
                 role="img" focusable="false" viewBox="0 -683 1133.3 977.2" xmlns:xlink="http://www.w3.org/1999/xlink"
                 aria-hidden="true" style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-123-TEX-I-1D445"
                      d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                </path>
                <path id="MJX-123-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D445" xlink:href="#MJX-123-TEX-I-1D445"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(792,-150) scale(0.707)">
                      <use data-c="1D457" xlink:href="#MJX-123-TEX-I-1D457"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">R_j</script>
          occurs.
        </p>
        <p>Each reaction channel
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="2.564ex" height="2.211ex" role="img" focusable="false"
              viewBox="0 -683 1133.3 977.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-123-TEX-I-1D445"
                      d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                </path>
                <path id="MJX-123-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D445" xlink:href="#MJX-123-TEX-I-1D445"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(792,-150) scale(0.707)">
                      <use data-c="1D457" xlink:href="#MJX-123-TEX-I-1D457"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">R_j</script>
          corresponds to a propensity function
          <mjx-container class="MathJax"
                         jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.044ex"
                 height="1.663ex" role="img" focusable="false" viewBox="0 -441 903.3 735.2"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-121-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                </path>
                <path id="MJX-121-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44E" xlink:href="#MJX-121-TEX-I-1D44E"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(562,-150) scale(0.707)">
                      <use data-c="1D457" xlink:href="#MJX-121-TEX-I-1D457"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">a_j</script>
          , and
          <mjx-container class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg" width="7.091ex" height="2.363ex" role="img" focusable="false"
                 viewBox="0 -750 3134.3 1044.2" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                 style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-122-TEX-I-1D44E"
                      d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                </path>
                <path id="MJX-122-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
                <path id="MJX-122-TEX-N-28"
                      d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                </path>
                <path id="MJX-122-TEX-I-1D465"
                      d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
                </path>
                <path id="MJX-122-TEX-N-29"
                      d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                </path>
                <path id="MJX-122-TEX-I-1D451"
                      d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                </path>
                <path id="MJX-122-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D44E" xlink:href="#MJX-122-TEX-I-1D44E"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(562,-150) scale(0.707)">
                      <use data-c="1D457" xlink:href="#MJX-122-TEX-I-1D457"></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(903.3,0)">
                    <use data-c="28" xlink:href="#MJX-122-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1292.3,0)">
                    <use data-c="1D465" xlink:href="#MJX-122-TEX-I-1D465"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1864.3,0)">
                    <use data-c="29" xlink:href="#MJX-122-TEX-N-29"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(2253.3,0)">
                    <use data-c="1D451" xlink:href="#MJX-122-TEX-I-1D451"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(2773.3,0)">
                    <use data-c="1D461" xlink:href="#MJX-122-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">a_j(x)dt</script>
          describes the probability of a reaction
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="2.564ex" height="2.211ex" role="img" focusable="false" viewBox="0 -683 1133.3 977.2"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.666ex;">
              <defs>
                <path id="MJX-123-TEX-I-1D445"
                      d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                </path>
                <path id="MJX-123-TEX-I-1D457"
                      d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                </path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="msub">
                    <g data-mml-node="mi">
                      <use data-c="1D445" xlink:href="#MJX-123-TEX-I-1D445"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(792,-150) scale(0.707)">
                      <use data-c="1D457" xlink:href="#MJX-123-TEX-I-1D457"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">R_j</script>
          occurring somewhere in the system within the time interval
          <mjx-container
            class="MathJax" jax="SVG" style="position: relative;">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="8.656ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 3826.1 1000"
                 xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" style="vertical-align: -0.566ex;">
              <defs>
                <path id="MJX-124-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                <path id="MJX-124-TEX-I-1D461"
                      d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                </path>
                <path id="MJX-124-TEX-N-2C"
                      d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                </path>
                <path id="MJX-124-TEX-N-2B"
                      d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z">
                </path>
                <path id="MJX-124-TEX-I-1D451"
                      d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                </path>
                <path id="MJX-124-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
              </defs>
              <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                <g data-mml-node="math">
                  <g data-mml-node="mo">
                    <use data-c="5B" xlink:href="#MJX-124-TEX-N-5B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(278,0)">
                    <use data-c="1D461" xlink:href="#MJX-124-TEX-I-1D461"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(639,0)">
                    <use data-c="2C" xlink:href="#MJX-124-TEX-N-2C"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(1083.7,0)">
                    <use data-c="1D461" xlink:href="#MJX-124-TEX-I-1D461"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(1666.9,0)">
                    <use data-c="2B" xlink:href="#MJX-124-TEX-N-2B"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(2667.1,0)">
                    <use data-c="1D451" xlink:href="#MJX-124-TEX-I-1D451"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(3187.1,0)">
                    <use data-c="1D461" xlink:href="#MJX-124-TEX-I-1D461"></use>
                  </g>
                  <g data-mml-node="mo" transform="translate(3548.1,0)">
                    <use data-c="5D" xlink:href="#MJX-124-TEX-N-5D"></use>
                  </g>
                </g>
              </g>
            </svg>
          </mjx-container>
          <script type="math/tex">[t, t+dt]</script>
          .
        </p>
        <p>From the above, for the convenience of the program calculation, the discrete form is constructed as
          follows: </p>
        <div contenteditable="false" spellcheck="false" class="mathjax-block md-end-block md-math-block md-rawblock"
             id="mathjax-n121" cid="n121" mdtype="math_block" data-math-tag-before="0" data-math-tag-after="0"
             data-math-labels="[]">
          <div class="md-rawblock-container md-math-container" tabindex="-1">
            <mjx-container class="MathJax" jax="SVG" display="true" style="position: relative;">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="72.234ex" height="6.935ex" role="img" focusable="false"
                viewBox="0 -1733 31927.5 3065.1" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                style="vertical-align: -3.014ex;">
                <defs>
                  <path id="MJX-88-TEX-I-1D715"
                        d="M202 508Q179 508 169 520T158 547Q158 557 164 577T185 624T230 675T301 710L333 715H345Q378 715 384 714Q447 703 489 661T549 568T566 457Q566 362 519 240T402 53Q321 -22 223 -22Q123 -22 73 56Q42 102 42 148V159Q42 276 129 370T322 465Q383 465 414 434T455 367L458 378Q478 461 478 515Q478 603 437 639T344 676Q266 676 223 612Q264 606 264 572Q264 547 246 528T202 508ZM430 306Q430 372 401 400T333 428Q270 428 222 382Q197 354 183 323T150 221Q132 149 132 116Q132 21 232 21Q244 21 250 22Q327 35 374 112Q389 137 409 196T430 306Z">
                  </path>
                  <path id="MJX-88-TEX-N-74"
                        d="M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z">
                  </path>
                  <path id="MJX-88-TEX-I-1D443"
                        d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
                  </path>
                  <path id="MJX-88-TEX-N-28"
                        d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z">
                  </path>
                  <path id="MJX-88-TEX-I-1D465"
                        d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
                  </path>
                  <path id="MJX-88-TEX-N-2C"
                        d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z">
                  </path>
                  <path id="MJX-88-TEX-I-1D461"
                        d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                  </path>
                  <path id="MJX-88-TEX-N-7C"
                        d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z">
                  </path>
                  <path id="MJX-88-TEX-N-30"
                        d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z">
                  </path>
                  <path id="MJX-88-TEX-N-29"
                        d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z">
                  </path>
                  <path id="MJX-88-TEX-N-3D"
                        d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z">
                  </path>
                  <path id="MJX-88-TEX-LO-2211"
                        d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z">
                  </path>
                  <path id="MJX-88-TEX-I-1D457"
                        d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z">
                  </path>
                  <path id="MJX-88-TEX-N-31"
                        d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                  </path>
                  <path id="MJX-88-TEX-I-1D440"
                        d="M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z">
                  </path>
                  <path id="MJX-88-TEX-N-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path>
                  <path id="MJX-88-TEX-I-1D44E"
                        d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                  </path>
                  <path id="MJX-88-TEX-N-2212"
                        d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"></path>
                  <path id="MJX-88-TEX-I-1D463"
                        d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z">
                  </path>
                  <path id="MJX-88-TEX-N-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path>
                </defs>
                <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                  <g data-mml-node="math">
                    <g data-mml-node="mfrac">
                      <g data-mml-node="mi" transform="translate(414.5,676)">
                        <use data-c="1D715" xlink:href="#MJX-88-TEX-I-1D715"></use>
                      </g>
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(220,-686)">
                        <g data-mml-node="mi">
                          <use data-c="1D715" xlink:href="#MJX-88-TEX-I-1D715"></use>
                        </g>
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(566,0)">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="mi">
                              <use data-c="74" xlink:href="#MJX-88-TEX-N-74"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                      <rect width="1155" height="60" x="120" y="220"></rect>
                    </g>
                    <g data-mml-node="mi" transform="translate(1395,0)">
                      <use data-c="1D443" xlink:href="#MJX-88-TEX-I-1D443"></use>
                    </g>
                    <g data-mml-node="mrow" transform="translate(2312.7,0)">
                      <g data-mml-node="mo">
                        <use data-c="28" xlink:href="#MJX-88-TEX-N-28"></use>
                      </g>
                      <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(389,0)">
                        <g data-mml-node="mi">
                          <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(572,0)">
                          <use data-c="2C" xlink:href="#MJX-88-TEX-N-2C"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(1016.7,0)">
                          <use data-c="1D461" xlink:href="#MJX-88-TEX-I-1D461"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(1377.7,0) translate(0 -0.5)">
                          <use data-c="7C" xlink:href="#MJX-88-TEX-N-7C"></use>
                        </g>
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(1655.7,0)">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                            </g>
                            <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                              <use data-c="30" xlink:href="#MJX-88-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(2664.2,0)">
                          <use data-c="2C" xlink:href="#MJX-88-TEX-N-2C"></use>
                        </g>
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(3108.9,0)">
                          <g data-mml-node="msub">
                            <g data-mml-node="mi">
                              <use data-c="1D461" xlink:href="#MJX-88-TEX-I-1D461"></use>
                            </g>
                            <g data-mml-node="mn" transform="translate(394,-150) scale(0.707)">
                              <use data-c="30" xlink:href="#MJX-88-TEX-N-30"></use>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g data-mml-node="mo" transform="translate(4295.4,0)">
                        <use data-c="29" xlink:href="#MJX-88-TEX-N-29"></use>
                      </g>
                    </g>
                    <g data-mml-node="mo" transform="translate(7274.9,0)">
                      <use data-c="3D" xlink:href="#MJX-88-TEX-N-3D"></use>
                    </g>
                    <g data-mml-node="munderover" transform="translate(8330.7,0)">
                      <g data-mml-node="mo">
                        <use data-c="2211" xlink:href="#MJX-88-TEX-LO-2211"></use>
                      </g>
                      <g data-mml-node="TeXAtom" transform="translate(124.5,-1087.9) scale(0.707)"
                         data-mjx-texclass="ORD">
                        <g data-mml-node="mi">
                          <use data-c="1D457" xlink:href="#MJX-88-TEX-I-1D457"></use>
                        </g>
                        <g data-mml-node="mo" transform="translate(412,0)">
                          <use data-c="3D" xlink:href="#MJX-88-TEX-N-3D"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(1190,0)">
                          <use data-c="31" xlink:href="#MJX-88-TEX-N-31"></use>
                        </g>
                      </g>
                      <g data-mml-node="mi" transform="translate(350.4,1150) scale(0.707)">
                        <use data-c="1D440" xlink:href="#MJX-88-TEX-I-1D440"></use>
                      </g>
                    </g>
                    <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(9941.3,0)">
                      <g data-mml-node="mrow">
                        <g data-mml-node="mo">
                          <use data-c="5B" xlink:href="#MJX-88-TEX-N-5B"></use>
                        </g>
                        <g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(278,0)">
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD">
                            <g data-mml-node="msub">
                              <g data-mml-node="mi">
                                <use data-c="1D44E" xlink:href="#MJX-88-TEX-I-1D44E"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(562,-150) scale(0.707)">
                                <use data-c="1D457" xlink:href="#MJX-88-TEX-I-1D457"></use>
                              </g>
                            </g>
                          </g>
                          <g data-mml-node="mrow" transform="translate(1070,0)">
                            <g data-mml-node="mo">
                              <use data-c="28" xlink:href="#MJX-88-TEX-N-28"></use>
                            </g>
                            <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                               transform="translate(389,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(794.2,0)">
                                <use data-c="2212" xlink:href="#MJX-88-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                 transform="translate(1794.4,0)">
                                <g data-mml-node="msub">
                                  <g data-mml-node="mi">
                                    <use data-c="1D463" xlink:href="#MJX-88-TEX-I-1D463"></use>
                                  </g>
                                  <g data-mml-node="mi"
                                     transform="translate(518,-150) scale(0.707)">
                                    <use data-c="1D457" xlink:href="#MJX-88-TEX-I-1D457"></use>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(3042.8,0)">
                              <use data-c="29" xlink:href="#MJX-88-TEX-N-29"></use>
                            </g>
                          </g>
                          <g data-mml-node="mi" transform="translate(4501.8,0)">
                            <use data-c="1D443" xlink:href="#MJX-88-TEX-I-1D443"></use>
                          </g>
                          <g data-mml-node="mrow" transform="translate(5419.4,0)">
                            <g data-mml-node="mo">
                              <use data-c="28" xlink:href="#MJX-88-TEX-N-28"></use>
                            </g>
                            <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                               transform="translate(389,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(794.2,0)">
                                <use data-c="2212" xlink:href="#MJX-88-TEX-N-2212"></use>
                              </g>
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                 transform="translate(1794.4,0)">
                                <g data-mml-node="msub">
                                  <g data-mml-node="mi">
                                    <use data-c="1D463" xlink:href="#MJX-88-TEX-I-1D463"></use>
                                  </g>
                                  <g data-mml-node="mi"
                                     transform="translate(518,-150) scale(0.707)">
                                    <use data-c="1D457" xlink:href="#MJX-88-TEX-I-1D457"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(2653.8,0)">
                                <use data-c="2C" xlink:href="#MJX-88-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(3098.4,0)">
                                <use data-c="1D461" xlink:href="#MJX-88-TEX-I-1D461"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(3459.4,0) translate(0 -0.5)">
                                <use data-c="7C" xlink:href="#MJX-88-TEX-N-7C"></use>
                              </g>
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                 transform="translate(3737.4,0)">
                                <g data-mml-node="msub">
                                  <g data-mml-node="mi">
                                    <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(605,-150) scale(0.707)">
                                    <use data-c="30" xlink:href="#MJX-88-TEX-N-30"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(4746,0)">
                                <use data-c="2C" xlink:href="#MJX-88-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                 transform="translate(5190.7,0)">
                                <g data-mml-node="msub">
                                  <g data-mml-node="mi">
                                    <use data-c="1D461" xlink:href="#MJX-88-TEX-I-1D461"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(394,-150) scale(0.707)">
                                    <use data-c="30" xlink:href="#MJX-88-TEX-N-30"></use>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(6377.2,0)">
                              <use data-c="29" xlink:href="#MJX-88-TEX-N-29"></use>
                            </g>
                          </g>
                          <g data-mml-node="mo" transform="translate(12407.9,0)">
                            <use data-c="2212" xlink:href="#MJX-88-TEX-N-2212"></use>
                          </g>
                          <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                             transform="translate(13408.1,0)">
                            <g data-mml-node="msub">
                              <g data-mml-node="mi">
                                <use data-c="1D44E" xlink:href="#MJX-88-TEX-I-1D44E"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(562,-150) scale(0.707)">
                                <use data-c="1D457" xlink:href="#MJX-88-TEX-I-1D457"></use>
                              </g>
                            </g>
                          </g>
                          <g data-mml-node="mrow" transform="translate(14478.1,0)">
                            <g data-mml-node="mo">
                              <use data-c="28" xlink:href="#MJX-88-TEX-N-28"></use>
                            </g>
                            <g data-mml-node="mi" transform="translate(389,0)">
                              <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                            </g>
                            <g data-mml-node="mo" transform="translate(961,0)">
                              <use data-c="29" xlink:href="#MJX-88-TEX-N-29"></use>
                            </g>
                          </g>
                          <g data-mml-node="mi" transform="translate(15828.1,0)">
                            <use data-c="1D443" xlink:href="#MJX-88-TEX-I-1D443"></use>
                          </g>
                          <g data-mml-node="mrow" transform="translate(16745.8,0)">
                            <g data-mml-node="mo">
                              <use data-c="28" xlink:href="#MJX-88-TEX-N-28"></use>
                            </g>
                            <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                               transform="translate(389,0)">
                              <g data-mml-node="mi">
                                <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(572,0)">
                                <use data-c="2C" xlink:href="#MJX-88-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="mi" transform="translate(1016.7,0)">
                                <use data-c="1D461" xlink:href="#MJX-88-TEX-I-1D461"></use>
                              </g>
                              <g data-mml-node="mo" transform="translate(1377.7,0) translate(0 -0.5)">
                                <use data-c="7C" xlink:href="#MJX-88-TEX-N-7C"></use>
                              </g>
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                 transform="translate(1655.7,0)">
                                <g data-mml-node="msub">
                                  <g data-mml-node="mi">
                                    <use data-c="1D465" xlink:href="#MJX-88-TEX-I-1D465"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(605,-150) scale(0.707)">
                                    <use data-c="30" xlink:href="#MJX-88-TEX-N-30"></use>
                                  </g>
                                </g>
                              </g>
                              <g data-mml-node="mo" transform="translate(2664.2,0)">
                                <use data-c="2C" xlink:href="#MJX-88-TEX-N-2C"></use>
                              </g>
                              <g data-mml-node="TeXAtom" data-mjx-texclass="ORD"
                                 transform="translate(3108.9,0)">
                                <g data-mml-node="msub">
                                  <g data-mml-node="mi">
                                    <use data-c="1D461" xlink:href="#MJX-88-TEX-I-1D461"></use>
                                  </g>
                                  <g data-mml-node="mn"
                                     transform="translate(394,-150) scale(0.707)">
                                    <use data-c="30" xlink:href="#MJX-88-TEX-N-30"></use>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g data-mml-node="mo" transform="translate(4295.4,0)">
                              <use data-c="29" xlink:href="#MJX-88-TEX-N-29"></use>
                            </g>
                          </g>
                        </g>
                        <g data-mml-node="mo" transform="translate(21708.2,0)">
                          <use data-c="5D" xlink:href="#MJX-88-TEX-N-5D"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </mjx-container>
          </div>
        </div>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Biological Parameters">
        <h1 id='biological-parameters'>Biological Parameters</h1>
        <figure>
          <table>
            <thead>
            <tr>
              <th style="width: 200px">Parm</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.282ex" height="1.339ex" role="img"
                  focusable="false" viewBox="0 -442 1008.6 592" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-125-TEX-I-1D462"
                          d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-125-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D462" xlink:href="#MJX-125-TEX-I-1D462"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-125-TEX-N-31"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">u_1</script>
              </td>
              <td>the population density of Escherichia coli</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.282ex" height="1.339ex" role="img"
                  focusable="false" viewBox="0 -442 1008.6 592" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-126-TEX-I-1D462"
                          d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-126-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D462" xlink:href="#MJX-126-TEX-I-1D462"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-126-TEX-N-32"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">u_2</script>
              </td>
              <td>the population density of protoescherichia coli</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.282ex" height="1.375ex" role="img"
                  focusable="false" viewBox="0 -442 1008.6 607.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-127-TEX-I-1D462"
                          d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-127-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D462" xlink:href="#MJX-127-TEX-I-1D462"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(605,-150) scale(0.707)">
                          <use data-c="33" xlink:href="#MJX-127-TEX-N-33"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">u_3</script>
              </td>
              <td>the population density of pathogenic bacteria</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="1.885ex" height="1.62ex" role="img"
                  focusable="false" viewBox="0 -716 833 716" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: 0px;">
                  <defs>
                    <path id="MJX-128-TEX-N-394"
                          d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="394" xlink:href="#MJX-128-TEX-N-394"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">\Delta</script>
              </td>
              <td>the Laplacian operator</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.164ex" height="1.91ex" role="img"
                  focusable="false" viewBox="0 -694 956.6 844" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-129-TEX-I-1D451"
                          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                    </path>
                    <path id="MJX-129-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D451" xlink:href="#MJX-129-TEX-I-1D451"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(553,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-129-TEX-N-31"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">d_1</script>
              </td>
              <td>the diffusion rate of Escherichia coli species</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.164ex" height="1.91ex" role="img"
                  focusable="false" viewBox="0 -694 956.6 844" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-130-TEX-I-1D451"
                          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                    </path>
                    <path id="MJX-130-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D451" xlink:href="#MJX-130-TEX-I-1D451"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(553,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-130-TEX-N-32"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">d_2</script>
              </td>
              <td>the diffusion rate of protoescherichia coli species</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.164ex" height="1.945ex" role="img"
                  focusable="false" viewBox="0 -694 956.6 859.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-131-TEX-I-1D451"
                          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z">
                    </path>
                    <path id="MJX-131-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D451" xlink:href="#MJX-131-TEX-I-1D451"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(553,-150) scale(0.707)">
                          <use data-c="33" xlink:href="#MJX-131-TEX-N-33"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">d_3</script>
              </td>
              <td>the diffusion rate of pathogenic bacteria species</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.185ex" height="1.337ex" role="img"
                  focusable="false" viewBox="0 -441 965.6 591" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-132-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                    <path id="MJX-132-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44E" xlink:href="#MJX-132-TEX-I-1D44E"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(562,-150) scale(0.707)">
                          <use data-c="31" xlink:href="#MJX-132-TEX-N-31"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">a_1</script>
              </td>
              <td>the intrinsic growth rate of Escherichia coli species</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.185ex" height="1.337ex" role="img"
                  focusable="false" viewBox="0 -441 965.6 591" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-133-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                    <path id="MJX-133-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44E" xlink:href="#MJX-133-TEX-I-1D44E"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(562,-150) scale(0.707)">
                          <use data-c="32" xlink:href="#MJX-133-TEX-N-32"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">a_2</script>
              </td>
              <td>the intrinsic growth rate of protoescherichia coli species</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.185ex" height="1.372ex" role="img"
                  focusable="false" viewBox="0 -441 965.6 606.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-134-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                    <path id="MJX-134-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44E" xlink:href="#MJX-134-TEX-I-1D44E"></use>
                        </g>
                        <g data-mml-node="mn" transform="translate(562,-150) scale(0.707)">
                          <use data-c="33" xlink:href="#MJX-134-TEX-N-33"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">a_3</script>
              </td>
              <td>the intrinsic growth rate of pathogenic bacteria species</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.91ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 844" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-135-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-135-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-135-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="31" xlink:href="#MJX-135-TEX-N-31"></use>
                            <use data-c="31" xlink:href="#MJX-135-TEX-N-31"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{11}</script>
              </td>
              <td>the coefficient of intraspecific competition in Escherichia coli</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.91ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 844" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-136-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-136-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                    <path id="MJX-136-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-136-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="31" xlink:href="#MJX-136-TEX-N-31"></use>
                            <use data-c="32" xlink:href="#MJX-136-TEX-N-32"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{12}</script>
              </td>
              <td>the coefficient of interspecific competition between Escherichia coli and protoescherichia coli
              </td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.945ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 859.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-137-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-137-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                    <path id="MJX-137-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-137-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="31" xlink:href="#MJX-137-TEX-N-31"></use>
                            <use data-c="33" xlink:href="#MJX-137-TEX-N-33"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{13}</script>
              </td>
              <td>the coefficient of interspecific competition between Escherichia coli and pathogenic bacteria
              </td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.91ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 844" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-138-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-138-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                    <path id="MJX-138-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-138-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="32" xlink:href="#MJX-138-TEX-N-32"></use>
                            <use data-c="31" xlink:href="#MJX-138-TEX-N-31"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{21}</script>
              </td>
              <td>the coefficient of interspecific competition between protoescherichia coli and Escherichia coli
              </td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.91ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 844" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.339ex;">
                  <defs>
                    <path id="MJX-139-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-139-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-139-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="32" xlink:href="#MJX-139-TEX-N-32"></use>
                            <use data-c="32" xlink:href="#MJX-139-TEX-N-32"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{22}</script>
              </td>
              <td>the coefficient of intraspecific competition in protoescherichia coli</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.945ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 859.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-140-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-140-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                    <path id="MJX-140-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-140-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="32" xlink:href="#MJX-140-TEX-N-32"></use>
                            <use data-c="33" xlink:href="#MJX-140-TEX-N-33"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{23}</script>
              </td>
              <td>the coefficient of interspecific competition between protoescherichia coli and pathogenic
                bacteria</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.945ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 859.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-141-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-141-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                    <path id="MJX-141-TEX-N-31"
                          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-141-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="33" xlink:href="#MJX-141-TEX-N-33"></use>
                            <use data-c="31" xlink:href="#MJX-141-TEX-N-31"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{31}</script>
              </td>
              <td>the coefficient of interspecific competition between pathogenic bacteria and Escherichia coli
              </td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.945ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 859.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-142-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-142-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                    <path id="MJX-142-TEX-N-32"
                          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-142-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="33" xlink:href="#MJX-142-TEX-N-33"></use>
                            <use data-c="32" xlink:href="#MJX-142-TEX-N-32"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{32}</script>
              </td>
              <td>the coefficient of interspecific competition between pathogenic bacteria and protoescherichia
                coli</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.758ex" height="1.945ex" role="img"
                  focusable="false" viewBox="0 -694 1219.1 859.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-143-TEX-I-1D44F"
                          d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z">
                    </path>
                    <path id="MJX-143-TEX-N-33"
                          d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D44F" xlink:href="#MJX-143-TEX-I-1D44F"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(462,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mn">
                            <use data-c="33" xlink:href="#MJX-143-TEX-N-33"></use>
                            <use data-c="33" xlink:href="#MJX-143-TEX-N-33"
                                 transform="translate(500,0)"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">b_{33}</script>
              </td>
              <td>the coefficient of intraspecific competition in pathogenic bacteria</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="5.247ex" height="1.62ex" role="img"
                  focusable="false" viewBox="0 -716 2319 716" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: 0px;">
                  <defs>
                    <path id="MJX-144-TEX-I-1D434"
                          d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z">
                    </path>
                    <path id="MJX-144-TEX-I-1D43B"
                          d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z">
                    </path>
                    <path id="MJX-144-TEX-I-1D43F"
                          d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D434" xlink:href="#MJX-144-TEX-I-1D434"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(750,0)">
                        <use data-c="1D43B" xlink:href="#MJX-144-TEX-I-1D43B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1638,0)">
                        <use data-c="1D43F" xlink:href="#MJX-144-TEX-I-1D43F"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">AHL</script>
              </td>
              <td>acyl homoserine lactones</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="11.846ex" height="1.667ex" role="img"
                  focusable="false" viewBox="0 -716 5236 737" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.048ex;">
                  <defs>
                    <path id="MJX-145-TEX-I-1D434"
                          d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z">
                    </path>
                    <path id="MJX-145-TEX-I-1D43B"
                          d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z">
                    </path>
                    <path id="MJX-145-TEX-I-1D43F"
                          d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z">
                    </path>
                    <path id="MJX-145-TEX-N-2D" d="M11 179V252H277V179H11Z"></path>
                    <path id="MJX-145-TEX-I-1D462"
                          d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-145-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
                    </path>
                    <path id="MJX-145-TEX-I-1D445"
                          d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D434" xlink:href="#MJX-145-TEX-I-1D434"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(750,0)">
                        <use data-c="1D43B" xlink:href="#MJX-145-TEX-I-1D43B"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1638,0)">
                        <use data-c="1D43F" xlink:href="#MJX-145-TEX-I-1D43F"></use>
                      </g>
                      <g data-mml-node="mtext" transform="translate(2319,0)">
                        <use data-c="2D" xlink:href="#MJX-145-TEX-N-2D"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(2652,0)">
                        <use data-c="1D43F" xlink:href="#MJX-145-TEX-I-1D43F"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(3333,0)">
                        <use data-c="1D462" xlink:href="#MJX-145-TEX-I-1D462"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(3905,0)">
                        <use data-c="1D465" xlink:href="#MJX-145-TEX-I-1D465"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(4477,0)">
                        <use data-c="1D445" xlink:href="#MJX-145-TEX-I-1D445"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">AHL\text{-}LuxR</script>
              </td>
              <td>LuxR and AHL complex</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="7.201ex" height="1.92ex" role="img"
                  focusable="false" viewBox="0 -683 3182.9 848.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-146-TEX-I-1D443"
                          d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
                    </path>
                    <path id="MJX-146-TEX-I-1D43F"
                          d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z">
                    </path>
                    <path id="MJX-146-TEX-I-1D462"
                          d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-146-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
                    </path>
                    <path id="MJX-146-TEX-I-1D442"
                          d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z">
                    </path>
                    <path id="MJX-146-TEX-I-1D441"
                          d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D443" xlink:href="#MJX-146-TEX-I-1D443"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use data-c="1D43F" xlink:href="#MJX-146-TEX-I-1D43F"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(681,0)">
                            <use data-c="1D462" xlink:href="#MJX-146-TEX-I-1D462"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1253,0)">
                            <use data-c="1D465" xlink:href="#MJX-146-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1825,0)">
                            <use data-c="1D442" xlink:href="#MJX-146-TEX-I-1D442"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(2588,0)">
                            <use data-c="1D441" xlink:href="#MJX-146-TEX-I-1D441"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">P_{LuxON}</script>
              </td>
              <td>receptor that has been bound</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="8.177ex" height="1.92ex" role="img"
                  focusable="false" viewBox="0 -683 3614.2 848.6"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.375ex;">
                  <defs>
                    <path id="MJX-147-TEX-I-1D443"
                          d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
                    </path>
                    <path id="MJX-147-TEX-I-1D43F"
                          d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z">
                    </path>
                    <path id="MJX-147-TEX-I-1D462"
                          d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-147-TEX-I-1D465"
                          d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
                    </path>
                    <path id="MJX-147-TEX-I-1D442"
                          d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z">
                    </path>
                    <path id="MJX-147-TEX-I-1D439"
                          d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D443" xlink:href="#MJX-147-TEX-I-1D443"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(675,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use data-c="1D43F" xlink:href="#MJX-147-TEX-I-1D43F"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(681,0)">
                            <use data-c="1D462" xlink:href="#MJX-147-TEX-I-1D462"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1253,0)">
                            <use data-c="1D465" xlink:href="#MJX-147-TEX-I-1D465"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1825,0)">
                            <use data-c="1D442" xlink:href="#MJX-147-TEX-I-1D442"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(2588,0)">
                            <use data-c="1D439" xlink:href="#MJX-147-TEX-I-1D439"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(3337,0)">
                            <use data-c="1D439" xlink:href="#MJX-147-TEX-I-1D439"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">P_{LuxOFF}</script>
              </td>
              <td>receptor that hasn&#39;t been bound</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="4.486ex" height="1.595ex" role="img"
                  focusable="false" viewBox="0 -694 1983 705" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.025ex;">
                  <defs>
                    <path id="MJX-148-TEX-I-1D459"
                          d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z">
                    </path>
                    <path id="MJX-148-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                    <path id="MJX-148-TEX-I-1D450"
                          d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z">
                    </path>
                    <path id="MJX-148-TEX-I-1D44D"
                          d="M58 8Q58 23 64 35Q64 36 329 334T596 635L586 637Q575 637 512 637H500H476Q442 637 420 635T365 624T311 598T266 548T228 469Q227 466 226 463T224 458T223 453T222 450L221 448Q218 443 202 443Q185 443 182 453L214 561Q228 606 241 651Q249 679 253 681Q256 683 487 683H718Q723 678 723 675Q723 673 717 649Q189 54 188 52L185 49H274Q369 50 377 51Q452 60 500 100T579 247Q587 272 590 277T603 282H607Q628 282 628 271Q547 5 541 2Q538 0 300 0H124Q58 0 58 8Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D459" xlink:href="#MJX-148-TEX-I-1D459"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(298,0)">
                        <use data-c="1D44E" xlink:href="#MJX-148-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(827,0)">
                        <use data-c="1D450" xlink:href="#MJX-148-TEX-I-1D450"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1260,0)">
                        <use data-c="1D44D" xlink:href="#MJX-148-TEX-I-1D44D"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">bga2</script>
              </td>
              <td>β-galactosidase</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="10.77ex" height="1.977ex" role="img"
                  focusable="false" viewBox="0 -716 4760.2 873.8"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.357ex;">
                  <defs>
                    <path id="MJX-149-TEX-I-1D45A"
                          d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D445"
                          d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D441"
                          d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D434"
                          d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D459"
                          d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D450"
                          d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z">
                    </path>
                    <path id="MJX-149-TEX-I-1D44D"
                          d="M58 8Q58 23 64 35Q64 36 329 334T596 635L586 637Q575 637 512 637H500H476Q442 637 420 635T365 624T311 598T266 548T228 469Q227 466 226 463T224 458T223 453T222 450L221 448Q218 443 202 443Q185 443 182 453L214 561Q228 606 241 651Q249 679 253 681Q256 683 487 683H718Q723 678 723 675Q723 673 717 649Q189 54 188 52L185 49H274Q369 50 377 51Q452 60 500 100T579 247Q587 272 590 277T603 282H607Q628 282 628 271Q547 5 541 2Q538 0 300 0H124Q58 0 58 8Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D45A" xlink:href="#MJX-149-TEX-I-1D45A"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(878,0)">
                        <use data-c="1D445" xlink:href="#MJX-149-TEX-I-1D445"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1637,0)">
                        <use data-c="1D441" xlink:href="#MJX-149-TEX-I-1D441"></use>
                      </g>
                      <g data-mml-node="msub" transform="translate(2525,0)">
                        <g data-mml-node="mi">
                          <use data-c="1D434" xlink:href="#MJX-149-TEX-I-1D434"></use>
                        </g>
                        <g data-mml-node="TeXAtom" transform="translate(783,-150) scale(0.707)"
                           data-mjx-texclass="ORD">
                          <g data-mml-node="mi">
                            <use data-c="1D459" xlink:href="#MJX-149-TEX-I-1D459"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(298,0)">
                            <use data-c="1D44E" xlink:href="#MJX-149-TEX-I-1D44E"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(827,0)">
                            <use data-c="1D450" xlink:href="#MJX-149-TEX-I-1D450"></use>
                          </g>
                          <g data-mml-node="mi" transform="translate(1260,0)">
                            <use data-c="1D44D" xlink:href="#MJX-149-TEX-I-1D44D"></use>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">mRNA_{bga2}</script>
              </td>
              <td>mRNA of the bga2</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="1.729ex" height="1.538ex" role="img"
                  focusable="false" viewBox="0 -680 764 680" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: 0px;">
                  <defs>
                    <path id="MJX-150-TEX-I-1D438"
                          d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D438" xlink:href="#MJX-150-TEX-I-1D438"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">E</script>
              </td>
              <td>enzyme</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="1.459ex" height="1.645ex" role="img"
                  focusable="false" viewBox="0 -705 645 727" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.05ex;">
                  <defs>
                    <path id="MJX-151-TEX-I-1D446"
                          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D446" xlink:href="#MJX-151-TEX-I-1D446"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">S</script>
              </td>
              <td>substrate</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="3.188ex" height="1.645ex" role="img"
                  focusable="false" viewBox="0 -705 1409 727" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: -0.05ex;">
                  <defs>
                    <path id="MJX-152-TEX-I-1D438"
                          d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z">
                    </path>
                    <path id="MJX-152-TEX-I-1D446"
                          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D438" xlink:href="#MJX-152-TEX-I-1D438"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(764,0)">
                        <use data-c="1D446" xlink:href="#MJX-152-TEX-I-1D446"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">ES</script>
              </td>
              <td>enzyme-substrate complex</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="1.699ex" height="1.545ex" role="img"
                  focusable="false" viewBox="0 -683 751 683" xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" style="vertical-align: 0px;">
                  <defs>
                    <path id="MJX-153-TEX-I-1D443"
                          d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="mi">
                        <use data-c="1D443" xlink:href="#MJX-153-TEX-I-1D443"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">P</script>
              </td>
              <td>product</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="2.117ex" height="1.926ex" role="img"
                  focusable="false" viewBox="0 -694 935.6 851.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.355ex;">
                  <defs>
                    <path id="MJX-154-TEX-I-1D458"
                          d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z">
                    </path>
                    <path id="MJX-154-TEX-I-1D460"
                          d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D458" xlink:href="#MJX-154-TEX-I-1D458"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(554,-150) scale(0.707)">
                          <use data-c="1D460" xlink:href="#MJX-154-TEX-I-1D460"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">k_s</script>
              </td>
              <td>the equilibrium constant of dissociation</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="4.073ex" height="1.927ex" role="img"
                  focusable="false" viewBox="0 -694 1800.2 851.8"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.357ex;">
                  <defs>
                    <path id="MJX-155-TEX-I-1D458"
                          d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z">
                    </path>
                    <path id="MJX-155-TEX-I-1D450"
                          d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z">
                    </path>
                    <path id="MJX-155-TEX-I-1D44E"
                          d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z">
                    </path>
                    <path id="MJX-155-TEX-I-1D461"
                          d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D458" xlink:href="#MJX-155-TEX-I-1D458"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(554,-150) scale(0.707)">
                          <use data-c="1D450" xlink:href="#MJX-155-TEX-I-1D450"></use>
                        </g>
                      </g>
                      <g data-mml-node="mi" transform="translate(910.2,0)">
                        <use data-c="1D44E" xlink:href="#MJX-155-TEX-I-1D44E"></use>
                      </g>
                      <g data-mml-node="mi" transform="translate(1439.2,0)">
                        <use data-c="1D461" xlink:href="#MJX-155-TEX-I-1D461"></use>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">k_cat</script>
              </td>
              <td>turnover number</td>
            </tr>
            <tr>
              <td>
                <mjx-container class="MathJax" jax="SVG" style="position: relative;"><svg
                  xmlns="http://www.w3.org/2000/svg" width="3.513ex" height="1.902ex" role="img"
                  focusable="false" viewBox="0 -683 1552.8 840.8"
                  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                  style="vertical-align: -0.357ex;">
                  <defs>
                    <path id="MJX-156-TEX-I-1D43E"
                          d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z">
                    </path>
                    <path id="MJX-156-TEX-I-1D45A"
                          d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z">
                    </path>
                  </defs>
                  <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)">
                    <g data-mml-node="math">
                      <g data-mml-node="msub">
                        <g data-mml-node="mi">
                          <use data-c="1D43E" xlink:href="#MJX-156-TEX-I-1D43E"></use>
                        </g>
                        <g data-mml-node="mi" transform="translate(882,-150) scale(0.707)">
                          <use data-c="1D45A" xlink:href="#MJX-156-TEX-I-1D45A"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></mjx-container>
                <script type="math/tex">K_m</script>
              </td>
              <td>Michaelis constant</td>
            </tr>
            </tbody>
          </table>
        </figure>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="Reference">
        <h1 id='reference'>Reference</h1>
        <ol start=''>
          <li>Vaziri N D, Wong J, Pahl M, et al. Chronic kidney disease alters intestinal microbial flora[J]. Kidney
            international, 2013, 83(2): 308-315.</li>
          <li>Dodd D, Spitzer M H, Van Treuren W, et al. A gut bacterial pathway metabolizes aromatic amino acids into
            nine circulating metabolites[J]. Nature, 2017, 551(7682): 648-652.</li>
          <li>Rutherford S T, Bassler B L. Bacterial quorum sensing: its role in virulence and possibilities for its
            control[J]. Cold Spring Harbor perspectives in medicine, 2012, 2(11): a012427.</li>
          <li>Wilkinson D J. Stochastic modelling for systems biology[M]. Chapman and Hall/CRC, 2018.</li>
          <li>Petrovskii S, Kawasaki K, Takasu F, et al. Diffusive waves, dynamical stabilization and spatio-temporal
            chaos in a community of three competitive species[J]. Japan journal of industrial and applied mathematics,
            2001, 18(2): 459-481.</li>
        </ol>
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
import conf from '@/wiki_config';

import head_image from '@/assets/head_images/model/bannermodel.png'
import fig1_1 from '@/assets/model/fig1.1.svg'
import fig1_2 from '@/assets/model/fig1.2.svg'
import fig2_1 from '@/assets/model/fig2.1.png'
import fig2_2 from '@/assets/model/fig2.2.png'
import fig3 from '@/assets/model/fig3.png'

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
      // TODO: set image URI
      head_image: conf.isDev ? head_image : '',
      // TODO: set image URI
      fig1_1: conf.isDev ? fig1_1 : '',
      fig1_2: conf.isDev ? fig1_2 : '',
      fig2_1: conf.isDev ? fig2_1 : '',
      fig2_2: conf.isDev ? fig2_2 : '',
      fig3: conf.isDev ? fig3 : '',
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
  border: 2px solid #271272;
}

.mathjax-block {
  text-align: center;
}

.bnuz-content-nav-sticky {
  top: 10% !important;
}

@font-face {
  font-family: text_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

p, li {
  font-size: 20px;
  font-family: text_font, serif;
}
</style>
