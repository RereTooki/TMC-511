import "./App.css";
import TMCCard from "./components/TMCCard";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <TMCCard />
        <Analytics />
      </div>
    </>
  );
}

export default App;
