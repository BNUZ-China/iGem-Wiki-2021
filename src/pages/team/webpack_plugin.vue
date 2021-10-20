<template>
  <AppRoot id="app">
    <!--    <Background_picture src="assets/homepage_hospital.png"></Background_picture>-->
    <top-navigation-bar/>
    <img :src="head_image" alt="head image" class="bnuz-header-image" width="1920" height="678">
    <BNUZ_Content nav_item_color="#01016e">
      <bnuz_content_paragraph
        hint_text="What is 'igem-wiki-webpack-plugin', and why we need 'igem-wiki-webpack-plugin'">
        <h4>What is '<code>igem-wiki-webpack-plugin</code>', and why we need 'igem-wiki-webpack-plugin'</h4>
        <p>
          <code>iGem-wiki-webpack-plugin</code> is a webpack 4 plugin based on <code>html-webpack-plugin</code>. When we
          are using a front-end framework such as Vue that uses webpack as a packaging tool, since the URL of the static
          file of the iGem wiki is different from the general situation, the file on the igem server cannot be correctly
          referenced only by modifying the configuration file.
        </p>
        <p>
          Take the JavaScript code file "<code>example.js</code>" as an example. When modifying the publicPath parameter
          in         webpack, the final URL pointed to is prefixed with "<code>example.js</code>", such as
          "<code>https://test.com/example.js</code>". However, if this file is uploaded to the iGem server, the reference
          link is
          "<code>https://{year}.igem.org/wiki/index.php?title=Template:{Team}/scripts/example&action=raw&ctype=text/        javascript</code>". This is equivalent to removing the extension of the original file name and splicing the
          prefix and suffix. Therefore, the in-depth modification of the packaging tool is very necessary for the team
          that uses Vue to build the Wiki.
        </p>
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="How do we build the 'iGem-wiki-webpack-plugin'?">
        <h4>How do we build the 'iGem-wiki-webpack-plugin'?</h4>
        <p>
          Thanks to the open-source code of <code>html-webpack-plugin</code>, we forked it and make some modification on
          it.
        </p>
        <p>
          Based on the mainstream open-source packaging plug-in <code>html-webpack-plugin</code>, we use the debugger to
          analyze the code structure and expose a hook function interface in the function of packaging js and CSS files
          (Fig.1).
        </p>
        <bnuz_image_container>
          <template v-slot:caption>
            Fig.1 Build process
          </template>
          <template v-slot:image>
            <img :src="pic1" width="65%">
          </template>
        </bnuz_image_container>
        The modification can be viewed in
        <a href="https://github.com/BNUZ-China/iGem-wiki-webpack-plugin/blob/main/lib/html-tags.js">github</a>.
      </bnuz_content_paragraph>

      <bnuz_content_paragraph hint_text="How to use 'iGem-wiki-webpack-plugin'">
        <h4>How to use 'iGem-wiki-webpack-plugin'</h4>
        <p>
          Add plugins to the configureWebpack.plugins array under vue.config.js:
        </p>
        <pre>
          configureWebpack: {
            entry: {
              index: './src/index.js'
            },
            plugins: [
              new igemWikiWebpackPlugin({
                template: `public/index.html`,
                filename: `index.html`,
                templateParameters: {
                  BASE_URL: './'
                },
                chunks: [name],
                tagDefinitionPreprocessor: preprocessor
              })
            ]
          }
        </pre>
        <p>
          The option here (the construction parameter of igemWikiWebpackPlugin) has one more tagDefinitionPreprocessor
          than html-webpack-plugin. This parameter accepts a function with one parameter, passes in the tagDefinition
          parameter, and returns the preprocessed tagDefinition. Here is an example:
        </p>
        <pre>
          var preprocessor = function (tagDefinition) {
            if (tagDefinition.tagName === 'script') {
              let result = tagDefinition;
              result.attributes.src = 'https://aaa.com/' + result.attributes.src + '&aa=bb';
              return result;
            }
            return tagDefinition;
          }
        </pre>
        <p>
          The results after the above processing are as follows:
        </p>
        <p>
          The original JavaScript file path is src/index.js, and the src attribute of the generated
          &lt;scirpt&gt; tag is https://aaa/js/index.js&aa=bb.
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
import pic1 from '@/assets/special/pic1.png'
import conf from '@/wiki_config';
import bnuz_image_container from "@/components/bnuz_image_container";

import head_image from '@/assets/head_images/human_practice.png'

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
      head_image: conf.isDev ? head_image : 'https://2021.igem.org/wiki/images/d/df/T--BNUZ-China--webpack_plugin_headimage.png',
      // TODO: set image URI
      pic1: conf.isDev ? pic1 : 'https://2021.igem.org/wiki/images/a/a8/T--BNUZ-China--special_pic1.png',
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
  border: 2px solid rgba(0,0,115,0.79)
}

code {
  color: black;
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
