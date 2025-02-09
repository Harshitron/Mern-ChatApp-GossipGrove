const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex justify-center space-x-4">
      {['male', 'female'].map((gender) => (
        <label key={gender} className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-green-500"
            checked={selectedGender === gender}
            onChange={() => onCheckboxChange(gender)}
          />
          <span className="ml-2 text-gray-700 capitalize">{gender}</span>
        </label>
      ))}
    </div>
  );
};

export default GenderCheckbox;