/** 公開サイトの正規ホスト（カスタムドメイン） */
export const CANONICAL_SITE_ORIGIN = "https://rosy-ruby.com";

/**
 * サイトマップ・robots・metadata 用のベース URL。
 * - `NEXT_PUBLIC_SITE_URL` が最優先
 * - Vercel 本番（`VERCEL_ENV === "production"`）はカスタムドメイン
 * - それ以外の Vercel（プレビュー等）は `VERCEL_URL`
 * - ローカルは localhost
 */
export function getBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  if (process.env.VERCEL_ENV === "production") {
    return CANONICAL_SITE_ORIGIN;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === "production") {
    return CANONICAL_SITE_ORIGIN;
  }

  return "http://localhost:3000";
}
