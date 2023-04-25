import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { Landing, About, Campaign,Login,SignUp,UsernamePassword,EmailVerify,LoadingScreen ,Donate ,ContactUs} from "./pages/Index";
import { routePaths } from "./routes/routes";
import {Step1,Step2,Step3,Step4,Step5,StepDone} from './pages/CreateCampaign/Index'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./layout/Footer";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.nav>
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
        <Route path={routePaths.contactUS} element={<ContactUs />} />
        <Route path={routePaths.step1} element={<Step1 />} />
        <Route path={routePaths.step2} element={<Step2 />} />
        <Route path={routePaths.step3} element={<Step3 />} />
        <Route path={routePaths.step4} element={<Step4 />} />
        <Route path={routePaths.step5} element={<Step5 />} />
        <Route path={routePaths.done} element={<StepDone />} />
        <Route path={routePaths.donate} element={<Donate />} />
      </Routes>
      {window.location.pathname !== routePaths.login &&
      window.location.pathname !== routePaths.signup &&
      window.location.pathname !== routePaths.usernamepassword ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
