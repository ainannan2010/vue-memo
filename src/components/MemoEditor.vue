<template>
  <el-form :model="form">
    <el-dialog
      :visible.sync="$store.state.isShow"
      custom-class="el-dialog-dev"
      :height="'330px'"
      :show-close="false"
    >
      <div slot="title" class="header">
        <el-form-item class="el-form-item-dev-input" size="medium">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item class="el-form-item-dev-select" size="medium">
          <el-select v-model="form.category" placeholder="请选择活动区域">
            <el-option label="工作" :value="0"></el-option>
            <el-option label="生活" :value="1"></el-option>
            <el-option label="学习" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="el-form-item-dev-save">
          <i class="el-icon-s-claim"></i>
        </el-form-item>
        <el-form-item class="el-form-item-dev-save">
          <i class="el-icon-circle-close"></i>
        </el-form-item>
      </div>

      <el-form-item size="medium">
        <el-input
          type="textarea"
          v-model="form.content"
          :resize="'none'"
          :autosize="{ minRows: 13, maxRows: 13 }"
        ></el-input>
      </el-form-item>
    </el-dialog>
  </el-form>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import ItemData from '../model/ItemData'

export default class MemoEditor extends Vue {
  memo!: ItemData
  form: object = {
    name: '123',
    category: 0,
    content: '123w',
  }
  dialogWidth: string = '600px'
}
</script>

<style lang='less' scoped>
@width: 600px;
.el-dialog-dev {
  width: @width;
  height: @width*0.6;
}

.el-dialog__header,
.el-dialog__body {
  padding: 0 10px;
}
.el-form-item {
  margin-bottom: 0px;
}

.header {
  display: flex;
  align-items: center;
  .el-form-item-dev-input {
    width: 420px;
    margin-right: 10px;
  }

  .el-form-item-dev-select {
    width: 80px;
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
