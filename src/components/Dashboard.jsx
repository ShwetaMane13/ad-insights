import AdInsightsLeft from "./AdInsightsLeft";
import AdInsightsRight from "./AdInsightsRight";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <section>
        <AdInsightsLeft />
      </section>
      <section>
        <AdInsightsRight />
      </section>
    </section>
  );
};

export default Dashboard;
