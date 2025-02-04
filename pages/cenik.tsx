/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { default as Image } from 'next/image'
import React from 'react'
import ProfileImg from '../assets/profilovka-jirak.jpg'
import useWindowDimensions from '../hooks/useWindowDimension'

const cenik = () => {
  const { width } = useWindowDimensions()

  return (
    <div>
      <Head>
        <title>Ceník | Psycholog a terapeut - Bc. Martin Jirák</title>
        <meta name="description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/ceník" />
        <meta property="og:title" content="Ceník | Psycholog a terapeut - Bc. Martin Jirák" />
        <meta property="og:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-jirak.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/ceník" />
        <meta property="og:site_name" content="mobil kontakty" />

        {/* <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ceník | Psycholog a terapeut - Bc. Martin Jirák" />
        <meta name="twitter:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <meta name="twitter:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-jirak.jpg" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>

      <div className="gap-4 p-10 m-4 bg-cover bg-motive bg-red">
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-md text-center text-white">
            <div className="space-y-6">
              <div>
                <h2 className="mb-3 text-4xl font-light">Relaxační masáž</h2>
                <p className="text-1xl">400 Kč/30 minut</p>
                <p className="text-1xl">700 Kč/60 minut</p>
                <p className="text-1xl">1000 Kč/90 minut</p>
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-light">Sportovní masáž</h2>
                <p className="text-1xl">400 Kč/30 minut</p>
                <p className="text-1xl">700 Kč/60 minut</p>
                <p className="text-1xl">1000 Kč/90 minut</p>
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-light">Baňkování</h2>
                <p className="text-1xl">400 Kč/30 minut</p>
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-light">Párové masáže</h2>
                <p className="text-1xl">1300 Kč/60 minut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cenik
