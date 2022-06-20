import React from "react";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import "./featured.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <Progress
            type="circle"
            width={70}
            percent={70}
            status="active"
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$ 420</p>
        <p className="description">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
