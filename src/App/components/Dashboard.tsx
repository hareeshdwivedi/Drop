import React, { useState } from "react";
import { LineChart } from "./Chart";
import "../../style.css"

const Dashboard = () => {

  const [click, setClicks] = useState(0)
  const [impression, setImpression] = useState(0)
  const [dateRange, setDateRange] = useState<any>({
    toDate: new Date(),
    fromdate: new Date()
  })


  const handleOnChange = (event: any) => {
    event.preventDefault()
    const { name, value } = event.target;
    const { toDate, fromDate } = dateRange
    console.log(name, value);
    if (value) {
      const val = {
        toDate: name === "toDate" ? value : toDate,
        fromDate: name === "fromDate" ? value : fromDate
      }
      console.log(val);
      setDateRange(val)
    }
  }
  return (
    <>
      <div className="Dashboard-container">
        <div className="header">
          <div className="search">
            <label>Start Date</label>
            <input name="fromDate" id="startDate" type={"date"} onChange={(e) => handleOnChange(e)} />
          </div>
          <div className="search">
            <label>End Date</label>
            <input className="form-input" name="toDate" id="endDate" type={"date"} onChange={(e) => handleOnChange(e)} />
          </div>
        </div>
        <div className="dashboard-sections">
          <div className="cards">
            <div className="header">
              <span className="icon"></span>
              <span className="title">Total Clicks</span>
            </div>
            <div className="section">
              <span className="clicks">{click}</span>
            </div>
          </div>
          <div className="cards">
            <div className="header">
              <span className="icon"></span>
              <span className="title">Total Impressions</span>
            </div>
            <div className="section">
              <span className="clicks">{impression}</span>
            </div>
          </div>
        </div>
        <LineChart setClicks={setClicks} setImpression={setImpression} click={click} impressions={impression} dateRange={dateRange} />
      </div>
    </>
  );
};

export default Dashboard;
