import { useEffect, useState } from "react";
import { schoolConfig } from "../config/schoolConfig";
import { SchoolInfo } from "../types/schoolinfo";

const NoticeBoard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [schoolData, setSchoolData] = useState<SchoolInfo | null>(null);
  const [noticeBoardContent, setNoticeBoardContent] = useState<
    { createdAt: Date; noticeContent: string }[]
  >([]);
  const messageHeight = 80;

  setSchoolData(schoolConfig);

  useEffect(() => {
    if (schoolData?.noticeBoard) {
      //sorting messages according to createdAt
      let sortedMessage = schoolData.noticeBoard
        .map((item) => ({
          createdAt: item.createdAt,
          noticeContent: item.noticeContent,
        }))
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      console.log(sortedMessage);

      setNoticeBoardContent(sortedMessage);
    }
  }, [schoolData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (
          !noticeBoardContent ||
          prev >= noticeBoardContent.length * messageHeight
        ) {
          return 0; // Reset to the top once the last message is scrolled
        }
        return prev + 1;
      });
    }, 35); // Adjust the speed of scroll here (lower is faster)

    return () => clearInterval(interval);
  }, [noticeBoardContent?.length]);

  return (
    <div className="relative overflow-hidden bg-secondary text-white h-48 p-4 rounded-md shadow-lg w-full max-w-3xl mx-auto">
      <div
        className="absolute w-full"
        style={{
          transform: `translateY(-${scrollPosition}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {noticeBoardContent?.map((message, index) => (
          <div key={index} className="py-2 text-sm md:text-base font-medium">
            {message.noticeContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
