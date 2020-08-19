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
      <el-dropdown class="newBox" placement='bottom'>
        <el-button>
          更多菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu @click.native="showEditor">
          <el-dropdown-item>新建备忘录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown class="allBox" placement='bottom'>
        <el-button>
          全部菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>工作</el-dropdown-item>
          <el-dropdown-item>生活</el-dropdown-item>
          <el-dropdown-item>学习</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemList from './ItemList copy.vue'
import ItemDta from '@/model/ItemData'

@Component
export default class MenuBar extends Vue {
  showEditor() {
    let newItem = new ItemDta(-1, 0)
    this.$store.commit('showEditor',newItem)
  }
}
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
    }

    .allBox {
      width: 150px;
    }
  }
}
</style>
