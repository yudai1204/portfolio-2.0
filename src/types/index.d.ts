export type Tag =
  | "個人開発"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "インターン"
  | "JavaScript"
  | "Python"
  | "Unity"
  | "Processing"
  | "p5.js"
  | "AWS"
  | "GCP"
  | "Docker"
  | "Apache"
  | "nginx"
  | "Git"
  | "Figma"
  | "Canva"
  | "Adobe After Effects"
  | "Google Apps Script"
  | "SQL"
  | "C"
  | "PHP"
  | "Java"
  | "HSP3"
  | "HTML"
  | "CSS"
  | "Ruby"
  | "C#"
  | "GLSL"
  | "Arduino"
  | "ハッカソン"
  | "複数人開発"
  | "委託開発"
  | "Chrome拡張機能"
  | "Linux"
  | "Chakra UI"
  | "インタラクティブアート"
  | "VSCode拡張機能"
  | "Three.js";

export type Work = {
  title: string;
  year: string;
  shortDescription: string | ReactElement;
  longDescription?: string | ReactElement;
  imageUrls?: string[];
  videoUrls?: string[];
  githubUrl?: string;
  urls?: { name: string; url: string }[];
  tags?: Tag[];
};
