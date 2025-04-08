import { schoolConfig } from "../../config/schoolConfig";

const LatestNewsBlock = () => {
  return (
    <>
      <div className="bg-red-800 w-full px-1 md:px-8 flex justify-center items-center">
        <div className="min-w-22 md:min-w-28 py-1 md:py-[16px] px-0 md:px-2 bg-secondary text-white font-semibold text-sm md:text-lg flex justify-center items-center">
          Latest News
        </div>
        <div className="px-3 py-1 md:py-3 w-3/4 text-white overflow-hidden flex justify-center items-center">
          <div className="inline-block animate-marquee whitespace-nowrap text-sm md:text-lg text-white font-semibold">
            {schoolConfig.latestNews}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNewsBlock;
