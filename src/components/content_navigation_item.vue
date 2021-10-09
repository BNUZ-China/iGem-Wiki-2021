<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">

      <div v-b-tooltip.hover :title="hint_text" @click="contentNavJumpto" :class="classString"
           :style="{backgroundColor: nav_item_color}">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "content_navigation_item",
  props: {
    activate: Boolean,
    click_link: Number,
    multiCol: Boolean,
    hint_text: String,
    nav_item_color: String
  },
  methods: {
    contentNavJumpto: function () {
      // i是该按钮的序号
      var destination_height = this.click_link;
      window.scrollTo({
        top: destination_height - document.documentElement.clientHeight / 8 + 10,
        // top: destination_height,
        behavior: 'smooth'
      });

    }
  },
  computed: {
    classString: function () {
      var result = 'bnuz-content-nav-item-kp6mdeaz';
      if (this.activate) {
        result += ' bnuz-content-nav-item-active-kp6mdeaz';
      } else {
        result += ' bnuz-content-nav-item-no-active-kp6mdeaz'
      }
      if (this.multiCol) {
        result += ' bnuz-content-nav-item-grid-kp6mdeaz'
      } else {
        result += ' bnuz-content-nav-item-no-grid-kp6mdeaz'
      }
      return result;
    }
  }
}
</script>

<style scoped>
.bnuz-content-nav-item-kp6mdeaz {
  --nav_item_size: 32.55px;
  width: var(--nav_item_size);
  height: var(--nav_item_size);
  background-color: #000;
  text-align: center;
  cursor: pointer;
  line-height: var(--nav_item_size);
  font-size: 2em;
  border-radius: calc(var(--nav_item_size) / 2);
  margin-top: 30px;
  margin-bottom: 30px;
}

/* 单列独占样式 */
.bnuz-content-nav-item-no-grid-kp6mdeaz {
}

/* 双列独占样式 */
.bnuz-content-nav-item-grid-kp6mdeaz {

}

/* 激活样式 */
.bnuz-content-nav-item-active-kp6mdeaz {
  /*opacity: 0;*/
  /*visibility: hidden;*/
  /*display: block !important;*/
}

/*未激活样式*/
.bnuz-content-nav-item-no-active-kp6mdeaz {
  /*opacity: 1;*/
}
</style>