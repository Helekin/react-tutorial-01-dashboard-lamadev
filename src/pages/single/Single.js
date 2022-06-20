import React from "react";

import "./single.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://static.wikia.nocookie.net/yugioh/images/5/54/SaggitheDarkClown-OW.png/revision/latest?cb=20140618212001"
                alt=""
                className="item-img"
              />
              <div className="details">
                <h1 className="item-title">Jane Doe</h1>
                <div className="detail-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">janedoe@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+1 2345 67 89</span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Address:</span>
                  <span className="item-value">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detail-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
