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
      <el-dropdown class="newBox" placement="bottom">
        <el-button>
          新建
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu @click.native="showEditor">
          <el-dropdown-item>新建备忘录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown class="allBox" placement="bottom">
        <el-button>
          全部
          <span class="count">{{getCount(-1)}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="doFilter(-1)">
            全部
            <span class="count">{{getCount(-1)}}</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="doFilter(cateEnum.Work)">
            工作
            <span class="count">{{getCount(cateEnum.Work)}}</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="doFilter(cateEnum.Life)">
            生活
            <span class="count">{{getCount(cateEnum.Life)}}</span>
          </el-dropdown-item>
          <el-dropdown-item @click.native="doFilter(cateEnum.Study)">
            学习
            <span class="count">{{getCount(cateEnum.Study)}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemList from './ItemList copy.vue'
import ItemData from '@/model/ItemData'
import CateEnum from '@/model/CateEnum'

@Component
export default class MenuBar extends Vue {
  cateEnum = CateEnum
  showEditor() {
    let newItem = new ItemData(-1, 0)
    this.$store.commit('showEditor', newItem)
  }

  getCount(num: number) {
    if (num === -1) {
      return this.$store.state.ahelper.memoList.length
    }

    return this.$store.state.ahelper.memoList.filter(
      (elt: any) => elt.categoryId === num
    ).length
  }

  doFilter(cateId: number) {
    this.$store.state.filterCategory = cateId
  }
}
</script>

<style lang="less" scoped>
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
.count {
  border: 1px solid;
  padding: 0 10px;
  border-radius: 8px;
  background: #aaa;
  color: #fff;
}
</style>
