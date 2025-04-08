import { useFormik } from "formik";
import * as Yup from "yup";
import schoolLogo from "../assets/school-logo.jpg";

const validationSchema = Yup.object({
  studentName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Student name is required"),
  parentName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Parent name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  class: Yup.string().required("Class is required"),
});

const AdmissionRequestForm = () => {
  const formik = useFormik({
    initialValues: {
      studentName: "",
      parentName: "",
      mobileNumber: "",
      email: "",
      class: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white px-6 py-14 rounded-lg shadow-xl w-full"
    >
      <div className="space-y-4">
        {schoolLogo ? (
          <>
            <div className="flex justify-center mb-5">
              <img
                src={schoolLogo}
                alt="Logo"
                className="w-22 h-22 object-cover rounded-full shadow-md"
              />
            </div>
          </>
        ) : null}
        <div className="mb-10">
          <p className="text-2xl font-bold text-center text-secondary mb-3">
            Admission Open
          </p>
          <div className="flex justify-center items-center">
            <p className="mb-3 h-[1px] w-[20%] bg-secondary"></p>
          </div>
        </div>

        <div>
          <input
            type="text"
            id="studentName"
            placeholder="Student Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...formik.getFieldProps("studentName")}
          />
          {formik.touched.studentName && formik.errors.studentName && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.studentName}
            </div>
          )}
        </div>

        <div>
          <input
            type="text"
            id="parentName"
            placeholder="Parent Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...formik.getFieldProps("parentName")}
          />
          {formik.touched.parentName && formik.errors.parentName && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.parentName}
            </div>
          )}
        </div>

        <div>
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...formik.getFieldProps("mobileNumber")}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.mobileNumber}
            </div>
          )}
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div>
          <select
            id="class"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...formik.getFieldProps("class")}
          >
            <option value="">Select Class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
          </select>
          {formik.touched.class && formik.errors.class && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.class}
            </div>
          )}
        </div>

        <div className="mt-14">
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit Application
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdmissionRequestForm;
