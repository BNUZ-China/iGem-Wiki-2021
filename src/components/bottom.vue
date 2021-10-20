<template>
  <div class="bnuz-footer roundRect" id="bnuz-footer">
    <div class="container bnuz-footer-container">
      <div class="align-items-center row" style="justify-content: space-evenly">
        <div class="bnuz-contact-title col-2">
          <img :src="team_logo" class="team-logo">
        </div>
        <div class="col-5 bnuz-contact">
          Address: 18th, Jinfeng St. Xiangzhou District, Zhuhai, Guangdong, P.R.C.<br>
          Postcode: 519080<br>
          Email: bnuz_china@163.com<br>
          ©2021. All Rights Reserved. Designed by BNUZ-China.
        </div>
        <div class="col-4 bnuz-friends">
          <img :src="friends" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import conf from '@/wiki_config';
import team_logo from '@/assets/team_logo.png';
import friends from '@/assets/bnuz_friends.png'

export default {
  name: "bottom",
  data() {
    return {
      team_logo: conf.isDev ? team_logo : 'https://2021.igem.org/wiki/images/7/79/T--BNUZ-China--team_logo.3e9078b7.png',
      friends: conf.isDev ? friends : 'https://2021.igem.org/wiki/images/3/39/T--BNUZ-China--bnuz_friends.e8f165c9.png',
    }
  }
}
</script>

<style scoped>
.bnuz-footer {
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  margin-left: 15.1vw !important;
  width: 76.5vw;
  padding: 24px 0 !important;
  /*border: 2px solid rgb(0 41 113);*/
  /*background-color: #eed6d6d9; !*eed6d6d9*!*/
  border-radius: 30px !important;
  /*!*border: 2px solid cadetblue;*!*/
  /*box-shadow: 5px 5px 10px grey;*/
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

.team-logo {
  --team-logo-size: 160px;
  width: var(--team-logo-size);
  /*height: var(--team-logo-size);*/
}
</style>