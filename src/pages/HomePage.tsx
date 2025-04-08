import AdmissionRequestForm from "../components/AdmissionRequestForm";
import CarouselBlock from "../components/homepage/CarouselBlock";
import LatestNewsBlock from "../components/homepage/LatestNews";
import { schoolConfig } from "../config/schoolConfig";
import image1 from "../assets/about-image1.jpg";
import image2 from "../assets/about-image2.jpg";
import image3 from "../assets/about-image3.jpg";
import image4 from "../assets/about-image4.jpg";
import GalleryMarquee from "../components/GalleryMarquee";
import FacilitiesMarquee from "../components/FacilitiesMarquee";

const AboutUsImages = [image1, image2, image3, image4];
const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
];

const schoolNameFirstLetter = schoolConfig.schoolName
  .split(" ")
  .map((word) => word[0])
  .join("");

const WhyChooseUsContents = [
  {
    title: "Holistic Learning from Preschool to Grade XII",
    content:
      "A school that focuses on building character, nurturing skills, and achieving academic excellence.",
  },
  {
    title: "Beyond Curricula",
    content:
      "We have collaborated with multiple top class sports academies to provide best in class facilities to our students.",
  },
  {
    title: "Personalized Attention",
    content:
      "With a low student-to-teacher ratio, we ensure that every child receives the attention they deserve.",
  },
  {
    title: "Innovative Teaching Methods",
    content:
      "We employ modern teaching techniques and technologies to make learning engaging and effective.",
  },
  {
    title: "Community Engagement",
    content:
      "We believe in the power of community and actively involve parents and local organizations in our activities.",
  },
  {
    title: "Safety First",
    content:
      "Our campus is equipped with state-of-the-art security systems to ensure the safety of our students.",
  },
];

const FacilitiesContents = [
  {
    title: "Transport Facility",
    image: image1,
  },
  {
    title: "Library",
    image: image2,
  },
  {
    title: "Sports Facilities",
    image: image3,
  },
  {
    title: "Laboratories",
    image: image4,
  },
  {
    title: "Art and Craft Room",
    image: image1,
  },
  {
    title: "Music Room",
    image: image2,
  },
];

const HomePage = () => {
  return (
    <>
      <div className="w-full p-0 m-0 bg-white">
        <CarouselBlock />
        <LatestNewsBlock />

        {/* Enquire Block */}
        <div
          id="about-section"
          className="w-full py-7 px-1 md:px-4 bg-white text-black"
        >
          <div className="container mx-auto px-7 md:px-16 py-3 md:py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-7 md:gap-4 justify-between">
            <div className="pb-12 md:pb-0">
              <p className="font-poppins text-2xl md:text-4xl font-semibold md:font-bold text-secondary">{`ABOUT ${schoolConfig.schoolName.toUpperCase()}`}</p>
              <div className="mb-3 mt-5 flex justify-center items-center">
                <img
                  src={schoolConfig.schoolIamge}
                  alt="Contact Us"
                  className="w-full h-auto rounded-lg shadow-lg mt-4"
                />
              </div>
              {schoolConfig.aboutUs.aboutUsPoints.map((item) => (
                <div className="flex flex-col justify-center items-start w-full h-full mb-0 p-1">
                  <div className="text-base md:text-xl text-secondary-red font-bold px-3 md:px-5">
                    {item.title}
                  </div>
                  <div className="text-base md:text-lg px-3 md:px-5 pt-1 ml-[3px]">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
            <div
              id="admission-form"
              className="flex justify-center items-center w-full h-full px-0 md:px-30 mt-0 md:mt-10"
            >
              <AdmissionRequestForm />
            </div>
          </div>
        </div>

        {/* Why choose Us Block */}
        <div className="w-full py-24 px-4 bg-primary font-poppins">
          <div className="flex justify-center items-center w-full h-full mb-16">
            <p className="font-poppins text-2xl md:text-4xl font-semibold md:font-bold text-secondary text-center md:text-left">{`WHY ${schoolConfig.schoolName.toUpperCase()} ?`}</p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-2 md:px-28 justify-between items-center">
            {WhyChooseUsContents.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-start h-full"
              >
                <div className="text-lg md:text-xl font-semibold text-secondary-red mb-5">
                  {item.title}
                </div>
                <div className="text-base md:text-lg">{item.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Block */}
        <div
          id="facilities-section"
          className="w-full py-24 px-4 bg-white font-poppins"
        >
          <div className="flex justify-center items-center w-full h-full mb-16">
            <p className="font-poppins text-2xl md:text-4xl font-semibold md:font-bold text-secondary text-center md:text-left">{`FACILITIES AT ${schoolConfig.schoolName.toUpperCase()}`}</p>
          </div>

          <FacilitiesMarquee facilities={FacilitiesContents} />
        </div>

        {/* Curriculum Block */}
        <div
          id="curriculum-section"
          className="w-full py-7 px-1 md:px-7 bg-primary text-black"
        >
          <div className="container mx-auto px-7 md:px-16 py-3 md:py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-7 md:gap-4 justify-between">
            <div className="pb-12 md:pb-0">
              <p className="font-poppins text-2xl md:text-4xl font-semibold md:font-bold text-secondary">
                CURRICULUM
              </p>

              <div className="mt-7 text-base md:text-lg">
                <p>
                  The academic year of the school begins in April and consists
                  of two terms:
                </p>
                <p className="px-3 md:px-5 pt-1 ml-[3px]">
                  <ul>
                    <li>First Term: April to September</li>
                    <li>Second Term: October to March</li>
                  </ul>
                </p>
                <p className="mt-5">
                  The course of study is as per the syllabus prescribed by the
                  Central Board of Secondary Education (CBSE), which comprises
                  the subjects of English, Hindi, Marathi, Mathematics, Science,
                  Social Studies, Computer Science, Art & Craft, Music, Physical
                  Education, Work Education, Dance, AI Robotics and Coding.
                </p>
                <p className="mt-5 font-semibold">
                  For Class XI & XII - Science and Commerce
                </p>
              </div>
              <div className="w-full mt-5 flex">
                <p className="mr-2 flex items-center text-sm md:text-lg">
                  For more information{" "}
                </p>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => {
                    window.location.href = "#about-section";
                  }}
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
            <div className="mb-3 mt-5 flex justify-center items-center">
              <img
                src={schoolConfig.schoolIamge}
                alt="Contact Us"
                className="w-full h-auto rounded-lg shadow-lg mt-4"
              />
            </div>
          </div>
        </div>

        {/* Galarry Block */}
        <div id="gallery-section" className="w-full py-10 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="font-poppins text-2xl md:text-4xl font-semibold md:font-bold text-center mb-12">
              Our Gallery
            </h2>
            <GalleryMarquee images={galleryImages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
