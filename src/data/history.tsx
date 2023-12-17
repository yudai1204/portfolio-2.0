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
    color: "#f06b0f",
  },
  {
    side: "right",
    year: "2014/5 ~ 2019/3",
    title: "部活動でロボコンに出場",
    supplement: "プログラミングに触れたきっかけ",
    color: "#f0700f",
  },
  {
    side: "left",
    year: "2018/6",
    title: "仙台知能ロボットコンテスト",
    supplement: "大会参加",
    content: "第30回仙台知能ロボットコンテスト 最優秀賞技術賞",
    href: "http://www.inrof.org/2018/irc/score/rinfo/robot086.html",
    color: "#f0750f",
  },
  {
    side: "left",
    year: "2019/4 ~ 2019/9",
    title: "文化祭ステージ企画",
    supplement: "製作",
    content: "Apacheを使ったWebサーバー運用とステージ背景プロジェクターの管理アプリケーションを自作",
    workId: "school-festival-2019",
    color: "#f07c0f",
  },
  {
    side: "right",
    year: "2021/4 ~ 現在",
    title: "芝浦工業大学 工学部 情報工学科",
    color: "#f0850f",
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
    content: "学生ポータルサイトのUI/UXを改善するブラウザ拡張機能",
    workId: "scombz-utilities",
    color: "#f0940f",
  },
  {
    side: "right",
    year: "2022/7 ~ 2023/8",
    title: "クラウドソーシング",
    supplement: "業務開発",
    content: "CrowdWorksやランサーズなどのクラウドソーシングサービスでエンジニアとして活動",
    color: "#f09d0f",
  },
  {
    side: "left",
    year: "2022/11",
    title: "みんなで作る花火大会",
    supplement: "インタラクティブアート",
    content: "描いた絵がその場で花火となって打ちあがるインタラクティブアート",
    workId: "shibalab-fireworks",
  },
  {
    side: "left",
    year: "2022/11",
    title: "ShibaLab Webサイト",
    supplement: "製作",
    workId: "shibalab-fireworks",
  },
  {
    side: "left",
    year: "2022/12",
    title: "Google Drive Uploader(仮)",
    supplement: "業務委託",
    content: "ファイルアップロードのためのGASアプリケーション",
    workId: "google-drive-uploader",
  },
  {
    side: "left",
    year: "2023/4",
    title: "クソリプジェネレータ",
    supplement: "製作",
    workId: "reply-generator",
  },
  {
    side: "left",
    year: "2023/5",
    title: "Cat and Seek",
    supplement: "インタラクティブアート",
    workId: "shibalab-catandseek",
  },
  {
    side: "right",
    year: "2023/7 ~ 現在",
    title: "株式会社AppBrew",
    supplement: "インターンシップ (通年)",
    content: "React, Railsを使ったWeb開発インターンシップ",
    href: "https://appbrew.io/",
    icon: "/appbrew-logo.jpg",
  },
  {
    side: "left",
    year: "2023/7",
    title: "AI診察Bot",
    supplement: "業務委託",
    workId: "llamaindex-linebot",
  },
  {
    side: "right",
    year: "2023/8",
    title: "株式会社マネーフォワード",
    supplement: "インターンシップ (2weeks)",
    content: "React, Railsを使ったWeb開発インターンシップ",
    href: "https://moneyforward.com/",
    icon: "/moneyforward-logo.png",
  },
  {
    side: "right",
    year: "2023/8 ~ 現在",
    title: "株式会社Nexceed",
    supplement: "インターンシップ (通年)",
    content: "React, NestJSを使ったWeb開発インターンシップ",
    href: "https://nexceed.co.jp/",
    icon: "/nexceed-logo.webp",
  },
  {
    side: "right",
    year: "2023/9",
    title: "freee株式会社",
    supplement: "インターンシップ (2weeks)",
    content: "Railsを使ったWeb開発インターンシップ",
    href: "https://freee.co.jp/",
    icon: "/freee-logo.png",
  },
  {
    side: "left",
    year: "2023/9",
    title: "Bingo App",
    supplement: "製作",
    content: "Chakra UIを使って1.5時間程度で作成",
    workId: "bingo-app",
  },
  {
    side: "right",
    year: "2023/9 ~ 現在",
    title: "カバー株式会社",
    supplement: "インターンシップ (通年)",
    content: "Unityでの開発インターンシップ",
    href: "https://cover-corp.com/",
    icon: "cover-logo.png",
  },
  {
    side: "left",
    year: "2023/10",
    title: "Moonquake Viewer",
    supplement: "ハッカソン",
    content: "NASA Space Apps Challenge 2023 横浜大会優勝・世界大会出場",
    workId: "moonquake-viewer",
  },
  {
    side: "right",
    year: "2023/10 ~ 2023/11",
    title: "株式会社ファーストリテイリング",
    supplement: "インターンシップ (1month)",
    content: "React, Flutterでの開発インターンシップ",
    href: "https://www.fastretailing.com/jp/",
    icon: "fr-logo.png",
  },
  {
    side: "left",
    year: "2023/11",
    title: "Open in Fork Button",
    supplement: "開発",
    content: "VSCode拡張機能",
    workId: "open-in-fork-button",
  },
  {
    side: "left",
    year: "2023/11",
    title: "Amazon Sakura Checker Viewer",
    supplement: "開発",
    content: "Amazonでサクラチェッカーを直接表示してくれる拡張機能",
    workId: "amazon-sakura-checker-viewer",
  },
];
