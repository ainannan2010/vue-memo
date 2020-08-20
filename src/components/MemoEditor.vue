<template>
  <el-form :model="memo">
    <el-dialog :visible.sync="$store.state.isShow" custom-class="el-dialog-dev" :show-close="false">
      <div slot="title" class="headers">
        <el-form-item class="el-form-item-dev-input" size="medium">
          <el-input v-model="memo.title" autocomplete="off" placeholder="title"></el-input>
        </el-form-item>

        <el-form-item class="el-form-item-dev-select" size="medium">
          <el-select v-model="memo.categoryId" placeholder="category">
            <el-option label="工作" :value="0"></el-option>
            <el-option label="生活" :value="1"></el-option>
            <el-option label="学习" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="el-form-item-dev-save" @click.native="save">
          <i class="el-icon-s-claim"></i>
        </el-form-item>
        <el-form-item class="el-form-item-dev-save" @click.native="colseEditor">
          <i class="el-icon-circle-close"></i>
        </el-form-item>
      </div>

      <el-form-item size="medium">
        <el-input
          type="textarea"
          v-model="memo.content"
          :resize="'none'"
          :autosize="{ minRows: 13, maxRows: 13 }"
          placeholder="content"
        ></el-input>
      </el-form-item>
    </el-dialog>
  </el-form>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Message } from 'element-ui'
import ItemData from '../model/ItemData'

@Component
export default class MemoEditor extends Vue {
  memo!: ItemData
  // 生命周期
  created() {
    this.memo = this.$store.state.transMemo
  }

  colseEditor = () => {
    this.$store.state.isShow = false
  }

  save() {
    if (
      !this.memo ||
      !this.memo.title.trim().length ||
      this.memo.categoryId <= -1 ||
      !this.memo.content.trim().length
    ) {
      Message.warning('对不起，输入错误')
      return
    }

    if (this.memo.id <= -1) {
      this.$store.state.ahelper.add(this.memo)
    } else {
      this.$store.state.ahelper.edit(this.memo)
    }

    this.colseEditor()
  }
}
</script>

<style lang='less'>
@width: 600px;
.el-dialog-dev {
  width: @width!important;
  height: @width*0.6;
  .el-dialog__header,
  .el-dialog__body {
    padding: 0 10px;
  }

  .el-form-item {
    margin-bottom: 0px;
  }
}

.headers {
  display: flex;
  align-items: center;
  .el-form-item-dev-input {
    width: 400px;
    margin-right: 10px;
  }

  .el-form-item-dev-select {
    width: 100px;
  }

  .el-icon-s-claim,
  .el-icon-circle-close {
    padding: 12px 0 0 5px;
    font-size: 32px;
    line-height: 32px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
    &:hover {
      color: rgba(0, 0, 0, 9);
    }
  }
}
</style>
