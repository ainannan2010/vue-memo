/**
 * DatahHelper类，负责localStorage 操作
 */
import ItemData from '../model/ItemData'

class DataHelper {
  dataKey: string;
  primaryKey: string;

  constructor(dtkey: string, pmkey: string) {
    this.dataKey = dtkey;
    this.primaryKey = pmkey;
    this.init()
  }

  init() {
    let data = this.readData()
    if (!data.length) {
      // this.addData('厉害了，老歌')
    }
  }
  // 读取数据**********
  readData(): any {
    // 1. 读取本地数据（根据dataKey）
    let jsonData: string | null = localStorage.getItem(this.dataKey);

    // 2. 把读到的json字符串数组对象， 转为js数组对象
    let arrData: any = [];
    if (jsonData) {
      arrData = JSON.parse(jsonData);
    }

    // 3. 返回js对象
    return arrData;
  }

  // 保存数据**********
  saveData(arrData: Array<Object>): void {
    // 1. 将js数组对象转换为json数组对象
    let jsonStr = JSON.stringify(arrData);
    // 2. 将json 数组对象存入localStorage中
    localStorage.setItem(this.dataKey, jsonStr);
  }

  // 新增数据**********
  addData(item: object) {
    // 读取本地数据
    let arr: any = this.readData();
    // 自动生成主键值（唯一标示值，递增）
    let newId: number = arr.length ? arr[arr.length - 1][this.primaryKey] + 1 : 1;

    // 创建一个对象，保存评论内容和唯一值
    let obj: object = {
      ...item,
      [this.primaryKey]: newId,
    };

    // 将数据追加到数组
    arr.push(obj);

    // 将数据存入本地
    this.saveData(arr);

    // 返回新生成的id
    return newId;
  }

  // 删除数据**********
  removeData(removeKey: number | string) {
    // 读取本地数据
    let arr: any = this.readData();
    // 找要删除的元素
    let index = arr.findIndex((elt: any) => elt[this.primaryKey] === removeKey);
    // 找到了就删除， 返回true
    if (index > -1) {
      arr.splice(index, 1);
      // 数据存入本地
      this.saveData(arr);
      return true;
    }
    // 没有找到，返回false
    return false;
  }
}

export default DataHelper;
