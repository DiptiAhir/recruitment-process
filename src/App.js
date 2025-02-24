import { BrowserRouter,Routes ,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JobRequisitionPage from "./Pages/JobRequisitionPage";
import ResumeReviewPage from "./Pages/ResumeReviewPage";
import OfferLetterPage from "./Pages/OfferLetterPage";
import OnboardingPage from "./Pages/OnboardingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginSignupPage from "./Pages/Login";

const App = () => (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job-requisition" element={<JobRequisitionPage />} />
      <Route path="/resume-review" element={<ResumeReviewPage />} />
      <Route path="/offer-letter" element={<OfferLetterPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginSignupPage />} />

    </Routes>
    <Footer/>
  </BrowserRouter>
);

export default App;
