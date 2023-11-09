import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { GalleryLayout } from "./pages/GalleryLayout/GalleryLayout";
import { ArtPage } from "./pages/ArtPage/ArtPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="gallery" element={<GalleryLayout />}>
        <Route index element={<GalleryPage />} />
        <Route path=":id" element={<ArtPage />} />
      </Route>
    </Routes>
  );
}

export default App;
