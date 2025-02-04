import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import useWindowDimensions from '../hooks/useWindowDimension'

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoaded, setLoaded] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (width) return setLoaded(true)
  }, [width])

  return (
    <>
      <Head>
        <title>CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák</title>
        <meta name="description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/o-mně" />
        <meta property="og:title" content="CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák" />
        <meta property="og:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-jirak.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/o-mně" />
        <meta property="og:site_name" content="mobil kontakty" />
        {/* <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák" />
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
      <div className="min-h-full p-10 m-4 text-white bg-cover bg-motive">
        <p className="pb-4">
          Jmenuji se Martin Jirák a jsem certifikovaný masér s rekvalifikačním kurzem. Kromě toho mám bakalářské vzdělání v oboru
          management sportu na Masarykově univerzitě. Věnuji se házené více než 20 let. a během své kariéry jsem působil jako hráč
          a masér v extralize házené. Díky tomu spojuji znalosti o lidském těle, sportu a regeneraci, abych mohl klientům
          nabídnout komplexní přístup ke zdraví a pohodě.
        </p>
        <p className="pb-4">
          Mým cílem je pomoci vám ulevit od bolesti, zlepšit regeneraci a podpořit celkovou relaxaci. Nabízím různé druhy masáží,
          přizpůsobené vašim potřebám, s důrazem na profesionální péči a individuální přístup.
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-2 ">
          <div>
            <p className="pb-4">
              Dospělým klientům také nabízím spolupráci prostřednictvím metody EMDR, která je integrativní a komplexní
              psychoterapeutickým přístupem, pomáhající lidem zotavit se z problémů vyvolaných traumatickými událostmi v jejich
              životě a z nich vyplývajících obtíží. Více o EMDR zde:{' '}
              <a className="underline" href="https://www.emdr.cz">
                https://www.emdr.cz
              </a>
            </p>

            <p>S dětmi využívám prvky terapie hrou, která je pro ně přirozenou a bezpečnou formou jejich rozvoje.</p>
          </div>
          {isLoaded && (
            <div>
              {width && width > 775 ? (
                <div className="flex justify-center">
                  <YouTube
                    opts={{
                      height: '300',
                      width: '600'
                    }}
                    videoId="7lmWOmyPRqA"
                  />
                </div>
              ) : (
                <div className="flex justify-center">
                  <YouTube
                    opts={{
                      height: '150',
                      width: '250'
                    }}
                    videoId="7lmWOmyPRqA"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default about
