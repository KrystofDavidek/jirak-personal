import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter as useNextRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import logoImg from '../assets/logo-uprava.jpg'
import useWindowDimensions from '../hooks/useWindowDimension'

const routes = {
  '': '',
  price: 'price',
  contact: 'kontakt'
}

type Routes = keyof typeof routes

const NavItem: FC<{ isSide?: boolean; activeItem: string; setActiveItem: Function; name: string; routeName: Routes }> = ({
  isSide,
  activeItem,
  name,
  routeName,
  setActiveItem
}) => {
  const color = isSide ? 'border-black' : 'border-font-green'

  return activeItem !== name ? (
    <div>
      <Link href={`/${routeName}`} as={`/${routes[routeName]}`}>
        <a className="font-bold transition duration-500 hover:scale-120">
          <span
            onClick={() => {
              setActiveItem(name)
            }}
            className={`${!isSide ? 'hover:text-font-green' : 'hover:border-b-2 hover:border-black hover:pb-2'}`}>
            {name}
          </span>
        </a>
      </Link>
    </div>
  ) : (
    <>
      {isSide ? (
        <div className={`pb-2 font-bold border-b-2 w-max ${color}`}>{name}</div>
      ) : (
        <div>
          <div className={`border-b-2 font-bold pb-2 ${color}`}>{name}</div>
        </div>
      )}
    </>
  )
}

const Navbar = () => {
  const { width } = useWindowDimensions()
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const toggleSideMenu = () => {
    isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true)
  }
  const [activeItem, setActiveItem] = useState<string>('O mně')
  const { pathname } = useRouter()
  const router = useNextRouter()

  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (isSideMenuOpen && event.key === 'Escape') toggleSideMenu()
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isSideMenuOpen])

  useEffect(() => {
    toggleSideMenu()
  }, [activeItem])

  useEffect(() => {
    setIsSideMenuOpen(false)
  }, [width])

  useEffect(() => {
    if (router.asPath === '/o-mn%C4%9B') {
      setActiveItem('O mně')
      return
    }
    if (router.asPath === '/kontakt') {
      setActiveItem('Kontakt')
      return
    }
  }, [router.asPath])

  useEffect(() => {
    if (pathname === '/') setActiveItem('O mně')
    if (pathname === '/price') setActiveItem('Ceník')
    if (pathname === '/kontakt') setActiveItem('Kontakt')
  }, [])

  return (
    <nav className="flex pb-0 w-full pt-10 sm:pb-8 pl-4 md:pb-0 lg:justify-center pr-[2.5rem] 2xl:pr-[2.5rem]">
      <div className="flex flex-col justify-center px-4 py-2 ml-6 mr-2 align-center">
        <h1 className="text-center text-md md:text-[2rem] text-font-green font-bold">CERTIFIKOVANÝ MASÉR, HLINSKO</h1>
        <h2 className="text-md md:text-[1.5rem] font-bold text-center">Bc. Martin Jirák</h2>
      </div>
      <div className="items-center hidden ml-auto align-middle lg:flex ">
        <div className="items-center hidden ml-auto space-x-8 align-middle lg:flex ">
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" routeName="" />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Ceník" routeName="price" />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" routeName="contact" />
        </div>
        <div className="font-bold hidden xl:flex flex-col max-w-[15rem] text-font-green">
          <Image placeholder="blur" src={logoImg} alt="logo" />
        </div>
      </div>
      <div className="w-8 h-8 mt-2 ml-auto mr-2 lg:hidden">
        <HamburgerIcon isOpen={isSideMenuOpen} handleClick={toggleSideMenu} />
      </div>

      {isSideMenuOpen ? <SideMenu activeItem={activeItem} setActiveItem={setActiveItem} /> : ''}
    </nav>
  )
}

const SideMenu: FC<{ activeItem: string; setActiveItem: Function }> = ({ activeItem, setActiveItem }) => {
  return (
    <div className="fixed top-0 left-0 z-20 w-1/2 h-screen p-4 bg-font-green/95 sm:w-1/4 lg:hidden">
      <ul className="flex flex-col text-[1.5rem] gap-4">
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="O mně" routeName="" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Ceník" routeName="price" />
        <NavItem isSide activeItem={activeItem} setActiveItem={setActiveItem} name="Kontakt" routeName="contact" />
      </ul>
    </div>
  )
}

export default Navbar

type HamburgerIconProps = {
  isOpen: boolean
  handleClick: () => void
}

const HamburgerIcon = ({ isOpen, handleClick }: HamburgerIconProps) => {
  const genericHamburgerLine = `h-1 w-6 my-1  bg-black transition ease transform duration-300`
  return (
    <button className="flex flex-col items-center justify-center w-12 h-12 group" onClick={handleClick}>
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  )
}
