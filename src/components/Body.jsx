import CreateAds from "./CreateAds";
import Dashboard from "./Dashboard";

const Body = (props) => {
  const { viewDashBoard } = props;
  return (
    <div className="body">
      {viewDashBoard ? <Dashboard /> : <CreateAds />}
    </div>
  );
};

export default Body;
