import type { AppProps } from 'next/app'
import { Header } from '../components/Header';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
