<template>
  <div class="bnuz-content-anchor-maq3zrn6 roundRect bnuz_content_paragraph" :hint_text="hint_text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bnuz_content_paragraph",
  props: ['hint_text']
}
</script>

<style scoped>
@font-face {
  font-family: text_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

.bnuz_content_paragraph {
  margin-top: 32px;
  line-height: 32px;
  font-size: 20px;
  font-family: text_font, serif;
}


@font-face {
  font-family: Title_font;
  src: url("https://2021.igem.org/wiki/images/9/9f/T--BNUZ-China--text_font.woff");
}

h3, h4, h5 {
  font-family: Title_font, serif;
}
</style>