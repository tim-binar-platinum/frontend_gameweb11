import { useState } from "react";

function UploadButton() {
  const [images, setImages] = useState([]);
  const [imageToRemove, setImageToRemove] = useState(null);

  function handleRemoveImage(imgObject) {}

  // function handleOpenWidget() {
  //   let myWidget = window.cloudinary.createUploadWidget(
  //     {
  //       cloudName: "process.env.CLOUDINARY_NAME",
  //       uploadPreset: "process.env.CLOUDINARY_PRESET",
  //     },
  //     (error, result) => {
  //       if (!error && result && result.event === "success") {
  //         console.log("Done! Here is the image info: ", result.info);
  //       }
  //     }
  //   );
  // }

  async function handleOpenWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "process.env.CLOUDINARY_NAME",
        uploadPreset: "process.env.CLOUDINARY_PRESET",
        // resourceType: "image",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    widget.open();
  }

  return (
    <div className="UploadButton">
      <button
        id="upload-widget"
        className="cloudinary-button"
        onClick={handleOpenWidget}
      >
        Upload Pictures
      </button>

      <div className="images-preview-container"></div>
    </div>
  );
}

export default UploadButton;
