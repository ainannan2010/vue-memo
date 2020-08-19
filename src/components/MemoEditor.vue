<template>
  <el-form :model="form">
    <el-dialog :visible.sync="$store.state.isShow" :width="dialogWidth">
      <el-form-item slot="title">
        <el-input v-model="form.name" autocomplete="off"></el-input>
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <!-- <div class="header">
      <input clss="heading" />
      <div clss="category"></div>
      <div clss="save"></div>
      <div clss="close"></div>
    </div>
      <div class="content"></div>-->
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
  }
  dialogWidth: string = '600px'
  name = 'XXX'
}
</script>

<style lang='less'>
</style>
