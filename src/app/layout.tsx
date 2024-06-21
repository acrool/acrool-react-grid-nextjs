import './globals.css'
import '@acrool/react-grid/dist/index.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry, {BearReactGridRegistry} from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bear React Grid',
  description: 'Generated by create next app',
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <StyledComponentsRegistry>
        <BearReactGridRegistry>
          {children}
        </BearReactGridRegistry>
      </StyledComponentsRegistry>
      </body>
      </html>
  )
}
