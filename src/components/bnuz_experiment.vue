<template>
  <bnuz_content_paragraph :hint_text="hint_text">
    <div>
      <slot name="text"></slot>
      <b-button v-b-modal="`${name}-bnuz-experiment-modal-wajeblq31`" class="bnuz-content-modal-button">
        Click here for detailed steps
      </b-button>
      <b-modal size="xl" :id="`${name}-bnuz-experiment-modal-wajeblq31`" :title="title" ok-only>
        <slot name="modal-body"></slot>
      </b-modal>
    </div>
  </bnuz_content_paragraph>
</template>

<script>
import bnuz_content_paragraph from '@/components/bnuz-content-paragraph'

export default {
  name: "bnuz_experiment",
  components: {
    bnuz_content_paragraph
  },
  props: {
    name: String,
    hint_text: String
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.roundRect {
  padding: 20px;
  border-radius: 20px;
  margin: 32px 0;
  border: 2px solid #ed8555
}

.bnuz-content-modal-button {
  background-color: #ffedd9;
  border-color: #ffedd9;
  color: #ed8555;
  /*color: black;*/
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