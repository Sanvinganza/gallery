import { SignUpForm } from "./components/SignupForm/SignupForm";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/a" element={<LoginPage />} />
      <Route path="/" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
