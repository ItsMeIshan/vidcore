function SearchResultCardShimmer() {
  return (
    <>
      <div className="border shadow rounded-3xl p-4 min-h-[200px] w-full bg-white my-1 mx-2">
        <div className="animate-pulse flex sm:flex-col space-x-4 sm:space-x-0 min-h-[200px]">
          <div className="flex w-1/3 sm:w-1/2 mr-2 sm:h-[20vh]">
            <div className="rounded-2xl w-full h-full bg-slate-200"></div>
          </div>
          <div className="h-10 w-full flex flex-col">
            <div className="h-4 w-1/2 sm:w-full bg-slate-200 my-1"></div>
            <div className="flex w-1/4">
              <div className="h-3 w-full bg-slate-200"></div>
              <div className="h-3 w-full bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResultCardShimmer;

export const searchResultShimmerCards = [
  <SearchResultCardShimmer key={0} />,
  <SearchResultCardShimmer key={1} />,
  <SearchResultCardShimmer key={2} />,
  <SearchResultCardShimmer key={3} />,
  <SearchResultCardShimmer key={4} />,
  <SearchResultCardShimmer key={5} />,
  <SearchResultCardShimmer key={6} />,
  <SearchResultCardShimmer key={7} />,
  <SearchResultCardShimmer key={8} />,
  <SearchResultCardShimmer key={9} />,
];
