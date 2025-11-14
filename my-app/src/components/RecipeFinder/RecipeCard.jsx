export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 bg-gradient-to-br from-orange-200 to-green-200 flex items-center justify-center text-7xl">
        {recipe.image}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-800 mb-2">{recipe.name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>⏱️ {recipe.time}</span>
          <span>📊 {recipe.difficulty}</span>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Ingredient Match</span>
            <span className="text-green-600 font-medium">
              {recipe.matchedIngredients}/{recipe.totalIngredients}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full"
              style={{ width: `${(recipe.matchedIngredients / recipe.totalIngredients) * 100}%` }}
            />
          </div>
        </div>
        <button className="w-full py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600">
          View Recipe
        </button>
      </div>
    </div>
  );
}
