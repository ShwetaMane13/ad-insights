import React, { useMemo, useState } from "react";

import Switch from "@mui/material/Switch";

// import AdInsightsHeader from "./AdInsightsHeader";
import EnhancedTable from "./common/AdInsightsTable";
import DoughnutChart from "./DoughnutChart";
import Dropdown from "./common/Dropdown";

import {
  options,
  rightTableData,
  rightTableHeadCells,
  rightTableTotal,
} from "../constants/constants";
import { calculatePercentage } from "./helper/helper";

const AdInsightsRight = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("Clicks");
  const [data, setData] = useState();

  useMemo(() => {
    setData(calculatePercentage(selected));
  }, [selected]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="ad-insights-right">
      <div className="ad-insights__header">
        <span>Ad Insights</span>
        {toggle ? null : (
          <div className="ad-insights__header-dropdown">
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              options={options}
            />
          </div>
        )}
      </div>

      <div className="ad-insights-right__body">
        {toggle ? (
          <EnhancedTable
            headCells={rightTableHeadCells}
            data={rightTableData}
            total={rightTableTotal}
          />
        ) : (
          <DoughnutChart data={data} />
        )}
        <div className="ad-insights-right__switch">
          <Switch
            checked={toggle}
            onChange={handleToggle}
            inputProps={{ "aria-label": "controlled" }}
            size="medium"
          />
        </div>
      </div>
    </div>
  );
};

export default AdInsightsRight;
