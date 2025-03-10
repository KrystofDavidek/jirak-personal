import Head from 'next/head'
import Image from 'next/image'
import ProfileImg from '../assets/profilovka-jirak.jpg'
import useWindowDimensions from '../hooks/useWindowDimension'

export default function Home() {
  const { width } = useWindowDimensions()

  return (
    <div>
      <Head>
        <title>CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák</title>
        <meta name="description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko " />
        <link rel="canonical" href="https://www.masazejirak.cz" />
        <meta property="og:title" content="CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák" />
        <meta property="og:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <meta property="og:image" content="https://www.masazejirak.cz/static/images/profilovka-jirak.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.masazejirak.cz" />
        <meta property="og:site_name" content="mobil kontakty" />
        {/* <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CERTIFIKOVANÝ MASÉR, HLINSKO - Bc. Martin Jirák" />
        <meta name="twitter:description" content="Certifikované masáže pro dospělé v poliklinice Hlinsko" />
        <meta name="twitter:image" content="https://www.masazejirak.cz/static/images/profilovka-jirak.jpg" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>
      <div className="flex flex-col gap-8 justify-center p-10 m-4 bg-white lg:flex-row">
        <div className="bg-[#29391e] text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold tracking-wide text-white">O MNĚ</h1>
          <div className="border-t border-[#9cc081] my-4"></div>
          <div className="text-white xl:col-span-2">
            <p className="pb-4">
              Jmenuji se Martin Jirák a jsem certifikovaný masér s rekvalifikačním kurzem. Kromě toho mám bakalářské vzdělání v
              oboru management sportu na Masarykově univerzitě.
            </p>

            <p className="pb-4">
              Věnuji se házené více než 20 let a během své kariéry jsem působil jako hráč a masér v extralize házené. Díky tomu
              spojuji znalosti o lidském těle, sportu a regeneraci, abych mohl klientům nabídnout komplexní přístup ke zdraví a
              pohodě.
            </p>

            <p className="pb-4">
              Mým cílem je pomoci vám ulevit od bolesti, zlepšit regeneraci a podpořit celkovou relaxaci. Nabízím různé druhy
              masáží, přizpůsobené vašim potřebám, s důrazem na profesionální péči a individuální přístup.
            </p>
          </div>
        </div>
        <div className={width && width > 700 ? 'self-center justify-self-center' : 'self-center'}>
          <Image
            className="rounded-2xl"
            placeholder="blur"
            height={400}
            width={400}
            layout={width && width > 700 ? 'fixed' : 'responsive'}
            objectFit="contain"
            src={ProfileImg}
            alt="Profilová fotka"
          />
        </div>
      </div>
      {/* <div className="grid gap-4 p-10 m-4 bg-cover xl:grid-cols-3 text-[18px] bg-[#7d990b]">
        <div className="text-white xl:col-span-2">
          <p className="pb-4">
            Jmenuji se Martin Jirák a jsem certifikovaný masér s rekvalifikačním kurzem. Kromě toho mám bakalářské vzdělání v
            oboru management sportu na Masarykově univerzitě.
          </p>

          <p className="pb-4">
            Věnuji se házené více než 20 let a během své kariéry jsem působil jako hráč a masér v extralize házené. Díky tomu
            spojuji znalosti o lidském těle, sportu a regeneraci, abych mohl klientům nabídnout komplexní přístup ke zdraví a
            pohodě.
          </p>

          <p className="pb-4">
            Mým cílem je pomoci vám ulevit od bolesti, zlepšit regeneraci a podpořit celkovou relaxaci. Nabízím různé druhy
            masáží, přizpůsobené vašim potřebám, s důrazem na profesionální péči a individuální přístup.
          </p>
        </div>
        <div className={width && width > 700 ? 'self-center justify-self-center' : 'self-center'}>
          <Image
            placeholder="blur"
            height={400}
            width={400}
            layout={width && width > 700 ? 'fixed' : 'responsive'}
            objectFit="contain"
            src={ProfileImg}
            alt="Profilová fotka"
          />
        </div>
      </div> */}
    </div>
  )
}
