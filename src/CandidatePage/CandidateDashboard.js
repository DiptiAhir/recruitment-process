import StepCard from "../components/StepCard";
import { NavLink } from "react-router-dom";
const CandidateHomePage = () => (
  <>
    {/* Header Section */}
    <header className="bg-indigo-700 text-white py-28">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-indigo-100">
          Welcome to QuickHire
        </h1>
        <p className="text-lg font-medium text-indigo-200">
          Your journey to landing your dream job starts here.
        </p>
      </div>
    </header>

    {/* Main Content Section */}
    <main className="container mx-auto py-14">
      {/* Introduction */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How QuickHire Helps You
        </h2>
        <p className="text-lg text-gray-600">
          QuickHire streamlines your job search, from applying for positions to
          receiving your offer letter and onboarding seamlessly.
        </p>
      </section>

      {/* Process Steps */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Your Hiring Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard
            title="Explore Job Listings"
            description="Browse open positions tailored to your skills and preferences."
            icon="🔍"
          />
          <StepCard
            title="Submit Applications"
            description="Apply for jobs with a single click and upload your resume."
            icon="📄"
          />
          <StepCard
            title="Track Application Status"
            description="Stay updated on your application progress and recruiter feedback."
            icon="📊"
          />
          <StepCard
            title="Schedule Interviews"
            description="Pick available time slots and prepare for your interviews."
            icon="📅"
          />
          <StepCard
            title="Receive Your Offer Letter"
            description="Get a personalized offer letter once you're selected."
            icon="📬"
          />
          <StepCard
            title="Complete Onboarding"
            description="Submit necessary documents and get ready for your new role."
            icon="✅"
          />
        </div>
      </section>

      {/* Additional Features */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Smart Tools for a Smooth Experience
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          QuickHire provides an effortless hiring experience with:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Automated application tracking and status updates.</li>
          <li>Interview reminders and preparation resources.</li>
          <li>Seamless communication with recruiters and HR teams.</li>
          <li>Easy access to all your job-related documents in one place.</li>
        </ul>
      </section>
    </main>

    {/* Call-to-Action Section */}
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Start Your Career Journey with QuickHire
        </h3>
        <p className="text-gray-600 mb-6">
          Explore opportunities, apply with ease, and onboard smoothly.
        </p>
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-md text-lg font-medium no-underline ">
          <NavLink
            to="/jobs"
            className="text-2xl text-white px-6 py-3  hover:no-underline"
          >
            Find Jobs Now
          </NavLink>
        </button>
      </div>
    </footer>
  </>
);

export default CandidateHomePage;
