function RelatedVideoCardShimmer() {
  return (
    <>
      <div className="border shadow rounded-3xl p-4 min-h-[100px] w-full bg-white my-1 mx-2">
        <div className="animate-pulse flex sm:flex-col space-x-4 sm:space-x-0 min-h-[100px]">
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

export default RelatedVideoCardShimmer;

export const searchResultShimmerCards = [
  <RelatedVideoCardShimmer key={0} />,
  <RelatedVideoCardShimmer key={1} />,
  <RelatedVideoCardShimmer key={2} />,
  <RelatedVideoCardShimmer key={3} />,
  <RelatedVideoCardShimmer key={4} />,
];
