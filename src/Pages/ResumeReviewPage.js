
const ResumeReviewPage = () => (
  <>
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Resume Review</h1>
      <p>Upload and review resumes for your job requisitions.</p>
      <div className="mt-4">
        <input
          type="file"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-600 mt-4">
          Upload
        </button>
      </div>
    </main>
  </>
);
export default ResumeReviewPage;
