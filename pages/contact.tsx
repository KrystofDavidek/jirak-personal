/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimension'

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions()
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <title> CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák</title>
      <meta name="description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
      <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/kontakt" />
      <meta property="og:title" content="CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák" />
      <meta property="og:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
      <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-jirak.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/kontakt" />
      <meta property="og:site_name" content="mobil kontakty" />
      {/* <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content=" CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák" />
      <meta name="twitter:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
      <meta name="twitter:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-jirak.jpg" />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
        crossOrigin=""
      />

      <div className="gap-4 p-10 m-4 bg-cover bg-motive bg-red ">
        <div className="flex justify-center sm:h-[472px]">
          <div className="w-full max-w-md text-center text-white">
            <div className="space-y-6">
              <div>
                <h2 className="mb-3 text-4xl font-light">Kontakt</h2>
                <p className="text-1xl">
                  <a href="mailto: Martinn.jirakk@gmail.com">Martinn.jirakk@gmail.com</a>
                </p>
                <p className="text-1xl">
                  <a href="tel:776311663">776 311 663</a>
                </p>
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-light">Adresa</h2>
                <p className="text-1xl">Nádražní 548, 539 01 Hlinsko</p>
                <p className="text-1xl">Poliklinika Hlinsko</p>
                <p className="text-1xl">2. NP naproti VZP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid m-4 bg-cover xl:grid-cols-3 2xl:grid-cols-8 2xl:h-full bg-motive">
        <div className="flex flex-col justify-between p-8 2xl:col-span-2">
          <div className="text-white">
            <p className="pb-4">Kontakt:</p>
            <p>
              <a href="mailto: Martinn.jirakk@gmail.com">Email: Martinn.jirakk@gmail.com</a>
            </p>
            <p className="pb-4">
              <a href="tel:776311663">Tel: 776 311 663</a>
            </p>

            <p className="pb-4">Adresa:</p>

            <p>Nádražní 548, 539 01 Hlinsko</p>
            <p>Poliklinika Hlinsko</p>
            <p>2. NP naproti VZP</p>
          </div>
        </div> */}
      {/* <div className="relative 2xl:col-span-4" style={{ width: '100', height: '550px' }}>
          <Image src={Map} placeholder="blur" alt="Mapa" objectPosition="center" objectFit="cover" layout={'fill'} />
        </div>
        <div className="relative 2xl:col-span-2" style={{ width: '100%', height: '550px' }}>
          <Image
            src={Outside}
            placeholder="blur"
            alt="Venkovní prostor"
            objectPosition="center"
            objectFit="cover"
            layout={'fill'}
          />
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default contact
