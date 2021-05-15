import React from "react";

function FileUpload({ imageData, saveDetail }) {
  return (
    <div>
      <label className="file" htmlFor="file-upload">
        UPLOAD
      </label>
      <input
        type="file"
        accept="image/*"
        id="file-upload"
        style={{
          display: "none",
        }}
        onChange={(e) => {
          console.log(e.target.files[0].name);
          saveDetail("Image", e.target.files[0]);
        }}
        name="file-upload"
      />
      {imageData ? (
        <>
          <img
            src={URL.createObjectURL(imageData)}
            style={{
              width: "150px",
              marginTop: "30px",
              display: "block",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            {imageData.name}
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default FileUpload;
