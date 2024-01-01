import MainRouter from "../src/components/routes/main";
import "../src/components/scss/pages/_main.scss";

export default function App() {
  return (
    <div style={{display: "flex", flex: 1, height: "100vh"}}>
      <MainRouter />
    </div>
  );
}
