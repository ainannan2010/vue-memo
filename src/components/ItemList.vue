<template>
  <div class="listBox">
    <MemoItem v-for="item in doFilterCategroy()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
import MemoItem from './MemoItem.vue'
@Component({
  components: {
    MemoItem,
  },
})
export default class ItemList extends Vue {
  memoArr: Array<ItemData> = this.$store.state.ahelper.memoList
  doFilterCategroy() {
    let cateId = this.$store.state.filterCategory
    if (cateId === -1) {
      return this.memoArr
    } else {
      return this.memoArr.filter(
        (elt: any) => elt.categoryId === cateId
      )
    }
  }
}
</script>

<style lang="less" scoped>
.listBox {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 14px
}
</style>
