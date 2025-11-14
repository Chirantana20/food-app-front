import { Type, Camera } from 'lucide-react';

export default function InputModeToggle({ inputMode, setInputMode }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      <button
        onClick={() => setInputMode('text')}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
          inputMode === 'text' ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Type className="w-5 h-5" /> Type Ingredients
      </button>

      <button
        onClick={() => setInputMode('image')}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
          inputMode === 'image' ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Camera className="w-5 h-5" /> Upload Image
      </button>
    </div>
  );
}
