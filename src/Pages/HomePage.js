import StepCard from "../components/StepCard";

const HomePage = () => (
  <>
    <header className="bg-primary text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hiring Process Automation</h1>
        <p className="text-lg text-indigo-200">Streamline your hiring steps with ease.</p>
      </div>
    </header>
    <main className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6">Steps in the Hiring Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StepCard title="Job Requisition" description="Create and post job details." icon="📄" />
        <StepCard title="Resume Review" description="Shortlist and manage resumes." icon="📑" />
        <StepCard title="Offer Letters" description="Send customized offer letters." icon="📬" />
        <StepCard title="Onboarding" description="Manage candidate onboarding." icon="👕" />
      </div>
    </main>
  </>
);
export default HomePage;
