import React from "react";

import EnhancedTable from "./common/AdInsightsTable";
import AdInsightsHeader from "./AdInsightsHeader";

import {
  leftTableData,
  leftTableTotal,
  leftTableHeadCells,
} from "../constants/constants";

const AdInsightsLeft = () => {
  return (
    <div className="ad-insights-left">
      <AdInsightsHeader />
      <EnhancedTable
        headCells={leftTableHeadCells}
        data={leftTableData}
        total={leftTableTotal}
      />
    </div>
  );
};

export default AdInsightsLeft;
