import type { AppProps } from 'next/app'
import '../styles/global.scss';
import FacebookPixel from './fb-pixel';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
      <FacebookPixel />
    </main>
  )
}
