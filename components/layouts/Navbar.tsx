'use client'

import Image from 'next/image'
import KimoyoLogo from '../../images/logos/Kimoyo-Insights.svg'

import flutterwaveLogo from '../../images/Flutterwave_Logo.png'
import avatar from '../../images/Avatar.png'

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="relative">
      <div className="navbar px-0">
        <div className="navbar-start">
          <div className="logo cursor-pointer">
            <Image src={KimoyoLogo} alt="Kimoyo Logo" />
          </div>
        </div>

        <div className="absolute ml-[333.33px]">{children}</div>

        <div className="navbar-end cursor-pointer">
          <div className="flex items-center justify-between">
            <Image
              className="h-[21.45px] w-[89.1px] shrink-0"
              src={flutterwaveLogo}
              alt="Flutterwave"
            />
            <Image
              className="h-[19.5px] w-[19.26px] shrink-0"
              src={avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
