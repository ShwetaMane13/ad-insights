import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "../MainComponent";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainComponent} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
