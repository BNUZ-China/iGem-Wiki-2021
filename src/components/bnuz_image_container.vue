<template>
  <div class="bnuz-table-container">
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
.bnuz-table-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  flex-direction: column;
}

.bnuz-table-container > img {
  display: block;
}

.bnuz-table-container >  p {
  font-size: 18px;
  color: #5e615a;
  width: 60%;
  text-align: center;
}
</style>