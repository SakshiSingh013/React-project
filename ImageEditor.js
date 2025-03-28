import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button, Drawer, Slider } from "@mui/material";

const ImageEditor = ({ images, setImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openEditor = (image) => {
    setSelectedImage(image);
    setIsDrawerOpen(true);
  };

  const closeEditor = () => {
    setIsDrawerOpen(false);
    setSelectedImage(null);
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log("Cropped Area:", croppedAreaPixels);
  };

  const applyChanges = () => {
    closeEditor();
  };

  return (
    <div>
      <h2>Edit Image</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Uploaded"
            onClick={() => openEditor(image)}
            style={{ width: "100px", cursor: "pointer", margin: "5px" }}
          />
        ))}
      </div>

      <Drawer anchor="right" open={isDrawerOpen} onClose={closeEditor}>
        <div style={{ width: "300px", padding: "20px" }}>
          <h3>Image Editor</h3>

          {selectedImage && (
            <div style={{ height: "200px", position: "relative" }}>
              <Cropper
                image={selectedImage}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={handleCropComplete}
              />
            </div>
          )}

          <div>
            <label>Zoom</label>
            <Slider value={zoom} min={1} max={3} step={0.1} onChange={(e, val) => setZoom(val)} />
          </div>

          <div>
            <label>Rotate</label>
            <Slider value={rotation} min={0} max={360} step={1} onChange={(e, val) => setRotation(val)} />
          </div>

          <Button variant="contained" color="primary" onClick={applyChanges}>
            Apply Changes
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default ImageEditor;
