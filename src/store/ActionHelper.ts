import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";
import Category from "@/model/CateEnum";

class ActionHelper {
  // 负责处理数据*******************
  dataHelper: DataHelper = new DataHelper("memoData", "id");
  memoList!: Array<ItemData>;

  constructor() {
    // 读取本地缓存数组，将数据保存在memoList中
    this.memoList = this.readData();
  }

  // 读取本地数据
  readData(): Array<ItemData> {
    let arrObj = this.dataHelper.readData();
    // 将obj数组转换为ItemData数组
    // let arrItem = arrObj.map((elt: any) => ({ ...new ItemData(), ...elt })); // 不能使用解构赋值， 会改变ItemData类型
    let arrItem = arrObj.map((elt: any) => {
      let item: ItemData = new ItemData();
      item.id = elt.id;
      item.categoryId = elt.categoryId;
      item.title = elt.title;
      item.content = elt.content;
      return item;
    });

    return arrItem;
  }

  // 负责业务处理******************

  // 新增笔记
  add(item: ItemData): number {
    // 将数据添加到本地缓存，并接受返货的id，相当于调后台接口，存入数据库
    item.id = this.dataHelper.addData(item);
    // 将笔记加入笔记数组中
    this.memoList.push(item);
    this.dataHelper.saveData(this.memoList);

    return item.id;
  }

  // 修改笔记
  edit(item: ItemData) {
    const editItem: ItemData | undefined = this.memoList.find(elt => elt.id === item.id);
    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
      // 存入本地
      this.dataHelper.saveData(this.memoList);
    }
  }

  // 删除笔记
  remove(id: string | number): boolean {
    const index: number = this.memoList.findIndex(elt => elt.id === id);
    if (index > -1) {
      this.memoList.splice(index, 1);
      this.dataHelper.saveData(this.memoList);
      return true;
    }

    return false;
  }

  // 转换类型
  getCategoryName(cateId: Category): string {
    let arrNames = ["工作", "生活", "学习"];
    return arrNames[cateId];
  }
}

export default ActionHelper;
