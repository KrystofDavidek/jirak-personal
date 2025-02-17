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

      <div className="flex flex-col gap-8 justify-center items-center p-10 m-4 bg-white lg:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10309.433796822646!2d15.906947!3d49.760514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dbb38983a9fcf%3A0xea0b27f2d2069a8d!2sU%20Tvrze%20334%2C%20539%2001%20Hlinsko%20v%20%C4%8Cech%C3%A1ch%201%2C%20Czechia!5e0!3m2!1sen!2sus!4v1739734758999!5m2!1sen!2sus"
          width={width && width > 700 ? '500' : 'auto'}
          height="390"
          loading="lazy"></iframe>
        <div className="bg-[#29391e] text-white p-8 rounded-2xl shadow-lg  md:w-[500px] text-center">
          <h1 className="text-4xl font-bold tracking-wide text-white">KONTAKT</h1>
          <p className="text-xl text-[#9cc081] mt-2 font-medium">Bc. Martin Jirák</p>
          <div className="border-t border-[#9cc081] my-4"></div>

          <div className="flex items-center justify-center gap-2 text-[#9cc081]">
            <p className="text-lg">
              Poliklinika Hlinsko
              <br />
              Nádražní 548
            </p>
          </div>

          <p className="text-[#9cc081] mt-4 text-xl font-semibold">Rezervace</p>

          <div className="flex items-center justify-center gap-2 mt-2 text-lg text-[#9cc081]">
            <p>
              <a href="tel:775972333">+420 775 972 333</a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-2 text-lg text-[#9cc081]">
            <p>
              <a href="mailto: Martinn.jirakk@gmail.com">masazejirak@gmail.com</a>
            </p>
          </div>

          <div className="border-t border-[#9cc081] my-4"></div>
          <p className="text-sm text-[#9cc081]">Otevírací doba dle objednání</p>
        </div>
      </div>
    </div>
  )
}

export default contact
