"use client";

import getBase64 from "@/utils/getBase64";
import React, { useEffect, useState } from "react";

const FileInput = ({ label, onChange, file }) => {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    file && setPreview(file);
  }, [file]);
  return (
    <>
      <p style={{ color: "black", fontSize: 16, textAlign: "center" }}>{label}</p>
      <div className="form-input">
        {!preview ? (
          <label className="labeltest" for="file-ip-1">
            <span>Click to upload </span>
          </label>
        ) : (
          <label className="labeltest" for="file-ip-1" style={{ position: "absolute", top: 0 }}>
            <span className="text-primary ">Replace</span>
          </label>
        )}
        <input
          type="file"
          id="file-ip-1"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            getBase64(file)
              .then((data) => setPreview(data))
              .catch((err) => console.log(err));
            onChange(file);
          }}
        />
        {preview && (
          <div className="preview" style={{ zIndex: 99 }}>
            <img
              id="file-ip-1-preview"
              src={preview}
              alt="img"
              style={{ display: preview ? "block" : "none" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FileInput;
