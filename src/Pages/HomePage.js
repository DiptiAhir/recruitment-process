import StepCard from "../components/StepCard";

const HomePage = () => (
  <>
    {/* Header Section */}
    <header className="bg-indigo-700 text-white py-28">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4  text-indigo-100">Welcome to QuickHire</h1>
        <p className="text-lg font-medium text-indigo-200">
          Automate your hiring process and focus on building a great team.
        </p>
      </div>
    </header>

    {/* Main Content Section */}
    <main className="container mx-auto py-14">
      {/* Introduction */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How QuickHire Works</h2>
        <p className="text-lg text-gray-600">
          QuickHire simplifies your hiring process from job requisitions to onboarding. With automation, templates, and Slack bot integration, it reduces manual effort and ensures every step is seamless and efficient.
        </p>
      </section>

      {/* Process Steps */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Steps in the Hiring Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard
            title="Create Job Requisitions"
            description="Easily create and post job openings to platforms like LinkedIn with customizable details."
            icon="📄"
          />
          <StepCard
            title="Review Resumes"
            description="Automate resume collection, keyword-based filtering, and shortlist candidates for interviews."
            icon="📑"
          />
          <StepCard
            title="Candidate Outreach"
            description="Quickly contact candidates, set up interviews, and collect additional details."
            icon="📞"
          />
          <StepCard
            title="Interview Scheduling"
            description="Coordinate interviews with a built-in scheduling tool, and track feedback."
            icon="📅"
          />
          <StepCard
            title="Offer Letter Generation"
            description="Generate personalized offer letters using templates for interns and full-time hires."
            icon="📬"
          />
          <StepCard
            title="Document Collection"
            description="Request and verify important documents like PAN, Aadhar, and service agreements."
            icon="📂"
          />
          <StepCard
            title="Onboarding Kit"
            description="Collect details like T-shirt size and prepare a customized onboarding kit."
            icon="🎁"
          />
          <StepCard
            title="Microsoft Account Setup"
            description="Automatically create a Microsoft account, assign business licenses, and share credentials."
            icon="💻"
          />
          <StepCard
            title="Slack Integration"
            description="Add new hires to Slack channels, send a welcome message, and invite them to collaborate."
            icon="💬"
          />
        </div>
      </section>

      {/* Slack Bot and AI Automation */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Smart Automation with Slack Bot
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Our Slack bot integrates seamlessly into your workflow, reducing the need for manual intervention. Here's how it assists:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Fetches and analyzes candidate details directly from resumes.</li>
          <li>Prompts for minimal input, like the hired candidate's name and resume link.</li>
          <li>Verifies documents (e.g., missing signatures) before proceeding to the next step.</li>
          <li>Tracks and stores all candidate responses and documents in OneDrive for legal purposes.</li>
        </ul>
        <p className="mt-4 text-gray-600">
          Once set up, the bot ensures every step from job requisition to onboarding is handled with precision and speed.
        </p>
      </section>
    </main>

    {/* Call-to-Action Section */}
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Transform Your Hiring Today with QuickHire
        </h3>
        <p className="text-gray-600 mb-6">
          Automate, simplify, and scale your hiring process. QuickHire is the ultimate solution for busy recruiters.
        </p>
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-800">
          Get Started Now
        </button>
      </div>
    </footer>
  </>
);

export default HomePage;
