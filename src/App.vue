<template>
  <div id="app">
    <!-- 操作区 -->
    <Menubar />
    <!-- 主体区 -->
    <ItemList />
    <!-- 新建编辑弹框 -->
    <MemoEditor v-if="$store.state.isShow" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Menubar from './components/MenuBar.vue'
import ItemList from './components/ItemList.vue'
import MemoEditor from './components/MemoEditor.vue'

@Component({
  components: {
    Menubar,
    ItemList,
    MemoEditor,
  },
})
export default class App extends Vue {}
</script>

<style lang="less" scoped>
@width: 1250px;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: @width;
  height: @width*0.6;
  margin: 0 auto 40px;
  background: url(./assets/zhouyu.jpg);
  overflow-y: auto;
  box-shadow: 1px 1px 13px 5px #b7b75a;
}
</style>
