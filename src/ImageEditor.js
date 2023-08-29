import React, { useState, useEffect } from "react";

const ImageEditor = ({ image }) => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [filteredImage, setFilteredImage] = useState(null);

  useEffect(() => {
    if (image) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
        ctx.drawImage(img, 0, 0);
        setFilteredImage(canvas.toDataURL("image/jpeg"));
      };

      img.src = URL.createObjectURL(image);
    }
  }, [image, brightness, contrast]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filteredImage;
    link.download = "edited-image.jpg";
    link.click();
  };

  return (
    <div>
      <h2>Image Editor</h2>
      <div>
        <label htmlFor="brightness-slider">Brightness:</label>
        <input
          type="range"
          id="brightness-slider"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contrast-slider">Contrast:</label>
        <input
          type="range"
          id="contrast-slider"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleDownload}>Download Edited Image</button>
      </div>
      {filteredImage && <img src={filteredImage} alt="Edited" />}
    </div>
  );
};

export default ImageEditor;
