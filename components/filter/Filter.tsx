"use client";
import { useEffect, useState } from "react";
import {
  filterQuestionOptions,
  demographics,
  demographicsData,
} from "@/data/dummyData";

type FilterDataType = {
  question: { text: string; id: string | number };
  consumerDemographics: { [key: string]: string[] };
};

function Filter() {
  // COMPUTED FUNCTIONS

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

  const initialConsumerDemographics = consumerDemographics();

  // STATES
  const [filterData, setFilterData] = useState<FilterDataType>({
    question: {
      text: "",
      id: "",
    },
    consumerDemographics: initialConsumerDemographics,
  });

  const [selectedQuestion, setSelectedQuestion] = useState(
    "What is the name of your favorite soft drink brand and why?"
  );
  const [openQuestion, setOpenQuestion] = useState(true);
  const [openConsumerDemographics, setOpenConsumerDemographics] =
    useState(true);

  const [openDemographic, setOpenDemographic] = useState({
    age: { isOpen: false },
    gender: { isOpen: false },
    employment: { isOpen: false },
    income: { isOpen: false },
    education: { isOpen: false },
    relationshipStatus: { isOpen: false },
    parentalStatus: { isOpen: false },
    mobileDevice: { isOpen: false },
  });

  // FUNCTIONS
  const selectAllDemographicOptions = (demographic: string) => {
    const updatedDemographicsOptions = demographicsData
      .map(
        (demographicsItem) =>
          demographicsItem[demographic as keyof typeof demographicsItem]
      )
      .flat()
      .filter((option): option is string => option !== undefined);

    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      consumerDemographics: {
        ...prevFilterData.consumerDemographics,
        [demographic]: updatedDemographicsOptions,
      },
    }));
  };

  const clearAllDemographicOptions = (demographic: string) => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      consumerDemographics: {
        ...prevFilterData.consumerDemographics,
        [demographic]: [],
      },
    }));
  };

  const toggleOpenQuestion = () => {
    setOpenQuestion(!openQuestion);
  };

  const toggleOpenDemographics = () => {
    setOpenConsumerDemographics(!openConsumerDemographics);
  };

  const handleOpenIndividualDemographic = (demographic: string) => {
    setOpenDemographic((prevState) => {
      return { ...prevState, [demographic]: { isOpen: true } };
    });
  };

  const handleCloseIndividualDemographic = (demographic: string) => {
    setOpenDemographic((prevState) => {
      return { ...prevState, [demographic]: { isOpen: false } };
    });
  };

  const handleSelectedQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedQuestion(e.target.value);
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      question: { text: e.target.value, id: prevFilterData.question.id },
    }));
  };

  const handleDemographicsCheckboxChange = (
    demographicName: string,
    option: string
  ) => {
    setFilterData((prevFilterData) => {
      const updatedConsumerDemographics = {
        ...prevFilterData.consumerDemographics,
      };

      if (!updatedConsumerDemographics[demographicName].includes(option)) {
        updatedConsumerDemographics[demographicName] = [
          ...updatedConsumerDemographics[demographicName],
          option,
        ];
      } else {
        updatedConsumerDemographics[demographicName] =
          updatedConsumerDemographics[demographicName].filter(
            (opt) => opt !== option
          );
      }
      return {
        ...prevFilterData,
        consumerDemographics: updatedConsumerDemographics,
      };
    });
  };

  const handleClearAll = () => {
    setFilterData((prevFilterData) => {
      return {
        question: {
          text: prevFilterData.question.text,
          id: prevFilterData.question.id,
        },
        consumerDemographics: {
          ...prevFilterData.consumerDemographics,
          Age: [],
          Gender: [],
          Employment: [],
          "Monthly Household Income": [],
          Education: [],
          "Relationship Status": [],
          "Parental Status": [],
          "Mobile Device": [],
        },
      };
    });
  };

  // USE EFFECTS
  useEffect(() => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      question: { text: selectedQuestion, id: prevFilterData.question.id },
    }));
  }, [selectedQuestion]);

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.778 1.33331H1.22241L7.44463 8.33331V13.9333L10.5557 15.3333V8.33331L16.778 1.33331Z"
              stroke="#BDBDBD"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-base font-bold">Filters</p>
        </div>
        <button
          onClick={handleClearAll}
          type="button"
          className="flex h-[26.67px] w-[73.33px] cursor-pointer items-center justify-center rounded-3xl border border-[#BDBDBD] bg-white text-[13.33px]"
        >
          Clear all
        </button>
      </div>
      <div>
        <>
          {openQuestion ? (
            <div
              className="mb-3 mt-5 flex cursor-pointer items-center gap-2"
              onClick={toggleOpenQuestion}
            >
              <span className="block ">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3335 6.66689L6.66683 1.33356L12.0002 6.66689"
                    stroke="#BDBDBD"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[13.33px] font-bold">View By Question</p>
            </div>
          ) : (
            <div
              className="mb-3 mt-5 flex cursor-pointer items-center gap-2"
              onClick={toggleOpenQuestion}
            >
              <span className="block ">
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3335 1.00009L6.66683 6.33343L12.0002 1.00009"
                    stroke="#BDBDBD"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[13.33px] font-bold">View By Question</p>
            </div>
          )}
        </>
        {openQuestion && (
          <>
            <div className="mb-4 h-[1.33px] w-full bg-[#D9D9D9]"></div>
            {filterQuestionOptions.map((question) => {
              return (
                <div
                  key={question.id}
                  className="form-controls  text-[13.33px]"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <input
                      type="radio"
                      name="radio"
                      id="question-radio"
                      className="h-[13px] w-[13px] shrink-0 cursor-pointer"
                      value={question.text}
                      checked={selectedQuestion === question.text}
                      onChange={handleSelectedQuestionChange}
                    />
                    <label htmlFor="question-radio block">
                      {question.text}
                    </label>
                  </div>
                </div>
              );
            })}
          </>
        )}
        <div className="mt-4 h-[1.33px] w-full bg-[#D9D9D9]"></div>
      </div>

      {/* Consumer Demographics */}
      <div>
        <>
          {openConsumerDemographics ? (
            <div
              className="mt-5 flex cursor-pointer items-center gap-2"
              onClick={toggleOpenDemographics}
            >
              <span className="block">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3335 6.66689L6.66683 1.33356L12.0002 6.66689"
                    stroke="#BDBDBD"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[13.33px] font-bold">Consumer Demographics</p>
            </div>
          ) : (
            <div
              className="mt-5 flex cursor-pointer items-center gap-2"
              onClick={toggleOpenDemographics}
            >
              <span className="block ">
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.3335 1.00009L6.66683 6.33343L12.0002 1.00009"
                    stroke="#BDBDBD"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[13.33px] font-bold">Consumer Demographics</p>
            </div>
          )}
        </>

        {openConsumerDemographics && (
          <>
            {demographics.map((demographic) => {
              return (
                <div key={demographic}>
                  {openDemographic[demographic as keyof typeof openDemographic]
                    ?.isOpen ? (
                    <div className="flex items-center justify-between">
                      <div
                        className="flex cursor-pointer
                    items-center gap-2 py-2"
                        onClick={() =>
                          handleCloseIndividualDemographic(demographic)
                        }
                      >
                        <span className="block">
                          <svg
                            width="13"
                            height="8"
                            viewBox="0 0 13 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.3335 6.66689L6.66683 1.33356L12.0002 6.66689"
                              stroke="#BDBDBD"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-[13.33px] font-medium">
                          {demographic}
                        </p>
                      </div>
                      {filterData.consumerDemographics[demographic].length ===
                      0 ? (
                        <button
                          onClick={() =>
                            selectAllDemographicOptions(demographic)
                          }
                          className="text-[13.33px] font-medium uppercase text-[#0075F2]"
                        >
                          Select all
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            clearAllDemographicOptions(demographic)
                          }
                          className="text-[13.33px] font-medium uppercase text-[#0075F2]"
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div
                        className="flex cursor-pointer items-center gap-2 py-2"
                        onClick={() =>
                          handleOpenIndividualDemographic(demographic)
                        }
                      >
                        <span className="block">
                          <svg
                            width="13"
                            height="7"
                            viewBox="0 0 13 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.3335 1.00009L6.66683 6.33343L12.0002 1.00009"
                              stroke="#BDBDBD"
                              strokeWidth="1.33333"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-[13.33px] font-medium">
                          {demographic}
                        </p>
                      </div>
                      {filterData.consumerDemographics[demographic].length ===
                      0 ? (
                        <button
                          onClick={() =>
                            selectAllDemographicOptions(demographic)
                          }
                          className="text-[13.33px] font-medium uppercase text-[#0075F2]"
                        >
                          Select all
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            clearAllDemographicOptions(demographic)
                          }
                          className="text-[13.33px] font-medium uppercase text-[#0075F2]"
                        >
                          Clear all
                        </button>
                      )}
                    </div>
                  )}
                  {openDemographic[demographic as keyof typeof openDemographic]
                    ?.isOpen && (
                    <>
                      {demographicsData.map((filterParam, index) => {
                        const demographicName = Object.keys(filterParam)[0];
                        const optionsArray =
                          filterParam[
                            demographicName as keyof typeof filterParam
                          ];
                        return demographicName === demographic ? (
                          <div key={index} className="form-controls">
                            {optionsArray!.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className="mb-2 mt-2 flex items-center gap-3"
                              >
                                <input
                                  type="checkbox"
                                  id={`checkbox-${demographicName}-${optionIndex}`}
                                  className="cursor-pointer"
                                  checked={{
                                    ...filterData,
                                  }.consumerDemographics[
                                    demographicName
                                  ].includes(option)}
                                  onChange={() =>
                                    handleDemographicsCheckboxChange(
                                      demographicName,
                                      option
                                    )
                                  }
                                />
                                <label
                                  className="text-[13.33px]"
                                  htmlFor={`checkbox-${demographicName}-${optionIndex}`}
                                >
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        ) : null;
                      })}
                    </>
                  )}
                  <div className="h-[1.33px] w-full bg-[#D9D9D9]"></div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Filter;
