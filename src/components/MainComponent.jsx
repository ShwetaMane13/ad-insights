import { useState } from "react";

import Body from "./Body";
import NavBar from "./NavBar";

const MainComponent = () => {
  const [viewDashBoard, setViewDashboard] = useState(true);

  return (
    <section className="main__container">
      <NavBar setViewDashboard={setViewDashboard} />
      <Body viewDashBoard={viewDashBoard} />
    </section>
  );
};

export default MainComponent;
