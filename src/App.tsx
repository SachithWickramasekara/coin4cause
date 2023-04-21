import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { Landing, About, Campaign, Services } from "./pages/Index";
import { routePaths } from "./routes/routes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UsernamePassword from "./pages/UsernamePassword";
import EmailVerify from "./pages/EmailVerify";
import Step1 from "./pages/CreateCampaign/Step1";
import Step2 from "./pages/CreateCampaign/Step2";
import Step3 from "./pages/CreateCampaign/Step3";
import Step4 from "./pages/CreateCampaign/Step4";
import StepDone from "./pages/CreateCampaign/StepDone";
import { useState, useEffect } from "react";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <LoadingScreen/>;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routePaths.home} element={<Landing />} />
        <Route path={routePaths.login} element={<Login />} />
        <Route path={routePaths.signup} element={<SignUp />} />
        <Route
          path={routePaths.usernamepassword}
          element={<UsernamePassword />}
        />
        <Route path={routePaths.emailverify} element={<EmailVerify />} />
        <Route path={routePaths.campaings} element={<Campaign />} />
        <Route path={routePaths.about} element={<About />} />
        <Route path={routePaths.services} element={<Services />} />
        <Route path={routePaths.step1} element={<Step1 />} />
        <Route path={routePaths.step2} element={<Step2 />} />
        <Route path={routePaths.step3} element={<Step3 />} />
        <Route path={routePaths.step4} element={<Step4 />} />
        <Route path={routePaths.done} element={<StepDone />} />
      </Routes>
    </div>
  );
}

export default App;

//
