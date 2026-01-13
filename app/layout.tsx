import type React from "react"
import type { Metadata } from "next"
import { Unbounded } from "next/font/google"
import "./globals.css"

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
})

export const metadata: Metadata = {
  title: "Menshikov Studio — Разработка сайтов и Telegram Mini Apps",
  description: "Профессиональная разработка веб-сайтов и мини-приложений для Telegram. Создаем современные digital-решения для вашего бизнеса.",
  keywords: [
    "разработка сайтов",
    "telegram mini apps",
    "веб-разработка",
    "создание сайтов",
    "telegram боты",
    "digital агентство",
    "menshikov studio"
  ],
  authors: [{ name: "Menshikov Studio" }],
  creator: "Menshikov Studio",
  publisher: "Menshikov Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://menshikov-studio.ru',
    title: 'Menshikov Studio — Разработка сайтов и Telegram Mini Apps',
    description: 'Профессиональная разработка веб-сайтов и мини-приложений для Telegram. Создаем современные digital-решения для вашего бизнеса.',
    siteName: 'Menshikov Studio',
    images: [
      {
        url: 'https://storage.yandexcloud.net/file-talentio/og-image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEN31DylN8ddcNRnZTzj8z%2F20260113%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20260113T190816Z&X-Amz-Expires=60&X-Amz-Signature=fdf6080f854592885e959aeca4acbd7de58b5b23ad39c2b16f3b73d52e6a5b52&X-Amz-SignedHeaders=host',
        width: 1200,
        height: 630,
        alt: 'Menshikov Studio - Разработка сайтов и Telegram Mini Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menshikov Studio — Разработка сайтов и Telegram Mini Apps',
    description: 'Профессиональная разработка веб-сайтов и мини-приложений для Telegram. Создаем современные digital-решения для вашего бизнеса.',
    images: ['https://storage.yandexcloud.net/file-talentio/og-image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEN31DylN8ddcNRnZTzj8z%2F20260113%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20260113T190816Z&X-Amz-Expires=60&X-Amz-Signature=fdf6080f854592885e959aeca4acbd7de58b5b23ad39c2b16f3b73d52e6a5b52&X-Amz-SignedHeaders=host'],
  },
  alternates: {
    canonical: 'https://menshikov-studio.ru',
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="cae522a457990b19" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="https://storage.yandexcloud.net/file-talentio/og-image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEN31DylN8ddcNRnZTzj8z%2F20260113%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20260113T190816Z&X-Amz-Expires=60&X-Amz-Signature=fdf6080f854592885e959aeca4acbd7de58b5b23ad39c2b16f3b73d52e6a5b52&X-Amz-SignedHeaders=host" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://storage.yandexcloud.net/file-talentio/og-image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEN31DylN8ddcNRnZTzj8z%2F20260113%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20260113T190816Z&X-Amz-Expires=60&X-Amz-Signature=fdf6080f854592885e959aeca4acbd7de58b5b23ad39c2b16f3b73d52e6a5b52&X-Amz-SignedHeaders=host" />
        
        {/* Yandex.Metrika counter */}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106228432', 'ym');
            ym(106228432, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `
        }} />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106228432" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </head>
      <body className={`${unbounded.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
