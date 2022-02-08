import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

 const ImgCropper = () => {
  const defaultimage =
    "https://images.unsplash.com/photo-1643323534407-f903836ef4b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const [image, setImage] = useState(defaultimage);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();

  console.log(cropData)

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };


  const createImage = (url) =>
    new Promise((resolve,reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', reject(error))
      image.setAttribute('crossOrigin', 'anonymous')
      image.src = url
    })

  export const getCroppedImage = async (imgSrc, crop) => {
    const image = await createImage(imgSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');

    canvas.width = 250
    canvas.height = 250

    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      canvas.width,
      canvas.height
    )

    return new Promise((resolve) => {
      canvas.toBlob(blob => {
        resolve(blob)
      }, 'image/jpeg')
    })

  }




  return (
    <div>
        <div style={{ width: "100%" }}>
          <input type="file" onChange={onChange} />
          <Cropper
            src={image}
            style={{ height: '800px', width: "auto" }}
            zoomTo={0.5}
            initialAspectRation={1}
            preview=".img-preview"
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            checkOrientation={false}
            autoCropArea={1}
            background={false}
            responsive={true}
            movable={true}
            rotatable={true}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
        </div>

        {/* <div
          className="img-preview"
          style={{ width: "100%", overflow: "hidden", height: "300px" }}
        /> */}

      <h1>
        <span>Crop</span>
        <br />
        <button onClick={getCropData}>Crop Image</button>
        <a href={cropData} target='_blank' onClick={getCropData}>Crop image ...</a>
      </h1>
      {/* <img style={{ width: "auto" }} src={cropData} alt="cropped" /> */}
    </div>
  );
};



export default ImgCropper