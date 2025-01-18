import Button from "../components/Button";

const OfferLetterPage = () => (
  <>
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Offer Letters</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-600 font-medium mb-2">Candidate Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-2">Offer Type</label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="intern">Intern</option>
            <option value="full-time">Full-time</option>
          </select>
        </div>
        <Button text="Generate Offer Letter" />
      </form>
    </main>
  </>
);
export default OfferLetterPage;
