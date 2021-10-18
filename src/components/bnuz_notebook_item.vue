<template>
  <b-row align-h="end">
    <b-col cols="2">
      <div v-if="tip !== 'None'">
        <div class="notebook-date roundRect">
          {{ tip }}
        </div>
      </div>
    </b-col>
    <b-col cols="10">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab" header-class="card-header-invisible">
            <b-button block v-b-toggle="`bnuz-notebook-item-${name}-bt7hvqfe`" variant="info"
                      class="notebook_button_style">
              <slot name="time"></slot>
            </b-button>
          </b-card-header>
          <b-collapse :id="`bnuz-notebook-item-${name}-bt7hvqfe`" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text style="line-height: 24px">
                <slot name="text"></slot>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-col>
  </b-row>

</template>

<script>
export default {
  name: "bnuz_notebook_item",
  props: {
    name: {
      type: String,
      default: 'None'
    },
    tip: {
      type: String,
      default: 'None'
    }
  }
}
</script>

<style scoped>
.accordion {
  width: 60vw;
  margin: 40px auto 40px auto;
}

.notebook_button_style {
  height: 1.5cm;
  background-color: #b3c9ed;
  border-color: #b3c9ed;
}

.card-header-invisible {
  background-color: #FFFFFF00;
  border-color: #FFFFFF00;
}

.notebook-date {
  margin-top: 42px !important;
  font-size: 32px;
  text-align: center;
}

.roundRect {
  padding: 8px;
  border-radius: 20px;
  margin: 16px 0;
  border: 2px solid #ed8555;
}

</style>