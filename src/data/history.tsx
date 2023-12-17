import type { Event } from "../types";

// 右側: イベント,所属
// 左側: 制作物

export const events: Event[] = [
  {
    side: "right",
    year: "2001/12",
    title: "誕生",
    color: "#f0620f",
  },
  {
    side: "right",
    year: "2014/4 ~ 2020/3",
    title: "渋谷教育学園幕張中学校・高等学校",
  },
  {
    side: "right",
    year: "2014/5 ~ 2019/3",
    title: "部活動でロボコンに出場",
    supplement: "プログラミングに触れたきっかけ",
  },
  {
    side: "left",
    year: "2018/6",
    title: "仙台知能ロボットコンテスト",
    supplement: "大会参加",
    content: "第30回仙台知能ロボットコンテストにて最優秀賞技術賞をいただきました",
    href: "http://www.inrof.org/2018/irc/score/rinfo/robot086.html",
  },
  {
    side: "left",
    year: "2019/4 ~ 2019/9",
    title: "文化祭ステージ企画",
    supplement: "製作",
    content: "Apacheを使ったWebサーバー運用とステージ背景プロジェクターの管理アプリケーションを自作",
    workId: "school-festival-2019",
  },
  {
    side: "right",
    year: "2021/4 ~ 現在",
    title: "芝浦工業大学 工学部 情報工学科",
  },
  {
    side: "right",
    year: "2021/4 ~ 現在",
    title: "ShibaLab",
    supplement: "学生サークル",
    icon: "/shibalab-logo.jpg",
    href: "https://shibalab.com/",
  },
  {
    side: "right",
    year: "2021/4 ~ 現在",
    title: "デジクリ",
    supplement: "学生サークル",
    icon: "/digicre-logo.jpg",
    href: "https://digicre.net/",
  },
  {
    side: "left",
    year: "2022/3 ~ 2022/9",
    title: "ScombZ Utilities",
    supplement: "製作",
    content: "学生ポータルサイトのUI/UXを改善するブラウザ拡張機能を制作",
    workId: "scombz-utilities",
  },
];
