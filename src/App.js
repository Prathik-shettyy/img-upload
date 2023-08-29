import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageEditor from "./ImageEditor";
import "./App.css";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <div className="App">
      <h1>Image Editor Assesment</h1>
      <ImageUploader onImageUpload={handleImageUpload} />
      {uploadedImage && <ImageEditor image={uploadedImage} />}
    </div>
  );
}

export default App;
