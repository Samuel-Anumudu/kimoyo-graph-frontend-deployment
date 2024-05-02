'use client'

import { useEffect } from 'react'
import { useState } from 'react'

import Navbar from '@/components/layouts/Navbar'
import GoogleMap from '@/components/map/GoogleMap'
import Filter from '@/components/filter/Filter'
import SearchBar from '@/components/ui/SearchBar'

function RootPage() {
  const [isShowProfiles, setIsShowProfiles] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  useEffect(() => {
    if (selectedItem) setIsShowProfiles(true)
    else setIsShowProfiles(false)
  }, [selectedItem])

  return (
    <section>
      <header className="fixed flex h-[74.67px] w-full items-center bg-white px-8 shadow-md">
        <div className="w-full">
          <Navbar>
            <div className="navbar-center hidden lg:flex">
              <div className="h-[49px] w-[670px]">
                <SearchBar />
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <div className="px-8 pt-[74.67px]">
        <div className="flex">
          <aside className="basis-[309.33px]">
            <Filter />
          </aside>
          <main className="fixed left-0 right-0 ml-[320.33px] pl-12">
            <div className="flex pt-10">
              <div
                className={`${isShowProfiles ? 'h-screen basis-[76.28%]' : 'h-screen w-screen'}`}
              >
                <GoogleMap setSelectedItem={setSelectedItem} />
              </div>
              {isShowProfiles && selectedItem && (
                <div className="ml-8 mr-8  h-[85vh] grow  rounded-md border-[1.33px] border-[#E0E0E0] bg-white">
                  <div className="relative">
                    <video
                      className="h-[445px] w-[342px] rounded-t-md object-cover"
                      controls
                    >
                      <source
                        src={`${selectedItem['insights'].mediaUrl}`}
                        type="video/mp4"
                      />
                    </video>
                    <p className="absolute right-3 top-3 flex h-[27px] w-[86px] items-center justify-center rounded-[50px] bg-[#1D1D1D]/[.4] text-[14px] font-bold text-white">
                      {selectedItem['demographics'].name}
                    </p>
                  </div>

                  <div>
                    {/* TODO: Map through this in the future */}
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">Date submitted</p>
                      <p className="text-[#333333]">
                        {selectedItem['insights'].dateSubmitted}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">
                        Relationship Status
                      </p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].relationshipStatus}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">Age</p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].age}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">Gender</p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].gender}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">Employment</p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].employment}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">Monthly Income</p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].income}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-2 text-[12px]">
                      <p className="uppercase text-[#828282]">Education</p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].education}
                      </p>
                    </div>
                    <div className="flex justify-between px-4 py-2 text-[12px]">
                      <p className="break-all uppercase text-[#828282]">
                        Parental Status
                      </p>
                      <p className="text-[#333333]">
                        {selectedItem['demographics'].parentalStatus}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default RootPage
