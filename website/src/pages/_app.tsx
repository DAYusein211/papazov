
import type { AppProps } from 'next/app'
import Head from '../components/head'
import Navbar from '../components/navbar'
export default function App({ Component, pageProps }: AppProps) 
{
  return(
  <> 
  <Head/>
<Component {...pageProps} />
  <Navbar/>
  
</>
)
}
