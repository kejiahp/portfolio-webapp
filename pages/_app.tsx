import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageWrapper from '../src/PageWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  )
}
