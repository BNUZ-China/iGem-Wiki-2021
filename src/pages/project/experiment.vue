<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#ffd89f" top_distance="10">
      <bnuz_experiment name="p1" hint_text="Red recombination knockout TnaA gene">
        <template v-slot:text>
          <h3>Red recombination knockout TnaA gene</h3>
          <p>
            In order to eliminate indole sulfate from the source and delay the progress of chronic kidney disease, we
            used red homologous recombination technology to knock out the TnaA gene of engineering bacteria that
            metabolizes tryptophan to produce indole.
          </p>
        </template>
        <template v-slot:modal-body>
          <p><strong>First experiment</strong></p>
          <ol>
            <li>The upstream homologous recombination arm primers, upstream and downstream homologous recombination arm
              primers and lateral identification primers were designed according to the plasmid and target fragment
            </li>

          </ol>
          <ol start='2'>
            <li>Use PBR322 plasmid as template and amplify it with PFU enzyme. Product length: 1092bp</li>

          </ol>
          <ol start='3'>
            <li>Amplification system and amplification procedure are as follows:</li>

          </ol>
          <div class="bnuz-table-container">
            <bnuz_table_container>
              <template v-slot:caption>
                Table 1. Amplification system
              </template>
              <template v-slot:table>
                <table class="table">
                  <tbody>
                  <tr>
                    <td>pET28a(~10ng/ul)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>10´Pfu buffer</td>
                    <td>5 μl</td>
                  </tr>
                  <tr>
                    <td>dNTP(25mM)</td>
                    <td>0.4 μl</td>
                  </tr>
                  <tr>
                    <td>tnaA-F (50pmol/μl)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>tnaA-R (50pmol/μl)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>Pfu DNA polymerase(5U/μl,MBI fermentas)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>dH2O</td>
                    <td>43 μl</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>50 μl</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </bnuz_table_container>
          </div>

          <div class="bnuz-table-container">
            <bnuz_table_container>
              <template v-slot:caption>
                Table 2. Amplification procedure
              </template>
              <template v-slot:table>
                <table class="table">
                  <tbody>
                  <tr>
                    <td>95 ℃</td>
                    <td>5 min</td>
                  </tr>
                  <tr>
                    <td>95 ℃</td>
                    <td>30 sec</td>
                  </tr>
                  <tr>
                    <td>55 ℃</td>
                    <td>45 sec</td>
                  </tr>
                  <tr>
                    <td>72 ℃</td>
                    <td>60 sec</td>
                  </tr>
                  <tr>
                    <td>Repeat2-4</td>
                    <td>30 cycles</td>
                  </tr>
                  <tr>
                    <td>72 ℃</td>
                    <td>7 min</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </bnuz_table_container>
          </div>

          <ol start='4'>
            <li>Purify PCR products were by tapping</li>

          </ol>
          <ol start='5'>
            <li>Prepare electro transformation competent cells of <em>Escherichia coli</em> BL21 (DE3)</li>

          </ol>
          <ol start='6'>
            <li>Electrotransform pKD46gm plasmid (derived plasmid of pKD46, carrying gentamicin resistance gene) into
              BL21 (DE3) cells, laid gentamicin plate and cultured at 30 ℃ overnight.
            </li>

          </ol>
          <ol start='7'>
            <li>Select BL21 (DE3) / pkd46gm single colony to prepare electrotransformed competent cells.</li>

          </ol>
          <ol start='8'>
            <li>Transform <em>TnaA</em> targeting fragment into BL21 (DE3) / pkd46gm competent cells. Plate the
              transformed cells with solid LB medium with ampicillin and cultured at 37 ℃ for single colony formation.
              (Not formed)
            </li>

          </ol>
          <p>&nbsp;</p>
          <p></p>
          <p><strong>Second Experiment</strong></p>
          <ol>
            <li>The upstream homologous recombination arm primers, upstream and downstream homologous recombination arm
              primers and lateral identification primers were designed according to the plasmid and target fragment
            </li>

          </ol>
          <ol start='2'>
            <li>Use PET28a plasmid as template and amplify it with PFU enzyme. Product length is 967 BP.</li>

          </ol>
          <ol start='3'>
            <li>Amplification system and amplification procedure are as follows:</li>

          </ol>

          <div class="bnuz-table-container">
            <bnuz_table_container>
              <template v-slot:caption>
                Table 3. Amplification system
              </template>
              <template v-slot:table>
                <table class="table">
                  <thead>
                  <tr>
                    <td>pET28a(~10ng/ul)</td>
                    <td>0.5 μl</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>10´Pfu buffer</td>
                    <td>5 μl</td>
                  </tr>
                  <tr>
                    <td>dNTP(25mM)</td>
                    <td>0.4 μl</td>
                  </tr>
                  <tr>
                    <td>tnaA-F (50pmol/μl)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>tnaA-R (50pmol/μl)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>Pfu DNA polymerase(5U/μl,MBI fermentas)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>dH2O</td>
                    <td>43 μl</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>50 μl</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </bnuz_table_container>
          </div>

          <div class="bnuz-table-container">
            <bnuz_table_container>
              <template v-slot:caption>
                Table 4. Amplification procedure
              </template>
              <template v-slot:table>
                <table class="table">
                  <thead>
                  <tr>
                    <td>95 ℃</td>
                    <td>5 min</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>95 ℃</td>
                    <td>30 sec</td>
                  </tr>
                  <tr>
                    <td>55 ℃</td>
                    <td>45 sec</td>
                  </tr>
                  <tr>
                    <td>72 ℃</td>
                    <td>60 sec</td>
                  </tr>
                  <tr>
                    <td>Repeat2-4</td>
                    <td>30 cycles</td>
                  </tr>
                  <tr>
                    <td>72 ℃</td>
                    <td>7 min</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </bnuz_table_container>
          </div>
          <ol start='4'>
            <li>Purify PCR products by tapping</li>

          </ol>
          <ol start='5'>
            <li>Prepare electrotransformation competent cells of <em>Escherichia coli</em> BL21 (DE3)</li>

          </ol>
          <ol start='6'>
            <li>Electrotransform pKD46gm plasmid (derived plasmid of pKD46, carrying gentamicin resistance gene)into
              BL21 (DE3) cells, laid it in gentamicin plate and cultured at 30 ℃ overnight.
            </li>

          </ol>
          <ol start='7'>
            <li>BL21 (DE3) / pkd46gm single colony was selected to prepare electrotransformed competent cells.</li>

          </ol>
          <ol start='8'>
            <li>Transform <em>TnaA</em> targeting fragment into BL21 (DE3) / pkd46gm competent cells. Plate the
              transformed cells with solid LB medium with ampicillin and cultured at 37 ℃ for single colony formation.
            </li>

          </ol>
          <ol start='9'>
            <li>Screen positive clones: 46 clones were randomly selected, inoculated with 3ml LB (containing 25ug / ml
              kanamycin) and cultured at 37 ℃ and 220rpm until they grew turbid. A pair of primers on the outside of the
              homologous arm of the genome were used for PCR detection. The length of the amplified product of the
              starting strain was 1644 bp; When <em>TnaA</em> gene was replaced by kanamycin resistance gene, the
              amplification product length of this pair of primers was shortened to 1482 bp.
            </li>

          </ol>
          <p>Lateral primer identification PCR:</p>

          <div class="bnuz-table-container">
            <bnuz_table_container>
              <template v-slot:caption>
                Table 5. Amplification system
              </template>
              <template v-slot:table>
                <table class="table">
                  <thead>
                  <tr>
                    <td>Bacterial fluid</td>
                    <td>0.5 μl</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>10´ Taq buffer</td>
                    <td>5 μl</td>
                  </tr>
                  <tr>
                    <td>dNTP(25mM)</td>
                    <td>0.4 μl</td>
                  </tr>
                  <tr>
                    <td>TnaA-outF (50pmol/μl)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>TnaA-outR (50pmol/μl)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>Taq DNA polymerase(5U/μl，MBI fermentas)</td>
                    <td>0.5 μl</td>
                  </tr>
                  <tr>
                    <td>dH2O</td>
                    <td>43 μl</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>50 μl</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </bnuz_table_container>
          </div>

          <div class="bnuz-table-container">
            <bnuz_table_container>
              <template v-slot:caption>
                Table 6. Amplification procedure
              </template>
              <template v-slot:table>
                <table class="table">
                  <thead>
                  <tr>
                    <td>95 ℃</td>
                    <td>5 min</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>95 ℃</td>
                    <td>30 sec</td>
                  </tr>
                  <tr>
                    <td>60 ℃</td>
                    <td>45 sec</td>
                  </tr>
                  <tr>
                    <td>72 ℃</td>
                    <td>90 sec</td>
                  </tr>
                  <tr>
                    <td>Repeat2-3</td>
                    <td>35 cycles</td>
                  </tr>
                  <tr>
                    <td>72 ℃</td>
                    <td>7 min</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </bnuz_table_container>
          </div>
        </template>
      </bnuz_experiment>
      <bnuz_experiment name="p2" hint_text="Gibson recombinant construction of indole propionic acid metabolic pathway">
        <template v-slot:text>
          <h3>Gibson recombinant construction of indole propionic acid metabolic pathway</h3>
          <p>In order to make engineered bacteria metabolize tryptophan to produce indole propionic acid and repair intestinal mucosal barrier, we reconstructed a five-step metabolic pathway. Tryptophan is first catalyzed by tryptophan aminotransferase encoded by <em>TAA1</em> to produce indole pyruvate, and then indole pyruvate is catalyzed by phenyllactate dehydrogenase encoded by <em>fldH</em> to produce indole lactic acid. The enzyme is also the rate limiting enzyme of the whole reaction. Then, indole lactic acid is catalyzed to produce indole acrylic acid by 2-hydroxyacyl-CoA dehydrase protein family encoded by <em>fldBC</em>, and finally indole acrylic acid is catalyzed to produce indole propionic acid by 3 - (aryl) acylate reduce acdA encoded by <em>acdA**.</em></p>
          <p>Firstly, we cloned the tryptophan aminotransferase <em>TAA1</em> from <em>Arabidopsis thaliana</em> cDNA, which can catalyze tryptophan to indole pyruvate. Then, four enzymes <em>fldB, fldC, fldH</em> and <em>acdA</em> in its fld gene cluster were cloned from the genome of <em>Clostridium</em> <em>perfringens <strong>sporogenes</strong>.</em></p>
          <p>By Gibson recombination method, five genes were connected to His-6p-MBP-RSFD plasmid in the order of <em>TAA1-fldH-fldBC-acdA</em>. After successfully constructing the plasmid, we transferred it into <em>E.coli</em> BL21 (DE3). First, we extracted the total RNA of the engineered bacteria after induction of IPTG, and then obtained cDNA by reverse transcription. Then we detected whether our target bands were obtained by PCR and gel electrophoresis. For fermentation supernatant, we cooperated with BNU-China to carry out HPLC experiment to verify whether it is produced by indole propionic acid.</p>


        </template>
        <template v-slot:modal-body>
          <p>By Gibson recombination method, five genes were connected to his-6p-mbp-rsfd plasmid in the order of <em>TAA1-fldH-
            fldBC- acdA</em>.</p>
          <p></p>
          <p>Gibson reorganization (<em>TAA1-fldH-fldBC-acdA</em>)</p>
          <p>By introducing homologous sequences at the 5 &#39;end of primer, there are completely consistent sequences
            (20bp) that can be homologous recombination between amplification products and between amplification
            products and linearized cloning vector</p>
          <ol>
            <li>Insert fragment PCR amplification</li>

          </ol>
          <ol start='2'>
            <li>Calculate the usage of each fragment for recombination reaction:</li>

          </ol>
          <p>The optimum dosage of each fragment = [0.02 * fragment base] ng (0.03pmol), and each fragment is added in
            the proportion of 1:1 for recombination reaction</p>
          <ol start='3'>
            <li>Recombination reaction system</li>
          </ol>
          <bnuz_table_container>
            <template v-slot:caption>
              Table 1. Reorganization system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Component</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> Linear vector（10ng/μl）</td>
                  <td> 10μl</td>
                </tr>
                <tr>
                  <td> 5* inserted fragments (100ng/μl)</td>
                  <td> 0.2μl</td>
                </tr>
                <tr>
                  <td> 5*CE MultiS Buffer</td>
                  <td> 4μl</td>
                </tr>
                <tr>
                  <td> Exnase MultiS</td>
                  <td> 2μl</td>
                </tr>
                <tr>
                  <td> ddH2O</td>
                  <td> 3μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='4'>
            <li>Gently blow and mix with a pipette, and then centrifuge briefly to collect the reaction solution to the
              bottom of the tube
            </li>

          </ol>
          <ol start='5'>
            <li>React at 37 ℃ for 30min and reduce to 4 ℃</li>

          </ol>
          <p>Gene level validation:</p>
          <p>Preparation of bacterial lysate</p>
          <ol>
            <li>After the plasmid was successfully transferred into the engineering bacteria, select a single colony on
              the plate to culture the engineering bacteria in 25ml LB kanamycin liquid medium at 37 ℃ overnight.
            </li>

          </ol>
          <ol start='2'>
            <li>Inoculate and culture at the ratio of 1:50 until OD600 reaches 0.6-1.0</li>

          </ol>
          <ol start='3'>
            <li>Add 1ml bacterial liquid into 1.5ml centrifuge tube and centrifuge 12,000 *g for 2 minutes</li>

          </ol>
          <ol start='4'>
            <li>Remove the supernatant carefully and as far as possible, leaving bacterial precipitation</li>

          </ol>
          <ol start='5'>
            <li>Use 100 μL freshly prepared TE buffer containing lysozyme to resuspend and precipitated. For preparation
              of bacterial lysate, the engineering bacteria was treated by lysozyme of 0.4mg/ml (final concentration),
              with gently taped and mixed.
            </li>

          </ol>
          <p>RNA extraction</p>
          <ol>
            <li>Incubate the engineering bacteria at room temperature for 5 minutes and add 200μL RNA lysate, mix
              well.
            </li>

          </ol>
          <ol start='2'>
            <li>Add 0.5 times the supernatant volume of absolute ethanol, blow with a pipette for 3-4 times and mix
              well.
            </li>

          </ol>
          <ol start='3'>
            <li>Take out the centrifugal column / collection pipe (the centrifugal column has been placed on the
              collection pipe)
            </li>

          </ol>
          <ol start='4'>
            <li>Transfer the mixture to the centrifugal column and load the column for many times; 12000 * g
              centrifugation for 1 minute and pour the waste filtrate.
            </li>

          </ol>
          <ol start='5'>
            <li>Add 600μl RNA lotion, 12000 * g, centrifuged for 45 seconds, and the filtrate was poured out.</li>

          </ol>
          <ol start='6'>
            <li>Prepare DNase I incubation solution as follows (the following is the amount required to extract a tube
              of RNA)
            </li>

          </ol>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 2. Preparation of DNase I incubation solution
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Reagent</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 10*DNase I Buffer</td>
                  <td> 5μl</td>
                </tr>
                <tr>
                  <td> DNase I</td>
                  <td> 5μl</td>
                </tr>
                <tr>
                  <td> Nuclease free water</td>
                  <td> 40μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='7'>
            <li>Accession 50μl DNase I incubation solution to the center of the adsorption membrane and place at room
              temperature for 15 minutes.
            </li>

          </ol>
          <ol start='8'>
            <li>Accession 600μl RNA washing solution, 12000 * g, centrifuged for 45 seconds, and the filtrate was poured
              out.
            </li>

          </ol>
          <ol start='9'>
            <li>Accession 600μl RNA washing solution, 12000 * g centrifuged for 45 seconds, pour out the waste filtrate,
              reposition the centrifugal column on the collection pipe, and 12000 * g centrifugated for 2 minutes
            </li>

          </ol>
          <ol start='10'>
            <li>Transfer the centrifugal column to the elution tube (provided by the kit), and add 50-200uL nuclease
              free water in the center of the centrifugal column membrane, standing at room temperature for 2 minutes
              and centrifuging at 12000 * g for 1 minute
            </li>

          </ol>
          <ol start='11'>
            <li>Add the eluted solution in the previous step back to the center of the centrifugal column, stand at room
              temperature for 2 minutes, centrifuged 12000 * g for 1 minute for eluting the RNA again, and then store
              the RNA at - 70 ℃
            </li>

          </ol>
          <p>RNA reverse transcription</p>
          <ol>
            <li>Prepare the reaction system in the following table</li>

          </ol>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 3. RNA reverse transcription reaction system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Component</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> Total RNA</td>
                  <td> 500ng</td>
                </tr>
                <tr>
                  <td> Random Primer(N9)(0.1μg/ul)</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> 2*TS Reaction</td>
                  <td> 10μl</td>
                </tr>
                <tr>
                  <td> TransScript RT/RI Enzyme Mix</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> gRNA Remover</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> RNase-free Water</td>
                  <td> Variable</td>
                </tr>
                <tr>
                  <td> Total volume</td>
                  <td> 20μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='2'>
            <li>Mix the reaction complex at 25 ℃ for 10 minutes; Then incubate at 42 ℃ for 30 minutes</li>

          </ol>
          <p>3.Heating at 85 ℃ for 5 seconds to inactivate transcript RT/RI and gRNA remover.</p>
          <p>PCR reaction amplification fragment</p>
          <p>\1. Prepare PCR reaction system according to the following table</p>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 4. Amplification system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Component</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 5*PrimeSTAR GXL Buffer</td>
                  <td> 10μl</td>
                </tr>
                <tr>
                  <td> dNTP Mix</td>
                  <td> 4μl</td>
                </tr>
                <tr>
                  <td> TAA1/fldH/fldB/fldC/acdA F</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> TAA1/fldH/fldB/fldC/acdA R</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> cDNA</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> PrimeSTAR GXL DNA polymerase</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> ddH2O</td>
                  <td> 32μl</td>
                </tr>
                <tr>
                  <td> Total volume</td>
                  <td> 50μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='2'>
            <li>PCR reaction amplification fragment</li>
          </ol>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 5. Amplification procedure
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <td> 98℃</td>
                  <td> 30sec</td>
                  <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 98℃</td>
                  <td> 10sec</td>
                  <td> 30cycles</td>
                </tr>
                <tr>
                  <td> 55℃</td>
                  <td> 15sec</td>
                  <td>30cycles</td>
                </tr>
                <tr>
                  <td> 68℃</td>
                  <td> 1min15sec</td>
                  <td>30cycles</td>
                </tr>
                <tr>
                  <td> 72℃</td>
                  <td> 5min</td>
                  <td></td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <p>\3. Verification of amplified fragment size by agarose gel electrophoresis</p>
          <p>Metabolic function validation experiment:</p>
          <ol>
            <li>After the plasmid was successfully constructed, it was transferred into <em>E. coli</em> BL21 (DE3).
              Both the experimental group and the control group were cultured in 30 ml LB kanamycin medium at 37 ℃ and
              220 rpm for 8 hours, and the OD600 was about 0.5.
            </li>

          </ol>
          <ol start='2'>
            <li>Collect bacteria by centrifugation and use 200ml containing 0.5 mm IPTG and LB-kanamycin suspension of
              80μM tryptophan was induced overnight at 16 ℃ and 180 rpm.
            </li>

          </ol>
          <ol start='3'>
            <li>The next day, bacteria were collected by centrifugation. Absorb 400ul supernatant, add 3.6ml anhydrous
              methanol, centrifuge after ultrasound, and take the supernatant for HPLC.
            </li>

          </ol>
          <p> The mobile phase was 30% acetonitrile (0.01 Mol / L acetic acid aqueous solution) ; Flow rate 0.5mL/min;
            Column temperature at 35 ℃; Detection wavelength (excitation wavelength / emission wavelength): 0 ~ 3min,
            275/345nm, 3~ 6min, 280/350nm.We set up three biological replicates, IPA1, IPA2 and IPA3, as well as a
            control and a standard BZP1.</p>
        </template>
      </bnuz_experiment>

      <bnuz_experiment name="p3" hint_text="Overexpression of glucose dehydrogenase GDH">
        <template v-slot:text>
          <h3>Overexpression of glucose dehydrogenase GDH</h3>
          <p>
            BNU China team had carried out a series of perfect characterization of the function of GDH in 2018, but we
            want to verify whether GDH can well promote the proliferation of engineering bacteria and enhance its
            competitiveness and colonization ability without IPTG induction or lactose induced expression. Therefore,
            after the plasmid was transferred into the engineering strain, we drew its growth curve and compared it with
            the growth curve of BL21 without plasmid.
          </p>
        </template>
        <template v-slot:modal-body>
          <ol>
            <li>Transfer the plasmid successfully engineered into E. coli BL21(DE3)</li>
            <li>Select two colonies of engineering bacteria from the plate and inoculate it into 4ml LB-Kan medium,
              incubate at 37 ℃, 220rpm until OD600 = 0.5-0.6.
            </li>
            <li>Select the single colony of bacteria not transferred into plasmid from the plate and inoculate it into
              4ml LB medium, incubate at 37 ℃, 220rpm until OD600 = 0.5-0.6.
            </li>
            <li>According to the OD of two kind of bacteria, calculate the volume of them leading the numbers of them in
              the 100ml media are the same.
            </li>
            <li>Add engineering bacteria into 100ml LB-Kan medium, 100ml 5.5g/ml lactose LB-Kan medium, and 100ml 0.3mM
              IPTG LB-Kan medium respectively, while add bacteria not transferred into plasmid and engineering bacteria
              to LB medium.
            </li>
            <li>Incubate at 37 ℃, 220rpm, and test OD600 each hour.</li>
          </ol>
        </template>
      </bnuz_experiment>
      <bnuz_experiment name="p4" hint_text="Express Klebsiella oxytoca strain ZJUH1705beta-galactosidase (bga2) gene">
        <template v-slot:text>
          <h3>Express Klebsiella oxytoca strain ZJUH1705beta-galactosidase (bga2) gene</h3>
          <p>
            GOS has a very good role in promoting the value-added of intestinal probiotics such as Bifidobacteria and
            Lactobacillus. The galactooligosidase encoded by Klebsiella oxytoca strain zjuh1705 has been proved to
            have the ability to efficiently catalyze the formation of galactooligosaccharides from lactose. We will
            heterologously express the enzyme in our engineered bacteria, so that our engineered bacteria has the
            ability to promote the proliferation of intestinal probiotics.
          </p>
          <p>
            To test whether our engineering bacteria can transcribe and encode normally the gene of β-galactosidase, we
            extracted the enzyme RNA for cDNA, and used it as template for PCR after agarose gel electrophoresis
          </p>
        </template>
        <template v-slot:modal-body>
          <p>Preparation of bacterial lysate</p>
          <ol>
            <li>Transfer the successfully constructed plasmid into <em>E. coli</em> BL21 (DE3).</li>

          </ol>
          <ol start='2'>
            <li>Select a single colony and culture engineering bacteria in LB kanamycin medium at 37 ℃ overnight.</li>

          </ol>
          <ol start='3'>
            <li>Inoculate and culture at the ratio of 1:50 until OD600 reaches 0.6-1.0.</li>

          </ol>
          <ol start='4'>
            <li>Add 1ml bacterial cultured solution into 1.5 centrifuge tube and centrifuge 12000 * g for 2 minutes.
            </li>

          </ol>
          <ol start='5'>
            <li>Remove the supernatant carefully and as far as possible, leaving bacterial precipitation</li>

          </ol>
          <ol start='6'>
            <li>Use 100 μL freshly prepared TE buffer containing lysozyme to resuspend and precipitated. For preparation
              of bacterial lysate, the engineering bacteria was treated by lysozyme of 0.4mg/ml (final concentration),
              with gently taped and mixed.
            </li>

          </ol>
          <p>RNA extraction</p>
          <ol>
            <li>Incubate the engineering bacteria at room temperature for 5 minutes and add 200 μl RNA lysate, mix
              well.
            </li>

          </ol>
          <ol start='2'>
            <li>Add 0.5 times the supernatant volume of absolute ethanol, blow with a pipette for 3-4 times and mix
              well.
            </li>

          </ol>
          <ol start='3'>
            <li>Take out the centrifugal column / collection pipe (the centrifugal column had been placed on the
              collection pipe).
            </li>

          </ol>
          <ol start='4'>
            <li>Transfer the mixture to the centrifugal column and load the column for many times; 12000 * g
              centrifugation for 1 minute and pour the waste filtrate.
            </li>

          </ol>
          <ol start='5'>
            <li>Add 600 μl RNA lotion, 12000 * g, centrifuged for 45 seconds, and the filtrate was poured out.</li>

          </ol>
          <ol start='6'>
            <li>Prepare DNase I incubation solution as follows (the following is the amount required to extract a tube
              of RNA)
            </li>

          </ol>
          <bnuz_table_container>
            <template v-slot:caption>
              Table 1. Preparation of DNase I incubation solution
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Reagent</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 10*DNase I Buffer</td>
                  <td> 5μl</td>
                </tr>
                <tr>
                  <td> DNase I</td>
                  <td> 5μl</td>
                </tr>
                <tr>
                  <td> Nuclease free water</td>
                  <td> 40μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='7'>
            <li>Accession 50μl DNase I incubation solution to the center of the adsorption membrane and place at room
              temperature for 15 minutes.
            </li>

          </ol>
          <ol start='8'>
            <li>Accession 600 μl RNA washing solution, 12000 * g, centrifuged for 45 seconds, and the filtrate was
              poured out.
            </li>

          </ol>
          <ol start='9'>
            <li>Accession 600 μl RNA washing solution, 12000 * g centrifuged for 45 seconds, pour out the waste
              filtrate, reposition the centrifugal column on the collection pipe, and 12000 * g centrifuged for 2
              minutes.
            </li>

          </ol>
          <ol start='10'>
            <li>Transfer the centrifugal column to the elution tube (provided by the kit), and add 50-200μl nuclease
              free water in the center of the centrifugal column membrane, then standing at room temperature for 2
              minutes and centrifuging at 12000 * g for 1 minute.
            </li>

          </ol>
          <ol start='11'>
            <li>Add the eluted solution in the previous step back to the center of the centrifugal column, stand at room
              temperature for 2 minutes, centrifuge 12000 * g for 1 minute, elute the RNA again, and then store the RNA
              at - 70 ℃.
            </li>

          </ol>

          <p>RNA reverse transcription</p>
          <ol>
            <li>Prepare the reaction system in the following table</li>

          </ol>
          <bnuz_table_container>
            <template v-slot:caption>
              Table 2. RNA reverse transcription reaction system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Component</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> Total RNA</td>
                  <td> 500ng</td>
                </tr>
                <tr>
                  <td> Random Primer(N9)(0.1μg/ul)</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> 2*TS Reaction</td>
                  <td> 10μl</td>
                </tr>
                <tr>
                  <td> TransScript RT/RI Enzyme Mix</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> gRNA Remover</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> RNase-free Water</td>
                  <td> Variable</td>
                </tr>
                <tr>
                  <td> Total volume</td>
                  <td> 20μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>
          <ol start='2'>
            <li>Mix the system evenly at 25 ℃ for 10 minutes; Then incubate at 42 ℃ for 30 minutes.</li>

          </ol>
          <ol start='3'>
            <li>Heating at 85 ℃ for 5 seconds to inactivate transcript RT / RI and gRNA remover.</li>

          </ol>
          <p>PCR reaction amplification fragment</p>
          <ol start='4'>
            <li>Prepare PCR reaction system according to the following table</li>

          </ol>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 3. Amplification system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <th> Component</th>
                  <th> Volume</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 5*PrimeSTAR GXL Buffer</td>
                  <td> 10μl</td>
                </tr>
                <tr>
                  <td> dNTP Mix</td>
                  <td> 4μl</td>
                </tr>
                <tr>
                  <td> TAA1/fldH/fldB/fldC/acdA F</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> TAA1/fldH/fldB/fldC/acdA R</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> cDNA</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> PrimeSTAR GXL DNA polymerase</td>
                  <td> 1μl</td>
                </tr>
                <tr>
                  <td> ddH2O</td>
                  <td> 32μl</td>
                </tr>
                <tr>
                  <td> Total volume</td>
                  <td> 50μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='5'>
            <li>PCR reactions to amplify fragments.</li>
          </ol>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 4. Amplification procedure
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <td> 98℃</td>
                  <td> 30sec</td>
                  <td> </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td> 98℃</td>
                  <td> 10sec</td>
                  <td> 30cycles</td>
                </tr>
                <tr>
                  <td> 55℃</td>
                  <td> 15sec</td>
                  <td>30cycles</td>
                </tr>
                <tr>
                  <td> 68℃</td>
                  <td> 1min15sec</td>
                  <td>30cycles</td>
                </tr>
                <tr>
                  <td> 72℃</td>
                  <td> 5min</td>
                  <td> </td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <ol start='6'>
            <li>Verification of amplified fragment band size by agarose gel electrophoresis.</li>
          </ol>
        </template>
      </bnuz_experiment>
      <bnuz_experiment name="p5" hint_text="Can gene knockout by Red homologous recombination">
        <template v-slot:text>
          <h3>Can gene knockout by Red homologous recombination</h3>
          <p>
            In order to prevent our engineered bacteria from escaping to the external environment, it would have some
            unpredictable effects. We knocked out the Can gene of the engineered bacteria by red recombination. In this
            way, our engineered bacteria can survive in the intestine where the environmental CO2 concentration is
            higher and will die when they escape to the atmospheric environment where the CO2 concentration is lower
            because they cannot metabolize CO2.
          </p>
        </template>
        <template v-slot:modal-body>
          <p>\1. Design the upstream homologous recombination arm primers, the upper and lower homologous recombination
            arm primers, and the outer identification primers based on the plasmid and the target fragment.</p>
          <p>\2. Using the pBR322 plasmid as a template, use PFU enzyme to amplify the targeting fragment. The following
            amplification system and amplification procedure are listed.</p>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 1. Amplification system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <td>pBR322(~10ng/ul)</td>
                  <td>0.5 μl</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>10´Pfu buffer</td>
                  <td>5 μl</td>
                </tr>
                <tr>
                  <td>dNTP(25mM)</td>
                  <td>0.4 μl</td>
                </tr>
                <tr>
                  <td>can-F (50pmol/μl)</td>
                  <td>0.5 μl</td>
                </tr>
                <tr>
                  <td>can-R (50pmol/μl)</td>
                  <td>0.5 μl</td>
                </tr>
                <tr>
                  <td>Pfu DNA polymerase(5U/μl,MBI fermentas)</td>
                  <td>0.5 μl</td>
                </tr>
                <tr>
                  <td>dH2O</td>
                  <td>43 μl</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>50 μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 2. Amplification procedure
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <td>95 ℃</td>
                  <td>5 min</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>95 ℃</td>
                  <td>30 sec</td>
                </tr>
                <tr>
                  <td>55 ℃</td>
                  <td>45 sec</td>
                </tr>
                <tr>
                  <td>72 ℃</td>
                  <td>90 sec</td>
                </tr>
                <tr>
                  <td>Repeat2-4</td>
                  <td>30 cycles</td>
                </tr>
                <tr>
                  <td>72 ℃</td>
                  <td>7 min</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <p>3.Purify PCR products by gel</p>
          <p>4. Preparation of electrotransformed competent cells of <em>Escherichia coli</em> BL21 (DE3) strain.</p>
          <p>5. The pKD46Gm plasmid (a derivative plasmid of pKD46 carrying a gentamicin resistance gene) is
            electroporated into BL21 (DE3) competent cells, plated onto LB gentamicin plates, and incubated overnight at
            30 with constant temperature.</p>
          <p>6. Pick the BL21 (DE3) / pKD46Gm single colony and prepare as electroporated competent cells.</p>
          <p>7. The <em>Can</em> targeting fragment is transformed into BL21 (DE3) / pkd46gm competent cells, and the
            transformed cells are plated on LB ampicillin plates in a 2.5-L anaerobic tank (containing 1 tablet
            microaerophilic gas pack, Mitsubishi, Japan) and incubated at 30℃at constant temperature until single colony
            formation.</p>
          <p>8. Positive single clone screening: 10 single colonies, each inoculated with 3 ml LB (containing 25 μ g /
            ml ampicillin) were randomly selected and incubated in an anaerobic tank at 37℃ until growth cloudiness. The
            PCR was performed by using a pair of primers on the outside of the homology arms on the genome. The
            amplification system and the amplification procedure are listed below.</p>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 3. Amplification system
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <td>Bacteria Fluid</td>
                  <td>0.5 μl</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>10´ Taq buffer</td>
                  <td>5 μl</td>
                </tr>
                <tr>
                  <td>dNTP(25mM)</td>
                  <td>0.4 μl</td>
                </tr>
                <tr>
                  <td>TnaA-outF (50pmol/μl)</td>
                  <td>0.5 μl</td>
                </tr>
                <tr>
                  <td>TnaA-outR (50pmol/μl)</td>
                  <td>0.5 μl</td>
                </tr>
                <tr>
                  <td>Taq DNA polymerase(5U/μl，MBI fermentas)</td>
                  <td>0.5 μl</td>
                </tr>
                <tr>
                  <td>dH2O</td>
                  <td>43 μl</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>50 μl</td>
                </tr>
                </tbody>
              </table>
            </template>
          </bnuz_table_container>

          <bnuz_table_container>
            <template v-slot:caption>
              Table 4. Amplification procedure
            </template>
            <template v-slot:table>
              <table class="table">
                <thead>
                <tr>
                  <td>95 ℃</td>
                  <td>5 min</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>95 ℃</td>
                  <td>30 sec</td>
                </tr>
                <tr>
                  <td>60 ℃</td>
                  <td>45 sec</td>
                </tr>
                <tr>
                  <td>72 ℃</td>
                  <td>90 sec</td>
                </tr>
                <tr>
                  <td>Repeat2-3</td>
                  <td>35 cycles</td>
                </tr>
                <tr>
                  <td>72 ℃</td>
                  <td>7 min</td>
                </tr>
                </tbody>
              </table>

            </template>
          </bnuz_table_container>

          <p>11. Amplification products are verified by agarose gel electrophoresis profile.</p>
          <p>12. Then positive clones above were sent for sequencing.</p>
        </template>
      </bnuz_experiment>
      <bnuz_experiment name="p6" hint_text="Arabinose induced expression of translation inhibitor (MazF)">
        <template v-slot:text>
          <h3>Arabinose induced expression of translation inhibitor (MazF)</h3>
          <p>
            For our users to specifically eliminate the engineered bacteria, we introduced a construct encoding an inhibitor of translation (MazF) downstream of the l-arabinose-activated promoter of the gene into our circuit. In project 2019, the BNU-China team verified that in the presence of a low concentration of arabinose induced, engineered bacteria would die but not lyse, and it did no harm to the unmodified microorganism. We raised the concentration of arabinose to verify how and whether the killing efficiency would be mediated in the presence of a high concentration of arabinose induced Bacteriolytic lysis.
          </p>
          <p>
            First, to demonstrate that the engineered bacteria could be rapidly eliminated by inducing the expression of the translation inhibitor MazF, the cultured strains were exposed to the suicide inducer arabinose, and viable bacteria in the samples were counted. To explore whether the high concentration of arabinose induced MazF could kill the cells without dissolving the cells, we measured the OD600 of each sample to give a complete bacterial count, including dead and alive.
          </p>
        </template>
        <template v-slot:modal-body>
          <h3>Protocol</h3>
          <ol>
            <li>Transfer the plasmid successfully engineered into <em>E. coli</em> BL21(DE3)</li>
            <li>Prepare LB-medium 3L.（Separately weighing and mix tryptone, yeast extract, NaCl and Agar in three conical bottle, and add 1L ddH2O, adjust pH to 8.0, then transfer them to high-pressure steam sterilization pot at 121℃ for 20min)</li>
            <li>Prepare 1.25mM/L and 2.5mM/L L-arabinose LB-Kan. medium. (Take out a certain amount of sterilized medium in the super clean workbench and add calculated arabinose, then mix well and use membrane filter unit for sterilization. Consequently, put different concentration sterilized arabinose LB medium back to the original solution and mix well.) </li>
            <li>Select the single colony of engineering bacteria from the plate and inoculate it into 200ml LB-Kan medium, incubate for 12 hours at 37 ℃, 220rpm.</li>
            <li>Equally divide the culture into 90 centrifuge tubes, which is 1ml respectively, and divide them into 3 groups. Centrifuge them at 12,000rpm for 2 minutes. Discard the liquid. </li>
            <li>Resuspend 30 tubes of collected bacteria with LB-Kan. (50 ng/μl) containing 1.25mM/L and 2.5mM/L L-arabinose respectively as experimental groups. Resuspend 30 tubes of all bacteria with pure LB-Kan. (50 ng/μl) medium.</li>
            <li>Collect 3 tubes of all groups every 6 hours, dilute all the samples to 10^6 times and then spread them on solid LB-Kan. (50 ng/μl) medium separately. At the same time, refresh the medium to maintain the concentration of L-arabinose.</li>
            <li>Count the number of colonies in 5cm2 per plate after cultured for 24 hr at 37℃</li>
            <li> OD600 are tested in each tube. And calculate the average of three to get the certain OD600 of each group at each time.</li>

          </ol>
        </template>
      </bnuz_experiment>
    </BNUZ_Content>
    <Bottom></Bottom>
  </AppRoot>
</template>

<script>
import TopNavigationBar from "@/components/top_navigation_bar";
import Bottom from "@/components/bottom";
import bnuz_experiment from "@/components/bnuz_experiment";
import AppRoot from "@/AppRoot";
import bnuz_table_container from "@/components/bnuz_table_container";

import head_image from '@/assets/head_images/PROJECT/bannerproject-experiment.png'
import BNUZ_Content from "@/components/bnuz_content";
import conf from '@/wiki_config';

export default {
  name: 'App',
  components: {
    BNUZ_Content,
    AppRoot,
    Bottom,
    TopNavigationBar,
    bnuz_experiment,
    bnuz_table_container
  },
  data() {
    return {
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/a/a9/T--BNUZ-China--bannerproject-experiment.0ae7b715.png\n'
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

p, li {
  font-size: 20px;
  font-family: text_font, serif;
}

h4 {
  font-family: Title_font, serif;
}

.bnuz-table-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
