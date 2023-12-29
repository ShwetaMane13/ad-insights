import CreateAds from "./CreateAds";
import Dashboard from "./Dashboard";

const Body = (props) => {
  const { viewDashBoard } = props;
  return <section className="body">{viewDashBoard ? <Dashboard /> : <CreateAds />}</section>;
};

export default Body;
