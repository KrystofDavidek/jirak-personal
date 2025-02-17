/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import React from 'react'

const price = () => {
  return (
    <div>
      <Head>
        <title>Ceník | Certifikovaný masér - Bc. Martin Jirák</title>
        <meta name="description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/ceník" />
        <meta property="og:title" content="Ceník | Certifikovaný masér - Bc. Martin Jirák" />
        <meta property="og:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-jirak.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/ceník" />
        <meta property="og:site_name" content="mobil kontakty" />

        {/* <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ceník | Certifikovaný masér - Bc. Martin Jirák" />
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

      <div className="flex gap-4 justify-center p-10 m-4 bg-white">
        <div className="bg-[#29391e] text-white p-8 rounded-2xl shadow-lg  text-center">
          <h1 className="text-4xl font-bold tracking-wide text-white">CENÍK</h1>
          <div className="border-t border-[#9cc081] my-4"></div>

          <div className="flex-col grid-cols-2 grid-rows-2 gap-12 sm:grid">
            <div>
              <h2 className="mb-3 text-3xl text-[#9cc081] mt-2 font-medium">Relaxační masáž</h2>
              <p className="text-1xl">400 Kč/30 minut</p>
              <p className="text-1xl">700 Kč/60 minut</p>
              <p className="text-1xl">1000 Kč/90 minut</p>
            </div>
            <div>
              <h2 className="mb-3 text-3xl text-[#9cc081] mt-2 font-medium">Sportovní masáž</h2>
              <p className="text-1xl">400 Kč/30 minut</p>
              <p className="text-1xl">700 Kč/60 minut</p>
              <p className="text-1xl">1000 Kč/90 minut</p>
            </div>

            <div>
              <h2 className="mb-3 text-3xl text-[#9cc081] mt-2 font-medium">Baňkování</h2>
              <p className="text-1xl">400 Kč/30 minut</p>
            </div>
            <div>
              <h2 className="mb-3 text-3xl text-[#9cc081] mt-2 font-medium">Párové masáže</h2>
              <p className="text-1xl">1300 Kč/60 minut</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default price
