import type { Metadata } from "next";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { getBaseUrl } from "@/lib/get-base-url";
import "./globals.css";

const siteUrl = getBaseUrl();

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-6SBG7K5PR8";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RosyRuby Portfolio",
  description: "Soft minimal portfolio by RosyRuby",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "RosyRuby",
    title: "RosyRuby Portfolio",
    description: "Soft minimal portfolio by RosyRuby",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${playfairDisplay.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
