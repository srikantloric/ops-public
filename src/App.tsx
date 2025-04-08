import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[60px] md:pt-[70px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
