function SearchBar() {
  return (
    <label className="w-[915px] input input-bordered flex items-center gap-2 rounded-full border-[#E0E0E0] bg-white p-0 px-1 pl-8 focus-within:outline-none ">
      <input
        type="text"
        className="grow bg-white placeholder:text-[#BDBDBD]"
        placeholder="Search market share or insights (ex: top dairy brands in malls)"
      />
      <button>
        <span className="badge badge-info   h-[39px] w-[133.34px] bg-[#0075F2] text-base font-medium text-white">
          Get Insights
        </span>
      </button>
    </label>
  );
}

export default SearchBar;
