<template>
  <div class="listBox">
    <MemoItem v-for="item in memoArr" :key="item.id" :memo='item' />
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
}
</script>

<style lang="less">
.listBox {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
