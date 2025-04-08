import { schoolConfig } from "../config/schoolConfig";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary text-white py-6 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-7">
          {/* left block */}
          <div className="flex flex-col justify-center ml-0 md:ml-20 text-left pt-10 pb-14 md:p-0">
            <p className="text-2xl md:text-3xl font-semibold">
              {schoolConfig.schoolName}
            </p>
          </div>

          {/* right block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <p className="mb-5 text-xl">Contact Us</p>
              <div className="flex gap-2 mb-3 hover:text-yellow-400 hover:cursor-pointer hover:pl-1 transform duration-200 ease-in">
                <CallIcon />

                <p className="text-sm">
                  {schoolConfig.contactDetails.phoneNumbers.map(
                    (phone, index) => (
                      <span key={index}>
                        {phone}
                        {index <
                        schoolConfig.contactDetails.phoneNumbers.length - 1
                          ? ", "
                          : ""}
                      </span>
                    )
                  )}
                </p>
              </div>
              <div className="flex gap-2 mb-3 hover:text-yellow-400 hover:cursor-pointer hover:pl-1 transform duration-200 ease-in">
                <EmailIcon />
                <p className="text-sm">{schoolConfig.contactDetails.email}</p>
              </div>
            </div>
            <div>
              <p className="mb-5 text-xl">Address</p>
              <div className="flex gap-2 mb-3">
                <LocationOnIcon />

                <p className="text-sm mb-3">{schoolConfig.schoolAddress}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-5 border-t-1 md:border-0 border-gray-500">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} {schoolConfig.schoolName}. All
            rights reserved. | <Link to={`#`}>terms & conditions</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
