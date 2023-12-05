import { BsGithub, BsVoicemail } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SiWantedly, SiQiita } from "react-icons/si";

export const contacts = [
  {
    genre: "Email",
    value: "yudai1204u@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    genre: "GitHub",
    value: "@yudai1204",
    url: "https://github.com/yudai1204",
    icon: BsGithub,
  },
  {
    genre: "X(Twitter)",
    value: "@yudai1204",
    icon: FaXTwitter,
    url: "https://twitter.com/yudai1204",
  },
  {
    genre: "Wantedly",
    value: "@yudai1204",
    url: "https://www.wantedly.com/id/yudai1204",
    icon: SiWantedly,
  },
  {
    genre: "crowdworks",
    value: "@yu0404",
    url: "https://crowdworks.jp/public/employees/4780926",
    icon: BsVoicemail,
  },
  {
    genre: "Qiita",
    value: "@yudai1204",
    url: "https://qiita.com/yudai1204",
    icon: SiQiita
  },
];
