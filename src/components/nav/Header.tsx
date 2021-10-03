import Image from 'next/image'
import Link from 'next/link'
import { ConnectButton } from 'src/components/nav/ConnectButton'
import { NavBar } from 'src/components/nav/NavBar'
import Logo from 'src/images/logo.svg'

export function Header({ pathName }: { pathName: string }) {
  return (
    <header className="w-screen py-5 px-7">
      <div className="flex items-center justify-between">
        <div className="hidden md:block">
          <Link href="/">
            <a className="flex items-center w-52">
              <Image src={Logo} alt="Mento.fi Logo" quality={100} width={50} height={50} />
              <div className="flex flex-col ml-3">
                <h1 className="text-xl">Mento</h1>
                <h2 className="text-sm text-gray-500">Celo Exchange</h2>
              </div>
            </a>
          </Link>
        </div>
        {/* <div className="md:hidden">
            <DropdownNav align="l" />
          </div> */}
        <NavBar pathName={pathName} />
        <ConnectButton />
      </div>
    </header>
  )
}
