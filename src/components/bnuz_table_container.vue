<template>
  <div class="bnuz-table-container">
    <slot name="table"></slot>
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
  width: 100%;
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

table {
  width: 70%;
}
</style>