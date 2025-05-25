import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="p-4">
        <h1 className="text-center text-xl font-bold text-white">BROLY 69</h1>
        <div className="mt-4 flex justify-center gap-4">
          <select className="bg-gray-800 text-white p-2 rounded">
            <option>Todas las categorías</option>
            <option>Categoría 1</option>
            <option>Categoría 2</option>
          </select>
          <select className="bg-gray-800 text-white p-2 rounded">
            <option>Todas las farms</option>
            <option>Farm 1</option>
            <option>Farm 2</option>
          </select>
        </div>
      </header>

      <main className="px-4 pb-16 pt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded p-4 shadow text-center">
            <h2 className="font-semibold mb-2">Nombre del Producto 1</h2>
            <img 
              src="https://www.smokingpaper.com/wp-content/uploads/2024/05/Que-es-Beldia-Hash.jpg" 
              alt="Producto 1" 
              className="mx-auto mb-2 rounded shadow"
            />
            <p className="text-gray-400">Nombre de la farm</p>
          </div>
          <div className="bg-gray-800 rounded p-4 shadow text-center">
            <h2 className="font-semibold mb-2">Nombre del Producto 2</h2>
            <img 
              src="https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg" 
              alt="Producto 2" 
              className="mx-auto mb-2 rounded shadow"
            />
            <p className="text-gray-400">Nombre de la farm</p>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-2 flex justify-around">
        <button>Menu</button>
        <button>Infos</button>
        <button>Canal</button>
        <button>Contact</button>
      </nav>
    </div>
  );
}

export default App;
