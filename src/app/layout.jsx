import { Providers } from './providers'
import './globals.css'

export const metadata = {
  title: 'Menshikov Studio',
  description: 'Сайты, Telegram Mini Apps и боты под ключ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
