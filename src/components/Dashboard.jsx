import AdInsightsLeft from "./AdInsightsLeft";
import AdInsightsRight from "./AdInsightsRight";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__adInsights-container">
        <AdInsightsLeft />
        <AdInsightsRight />
      </div>
    </div>
  );
};

export default Dashboard;
