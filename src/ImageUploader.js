import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      onImageUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input" className="upload-button">
        Upload Image
      </label>
      {selectedImage && (
        <p>Selected File Type: {selectedImage.type}</p>
      )}
    </div>
  );
};

export default ImageUploader;
