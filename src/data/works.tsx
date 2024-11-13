import { Text, Link } from "@chakra-ui/react";
import type { Work } from "../types";

export const works: Work[] = [
  {
    id: "shibalab-yggdrasill",
    title: "Let the Magic Flower Bloom",
    year: "2024",
    shortDescription:
      "2024年11月に実施した、芝浦工業大学の学祭「芝浦祭」で発表した作品です。フォームの回答内容に応じてユーザ独自の世界観に花を咲かせます。多くの変化項目があり、また多くのデバイスが連動して1つの作品となる複雑な構成になっています。",
    longDescription: (
      <>
        <Text>
          2024年11月に実施した、芝浦工業大学の学祭「芝浦祭」で発表した作品です。
          OpenAIのJSONスキーマモードでフォームの回答内容から独自の回答を生成し、それを用いてユーザ独自の世界観に花を咲かせます。
        </Text>
        <Text>
          ユーザーのスマートフォンで独自のフォームを開き回答をすると、QRコードが画面上に表示されます。
          そのQRコードを展示会場内の端末に載せることで、ユーザーのスマートフォン上に「魔法の種」が表示されます。
          展示場内のジョウロでその種に水をあげると、種は成長しスマートフォンの大きさを超える花が会場のスクリーン上に映し出されます。
          また、その際にタブレットで窓を作り物理的なマスクを行なっており、「仮想的な窓」から見える景色は違った色合いになります。
        </Text>
        <Text>
          数多くのデバイスが連動し、1つの作品となっています。
          現在インターネットには数多くのデバイスが接続されていますが、それらの「つながり」を可視化し、インターネットを通さない現実の世界に落とし込むことで、自分のスマートフォンから世界へと変化を与えられることを表現しました。
        </Text>
        <Text>
          ユーザの入力により変化させられる項目として、花の色やモデル、木のモデル、背景の世界、天気、時間帯などがあります。
        </Text>
        <Text>この作品は私のアイデアをもとに3人の班で制作を行いました。私はメインプログラムの制作を担当しました。</Text>
      </>
    ),
    imageUrls: ["yggdrasill1.jpg", "yggdrasill3.jpg", "yggdrasill2.jpg"],
    githubUrl: "https://github.com/yudai1204/project-yggdrasill",
    videoUrls: ["74FTShiPke8", "9PNZJ4TNNmo", "jJxSa6Ol0Oo"],
    tags: [
      "Three.js",
      "Azure",
      "Python",
      "WebSocket",
      "WebGL",
      "React",
      "TypeScript",
      "Chakra UI",
      "Next.js",
      "p5.js",
      "Arduino",
    ],
  },

  {
    id: "shibalab-seiza-gpt",
    title: "星空に浮かぶストーリー",
    year: "2024",
    shortDescription:
      "2024年5月に実施した学祭である大宮祭で発表した作品です。GPT-4oおよびDALL-E 3のAPIを用いて、ユーザが入力したキーワードから物語とオリジナル星座を生み出します。",
    longDescription: (
      <>
        <Text>
          2024年5月に実施した学祭である大宮祭で発表した作品です。GPT-4oおよびDALL-E
          3のAPIを用いて、ユーザが入力したキーワードから物語とオリジナル星座を生み出します。
        </Text>
        <Text>
          約8時間程度で構想からversion1.0の完成まで漕ぎ着けることができました。学祭中は1日で約150人の方に利用していただき、好評をいただきました。
        </Text>
      </>
    ),
    imageUrls: ["seiza-gpt.jpg"],
    githubUrl: "https://github.com/Shiba-Lab/omiya-2024-web-app-seiza-gpt",
    videoUrls: ["PslmMZ3zmc4"],
    tags: ["React", "TypeScript", "Chakra UI", "Next.js", "p5.js"],
  },

  {
    id: "moonquake-viewer",
    title: "Moonquake Viewer",
    year: "2023",
    shortDescription:
      "【ハッカソン優勝作品】月面上地震をマッピングするWebアプリです。メイン機能は2日間、それ以外をその後の数日間を使って実装しました。",
    longDescription: (
      <>
        <Text fontWeight="600">NASA Space Apps Challenge 2023 横浜大会優勝・世界大会出場作品</Text>
        <Text>
          月面上地震をマッピングするWebアプリです。過去の地震や月の関連情報などを見やすく表示します。メイン機能は2日間、それ以外をその後の数日間を使って実装しました。
          自分自身初めてのハッカソンで、同じく初出場メンバー計4人でチームを作成し、リーダーとして環境構築からコーディング、レビューまで行いました。
          詳細は<Link href="https://github.com/yudai1204/nasa-hackathon-2023-yokohama">GitHubレポジトリ</Link>
          をご確認ください。
        </Text>
      </>
    ),
    imageUrls: ["moonquake1.jpg"],
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
    id: "scombz-utilities",
    title: "ScombZ Utilities",
    year: "2022",
    shortDescription: "大学の学生ポータルサイトのUI/UXを改善し、学生にとって使いやすくするためのブラウザ拡張機能です。",
    longDescription: (
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
    id: "lab-hp",
    title: "研究室Webサイト",
    year: "2024",
    shortDescription: "大学で所属している研究室のWebサイトをAstroを用いて作成しました。",
    longDescription: (
      <>
        <Text>大学で所属している研究室のWebサイトをAstroを用いて作成しました。</Text>
        <Text>GitHub Pages上にデプロイされており、自動でビルドテストも走ります。</Text>
      </>
    ),
    imageUrls: ["manabelab.jpg"],
    githubUrl: "https://github.com/physically-augmented-interaction/manabe-lab-hp",
    urls: [
      {
        name: "Webサイト",
        url: "https://pai.eng.shibaura-it.ac.jp/",
      },
    ],
    tags: ["Astro", "TypeScript"],
  },

  {
    id: "bingo-app",
    title: "Bingo App",
    year: "2023",
    shortDescription:
      "簡易的なビンゴマシンです。サークルの親睦会での使用を目的として、Chakra UIを使って1.5時間程度で作成しました。",
    longDescription: (
      <>
        <Text>
          簡易的なビンゴマシンです。サークルの親睦会での使用を目的として、Chakra UIを使って1.5時間程度で作成しました。
        </Text>
        <Text>合宿中のBingoをより盛り上げるためにわかりやすく使いやすいUI/UXを目指しました。</Text>
      </>
    ),
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
    id: "portfolio",
    title: "ポートフォリオサイト",
    year: "2023",
    shortDescription: "このポートフォリオサイトです。実は2代目で、以前のものとは分離して完全な作り直しを行いました。",
    longDescription: (
      <>
        <Text>このポートフォリオサイトです。実は2代目で、以前のものとは分離して完全な作り直しを行いました。</Text>
        <Text>
          以前のものはJS / vanilla Next.jsでしたが、2代目でTS / Chakra
          UIになりました。前回よりUI/UXを見直し、より直感的でわかりやすいサイトを目指しています。
        </Text>
        <Text>
          画面右下ボタンより、ライトモードとダークモードの切り替えができますが、基本的にはライトモードでの閲覧をお勧めします。
        </Text>
      </>
    ),
    imageUrls: ["portfolio.jpg"],
    githubUrl: "https://github.com/yudai1204/portfolio-2.0",
    urls: [
      {
        name: "Webサイト",
        url: "https://yudai04.dev/",
      },
      {
        name: "1代目",
        url: "https://yudai1204.github.io/portfolio-test/",
      },
    ],
    tags: ["React", "TypeScript", "Next.js", "Chakra UI", "個人開発"],
  },

  {
    id: "open-in-fork-button",
    title: "Open in Fork Button",
    year: "2023",
    shortDescription: "VSCodeでGitクライアントであるForkを開くボタンを追加する拡張機能です。",
    longDescription: (
      <>
        VSCode向けの拡張機能で、私の愛用するGitクライアントである
        <a href="https://git-fork.com/" target="_blank">
          Fork
        </a>
        をボタンひとつで開けるようにするものです。 該当のレポジトリを直接開くことができます。
      </>
    ),
    imageUrls: ["fork.png"],
    githubUrl: "https://github.com/yudai1204/open-in-fork-button",
    urls: [
      {
        name: "VSCode Marketplace",
        url: "https://marketplace.visualstudio.com/items?itemName=yudai1204.open-in-fork-button",
      },
    ],
    tags: ["TypeScript", "VSCode拡張機能", "個人開発"],
  },

  // {
  //   id: "amazon-sakura-checker-viewer",
  //   title: "Amazon Sakura Checker Viewer",
  //   year: "2023",
  //   shortDescription: "Amazonの商品一覧画面にサクラチェッカーの結果を表示します。",
  //   longDescription: (
  //     <>
  //       <Text>
  //         Amazonの商品一覧画面にサクラチェッカーの結果を表示します。また、類似サービスであるReviewMetaの結果も表示します。
  //       </Text>
  //       <Text>
  //         クリックなしに結果を表示するため、Amazonの商品詳細を見ながらサクラチェッカーの結果を確認することができます。
  //       </Text>
  //     </>
  //   ),
  //   imageUrls: ["sakurachecker.jpg"],
  //   githubUrl: "https://github.com/yudai1204/sakura-checker-viewer",
  //   urls: [
  //     {
  //       name: "Chromeウェブストア",
  //       url: "https://chromewebstore.google.com/detail/amazon-sakura-checker-vie/mmadhiofkjibiodihnmicliiipgiofha?hl=ja",
  //     },
  //   ],
  //   tags: ["個人開発", "Chrome拡張機能", "JavaScript"],
  // },

  {
    id: "youtube-ascii-art-maker",
    title: "YouTube ASCII ART Maker",
    year: "2023",
    shortDescription: "YouTubeの字幕機能を使ってアスキーアートを色付きで生成するpythonスクリプトです。",
    longDescription: (
      <>
        <Text>
          YouTubeには字幕機能があり、私の
          <Link href="https://qiita.com/yudai1204/items/898c368af8832443a874" isExternal>
            過去に執筆した記事
          </Link>
          でも解説させていただいたことがありますが非常に高いカスタマイズ性があります。
        </Text>
        <Text>このスクリプトは、画像から色付きのアスキーアートをYouTubeの字幕として生成するpythonスクリプトです。</Text>
      </>
    ),
    imageUrls: ["youtube_aa.jpg"],
    githubUrl: "https://github.com/yudai1204/youtube-ascii-art-maker",
    urls: [
      {
        name: "Qiita記事 - これであなたもコメ職人！YouTubeの字幕機能でアスキーアート",
        url: "https://qiita.com/yudai1204/items/7e8f2f9db94ba8edd9b2",
      },
    ],
    tags: ["個人開発", "Python"],
  },

  {
    id: "reply-generator",
    title: "クソリプジェネレータ",
    year: "2023",
    shortDescription:
      "ChatGPTにリプライを考えてもらおう！Chat GPTの非公式APIを使い、Twitterのリプライを生成する拡張機能を作成しました。",
    longDescription: (
      <>
        <Text>ChatGPTにリプライを考えてもらおう！</Text>
        <Text>Chat GPTの非公式APIを使い、Twitterのリプライを生成する拡張機能を作成しました。</Text>
        <Text>APIの使用料等は不要で、OpenAIのChatGPTサービスにログイン済みであれば使用できます。</Text>
        <Text>標準ではいわゆる「クソリプ」を生成することができます。</Text>
        <Text>
          設定画面から各ボタンの表示名とプロンプトを変更可能なため、クソリプによらず様々なリプライを生成することができます。
        </Text>
      </>
    ),
    imageUrls: ["kusogen1.webp", "kusogen2.webp"],
    videoUrls: ["HujQvTFiCAM"],
    githubUrl: "https://github.com/yudai1204/kuso-replay-generator",
    urls: [
      {
        name: "Chromeウェブストア",
        url: "https://chromewebstore.google.com/detail/%E3%82%AF%E3%82%BD%E3%83%AA%E3%83%97%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF/igafhgbpjahkdnneohlmmikmaedmlaha?hl=ja",
      },
    ],
    tags: ["個人開発", "Chrome拡張機能", "JavaScript"],
  },

  {
    id: "google-drive-uploader",
    title: "GoogleDrive Uploder(仮)",
    year: "2022",
    shortDescription:
      "ファイル送り主がGoogleアカウントを持っていなくても、送り先のGoogleドライブ上にアップロードできるGASアプリケーションです。",
    longDescription: (
      <>
        <Text>
          ファイル送り主がGoogleアカウントを持っていなくても、送り先のGoogleドライブ上にアップロードできるGASアプリケーションです。クラウドソーシングサイトでの依頼で提案、作成しました。
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
    id: "llamaindex-linebot",
    title: "AI診察Bot",
    year: "2023",
    shortDescription:
      "LINE Messaging API及びChatGPTを用いた自動返信Botです。GPTがファインチューニング対応前に制作したため、擬似的にファインチューニングを行っています。",
    longDescription: (
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
    id: "school-festival-2019",
    title: "文化祭ステージ企画",
    year: "2019",
    shortDescription: "ステージ背景の3枚のプロジェクタを管理するアプリケーションです。",
    longDescription: (
      <>
        <Text>
          GCP無料枠を使い、Google Compute Engine上にApacheサーバーを立てて運営しました。
          ドメイン取得、SSL化、PHPインストールからコーディングまでシステム全般を担当しました。
          また、プロジェクター3台を制御する自作プログラムを作成(HSP3)しました。
          スマホのカメラを生中継したり動画を再生したりを手元のコンピューターから制御できます。
          ニコニコ動画のようなコメントスクリーンシステムを制作しましたが、スマホが基本的に禁止のため本番では実現しませんでした。
        </Text>
      </>
    ),
    imageUrls: ["bunkasai.png"],
    tags: ["Apache", "PHP", "個人開発", "GCP"],
  },

  {
    id: "scombz-status-bot",
    title: "ScombZ Status Bot",
    year: "2023",
    shortDescription:
      "大学の学生ポータルサイトの障害情報と、ホームページで公開されている情報課からのお知らせをリアルタイムで報告するBotです。",
    longDescription: (
      <>
        <Text>
          学生ポータルサイトScombZの障害情報と、弊学情報課からのお知らせをリアルタイムで報告するBotです。
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
    id: "shibalab-fireworks",
    title: "みんなで作る花火大会",
    year: "2022",
    shortDescription:
      "タブレットやスマートフォンで描いた絵がその場で花火となって打ちあがるというインタラクティブアート作品です。",
    longDescription: (
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
    id: "shibalab-catandseek",
    title: "Cat and Seek",
    year: "2023",
    shortDescription: "懐中電灯を動かして隠れた猫を探すというインタラクティブアート作品です。",
    longDescription: (
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
    id: "shibalab-web",
    title: "ShibaLab Webサイト",
    year: "2022",
    shortDescription: "自身が所属するメディアアート制作サークルのホームページを作成しました。",
    longDescription: (
      <>
        <Text>
          自身が所属するメディアアート制作サークルのホームページを作成しました。
          デザインからコーディングまでを1人で行いました。
        </Text>
        <Text>HTML/CSSとネイティブのJavaScriptを使って制作を行いました。</Text>
      </>
    ),
    imageUrls: ["shibalabWeb.jpg"],
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
    id: "bolide",
    title: "bolide for Chrome",
    year: "2023",
    shortDescription: "ニコニコ動画のように画面にコメントを流すブラウザ拡張機能を1日で制作しました。",
    longDescription: (
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
    id: "shibalab-video",
    title: "ShibaLab 紹介動画",
    year: "2023",
    shortDescription: "新入生向けに所属するサークルであるShibaLabの紹介動画を作成しました。",
    longDescription: (
      <>
        <Text>新入生向けに所属するサークルであるShibaLabの紹介動画を作成しました。</Text>
      </>
    ),
    videoUrls: ["C2-YqtxBFP0"],
    tags: ["Adobe After Effects", "個人開発"],
  },
];
