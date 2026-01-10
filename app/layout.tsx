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
    url: 'https://menshikov-studio-web.vercel.app',
    title: 'Menshikov Studio — Разработка сайтов и Telegram Mini Apps',
    description: 'Профессиональная разработка веб-сайтов и мини-приложений для Telegram. Создаем современные digital-решения для вашего бизнеса.',
    siteName: 'Menshikov Studio',
    images: [
      {
        url: 'https://i.imgur.com/ls2jZ0E.png',
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
    images: ['https://i.imgur.com/ls2jZ0E.png'],
  },
  alternates: {
    canonical: 'https://menshikov-studio-web.vercel.app',
  },
  generator: "v0.app",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="https://i.imgur.com/ls2jZ0E.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://i.imgur.com/ls2jZ0E.png" />
      </head>
      <body className={`${unbounded.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
