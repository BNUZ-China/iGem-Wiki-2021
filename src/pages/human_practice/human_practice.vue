<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678" style="margin: 0">
    <BNUZ_Content_no_nav>
      <BNUZ_content_paragraph>
        <h4>Overview</h4>
        <p>
          In recent years, the incidence of chronic kidney disease (CKD) has been increasing worldwide. According to the
          World Health Organization's Global Health Estimates report released on December 9, 2020, kidney disease has
          risen to become one of the top ten causes of death in the world. In the presence of such a critical situation,
          our team proposed a treatment plan for CKD based on synthetic biology. In order to make our project more
          targeted and effective, and to be better utilized in practice, we conducted questionnaires and analysis,
          cooperated with other teams from different universities, interviewed experts in relevant fields, and carried
          out a series of scientific communication activities. We obtained lots of professional opinions, so as to
          continuously make progress and improve our projects.
        </p>
      </BNUZ_content_paragraph>
      <b-container class="bnuz-hp-content-modal-container">
        <BNUZ_hp_modal_content_left>
          <template slot="text">
            Problem Investigation
          </template>
          <template slot="icon">
            <BNUZ_content_modal name="modal1" title="Problem Investigation">
              <template slot="modal-icon">
                <svg t="1633850718187" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2482" width="200" height="200">
                  <path
                    d="M307.23 450.74m120 0l351.79 0q120 0 120 120l0 146.46q0 120-120 120l-351.79 0q-120 0-120-120l0-146.46q0-120 120-120Z"
                    fill="#E9F1FF" p-id="3714"></path>
                  <path
                    d="M808 864H216c-83.81 0-152-68.19-152-152V312c0-83.81 68.19-152 152-152h592c83.81 0 152 68.19 152 152v400c0 83.81-68.19 152-152 152zM216 224a88.1 88.1 0 0 0-88 88v400a88.1 88.1 0 0 0 88 88h592a88.1 88.1 0 0 0 88-88V312a88.1 88.1 0 0 0-88-88z"
                    fill="#2C5CCB" p-id="3715"></path>
                  <path
                    d="M484.76 592h-200a92.1 92.1 0 0 1-92-92V396a92.1 92.1 0 0 1 92-92h200a92.1 92.1 0 0 1 92 92v104a92.1 92.1 0 0 1-92 92z m-200-224a28 28 0 0 0-28 28v104a28 28 0 0 0 28 28h200a28 28 0 0 0 28-28V396a28 28 0 0 0-28-28zM799.38 384h-128a32 32 0 0 1 0-64h128a32 32 0 1 1 0 64zM799.38 544.82h-0.25l-128-1a32 32 0 0 1 0.24-64h0.26l128 1a32 32 0 0 1-0.25 64zM799.72 735.88h-575a32 32 0 1 1 0-64h575a32 32 0 0 1 0 64z"
                    fill="#2C5CCB" p-id="3716"></path>
                </svg>
              </template>
              <template slot="modal-body">
                <p class="modal-text">
                  As one of our team member’s grandma is suffering from CKD, we paid our attention to CKD. After conducting a survey, we surprisingly found that many people knew little about CKD(Fig. 1) even though its prevalence is getting higher and higher. In our survey, people with CKD are not aware of their CKD staging, which indicates that the “slient killer” has not attracted enough attention yet. In fact, CKD is the 6th fastest growing cause of death globally, causing at least 2.4 milion deaths per year. We also learned that there is still no cure for CKD and no means to revert it. Therefore, we decided to focus our project on the treatment of CKD. We also investigated people’s understanding of synthetic biology(Fig. 2), which encouraged us to do more with the methods people are more willing to accept to raise the public’s knowledge (Fig. 3), which can be found in
                  <!--                 TODO 链接到communication -->
                  <a href="communication"> our
                    science communication </a>.
                </p>
                <img :src="p1_pic1">
                <img :src="p1_pic2">
                <img :src="p1_pic3">
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_left>
        <BNUZ_hp_modal_content_right>
          <template slot="text">
            Initial exploration
          </template>
          <template slot="icon">
            <BNUZ_content_modal name="initial_exploration" title="Initial exploration">
              <template v-slot:modal-icon>
                <svg t="1634283688075" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3860"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M896.17 438.37m0 50.06l0 325.33q0 50.06-50.06 50.06l-30.38 0q-50.06 0-50.06-50.06l0-325.33q0-50.06 50.06-50.06l30.38 0q50.06 0 50.06 50.06Z"
                    fill="#E9F1FF" p-id="3861"></path>
                  <path
                    d="M609 438.36m0 50.06l0 325.33q0 50.06-50.06 50.06l-30.38 0q-50.06 0-50.06-50.06l0-325.33q0-50.06 50.06-50.06l30.38 0q50.06 0 50.06 50.06Z"
                    fill="#E9F1FF" p-id="3862"></path>
                  <path
                    d="M320.06 438.36m0 50.06l0 325.33q0 50.06-50.06 50.06l-30.38 0q-50.06 0-50.06-50.06l0-325.33q0-50.06 50.06-50.06l30.38 0q50.06 0 50.06 50.06Z"
                    fill="#E9F1FF" p-id="3863"></path>
                  <path
                    d="M270 895.92h-91.88a82.15 82.15 0 0 1-82.06-82.06V402a82.14 82.14 0 0 1 82.06-82.05H270A82.14 82.14 0 0 1 352.06 402v411.86A82.15 82.15 0 0 1 270 895.92z m-91.89-512A18.07 18.07 0 0 0 160.06 402v411.86a18.08 18.08 0 0 0 18.06 18.06H270a18.08 18.08 0 0 0 18.05-18.06V402A18.07 18.07 0 0 0 270 383.92zM558.94 895.92h-91.89A82.15 82.15 0 0 1 385 813.86V402a82.14 82.14 0 0 1 82.05-82.05h91.89A82.14 82.14 0 0 1 641 402v411.86a82.15 82.15 0 0 1-82.06 82.06z m-91.89-512A18.07 18.07 0 0 0 449 402v411.86a18.08 18.08 0 0 0 18.05 18.06h91.89A18.08 18.08 0 0 0 577 813.86V402a18.07 18.07 0 0 0-18.06-18.05zM846.12 895.92h-91.89a82.14 82.14 0 0 1-82.05-82.06V402a82.13 82.13 0 0 1 82.05-82.05h91.89A82.14 82.14 0 0 1 928.18 402v411.86a82.15 82.15 0 0 1-82.06 82.06z m-91.89-512A18.07 18.07 0 0 0 736.18 402v411.86a18.08 18.08 0 0 0 18.05 18.06h91.89a18.08 18.08 0 0 0 18.06-18.06V402a18.07 18.07 0 0 0-18.06-18.05z"
                    fill="#2C5CCB" p-id="3864"></path>
                  <path
                    d="M511.33 360.36a32 32 0 0 1-32-32V191.89H274.11a18.08 18.08 0 0 0-18.06 18.05v118.42a32 32 0 0 1-64 0V209.94a82.15 82.15 0 0 1 82.06-82h237.22a32 32 0 0 1 32 32v168.42a32 32 0 0 1-32 32z"
                    fill="#2C5CCB" p-id="3865"></path>
                  <path
                    d="M800.15 360.37a32 32 0 0 1-32-32v-118.4a18 18 0 0 0-18.05-18.06H509.51a32 32 0 0 1 0-64h240.63A82 82 0 0 1 832.19 210v118.4a32 32 0 0 1-32.04 31.97z"
                    fill="#2C5CCB" p-id="3866"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <p>
                  Prof. Xiaoyan Wang
                  Distinguished Associate Researcher, Centre for Biotechnology Research, Beijing Normal University At
                  Zhuhai. Research fields: Regulation of plant small molecule RNA metabolism and mechanisms of action.

                </p>
                <div class="left-right-div">
                  <img :src="p2_pic1">
                  <p>
                    Prof. Wang, who was once the mentor of SZU-China, led SZU-China to the Gold Award in iGEM 2019.
                    Therefore, he is familiar with iGEM and has rich experience in instructing the teams. Facing such a
                    big event as iGEM, we sometimes really feel overwhelmed. At this time, Prof. Wang provided extremely
                    helpful advice not only on how to build up a wonderful igem team, including team communication, team
                    collarboration and team management, but also on how to design a feasible experiment plan. Moreover,
                    he also reminded us to pay attention to the iGEM calendar and plan our time in advance. We were able
                    to establish a good relationship with SZU-China with the instruction of Prof. Wang.
                  </p>
                </div>

                <div class="left-right-div">
                  <img :src="p2_pic2" width="65%">
                </div>
                <p>

                  Prof. Zhiwei Qin
                  Deputy Director and Distinguished Professor, Centre for Biotechnology Research, Beijing Normal
                  University at Zhuhai. Research fields: research on new active natural products of microbial sources.

                </p>
                <div class="left-right-div">
                  <img :src="p2_pic3">
                  <img :src="p2_pic4">
                </div>
                <p>
                  Prof. Qin has been working mainly on novel active natural products of microbial origin for more than
                  10 years and is well versed in microbial metabolism. We discussed with him about the idea that we
                  wanted to reduce the production of enterogenic toxins by changing the metabolic pathways in the gut.
                  He told us some effects of altering bacterial metabolic pathways. For example, the modified bacteria
                  may be unstable and more difficult to survive. After brainstorming and reviewing the literature, we
                  decided to promote the growth of modified engineering bacteria by overexpressing GDH, which is
                  involved in the pentose phosphate pathway and thus promotes bacterial metabolism.
                </p>
                <p>
                  Prof. Xvdong Zhu
                  Editor of Chinese Journal of Biotechnology, Research Fields & Emphasis: Fungal secondary metabolism
                  and Synthetic Biology, Studies on RNAi and endogenous siRNA biology of fungi.
                </p>
                <div class="left-right-div">
                  <img :src="p2_pic5">

                </div>
                <p>
                  When we first started to design our project, we were so confused and couldn’t work out quite a few
                  questions. Prof. Xudong Zhu offered us a lot of help. After listening the initial design of our
                  project, Prof. Zhu asked us one question: for the treatment of CKD, why not directly adjust the colony
                  but directly regulate radon? The answer of this question is that colonies are not statistical and it
                  is difficult to quantitative verification of the results of the program.
                  Then, Prof. Zhu gave us suggestions and answered our puzzles during project design, modeling, and
                  human practice.
                </p>
                <img :src="p2_pic6">
                <p>
                  When talking about the project design, Prof. Zhu first introduced us two series of plasmids used in E.
                  coli. Then, he told us about the issues in strain selection. He discussed with us about the detection
                  of knockout. He further raised the problem that the fld gene cluster we want to insert may be too
                  large to express. Finally, he reminded us that innovative elements are needed in the project design.
                  In regards to our confusions in the modeling part, Prof. Zhu suggested that the content of the quorum
                  sensing mechanism can be studied using modeling. The last part we discussed is human practice. Prof.
                  Zhu told us to "go out and investigate", that is, to get in touch with people from all walks of life
                  in society, especially doctors and employees of biomedical companies. We need to investigate and
                  understand the following two questions: 1. whether CKD is serious and whether our project is
                  important; 2. whether our research can be put into production and own a market.


                </p>
                <img :src="p2_pic7">
                <p>
                  Following the guidances from Prof. Zhu, we have a more accurate understanding about the iGEM
                  competition, and we refined our plan and revised the deficiencies.
                </p>

              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_right>
        <BNUZ_hp_modal_content_left>
          <template v-slot:text>
            Idea Assessment
          </template>
          <template v-slot:icon>
            <BNUZ_content_modal>
              <template v-slot:modal-icon>
                <svg t="1634283719712" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4006"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M923.06 876.39l-128.82-70H399a120 120 0 0 1-120-120V465.71a120 120 0 0 1 120-120h404a120 120 0 0 1 120 120z"
                    fill="#E9F1FF" p-id="4007"></path>
                  <path d="M252.96 424m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#2C5CCB" p-id="4008"></path>
                  <path d="M445 424m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#2C5CCB" p-id="4009"></path>
                  <path d="M637.04 424m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" fill="#2C5CCB" p-id="4010"></path>
                  <path
                    d="M123.13 787.21A62.12 62.12 0 0 1 61 725.07v-390.4A205.2 205.2 0 0 1 265.67 130h358.66A205.2 205.2 0 0 1 829 334.67v166.66A205.2 205.2 0 0 1 624.33 706H288.24a63.24 63.24 0 0 0-33.74 9.74l-98.24 61.9a62 62 0 0 1-33.13 9.57zM265.67 194A141.18 141.18 0 0 0 125 334.67v387l95.38-60.11A127.22 127.22 0 0 1 288.24 642h336.09A141.18 141.18 0 0 0 765 501.33V334.67A141.18 141.18 0 0 0 624.33 194z"
                    fill="#2C5CCB" p-id="4011"></path>
                  <path
                    d="M903 912.55a62.09 62.09 0 0 1-33.14-9.55l-98.25-61.91a63.18 63.18 0 0 0-33.73-9.74H401.79a203.34 203.34 0 0 1-111.24-33.06 32 32 0 0 1 34.93-53.63 139.46 139.46 0 0 0 76.31 22.69h336.09a127.08 127.08 0 0 1 67.85 19.6L901.12 847V460a138.84 138.84 0 0 0-30.64-87.34 32 32 0 1 1 50-39.89A204.93 204.93 0 0 1 965.12 460v390.4A62.13 62.13 0 0 1 903 912.55z"
                    fill="#2C5CCB" p-id="4012"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <div class="left-right-div">
                  <p>
                    Dr. Ban Zhao, Deputy Director of Beijing Hospital, specializes in Integrated diagnosis and
                    management of peritoneal dialysis, diagnosis and follow-up management of chronic kidney disease, and
                    comprehensive diagnosis and treatment of diabetic nephropathy.

                  </p>
                  <img :src="p3_pic1">
                </div>
                <div class="left-right-div">
                  <img :src="p3_pic2" width="20%">
                  <p>
                    Dr. Qiang Qiu, Deputy Director of Beijing Chaoyang Hospital Affiliated to Capital University of
                    Medical Sciences, specializes in chronic and acute glopher nephritis, chronic and acute kidney
                    insanity.
                  </p>
                </div>
                <p>
                  In order to learn more about CDK and make sure the safety and practicability of our project, we
                  consulted with Drs. Qiu and Zhao. Both of them are experts in the nephrology department. We conducted
                  online interviews, which include the following questions:
                  1. What is the current status of CKD in China? What are the common treatments for CKD?
                  2. What are the disadvantages of the common treatments for CKD and what can be improved?
                  3. Do you know about the biological therapies that have been applied? What do you think are the
                  advantages and disadvantages compared to other treatments?
                  4. Do you think the intestinal flora is related to the development of CKD?
                  5. Do you think our project will be recognized and accepted by patients? Is there any lack of
                  consideration in terms of security?

                </p>
                <img :src="p3_pic3" width="95%">
                <p>
                  Thanks to the timely help from the two experts, all of our questions were answered in detailed and
                  therefore we were able to improve our project. They told us that CKD has become one of the chronic
                  diseases that seriously endangers public health. Patients with CKD in clinical phase 5 can only rely
                  on hemodialysis for treatment. The economic burden involved in dialysis and the mobility caused by
                  dialysis has led to poor quality of life for these patients. Currently most CKD process are
                  irreversible, which means that they cannot be cured. This is why CKD has become a hot spot in clinical
                  researches, making our project meaningful. As for the improvement of common treatments, the main parts
                  are the methods to detect and completely cure this disease. The early symptoms of CKD are not obvious,
                  and even the related indicators do not deviate too much from the normal indicators. It is necessary to
                  increase the public awareness of CKD, so that more people can pay attention to it and carry out
                  examinations in time. Moreover, if we want to cure this disease, it’s very important to find new ways
                  and try boldly based on enough researches and experiments. As for their appraise on our project, Dr.
                  Qiu said the project design itself is well done, including the construction of signal pathways,
                  expected expression effects and so on. As they have mentioned above, the cure of chronic diseases
                  needs brand new ideas. Talking about the safety of our project, Dr. Zhao said that fecal bowel
                  transplantation, live bacteria preparations and other treatments have been applied in the clinic. So,
                  if our project can progress to the clinical trial stage in the future, it should be accepted and
                  recognized by patients. From a theoretical perspective, our design is relatively safe. However,
                  whether a drug or treatment is safe or not must go through animal experiments and clinical trials.
                </p>
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_left>
        <BNUZ_hp_modal_content_right>
          <template v-slot:text>
            Project<br>Design
          </template>
          <template v-slot:icon>
            <BNUZ_content_modal name="project_design" title="Project Design">
              <template v-slot:modal-icon>
                <svg t="1634283752753" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4158"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M376.19 833.94c-32.09 0-58.67-9.64-77.79-28.75-33.37-33.38-37.85-89.48-12.62-158 23-62.54 68.69-129.94 128.54-189.79s127.25-105.46 189.79-128.5c68.49-25.24 124.59-20.76 158 12.62s37.85 89.47 12.62 158C751.65 562 706 629.42 646.15 689.27S518.9 794.76 456.37 817.8c-29.26 10.78-56.25 16.14-80.18 16.14z"
                    fill="#E9F1FF" p-id="4159"></path>
                  <path
                    d="M564.28 678.63a0.23 0.23 0 0 0-0.07 0.07zM437.9 188.9l-0.5-0.23zM834.78 588.25c-0.13-0.29-0.26-0.58-0.4-0.87 0.15 0.28 0.27 0.62 0.4 0.87z"
                    fill="#2C5CCB" p-id="4160"></path>
                  <path d="M510.39 511.42m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#2C5CCB" p-id="4161"></path>
                  <path
                    d="M827.17 828.2c-45.6 45.6-122.26 51.72-215.85 17.24a535.12 535.12 0 0 1-57.05-25.07 674.45 674.45 0 0 1-63-36.57q-9.58-6.25-19.15-12.9c-18.74-13-37.38-27.22-55.75-42.42-21.95-18.15-43.52-37.78-64.41-58.67-20.68-20.68-40.13-42-58.13-63.76q-22.65-27.3-42.15-55.25-5-7.09-9.7-14.22a687.09 687.09 0 0 1-37.38-62.86 538 538 0 0 1-28.27-63.24c-14.73-40-22.05-76.86-22.05-109.56 0-43.85 13.17-80.17 39.29-106.29 45.6-45.6 122.26-51.72 215.85-17.24q13.4 4.94 27 10.87l0.81 0.35 0.15 0.07 0.5 0.23a32 32 0 1 1-27.68 57.72q-11.54-5-22.89-9.19c-67.81-25-121.93-24.09-148.46 2.45s-27.43 80.65-2.45 148.46q4.5 12.22 10 24.67a551 551 0 0 0 33.06 63.26q5.06 8.37 10.48 16.77c11.89 18.42 25.07 36.84 39.39 55.08a855.21 855.21 0 0 0 67.94 76.42 854 854 0 0 0 78 69.2c18.38 14.36 36.94 27.55 55.49 39.44q10 6.38 19.92 12.26a535 535 0 0 0 63.5 32.31q9.69 4.11 19.25 7.63c67.81 25 121.93 24.09 148.46-2.45 13.7-13.69 20.57-34.74 20.57-61.23 0-24.82-6-54.42-18.12-87.23q-3.58-9.74-7.79-19.6a32 32 0 1 1 57.82-27.48c0.14 0.29 0.27 0.58 0.4 0.87s0.14 0.32 0.2 0.48q5.12 11.88 9.43 23.62c34.49 93.57 28.37 170.23-17.23 215.83z"
                    fill="#2C5CCB" p-id="4162"></path>
                  <path
                    d="M844.41 410.48C812.93 495.93 750.55 588 668.78 669.81c-20.14 20.14-40.9 39.1-62 56.71l-0.09 0.08-0.24 0.2a32 32 0 1 1-42.2-48.1 0.23 0.23 0 0 1 0.07-0.07l0.58-0.49c19.93-16.58 39.57-34.5 58.66-53.59 75.33-75.37 132.44-159.25 160.8-236.2 25-67.81 24.09-121.93-2.44-148.46-13.7-13.7-34.75-20.57-61.23-20.57-24.83 0-54.43 6-87.24 18.12-77 28.35-160.83 85.47-236.2 160.84A854.9 854.9 0 0 0 329.09 475c-14.31 18.24-27.47 36.67-39.36 55.1q-4.17 6.46-8.13 12.93a559.47 559.47 0 0 0-33.41 62.73q-6.54 14.5-11.78 28.75c-25 67.81-24.09 121.93 2.45 148.46s80.65 27.43 148.46 2.45q12.82-4.73 25.89-10.51h0.06A32 32 0 1 1 440 833q-15.37 6.86-30.52 12.43c-40 14.73-76.86 22-109.56 22-43.85 0-80.17-13.17-106.29-39.29-45.6-45.6-51.72-122.26-17.24-215.85a543.47 543.47 0 0 1 30.25-67A699.22 699.22 0 0 1 244.22 483q3.57-5.31 7.28-10.62 19.44-27.88 42.13-55.28c18.07-21.82 37.59-43.26 58.36-64 81.78-81.77 173.88-144.15 259.33-175.63 93.59-34.48 170.25-28.36 215.85 17.24s51.72 122.18 17.24 215.77z"
                    fill="#2C5CCB" p-id="4163"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <div class="left-right-div">
                  <img :src="p4_pic1" width="20%">
                  <p>
                    Prof. Mingzhang Wen
                    Executive Director and Researcher of Tianjin University “S everest Program" Ministry of Education
                    Frontier Science Center; Research Fields & Emphasis: plant synthetic biology, genome design,
                    synthesis and genomic evolution, DNA synthesis instruments and equipment.

                  </p>
                </div>
                <p>
                  We had a difficulty in the design of our project. We want to promote the growth of the modified
                  engineering bacteria, but not to allow it to grow indefinitely so as to keep balance after it is
                  planted into the intestines. For the former, we overpressed the GDH gene of E. coli Nissle 1917 (Ecn)
                  to improve the metabolic efficiency of bacteria and obtained a growth advantage. While for the latter,
                  we have no idea about how to implement the design. Prof. Mingzhang Wen of Tianjin University gave us
                  some useful ideas and advices. Then, we came up with the way to control bacterial population with QS
                  system and to promote the growth of Bifidobacterium with GOS.
                </p>
                <div class="left-right-div">
                  <img :src="p4_pic2" width="40%">
                  <img :src="p4_pic3" width="40%">
                </div>
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_right>
        <BNUZ_hp_modal_content_left>
          <template v-slot:icon>
            <BNUZ_content_modal name="Implementationtoexperiment"
                                title="Implementation to experiment">
              <template v-slot:modal-icon>
                <svg t="1634449883933" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3713"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M235.542395 748.593079a216.36 382.44 55.62 1 0 631.263616-431.911635 216.36 382.44 55.62 1 0-631.263616 431.911635Z"
                    fill="#E9F1FF" p-id="3714"></path>
                  <path
                    d="M392 951.65a33.4 33.4 0 0 1-4.09-0.26 32 32 0 0 1-27.7-35.79l107.43-843a32 32 0 0 1 31.74-28h0.19a32 32 0 0 1 31.6 28.4L623 867.77a32 32 0 0 1-63.58 7.34L497.83 342 423.7 923.69a32 32 0 0 1-31.7 27.96z"
                    fill="#2C5CCB" p-id="3715"></path>
                  <path
                    d="M577.3 770.71a32 32 0 0 1-14.86-60.36 725.94 725.94 0 0 0 68-40.49c46.09-31 87.32-66.06 122.54-104.3 33.63-36.51 60.3-74.24 79.27-112.13 18.31-36.58 28.41-71.19 30-102.86 1.52-30.36-5-56.6-19.38-78-18.22-27.12-48-45.3-88.44-54-42.07-9.07-93.55-7.05-148.9 5.83A32 32 0 1 1 591 162c64.49-15 125.66-17.11 176.9-6.06 56.4 12.16 100.69 40.14 128.07 80.91 22.26 33.12 32.41 72.46 30.18 116.91-2 40.58-14.39 83.75-36.69 128.3C845.25 570.37 765.92 655.92 666.1 723a791.37 791.37 0 0 1-74 44.08 31.85 31.85 0 0 1-14.8 3.63zM327 441.56L341.12 457a19.39 19.39 0 0 0 15.26 6l22.55-1.16c11.81-0.61 19.44 10.78 12.92 19.27l-12.46 16.23a13.69 13.69 0 0 0-1.65 14.34l8.48 18.24c4.44 9.54-5.63 19.23-17 16.4l-21.79-5.42a20 20 0 0 0-16.28 2.92l-17.36 12.38c-9.06 6.51-22.91 1.11-23.44-9.13l-1-19.58c-0.26-5.1-3.41-9.79-8.4-12.54l-19.21-10.55c-10-5.53-8.53-18.55 2.55-22l21.17-6.68c5.51-1.74 9.66-5.73 11.08-10.67L302 446c2.86-9.88 17.64-12.53 25-4.44zM224.52 382.92l3.08 10.24a7.3 7.3 0 0 0 6.09 5l11.57 1.84c6.05 0.95 6.94 8.19 1.5 12.26L236.37 420a10.67 10.67 0 0 0-4.51 7.89l-0.45 11.19c-0.23 5.86-7.75 10.2-12.72 7.36L209.2 441a10.08 10.08 0 0 0-8.89-0.15L188.47 446c-6.19 2.67-11.73-1.89-9.36-7.71l4.52-11.13a7.64 7.64 0 0 0-1-8l-6.87-8c-3.59-4.21 0.5-11.37 6.93-12.12l12.31-1.49a12.34 12.34 0 0 0 8.28-4.79l7.6-10.06c3.97-5.27 12.04-5.14 13.64 0.22zM145.83 578.26l3.91 12a8.45 8.45 0 0 0 6.9 5.8l12.65 1.94c6.62 1 8 9.52 2.32 14.41l-10.85 9.32a12.46 12.46 0 0 0-4.45 9.37l0.14 13.19c0.07 6.89-7.84 12.15-13.39 8.89l-10.61-6.23a10.15 10.15 0 0 0-9.65 0l-12.57 6.21c-6.58 3.26-12.84-2-10.59-8.9l4.28-13.18a9.7 9.7 0 0 0-1.51-9.38l-7.9-9.34c-4.14-4.89-0.1-13.4 6.84-14.4l13.26-1.96a12.74 12.74 0 0 0 8.72-5.79l7.68-12c3.99-6.21 12.78-6.21 14.82 0.05zM304.47 715.32l5.95 14.6a11.51 11.51 0 0 0 9.1 7.05l15.9 2.34c8.33 1.22 10.8 11.58 4.19 17.52L327 768.19a13.9 13.9 0 0 0-4.69 11.41l1.38 16c0.72 8.39-8.64 14.8-15.84 10.83l-13.76-7.57a12.9 12.9 0 0 0-12 0L267 806.47c-7.87 4-16.14-2.44-14-10.83l4.13-16a12.09 12.09 0 0 0-2.73-11.41l-10.68-11.36c-5.58-5.94-1.33-16.3 7.2-17.52l16.36-2.35a14.45 14.45 0 0 0 10.31-7.05l8.45-14.6c4.43-7.66 15.32-7.66 18.43-0.03zM353.26 263.82l1.41 6.69a4.17 4.17 0 0 0 3.71 3.24l7.5 1.1c3.93 0.57 4.08 5.32 0.26 8l-7.29 5.18a8 8 0 0 0-3.44 5.22l-1 7.35c-0.5 3.84-5.7 6.76-8.8 4.93l-5.92-3.48a6.59 6.59 0 0 0-5.84 0l-8.09 3.45c-4.23 1.8-7.6-1.14-5.7-5l3.63-7.34a4.86 4.86 0 0 0-0.17-5.23l-4-5.22c-2.12-2.73 1-7.46 5.28-8l8.17-1.05a9.28 9.28 0 0 0 5.73-3.21l5.59-6.68c2.93-3.47 8.23-3.45 8.97 0.05z"
                    fill="#2C5CCB" p-id="3716"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <p>
                  Prof. Zhong Guo
                  Distinguished Associate Researcher, Biotechnology Research Centre, Beijing Normal University At
                  Zhuhai. Research field: Smart responsive targeted nanomaterials for drug delivery, genes and vaccines
                  for the treatment of tumors or antimicrobial therapy, Synthetic Biology
                </p>
                <div class="left-right-div">
                  <img :src="p5_pic1" width="45%">
                  <img :src="p5_pic2" width="45%">
                </div>
                <p>
                  After starting the experiment, we had a very difficult time, during which we repeated the ligation
                  reaction. Though tried many times we only found it failed again and again. Prof. Guo is a
                  distinguished researcher in the field of synthetic biology. So, we asked for his help. He said that
                  there could be lots of reasons for the failure of ligation reaction. He suggested that we should check
                  if the ligase was able to ligate our DNA fragments, and the buffer, temperature and so on. Following
                  Prof. Guo’s instructions, we improved our experiments and finally succeeded. Besides, Mr. Kwok also
                  gave us a lot of guidances and advices on other experiments.
                </p>

              </template>
            </BNUZ_content_modal>
          </template>
          <template v-slot:text>
            Implementation to experiment
          </template>
        </BNUZ_hp_modal_content_left>
        <BNUZ_hp_modal_content_right>
          <template v-slot:text>
            Further improvement
          </template>
          <template v-slot:icon>
            <BNUZ_content_modal name="further_improvement" title="Further improvement">
              <template v-slot:modal-icon>
                <svg t="1634283768545" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4305"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M180.74 331.63m40.06 0l45.12 0q40.06 0 40.06 40.06l0 419.97q0 40.06-40.06 40.06l-45.12 0q-40.06 0-40.06-40.06l0-419.97q0-40.06 40.06-40.06Z"
                    fill="#E9F1FF" p-id="4306"></path>
                  <path
                    d="M448.55 331.63m40.06 0l45.12 0q40.06 0 40.06 40.06l0 419.97q0 40.06-40.06 40.06l-45.12 0q-40.06 0-40.06-40.06l0-419.97q0-40.06 40.06-40.06Z"
                    fill="#E9F1FF" p-id="4307"></path>
                  <path
                    d="M734.578861 328.699834m39.219137-8.164734l44.172927-9.196026q39.219137-8.164734 47.383871 31.054404l85.595188 411.154794q8.164734 39.219137-31.054404 47.383871l-44.172927 9.196026q-39.219137 8.164734-47.383871-31.054404l-85.595188-411.154794q-8.164734-39.219137 31.054404-47.383871Z"
                    fill="#E9F1FF" p-id="4308"></path>
                  <path
                    d="M264.45 861.79H152.57a72.14 72.14 0 0 1-72.06-72.06V229.86a72.15 72.15 0 0 1 72.06-72.07h111.88a72.15 72.15 0 0 1 72.06 72.07v559.87a72.14 72.14 0 0 1-72.06 72.06z m-111.88-640a8.07 8.07 0 0 0-8.06 8.07v559.87a8.06 8.06 0 0 0 8.06 8.06h111.88a8.07 8.07 0 0 0 8.06-8.06V229.86a8.08 8.08 0 0 0-8.06-8.07z"
                    fill="#2C5CCB" p-id="4309"></path>
                  <path d="M206.18 331.63m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z" fill="#2C5CCB" p-id="4310"></path>
                  <path
                    d="M534.57 861.79H422.69a72.14 72.14 0 0 1-72.06-72.06V229.86a72.15 72.15 0 0 1 72.06-72.07h111.88a72.15 72.15 0 0 1 72.06 72.07v559.87a72.14 72.14 0 0 1-72.06 72.06z m-111.88-640a8.08 8.08 0 0 0-8.06 8.07v559.87a8.07 8.07 0 0 0 8.06 8.06h111.88a8.07 8.07 0 0 0 8.06-8.06V229.86a8.08 8.08 0 0 0-8.06-8.07z"
                    fill="#2C5CCB" p-id="4311"></path>
                  <path d="M476.3 331.63m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z" fill="#2C5CCB" p-id="4312"></path>
                  <path
                    d="M792.07 858.33A72.18 72.18 0 0 1 721.36 800L614.53 250.42a72.14 72.14 0 0 1 57-84.49l109.83-21.34a72.14 72.14 0 0 1 84.48 57l106.81 549.57a72 72 0 0 1-57 84.49L805.84 857a72 72 0 0 1-13.77 1.33z m3.07-651.08a8.16 8.16 0 0 0-1.59 0.16l-109.82 21.35a8.07 8.07 0 0 0-6.38 9.45L784.18 787.8a8.08 8.08 0 0 0 9.45 6.38l109.82-21.35a8.07 8.07 0 0 0 6.38-9.45L803 213.79a8.1 8.1 0 0 0-7.86-6.54z"
                    fill="#2C5CCB" p-id="4313"></path>
                  <path d="M754.98 326.85m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z" fill="#2C5CCB" p-id="4314"></path>
                  <path
                    d="M293.41 486h-180.9a30 30 0 1 1 0-60h180.9a30 30 0 1 1 0 60zM569.08 486h-180.9a30 30 0 0 1 0-60h180.9a30 30 0 0 1 0 60zM694.34 494.39a30 30 0 0 1-5.7-59.46l177.58-34.51a30 30 0 0 1 11.45 58.89l-177.58 34.52a29.79 29.79 0 0 1-5.75 0.56z"
                    fill="#2C5CCB" p-id="4315"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <p>
                  Xiaolei Ze, R&D Head on Microbiome and Probiotics，Science and Technology Center of By-Health.
                </p>
                <div class="left-right-div">
                  <img :src="p6_pic1" width="85%">
                </div>
                <p>
                  We also hope that our idea can eventually be applied and put on the market to serve the public and truly meet their needs. So, we have to consider about whether our idea of regulating enterotoxins through gut flora make sense. Is it responsible and good for the world? Does it have any potential risk? And how can we guarantee the safety of the product? Considering Dr. Xiaolei Ze has rich experience in probiotic product R & D, we held an online meeting with him and learned more about product development, which helped us to make a better strategy.
                </p>
                <p>
                  Considering more problems that may occur in practical applications, we added a new induced suicide part to specifically eliminate the engineered microbe in the intestine at any time we want by ingesting arabinos. Arabinos is a kind of sugar that is rarely found in the human diet, so it won’t cause accidental killing of bacteria. He emphasized that laws and regulations, especially when it comes to GMO products, are quite strict. Some regulations on this topic are still under discussion and not clear. So, we should pay more attention to the regulations to make sure we are able to manage the risks. Dr. Ze also enriched our understanding about the complexity of interactions between gut microbiota and host, and pointed out the potential challenges to develop products for human application. So deep investigate on the science and technology background of this idea is necessary to allow us to move on with a better strategy.

                </p>
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_right>
        <BNUZ_hp_modal_content_left>
          <template v-slot:text>
            Conducting questionnaire
          </template>
          <template v-slot:icon>
            <BNUZ_content_modal name="conducting_questionnaire" title="Conducting questionnaire">
              <template v-slot:modal-icon>
                <svg t="1634283784665" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4461"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M915.87 356.8m0 109.03l0 299.9q0 109.03-109.03 109.03l-215.61 0q-109.03 0-109.03-109.03l0-299.9q0-109.03 109.03-109.03l215.61 0q109.03 0 109.03 109.03Z"
                    fill="#E9F1FF" p-id="4462"></path>
                  <path
                    d="M823 896H197.5C136.54 896 87 848.7 87 790.57V233.43C87 175.3 136.54 128 197.5 128h471.08c61 0 110.56 47.3 110.56 105.43V349a32 32 0 0 1-64 0V233.42c0-10.57-4.6-20.69-12.93-28.48A49 49 0 0 0 668.58 192H197.5a48.92 48.92 0 0 0-33.62 13c-8.34 7.79-12.93 17.9-12.93 28.48v557.09c0 10.58 4.59 20.69 12.93 28.48a48.92 48.92 0 0 0 33.62 13H823a32 32 0 0 1 0 64z"
                    fill="#2C5CCB" p-id="4463"></path>
                  <path
                    d="M827.24 896a112.23 112.23 0 0 1-112.1-112.1V314a32 32 0 0 1 32-32h160.2a32 32 0 0 1 32 32v469.9A112.23 112.23 0 0 1 827.24 896z m-48.1-550v437.9a48.1 48.1 0 1 0 96.2 0V346zM389.41 628H277.57a72.16 72.16 0 0 1-72.08-72.08V316.08A72.16 72.16 0 0 1 277.57 244h111.84a72.16 72.16 0 0 1 72.08 72.08v239.84A72.17 72.17 0 0 1 389.41 628zM277.57 308a8.19 8.19 0 0 0-8.08 8.08v239.84a8.19 8.19 0 0 0 8.08 8.08h111.84a8.19 8.19 0 0 0 8.08-8.08V316.08a8.19 8.19 0 0 0-8.08-8.08zM637.52 755.88H236a32 32 0 1 1 0-64h401.52a32 32 0 0 1 0 64zM637.52 344H528.45a32 32 0 0 1 0-64h109.07a32 32 0 0 1 0 64zM637.52 550H528.45a32 32 0 0 1 0-64h109.07a32 32 0 0 1 0 64z"
                    fill="#2C5CCB" p-id="4464"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <p>
                  Our project is designed for CKD treatment, so we need to consider not only experimental options, but
                  also public awareness of CKD and the acceptance of our products for clinical treatment. Besides,
                  genetically modified organisms (GMOs), which was also used in our project, are becoming more and more
                  prevalent. However, it seems that the public are getting more and more concerns on it. In order to
                  have a better idea of how the public perceives GMO in the context of our E. coli Keen Doctor project,
                  we developed a survey and analyzed it.
                </p>
                <p>
                  From the results obtained, we learnt that the responses were mainly comprised of those ages 18-25 and
                  41-50. The majority has received high school-level education at the very least. These are the samples
                  we collected.
                </p>
                <p>
                  The most well-known treatment for CKD is the medical treatment and kidney transplant, while diet
                  control may be easily ignored (Fig. 1). When asked about a new treatment method using genetic
                  engineering and synthetic biology, proposed by our team, 85.48% people accepted (Fig. 2). They
                  considered that precise therapy is the most important method, and then the cost if it can be put into
                  clincal use in henceforth (Fig.3). Excitingly, most people were supportive of the new treatment and
                  thought it promising (Fig. 4).
                </p>
                <p>
                  However, when gene editing treatment is verified firmly to be safety, most people were considerably
                  neutral.(Fig. 5). We can conclude that there is still a long way to go before gene-edited
                  pharmaceutical products is able to hit the market. But we are still optimistic that given enough time
                  and education, new techniques can become a staple in medical treatments because gene-editing has real
                  potential.
                </p>
                <div class="left-right-div">
                  <img :src="p7_pic2" width="45%">
                  <img :src="p7_pic3" width="45%">
                </div>
                <div class="left-right-div">
                  <img :src="p7_pic4" width="45%">
                  <img :src="p7_pic5" width="45%">
                </div>
                <div class="left-right-div">
                  <img :src="p7_pic6" width="60%">
                </div>
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_left>
        <BNUZ_hp_modal_content_right>
          <template v-slot:text>
            Enterprise<br>visit
          </template>
          <template v-slot:icon>
            <BNUZ_content_modal name="enterprise_visit" title="Enterprise visit">
              <template v-slot:modal-icon>
                <svg t="1634283803571" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="4612"
                     xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
                  <path
                    d="M526 906V496.46a73.2 73.2 0 0 1 36.1-63.09l97.79-57.48a73.17 73.17 0 0 1 74.17 0l97.8 57.48a73.19 73.19 0 0 1 36.09 63.09V906z"
                    fill="#E9F1FF" p-id="4613"></path>
                  <path
                    d="M557.9 938H226.1a82.19 82.19 0 0 1-82.1-82.1V290.83a106.28 106.28 0 0 1 45.64-87.26l141.76-98.45a106.69 106.69 0 0 1 121.19 0l141.77 98.45A106.27 106.27 0 0 1 640 290.83V855.9a82.19 82.19 0 0 1-82.1 82.1zM392 150.18a42.18 42.18 0 0 0-24.09 7.51l-141.77 98.45A42.25 42.25 0 0 0 208 290.83V855.9a18.12 18.12 0 0 0 18.1 18.1h331.8a18.12 18.12 0 0 0 18.1-18.1V290.83a42.24 42.24 0 0 0-18.14-34.69l-141.77-98.45a42.23 42.23 0 0 0-24.09-7.51z"
                    fill="#2C5CCB" p-id="4614"></path>
                  <path
                    d="M882.68 927.64a32 32 0 0 1-32-32v-423.1a47.85 47.85 0 0 0-21.77-40.2L541.8 245a32 32 0 0 1 35-53.6l287.09 187.34a111.66 111.66 0 0 1 50.79 93.8v423.1a32 32 0 0 1-32 32zM472.81 467.86H302a32 32 0 0 1 0-64h170.81a32 32 0 1 1 0 64zM472.81 660.29H302a32 32 0 0 1 0-64h170.81a32 32 0 0 1 0 64z"
                    fill="#2C5CCB" p-id="4615"></path>
                  <path d="M745.22 773.5a32 32 0 0 1-32-32V547.42a32 32 0 1 1 64 0V741.5a32 32 0 0 1-32 32z"
                        fill="#2C5CCB" p-id="4616"></path>
                </svg>
              </template>
              <template v-slot:modal-body>
                <p>
                  Dr. Ze suggested that we could visit the BYHEALTH Transparent Factory, by which we could learn about
                  the manufacture process more distinctly. BYHEALTH is a company focusing on healthcare products,
                  including probiotic products, which is closely related to our project. So, we set off for the
                  technically advanced smart factory. We visited the intelligent production plant, nutrition Exploration
                  Hall, the testing center and automatic finished product warehouse. From the raw materials to the
                  finished products, there are several steps, including transportation, pharmaceutical processing,
                  drying, canning, and packing, and so on. Each manufacturing process of products has special standard
                  requirements. In addition, we were shocked when we looked at the big and advanced instruments. About
                  four hours later, we finished this interesting tour and acquired much more knowledge about production
                  and processing of products. At the same time, we also realize that our project still has a long way to
                  go to make it applied in reality. This requires our unremitting efforts. There are many unexplored
                  issues, and iGEM 2021 is far from the end.
                </p>
                <div class="left-right-div">
                  <img :src="p8_pic1" width="85%">
                </div>
                <div class="left-right-div">
                  <img :src="p8_pic2" width="85%">
                </div>
              </template>
            </BNUZ_content_modal>
          </template>
        </BNUZ_hp_modal_content_right>
      </b-container>
    </BNUZ_Content_no_nav>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import AppRoot from "@/AppRoot";
import BNUZ_Content_no_nav from "@/components/bnuz_content_no_nav";
import BNUZ_content_paragraph from '@/components/bnuz-content-paragraph'
import BNUZ_hp_modal_content_left from "@/components/bnuz_hp_modal_content_left";
import BNUZ_hp_modal_content_right from "@/components/bnuz_hp_modal_content_right";
import BNUZ_content_modal from '@/components/bnuz_content_modal';

import head_image from '@/assets/head_images/HUMANPRACTICE/bannerhumanp.png'
import p1_pic1 from '@/assets/hp/general_hp/part1/pic1.png'
import p1_pic2 from '@/assets/hp/general_hp/part1/pic2.png'
import p1_pic3 from '@/assets/hp/general_hp/part1/pic3.png'
import p2_pic1 from '@/assets/hp/general_hp/part2/p2_pic1.jpg'
import p2_pic2 from '@/assets/hp/general_hp/part2/p2_pic2.jpg'
import p2_pic3 from '@/assets/hp/general_hp/part2/p2_pic3.jpg'
import p2_pic4 from '@/assets/hp/general_hp/part2/p2_pic4.jpg'
import p2_pic5 from '@/assets/hp/general_hp/part2/p2_pic5.jpg'
import p2_pic6 from '@/assets/hp/general_hp/part2/p2_pic6.jpg'
import p2_pic7 from '@/assets/hp/general_hp/part2/p2_pic7.jpg'
import p3_pic1 from '@/assets/hp/general_hp/part3/p3_pic1.png'
import p3_pic2 from '@/assets/hp/general_hp/part3/p3_pic2.png'
import p3_pic3 from '@/assets/hp/general_hp/part3/p3_pic3.png'
import p4_pic1 from '@/assets/hp/general_hp/part4/p4_pic1.jpg'
import p4_pic2 from '@/assets/hp/general_hp/part4/p4_pic2.jpg'
import p4_pic3 from '@/assets/hp/general_hp/part4/p4_pic3.jpg'
import p5_pic1 from '@/assets/hp/general_hp/part5/p5_pic1.jpg'
import p5_pic2 from '@/assets/hp/general_hp/part5/p5_pic2.jpg'
import p6_pic1 from '@/assets/hp/general_hp/part6/p6_pic1.jpg'
import p7_pic1 from '@/assets/hp/general_hp/part7/p7_pic1.png'
import p7_pic2 from '@/assets/hp/general_hp/part7/p7_pic2.png'
import p7_pic3 from '@/assets/hp/general_hp/part7/p7_pic3.png'
import p7_pic4 from '@/assets/hp/general_hp/part7/p7_pic4.png'
import p7_pic5 from '@/assets/hp/general_hp/part7/p7_pic5.png'
import p7_pic6 from '@/assets/hp/general_hp/part7/p7_pic6.png'
import p8_pic1 from '@/assets/hp/general_hp/part8/p8_pic1.jpg'
import p8_pic2 from '@/assets/hp/general_hp/part8/p8_pic2.jpg'

import conf from '@/wiki_config';

export default {
  name: 'App',
  components: {
    AppRoot,
    Bottom,
    TopNavigationBar,
    BNUZ_Content_no_nav,
    BNUZ_content_paragraph,
    BNUZ_hp_modal_content_right,
    BNUZ_hp_modal_content_left,
    BNUZ_content_modal
  },
  data() {
    return {
      // TODO: set image URI
      head_image: conf.isDev ? head_image : '',
      p1_pic1: conf.isDev ? p1_pic1 : '',
      p1_pic2: conf.isDev ? p1_pic2 : '',
      p1_pic3: conf.isDev ? p1_pic3 : '',
      p2_pic1: conf.isDev ? p2_pic1 : '',
      p2_pic2: conf.isDev ? p2_pic2 : '',
      p2_pic3: conf.isDev ? p2_pic3 : '',
      p2_pic4: conf.isDev ? p2_pic4 : '',
      p2_pic5: conf.isDev ? p2_pic5 : '',
      p2_pic6: conf.isDev ? p2_pic6 : '',
      p2_pic7: conf.isDev ? p2_pic7 : '',

      p3_pic1: conf.isDev ? p3_pic1 : '',
      p3_pic2: conf.isDev ? p3_pic2 : '',
      p3_pic3: conf.isDev ? p3_pic3 : '',
      p4_pic1: conf.isDev ? p4_pic1 : '',
      p4_pic2: conf.isDev ? p4_pic2 : '',
      p4_pic3: conf.isDev ? p4_pic3 : '',
      p5_pic1: conf.isDev ? p5_pic1 : '',
      p5_pic2: conf.isDev ? p5_pic2 : '',
      p6_pic1: conf.isDev ? p6_pic1 : '',
      p7_pic1: conf.isDev ? p7_pic1 : '',
      p7_pic2: conf.isDev ? p7_pic2 : '',
      p7_pic3: conf.isDev ? p7_pic3 : '',
      p7_pic4: conf.isDev ? p7_pic4 : '',
      p7_pic5: conf.isDev ? p7_pic5 : '',
      p7_pic6: conf.isDev ? p7_pic6 : '',
      p8_pic1: conf.isDev ? p8_pic1 : '',
      p8_pic2: conf.isDev ? p8_pic2 : '',
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: text_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

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

.bnuz-hp-content-modal-container {
  margin-top: 8vh;
  justify-content: center;
  align-items: center;
}

.bnuz-hp-content-modal-item {
  height: 15vh;
}

svg {
  height: 14vh;
}

.modal-text {
  font-size: 20px;
  line-height: 32px;
}

p {
  font-size: 20px;
  font-family: text_font, serif;
}

img {
  margin: 16px;
}

.left-right-div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
