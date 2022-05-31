import React from 'react'
import './new.scss'
import Navbar from "../../components/navBar/NavBar"
import Sidebar from "../../components/sideBar/Sidebar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react'

const New = ({inputs,title}) => {

  const [file, setFile] = useState('');

  return (
    <div className="New">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="Top">
          <h1>{title}</h1>
        </div>
        <div className="Bottom">
          <div className="left">
            <img
              src={
                file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} 
                alt="pic"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                Image:<label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="image" />
                </label>
                <input type="file" id="file" 
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }} />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
                ))}
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New