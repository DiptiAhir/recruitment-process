const StepCard = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
      <div className="p-3 bg-accent text-white rounded-full text-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
  export default StepCard;
  