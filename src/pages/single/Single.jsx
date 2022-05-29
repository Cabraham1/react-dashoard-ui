import React from 'react'
import './single.scss'
import Navbar from "../../components/navBar/NavBar";
import Sidebar from "../../components/sideBar/Sidebar"
import userImg  from "../../assets/abraham.jpg";
import Chart from "../../components/chart/Chart";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="Top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={userImg} alt="userImg" className="itemImage" />
              <div className="details">
                <h1 className="itemTitle">Christopher abraham</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    Christopherabraham8@gmail.com
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 810 0091 6541</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Plot 342 central business district Abuja
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect ={3/1}/>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default Single