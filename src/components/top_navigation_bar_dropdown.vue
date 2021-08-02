<template>
  <div @mouseover="mouseover" @mouseout="mouseout">
    <b-nav-item-dropdown :text="title" toggle-class="nav-link-custom" right ref="dropdown">
      <b-dropdown-item class="dropdown-item"
                       v-for="content in contents"
                       :href="content.link"
                       :key="content.id">
        {{content.text}}
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
export default {
  name: "top-navigation-bar-dropdown",
  props: {
    title: String,
    contents: Array
  },
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    mouseover() {
      this.$refs.dropdown.visible = true;
    },
    mouseout() {
      this.$refs.dropdown.visible = false;
    }
  }
}
</script>

<style scoped>
/* 导航栏展开时的样式 */
.bnuz-nav-hover {
  background-color: #deddde;
}
</style>