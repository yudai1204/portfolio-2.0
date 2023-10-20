import { Text, Link } from "@chakra-ui/react";
import type { Work } from "../types";

export const works: Work[] = [
  {
    title: "Moonquake Viewer",
    year: "2023",
    shortDescription: (
      <>
        <Text>NASA Space Apps Challenge 2023 横浜大会優勝・世界大会出場作品</Text>
        <Text>
          初出場のハッカソンで、2日間で作り上げました。同じく初出場メンバー計4人でチームを作成し、リーダーとして環境構築からコーディング、レビューまで行いました。
          詳細は<Link href="https://github.com/yudai1204/nasa-hackathon-2023-yokohama">GitHubレポジトリ</Link>
          をご確認ください。
        </Text>
      </>
    ),
    imageUrls: ["moonquake1.png"],
    videoUrls: ["Il3rgj9Lo7g"],
    githubUrl: "https://github.com/yudai1204/nasa-hackathon-2023-yokohama",
    urls: [
      {
        name: "Webアプリケーション",
        url: "https://nasa-hackathon-2023-yokohama.vercel.app/",
      },
    ],
    tags: ["ハッカソン", "TypeScript", "Next.js", "Three.js", "複数人開発", "Git"],
  },

  {
    title: "ScombZ Utilities",
    year: "2022",
    shortDescription: (
      <>
        2023年度から学生ポータルサイトが一新され、以前に比べUI/UXが使いづらくなったと感じたため、それを修正するブラウザ拡張機能を作成し公開しました。
        この拡張機能自体は私がJavaScriptの勉強を兼ねて1人で制作を開始しましたが、同じように使いにくいと感じた友人が途中で数名合流しGit開発に移行しました。
        現在はNativeのJavaScriptで記述されていますが、新しいプロジェクトとしてReactおよびTypeScriptを用いたリファクタリングを行っています。
      </>
    ),
    imageUrls: ["utilities1.png", "utilities2.png", "utilities3.png", "utilities4.png"],
    githubUrl: "https://github.com/yudai1204/ScombZ-Utilities",
    urls: [
      {
        name: "Chromeウェブストア",
        url: "https://chrome.google.com/webstore/detail/scombz-utilities/iejnanaabfgocfjbnmhkfheghbkanibj?hl=ja",
      },
      {
        name: "公式サイト",
        url: "https://scombz-utilities.com/",
      },
      {
        name: "React版レポジトリ",
        url: "https://github.com/yudai1204/scombz-utilities-react",
      },
    ],
    tags: ["JavaScript", "Chrome拡張機能", "複数人開発", "Git"],
  },

  {
    title: "Bingo App",
    year: "2023",
    shortDescription: <>サークルの親睦会での使用を目的として、Chakra UIを使って1時間程度で作成しました。</>,
    imageUrls: ["bingoapp.png"],
    githubUrl: "https://github.com/yudai1204/bingo-counter",
    urls: [
      {
        name: "Webアプリケーション",
        url: "https://bingoapp-shibalab.vercel.app/",
      },
    ],
    tags: ["React", "TypeScript", "Chakra UI", "Next.js", "個人開発"],
  },

  {
    title: "ポートフォリオサイト",
    year: "2023",
    shortDescription: (
      <>
        <Text>このポートフォリオサイトです。実は2代目で、以前のものとは分離して完全な作り直しを行いました。</Text>
        <Text>以前のものはJS / vanilla Next.jsでしたが、2代目でTS / Chakra Uiになりました</Text>
      </>
    ),
    imageUrls: ["portfolio.png"],
    githubUrl: "https://github.com/yudai1204/portfolio-2.0",
    urls: [
      {
        name: "Webサイト",
        url: "https://yudai04.dev/",
      },
    ],
    tags: ["React", "TypeScript", "Next.js", "Chakra UI", "個人開発"],
  },

  {
    title: "GoogleDrive Uploder(仮)",
    year: "2022",
    shortDescription: (
      <>
        <Text>
          Googleアカウントを持っていなくてもGoogleドライブ上にアップロードできるGASアプリケーションです。クラウドソーシングサイトでの依頼で提案、作成しました。
        </Text>
        <Text>
          Googleアカウントでログインできない端末から動画をアップロードするのですが、事前にGoogleフォームに回答をしてもらい、フォームに記載されたメールアドレスにuuidを含ませたURLを送信することによってアップロード者の識別を図りセキュリティ上の問題を解決しています。
        </Text>
      </>
    ),
    imageUrls: ["googleup1.png"],
    tags: ["Google Apps Script", "個人開発", "委託開発"],
  },

  {
    title: "AI診察Bot",
    year: "2023",
    shortDescription: (
      <>
        <Text>
          LINE Messaging API及びChatGPTを用いた自動返信Botです。
          LlamaIndexというライブラリを用い、事前に設定した知識情報をもとに返信することができ、ChatGPTの制限よりも多いデータ数を読み込ませることができるためオリジナルの返信をすることができます。
          今回は依頼元クリニックのデータと医療データを大量に読み込み、医療に関する質問に答えることができるようにしました。
          DBに会話履歴を保存しAPIに送信することで会話の流れを読んだ回答をすることができます。 サーバーはAWS EC2
          (Apache)、DBにはAWS RDSを使用しPython FlaskでAPIを作成しました。
          読み込ませるデータ量を増やしたり、プロンプトを変更することでより精度を高められます。
        </Text>
      </>
    ),
    imageUrls: ["line_bot.jpg"],
    githubUrl: "https://github.com/yudai1204/LlamaIndex-LineBot",
    tags: ["Python", "AWS", "個人開発", "委託開発"],
  },

  {
    title: "文化祭ステージ企画",
    year: "2019",
    shortDescription: (
      <>
        <Text>
          GCP無料枠を使い、Google Compute Engine上にApacheサーバーを立てて運営。
          ドメイン取得、SSL化、PHPインストールからコーディングまでシステム全般を担当。
          また、プロジェクター3台を制御する自作プログラムを作成(HSP3)。
          スマホのカメラを生中継したり動画を再生したりを手元のコンピューターから制御。
          ニコニコ動画のようなコメントスクリーンシステムを制作したが、スマホが基本的に禁止のため本番では実現しなかった。
        </Text>
      </>
    ),
    imageUrls: ["bunkasai.png"],
    tags: ["Apache", "PHP", "個人開発", "GCP"],
  },

  {
    title: "ScombZ Status Bot",
    year: "2023",
    shortDescription: (
      <>
        <Text>
          学生ポータルサイトScombZの障害情報と、弊学情報課からのお知らせを報告するBotです。
          情報化からのお知らせには通知がないため、SNSで情報を発信することにより多くの人に伝えます Twitter
          APIの有料化に伴ってなにが無料版でできるのかを確認したく制作しました。
        </Text>
      </>
    ),
    imageUrls: ["statusbot1.png"],
    urls: [
      {
        name: "Twitter Bot",
        url: "https://twitter.com/scomb_z",
      },
    ],
    tags: ["Python", "Linux", "個人開発"],
  },

  {
    title: "みんなで作る花火大会",
    year: "2022",
    shortDescription: (
      <>
        <Text>
          学祭に向けShibaLabで発表したインタラクティブアート作品です。
          タブレットやスマートフォンで描いた絵がその場で花火となって打ちあがるという作品です。
          打ち上げられている作品はだれかが今まで描いたもので、世界に1つしかない花火を作れます。
        </Text>
      </>
    ),
    imageUrls: ["hanabi1.png"],
    videoUrls: ["EVCMPWxUo2k"],
    tags: ["p5.js", "個人開発", "インタラクティブアート", "PHP", "JavaScript"],
    urls: [
      {
        name: "ShibaLab - works",
        url: "https://shibalab.com/wp/portfolio/%e3%81%8a%e7%b5%b5%e3%81%8b%e3%81%8d%e6%89%93%e3%81%a1%e4%b8%8a%e3%81%92%e8%8a%b1%e7%81%ab/",
      },
    ],
  },

  {
    title: "Cat and Seek",
    year: "2023",
    shortDescription: (
      <>
        <Text>
          学祭に向けShibaLabで発表したインタラクティブアート作品です。
          Wiiリモコンを上下左右に動かすことによって、それをジャイロセンサーで読み取り目の前の空間にまるで懐中電灯で照らしているかのように映し出されます。
          その中に隠れている猫を探し、餌をあげることができるという作品です。
        </Text>
      </>
    ),
    imageUrls: ["catandseek1.png"],
    videoUrls: ["3c3dtXT7k1w"],
    tags: ["Unity", "複数人開発", "インタラクティブアート"],
    urls: [
      {
        name: "ShibaLab - works",
        url: "https://shibalab.com/wp/works/",
      },
    ],
  },

  {
    title: "ShibaLab Webサイト",
    year: "2022",
    shortDescription: (
      <>
        <Text>
          自身が所属するメディアアート制作サークルのホームページを作成しました。
          デザインからコーディングまでを1人で行いました。
        </Text>
      </>
    ),
    imageUrls: ["shibalabWeb.png"],
    tags: ["HTML", "CSS", "JavaScript", "個人開発"],
    githubUrl: "https://github.com/Shiba-Lab/new-website-2022",
    urls: [
      {
        name: "ShibaLab",
        url: "https://shibalab.com/",
      },
    ],
  },

  {
    title: "bolide for Chrome",
    year: "2023",
    shortDescription: (
      <>
        <Text>
          ニコニコ動画のように画面にコメントを流すソフトウェアであるBolideのブラウザ拡張機能版を1日で制作しました。
          bolide自体は私の所属するサークルであるデジクリ内で開発されたソフトウェアです。
        </Text>
      </>
    ),
    imageUrls: ["bolide.jpg"],
    githubUrl: "https://github.com/SIT-DigiCre/bolide",
    tags: ["JavaScript", "Chrome拡張機能", "個人開発", "Git"],
  },

  {
    title: "ShibaLab 紹介動画",
    year: "2023",
    shortDescription: (
      <>
        <Text>新入生向けにサークル紹介動画を作成しました。</Text>
      </>
    ),
    videoUrls: ["C2-YqtxBFP0"],
    tags: ["Adobe After Effects", "個人開発"],
  },
];
