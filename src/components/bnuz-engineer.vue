<template>
<div>
  <div class="left-right-div roundRect">
    <div class="engineer-icon">
      <slot name="icon"></slot>
    </div>
    <div>
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "bnuz-engineer"
}
</script>

<style scoped>
.left-right-div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.engineer-icon > img {
  width: 120px;
  margin-right: 32px;
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
  font-size: 20px !important;
  font-family: text_font, serif !important;
}

h3 {
  font-family: Title_font, serif !important;
}
</style>