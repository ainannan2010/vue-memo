<template>
  <div class="memoBox">
    <div class="header">
      <div class="title">{{memo.title}}</div>
      <div class="tool">
        <div class="edit" @click="doEdit(memo)">
          <i class="el-icon-edit"></i>
        </div>
        <div class="delete" @click="doDel(memo.id, memo.title)">
          <i class="el-icon-delete"></i>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="time">{{memo.createTime}}</div>
      <div class="category">分类：{{$store.state.ahelper.getCategoryName(memo.categoryId)}}</div>
    </div>
    <div class="content">{{memo.content}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ItemData from '../model/ItemData'
@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData

  // 删除笔记
  doDel(id: number, title: string): void {
    if (!window.confirm(`你确定删除【${title}】吗？`)) {
      return
    }

    this.$store.state.ahelper.remove(id)
  }

  // 编辑笔记
  doEdit(item: ItemData) {
    // 避免数据双向绑定没等提交页面的值就改变
    let newItem = JSON.parse(JSON.stringify(item))
    this.$store.commit('showEditor', newItem)
  }
}
</script>

<style lang="less" scoped>
@width: 360px;
.memoBox {
  width: @width;
  padding: 10px;
  height: @width*0.75;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  box-shadow: 1px 1px 3px 3px #000;
  border: 1px solid #eee;
  margin: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3px;
    border-bottom: 2px solid #999;
    .title {
      flex: 1;
      padding-right: 5px;
    }
    .tool {
      display: flex;
      align-items: center;
      .edit {
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .delete {
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
    }
  }
  .info {
    display: flex;
    align-items: center;
    color: #888;
    margin: 3px 0;
    justify-content: space-between;
    .time {
      margin-right: 10px;
    }
  }
}
</style>
