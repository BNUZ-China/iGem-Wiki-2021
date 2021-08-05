<template>
  <div class="bnuz-footer" id="bnuz-footer">
    <div class="container bnuz-footer-container">
      <div class="align-items-center row">
        <div class="bnuz-contact-title col-2">
          Contact
        </div>
        <div class="col-5 bnuz-contact">
          Address: 18th, Jinfeng St. Xiangzhou District, Zhuhai, Guangdong, P.R.C.<br>
          Postcode: 519080<br>
          Email: aaa@bbb.com<br>
          ©2021. All Rights Reserved. Designed by BNUZ-China.
        </div>
        <div class="col-5 bnuz-friends">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom"
}
</script>

<style scoped>
.bnuz-footer {
  margin: 16px 12%;
  padding: 24px 0;
  background-color: #eed6d6d9; /*eed6d6d9*/
  border-radius: 30px;
  /*border: 2px solid cadetblue;*/
  box-shadow: 5px 5px 10px grey;
}

.bnuz-footer {
  display: flex;
  flex-direction: row;
}

.bnuz-contact-title {
  font-size: 36px;
  color: #e2e3e5;
  margin-left: 16px;
  text-align: center;
}

.bnuz-footer-container {
  margin: 0;
}

.bnuz-contact {
  font-size: 14px;
}
</style>