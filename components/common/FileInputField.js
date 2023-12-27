import getBase64 from "@/utils/getBase64";
import Image from "next/image";
import React, { useState } from "react";

const FileInputField = (props) => {
  const { label, file, onChange, error, ...rest } = props;
  const [preview, setPreview] = useState(false);

  // React styles in JavaScript object notation
  const labelStyle = {
    width: "100%",
    height: "50px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const browseButtonStyle = {
    width: "107px",
    height: "100%",
    backgroundColor: "#7366FF",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "13px",
  };

  return (
    <div style={{ width: "100%", marginBottom: "5px" }}>
      <p style={{ color: "#333", fontSize: "15px", fontWeight: "medium", marginBottom: "3px" }}>
        {label}
      </p>
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <label style={labelStyle}>
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              onChange(e.target.files[0]);
              getBase64(e.target.files[0])
                .then((data) => {
                  setPreview(data);
                })
                .catch((err) => console.log(err));
            }}
            {...rest}
          />
          <span style={{ flex: 1, paddingLeft: 5 }}>
            {file?.name ? file?.name : "Select image"}
          </span>
          <span style={browseButtonStyle}>Browse</span>
        </label>
        {preview && (
          <div
            style={{
              width: "60px",
              height: "50px",
              borderRadius: "5px",
              overflow: "hidden",
              marginBottom: 7,
            }}
          >
            <Image
              src={preview}
              alt="Preview"
              width={57}
              height={47}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInputField;
