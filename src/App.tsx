import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { GalleryLayout } from "./pages/GalleryLayout/GalleryLayout";

function App() {
  return (
    <Routes>
      <Route path="/a" element={<LoginPage />} />
      <Route path="/" element={<GalleryLayout />}>
        <Route path="/" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
