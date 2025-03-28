import React, { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageEditor from "./components/ImageEditor";
import MasonryGallery from "./components/MasonryGallery";
import "./index.css";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <h1>Image Manager</h1>
      <ImageUploader setImages={setImages} />
      <ImageEditor images={images} setImages={setImages} />
      <MasonryGallery images={images} />
    </div>
  );
}

export default App;

