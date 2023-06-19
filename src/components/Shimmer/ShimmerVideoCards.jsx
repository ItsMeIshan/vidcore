function PopularVideoCardShimmer() {
  return (
    <>
      <div className="border shadow rounded-3xl p-4 max-w-sm min-h-[180px] w-full mx-auto bg-white my-1">
        <div className="animate-pulse flex flex-col justify-between space-x-4 min-h-[180px]">
          <div className="flex justify-between w-full">
            <div className="rounded-2xl w-10 h-4 bg-slate-200"></div>
            <div className="flex-1 space-y-6 py-1"></div>
            <div className="rounded-2xl w-10 h-4 bg-slate-200"></div>
          </div>
          <div className="h-10 w-full flex flex-col">
            <div className="h-4 w-1/2 bg-slate-200 my-1"></div>
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

export default PopularVideoCardShimmer;

export const popularVideoShimmerCards = [
  <PopularVideoCardShimmer key={0} />,
  <PopularVideoCardShimmer key={1} />,
  <PopularVideoCardShimmer key={2} />,
  <PopularVideoCardShimmer key={3} />,
  <PopularVideoCardShimmer key={4} />,
  <PopularVideoCardShimmer key={5} />,
  <PopularVideoCardShimmer key={6} />,
  <PopularVideoCardShimmer key={7} />,
  <PopularVideoCardShimmer key={8} />,
  <PopularVideoCardShimmer key={9} />,
];
