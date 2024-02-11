import { Skill } from "@/types";

export const affiliations = [
  { name: "芝浦工業大学 工学部情報工学科 実世界インタラクション研究室", link: null },
  { name: "ShibaLab (サークル)", link: "https://shibalab.com" },
  { name: "デジクリ (サークル)", link: "https://digicre.net" },
  { name: "株式会社AppBrew 開発インターン", link: "https://https://appbrew.io/" },
  { name: "株式会社Nexceed 開発インターン", link: "https://nexceed.co.jp/" },
  { name: "カバー株式会社 開発インターン", link: "https://cover-corp.com/" },
  { name: "株式会社ウサギィ 開発アルバイト", link: "https://usagee.co.jp/" },
];

export const awards = [
  "第30回仙台知能ロボットコンテスト 最優秀技術賞",
  "NASA Space Apps Challenge 2023 横浜大会 最優秀賞",
  "NASA Space Apps Challenge 2023 世界大会 出場",
];

export const skills: { lang: Skill[]; framework: Skill[]; infra: Skill[]; tool?: Skill[] } = {
  lang: [
    {
      name: "JavaScript",
      level: 5,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Webフロントエンド開発やブラウザ拡張機能開発など。",
    },
    {
      name: "TypeScript",
      level: 5,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description: "最近ではJavaScriptよりもこちらを使うことが多いです。",
    },
    {
      name: "GAS",
      level: 5,
      icon: "/Google_Apps_Script.svg",
      description: "スプレッドシートの自動化、アップローダーなど。主に趣味の範囲や個人取引で使用。",
    },
    { name: "SQL", level: 2, icon: "/database-icon.svg", description: "Webアプリケーションや授業などに使用。" },
    {
      name: "Python",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "アプリケーション作成など。主に趣味の範囲や個人取引、授業で使用。",
    },
    {
      name: "C/C++",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      description: "ロボットプログラミング、大学の授業などで、組み込みアルゴリズムに使用。",
    },
    {
      name: "Arduino",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      description: "デジタルアートなどで利用",
    },
    {
      name: "PHP",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      description: "主に趣味の範囲で、バックエンドとして利用",
    },
    {
      name: "Java",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description: "授業やインタラクティブアート制作で利用",
    },
    // { name: "HSP3", level: 4, icon: "", description: "" },
    // { name: "HTML", level: 5, icon: "", description: "" },
    // { name: "CSS", level: 5, icon: "", description: "" },
    {
      name: "Ruby",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
      description: "主にインターンシップで利用",
    },
    {
      name: "C#",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      description: "主にインターンシップで利用",
    },
    {
      name: "GraphQL",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
      description: "インターンシップなどで利用",
    },
    {
      name: "Dart",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      description: "インターンシップなどで利用",
    },
    {
      name: "GLSL",
      level: 1,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg",
      description: "一部デジタルアートで利用",
    },
  ],
  framework: [
    {
      name: "React",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "",
    },
    {
      name: "Next.js",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      description: "",
    },
    {
      name: "Vue.js",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      description: "",
    },
    {
      name: "Nuxt.js",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      description: "",
    },
    {
      name: "NestJS",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      description: "",
    },
    {
      name: "Node.js",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      description: "",
    },
    {
      name: "Flask",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      description: "",
    },
    {
      name: "FastAPI",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      description: "",
    },
    {
      name: "Unity",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      description: "",
    },
    {
      name: "Unreal Engine",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg",
      description: "",
    },
    {
      name: "electron",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
      description: "",
    },
    {
      name: "Rails",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
      description: "",
    },
    {
      name: "Processing",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg",
      description: "",
    },
    {
      name: "Flutter",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      description: "",
    },
  ],
  infra: [
    {
      name: "AWS",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      description: "",
    },
    {
      name: "GCP",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      description: "",
    },
    {
      name: "Docker",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      description: "",
    },
    {
      name: "Apache",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      description: "",
    },
    {
      name: "nginx",
      level: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      description: "",
    },
    // {
    //   name: "Heroku",
    //   level: 1,
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    //   description: "",
    // },
  ],
  tool: [
    {
      name: "Git",
      level: 1,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description: "",
    },
    { name: "GitHub", level: 1, icon: "", description: "" },
    { name: "VSCode", level: 1, icon: "", description: "" },
    { name: "Figma", level: 1, icon: "", description: "" },
    { name: "TouchDesigner", level: 1, icon: "", description: "" },
    { name: "blender", level: 1, icon: "", description: "" },
    { name: "Canva", level: 1, icon: "", description: "" },
    { name: "Adobe Photoshop", level: 1, icon: "", description: "" },
    { name: "Adobe Illustrator", level: 1, icon: "", description: "" },
    { name: "Adobe After Effects", level: 1, icon: "", description: "" },
  ],
};

export { contacts } from "./contacts";
export { works } from "./works";
