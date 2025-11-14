export default function IngredientInput({ inputValue, setInputValue, handleAddIngredient }) {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-3">Add your ingredients</label>
      <div className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddIngredient()}
          placeholder="e.g., tomatoes, pasta, garlic..."
          className="flex-1 px-4 py-3 border-2 rounded-xl focus:border-orange-500"
        />
        <button onClick={handleAddIngredient} className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600">
          Add
        </button>
      </div>
    </div>
  );
}
