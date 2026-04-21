This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 運用ガイド（画像サイズ）

### 1. ブランドロゴ・Favicon

- `public/RosyRubylogo2.png`（ヘッダーロゴ）  
  - 推奨: **横 600px × 縦 270px 前後**（約 20:9）  
  - 余白込みで横長のロゴ画像としてデザインする想定。
- `public/favicon.png`  
  - 推奨: **512px × 512px（正方形）**  
  - 小さいサイズにも縮小されるため、細かすぎないシルエットが望ましい。

### 2. About セクション

- `public/faceup.png`（プロフィールアイコン）  
  - 推奨: **512px × 512px（正方形）**  
  - 丸くトリミングされるため、顔や中心モチーフが画像中央に来るように配置する。

### 3. Tools セクションのサムネイル

各ツールカード上部に横長サムネイルを表示しています。  
実装では `width={400}` `height={180}` として扱っているため、基準比率は **20:9** です。

- こまわり時間割作成ツール: `public/window.svg`  
- tailwindCSS作成ツール: `public/file.svg`  
- 世界時計ツール: `public/globe.svg`  

**推奨サイズ（共通）**

- 最低限: **横 400px × 縦 180px**  
- 推奨: **横 800px × 縦 360px**  
- 高精細: **横 1200px × 縦 540px**  
- SVG の場合も **20:9** のアートボードで作ると表示が安定する。  
- 重要な内容は上下左右 **5〜8%** の安全マージン内に収めると、`object-cover` でも崩れにくい。  
- 細かい文字は潰れやすいため、アイコンや図形中心のデザインを推奨。

### 4. Notionテンプレートリンク セクション

- サムネイル: `public/file.svg`（再利用）  
- 基本: **横 1200px × 縦 540px**（20:9）  
- 実装上の基準: `width={400}` `height={180}`  
- ツールセクションと同じ比率・世界観でデザインすると一体感が出る。

キャッシュは下記を消す
C:\Users\neneh\MyApp\rosyruby-portfolio\.next\dev\cache\images

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
