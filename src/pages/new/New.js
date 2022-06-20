import React, { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import "./new.css";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://static.wikia.nocookie.net/yugioh/images/5/54/SaggitheDarkClown-OW.png/revision/latest?cb=20140618212001"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                  ></input>
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
