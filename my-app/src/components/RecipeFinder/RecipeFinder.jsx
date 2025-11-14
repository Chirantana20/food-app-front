import React, { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import InputModeToggle from './InputModeToggle';
import IngredientInput from './IngredientInput';
import ImageUpload from './ImageUpload';
import IngredientList from './IngredientList';
import RecipeCard from './RecipeCard';
import mockRecipes from './mockRecipes';

export default function RecipeFinder() {
  const [inputMode, setInputMode] = useState('text');
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleAddIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim().toLowerCase())) {
      setIngredients([...ingredients, inputValue.trim().toLowerCase()]);
      setInputValue('');
    }
  };

  const handleRemoveIngredient = (ing) => {
    setIngredients(ingredients.filter(i => i !== ing));
  };

  const handleImageUpload = (ingList, img) => {
    setUploadedImage(img);
    setIngredients(ingList);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setRecipes(mockRecipes);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto p-6">

        {/* Header */}
        <div className="text-center mb-8 pt-4 px-2">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-10 h-10 text-orange-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              Recipe Finder
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Upload a photo or list your ingredients to discover amazing recipes
          </p>
        </div>

        {/* Input Mode Toggle */}
        <InputModeToggle inputMode={inputMode} setInputMode={setInputMode} />

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {inputMode === 'text' ? (
            <IngredientInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleAddIngredient={handleAddIngredient}
            />
          ) : (
            <ImageUpload onDetect={handleImageUpload} uploadedImage={uploadedImage} />
          )}

          {/* Ingredient List */}
          {ingredients.length > 0 && (
            <IngredientList ingredients={ingredients} handleRemoveIngredient={handleRemoveIngredient} />
          )}

          {/* Search Button */}
          {ingredients.length > 0 && (
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSearching ? (
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Find Recipes
                </>
              )}
            </button>
          )}
        </div>

        {/* Results Section */}
        {recipes.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Suggested Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
