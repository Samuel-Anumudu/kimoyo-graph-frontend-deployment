"use client";

import { useState, useEffect, useRef } from "react";

import Navbar from "@/components/layouts/Navbar";
import GoogleMap from "@/components/map/GoogleMap";
import Filter from "@/components/filter/Filter";
import SearchBar from "@/components/ui/SearchBar";

import { demographicsData } from "@/data/dummyData";

type FilterDataType = {
  question: { text: string; id: string | number };
  consumerDemographics: { [key: string]: string[] };
};

function RootPage() {
  // HELPER FUNCTIONS

  /*Compute Default Consumer Demographics. IMPORTANT: note that this is done so that the consumer demographics options are all checked by default.
  You might have to set all demographics back to an empty data structure of your choice */
  const consumerDemographics = () => {
    const obj: { [key: string]: string[] } = {};
    demographicsData.map((demographics) => {
      let key = Object.keys(demographics)[0];
      let value = Object.values(demographics)[0];
      obj[key] = value;
    });
    return obj;
  };

  // STATES
  const initialConsumerDemographics = consumerDemographics();

  const [isShowProfiles, setIsShowProfiles] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [play, setPlay] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<FilterDataType>({
    question: {
      text: "",
      id: "",
    },
    consumerDemographics: initialConsumerDemographics,
  });

  // USE EFFECT
  useEffect(() => {
    if (selectedItem) setIsShowProfiles(true);
    else setIsShowProfiles(false);
  }, [selectedItem]);

  return (
    <section>
      <header className="fixed flex h-[74.67px] w-full items-center bg-white px-8 shadow-md">
        <div className="w-full">
          <Navbar>
            <div className="navbar-center hidden lg:flex">
              <div>
                <SearchBar />
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <div className="px-8 pt-[74.67px]">
        <div className="flex">
          <aside className="basis-[309.33px]">
            <Filter setFilterData={setFilterData} filterData={filterData} />
          </aside>
          <main className="fixed left-0 right-0 ml-[320.33px] pl-12">
            <div className="flex pt-10">
              <div
                className={`${
                  isShowProfiles ? "basis-[76.28%]" : "h-screen w-screen"
                }`}
              >
                <GoogleMap
                  filterData={filterData}
                  setPlay={setPlay}
                  setSelectedItem={setSelectedItem}
                />
              </div>
              {isShowProfiles && selectedItem && (
                <div className="mr-8 rounded-md border-[1.33px] border-[#E0E0E0] bg-white">
                  <div className="relative">
                    <video
                      className="h-[415px] w-[342px] rounded-t-md object-cover"
                      controls
                      autoPlay={play}
                      loop
                    >
                      <source
                        src={`${selectedItem["insights"].mediaUrl}`}
                        type="video/mp4"
                      />
                    </video>
                    <p className="absolute right-3 top-3 flex h-[27px] w-[86px] items-center justify-center rounded-[50px] bg-[#1D1D1D]/[.4] text-[14px] font-bold text-white">
                      {selectedItem["demographics"].name}
                    </p>
                  </div>

                  <div>
                    {/* TODO: Map through this in the future */}
                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">Date submitted</p>
                      <p className="text-[#333333]">
                        {selectedItem["insights"]["dateSubmitted"]}
                      </p>
                    </div>

                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">
                        Relationship Status
                      </p>
                      <p className="text-[#333333]">
                        {selectedItem["demographics"]["Relationship Status"]}
                      </p>
                    </div>

                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">Age</p>
                      <p className="text-[#333333]">
                        {selectedItem["demographics"]["Age"]}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">Gender</p>
                      <p className="text-[#333333]">
                        {selectedItem["demographics"]["Gender"]}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">Employment</p>
                      <p className="text-[#333333]">
                        {selectedItem["demographics"]["Employment"]}
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">Monthly Income</p>
                      <p className="text-[#333333]">
                        {
                          selectedItem["demographics"][
                            "Monthly Household Income"
                          ]
                        }
                      </p>
                    </div>
                    <div className="flex justify-between border-b px-4 py-[10px] profile-padding text-[12px]">
                      <p className="uppercase text-[#828282]">Education</p>
                      <p className="text-[#333333]">
                        {selectedItem["demographics"]["Education"]}
                      </p>
                    </div>
                    <div className="flex justify-between px-4 py-[10px] profile-padding text-[12px]">
                      <p className="break-all uppercase text-[#828282]">
                        Parental Status
                      </p>
                      <p className="text-[#333333]">
                        {selectedItem["demographics"]["Parental Status"]}
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
  );
}

export default RootPage;
