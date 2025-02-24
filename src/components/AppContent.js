import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../src/context/AppContext";

import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import LoginSignupPage from "../../src/Pages/Login";

// Admin Pages
import JobRequisitionPage from "../../src/Pages/JobRequisitionPage";
import ApplicationReviewPage from "../../src/Pages/ResumeReviewPage";
import OfferLetterPage from "../../src/Pages/OfferLetterPage";
import OnboardingPage from "../../src/Pages/OnboardingPage";
import AdminDashboard from "../../src/Pages/AdminDashboard";

// Candidate Pages
import  ApplicationForm  from "../CandidatePage/ApplicationForm";
import JobListings from "../CandidatePage/JobListings";
import { ApplicationStatus } from "../CandidatePage/ApplicationStatus";
import { InterviewScheduling } from "../CandidatePage/InterviewScheduling";
import { OfferLetter as CandidateOfferLetter } from "../CandidatePage/OfferLetter";
import { Onbording as CandidateOnboarding } from "../CandidatePage/Onbording";
import CandidateDashboard from "../CandidatePage/CandidateDashboard";

const ProtectedRoute = ({ children }) => {
  const { isAdmin, isLoggedIn } = useContext(AppContext);
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppContent = () => {
  const { isAdmin, isLoggedIn } = useContext(AppContext);
  const location = useLocation();

  // Hide Navbar & Footer only on the login page
  const hideNavFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavFooter && <Navbar />}

      <Routes>
        {/* Redirect '/' to the appropriate dashboard */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              isAdmin ? <Navigate to="/admin-dashboard" replace /> : <Navigate to="/candidate-dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Public Route: Login (Redirects if already logged in) */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              isAdmin ? <Navigate to="/admin-dashboard" replace /> : <Navigate to="/candidate-dashboard" replace />
            ) : (
              <LoginSignupPage />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                {/* Admin Routes */}
                {isAdmin ? (
                  <>
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/job-requisition" element={<JobRequisitionPage />} />
                    <Route path="/application-review" element={<ApplicationReviewPage />} />
                    <Route path="/offer-letter" element={<OfferLetterPage />} />
                    <Route path="/onboarding" element={<OnboardingPage />} />
                  </>
                ) : (
                  // Candidate Routes
                  <>
                    <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
                    <Route path="/jobs" element={<JobListings />} />
                    <Route path="/apply" element={<ApplicationForm />} />
                    <Route path="/status" element={<ApplicationStatus />} />
                    <Route path="/interview" element={<InterviewScheduling />} />
                    <Route path="/offer" element={<CandidateOfferLetter />} />
                    <Route path="/onboarding" element={<CandidateOnboarding />} />
                  </>
                )}
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
};

export default AppContent;
