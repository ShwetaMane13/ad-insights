import React, { useMemo, useState } from "react";

import Switch from "@mui/material/Switch";

// import AdInsightsHeader from "./AdInsightsHeader";
import EnhancedTable from "./common/Table";
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
    <>
      <section className="ad-insights-right">
        <section className="ad-insights-right__container">
          {/* <AdInsightsHeader /> */}
          <section className="ad-insights__header">
            <span>Ad Insights</span>
            {toggle ? null : (
              <Dropdown
                selected={selected}
                setSelected={setSelected}
                options={options}
              />
            )}
          </section>

          <section>
            {toggle ? (
              <EnhancedTable
                headCells={rightTableHeadCells}
                data={rightTableData}
                total={rightTableTotal}
              />
            ) : (
              <DoughnutChart data={data} />
            )}
            <section className="ad-insights-right__switch">
              <Switch
                checked={toggle}
                onChange={handleToggle}
                inputProps={{ "aria-label": "controlled" }}
                size="medium"
              />
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default AdInsightsRight;
