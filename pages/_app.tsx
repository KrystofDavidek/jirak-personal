import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { AppProps } from 'next/app'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import logoImg from '../assets/logo-uprava.jpg'
import Navbar from '../components/Navbar'

export const CITATION = `„Jsme předurčeni k tomu být šťastní i v nedokonalém světě.“`

export default function App({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0)
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    window.dispatchEvent(new Event('resize'))
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      /> */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {width && width < 500 && (
          <div>
            <Image placeholder="blur" src={logoImg} alt="logo" />
          </div>
        )}

        <main className="flex flex-col justify-between min-h-full sm:m-5">
          <Component {...pageProps} />
        </main>
        <footer className="flex flex-wrap-reverse items-center justify-center gap-4 sm:mr-7 sm:ml-8 md:justify-between">
          <div className="m-1">
            <p className="text-sm">© 2025 Kryštof Davídek</p>
          </div>
          <div
            className={`flex ${
              width && width > 350 ? 'text-xl' : 'text-[1.5rem]'
            } md:text-[1.5rem] font-bold flex-col items-center gap-4 m-1 md:items-start sm:flex-row`}>
            <p>
              <span>E-mail: </span>
              <a href="mailto: Martinn.jirakk@gmail.com" className="text-font-green">
                Martinn.jirakk@gmail.com
              </a>
              <span>,</span>
            </p>
            <p>
              <span>Tel: </span>
              <a href="tel:776311663" className="text-font-green">
                776 311 663
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
