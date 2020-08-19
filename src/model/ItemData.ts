import Category from './CateEnum'

export default class ItemDta {
  id!: number;
  categoryId!: Category;
  title!: string;
  content!: string;
  createTime!: string;

  constructor(id: number = -1, categoryId: Category = -1, title: string = "", content: string = "") {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDataStr(Date.now());
  }

  // 将日期对象转换为字符串时分秒
  toSelfDataStr = (time: number): string => {
    let date = new Date(time);

    const timeStr = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

    return timeStr;
  };
}
