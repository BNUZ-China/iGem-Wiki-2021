<template>
  <div class="image-container">
    <slot name="image"></slot>
    <p>
      <slot name="caption"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "bnuz_image_container"
}
</script>

<style scoped>
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  flex-direction: column;
}

.image-container > img {
  display: block;
}

.image-container >  p {
  font-size: 18px;
  color: #5e615a;
}
</style>