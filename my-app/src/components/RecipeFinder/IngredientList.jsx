import { X } from 'lucide-react';

export default function IngredientList({ ingredients, handleRemoveIngredient }) {
  return (
    <div className="mt-6">
      <h3 className="font-medium mb-3 text-gray-700">
        Your Ingredients ({ingredients.length})
      </h3>
      <div className="flex flex-wrap gap-2">
        {ingredients.map((ing, idx) => (
          <span key={idx} className="inline-flex items-center gap-2 px-3 py-2 bg-green-100 text-green-800 rounded-full">
            {ing}
            <button onClick={() => handleRemoveIngredient(ing)} className="hover:bg-green-200 rounded-full p-1">
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
