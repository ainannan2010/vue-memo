<template>
  <!-- 菜单栏 -->
  <div class="navBox">
    <div class="logoBox">
      <img src="../assets/logo.jpg" />
      <div>
        <div class="title">Black Horse Flies™</div>
        <div class="email">www.wzyn.com</div>
      </div>
    </div>
    <div class="caozuoBox">
      <div class="newBox"></div>
      <div class="allBox"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MenuBar extends Vue {}
</script>

<style lang="less">
.navBox {
  height: 60px;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .logoBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 120px;
    }

    .title {
      font-size: 18px;
      font-weight: 700;
      line-height: 18px;
    }

    .email {
      font-size: 16px;
      font-weight: 700;
      line-height: 16px;
    }
  }
  .caozuoBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .newBox {
      width: 150px;
      height: 50px;
      background: yellow;
    }

    .allBox {
      width: 150px;
      height: 50px;
      background: red;
    }
  }
}
</style>
