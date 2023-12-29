import React from "react";

import EnhancedTable from "./common/Table";
import AdInsightsHeader from "./AdInsightsHeader";

import {
  leftTableData,
  leftTableTotal,
  leftTableHeadCells,
} from "../constants/constants";

const AdInsightsLeft = () => {
  return (
    <section className="ad-insights-left">
      <section className="ad-insights-left__container">
        <AdInsightsHeader />
        <EnhancedTable
          headCells={leftTableHeadCells}
          data={leftTableData}
          total={leftTableTotal}
        />
      </section>
    </section>
  );
};

export default AdInsightsLeft;
