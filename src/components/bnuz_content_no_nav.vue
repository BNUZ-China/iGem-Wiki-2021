<template>
  <b-container class="bunz-content" ref="bnuz_content">
    <b-row align-h="end">
      <b-col cols="12" ref="bnuz-content-container" class="bnuz-content-container">
        <div class="roundRect">
          <div class="bnuz-text">
            <slot></slot>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "BNUZ_Content_No_Nav"
}
</script>

<style scoped>
.bnuz-text {
  font-size: 20px;
  /* TODO 正文字体*/
  /*font-family: Arial, sans-serif;*/
  /*color: #6c7c9b;*/
}

.bunz-content {
  --left_right: 10vw;
  padding: 16px;
  margin-top: 64px;
  width: calc(100vw - var(--left_right) - var(--left_right));
  max-width: calc(100vw - var(--left_right) - var(--left_right));
  overflow: visible;
  margin-left: var(--left_right);
  margin-right: var(--left_right)
}

.bnuz-content-nav {
  position: relative;
}

.bnuz-content-nav-bottom {
  align-self: flex-end;
}

.bnuz-content-nav-float {
  position: fixed;
  top: 200px;
  left: 100px;
  /*width: calc(100vw / 33);*/
}

.bnuz-content-nav-sticky {
  position: sticky;
  top: 25%;
  overflow: visible;
}
</style>