import '@styles/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
