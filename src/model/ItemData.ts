import Category from "./CateEnum";

export default class ItemDta {
  id!: number;
  categoryId!: Category;
  title!: string;
  content!: string;
  createTime!: string;

  constructor(
    id: number = -1,
    categoryId: Category = -1,
    title: string = "",
    content: string = ""
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDataStr(Date.now());
  }

  // 将日期对象转换为字符串时分秒
  toSelfDataStr = (time: number): string => {
    let date = new Date(time);

    const timeStr = `${date.getFullYear()}-${this.add0(date.getMonth() + 1)}-${this.add0(
      date.getDate()
    )} ${this.add0(date.getHours())}:${this.add0(date.getMinutes())}:${this.add0(
      date.getSeconds()
    )}`;

    return timeStr;
  };
  // 给不足10的数字加0
  add0 = (num: number) => (num >= 10 ? num : `0${num}`);
}
