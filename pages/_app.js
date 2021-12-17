import '../styles/globals.css'
import Head from 'next/head';
import {AppProvider} from '../useContext';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  
  <>
  <AppProvider>
  <Head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
  </Head>

  <Component {...pageProps} />

  <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous"></Script>

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous"></Script>

<Script src="https://www.google.com/recaptcha/api.js"></Script>

  </AppProvider>
  </>
  )
  
  
  
}

export default MyApp
