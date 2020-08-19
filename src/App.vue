<template>
  <div id="app">
    <Menubar />
    <ItemList />
    <MemoEditor />
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
    MemoEditor
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 1250px;
  margin: 0 auto;
  background: yellow;
}
</style>
