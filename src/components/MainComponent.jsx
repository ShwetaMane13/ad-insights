import { useState } from "react";

import Body from "./Body";
import NavBar from "./NavBar";

const MainComponent = () => {
  const [viewDashBoard, setViewDashboard] = useState(true);

  return (
    <div className="main__container">
      <NavBar setViewDashboard={setViewDashboard} />
      <Body viewDashBoard={viewDashBoard} />
    </div>
  );
};

export default MainComponent;
