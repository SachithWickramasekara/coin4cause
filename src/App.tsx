import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { Landing, About, Campaign, Services } from "./pages/Index";
import { routePaths } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routePaths.home} element={<Landing />} />
        <Route path={routePaths.campaings} element={<Campaign />} />
        <Route path={routePaths.about} element={<About />} />
        <Route path={routePaths.services} element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;

//