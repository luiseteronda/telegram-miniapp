import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    } else {
      console.log("Telegram WebApp not available");
    }
  }, []);

  const products = [
    {
      name: 'Apple Pie',
      image: 'https://www.smokingpaper.com/wp-content/uploads/2024/05/%C2%BFQue-es-Beldia-Hash.jpg',
      farm: 'Darks Farms 2k25',
    },
    {
      name: 'Gmo x Banana Jungle Cake',
      image: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      farm: 'Darks Farms 2k25',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-sans">
      <header className="text-center py-4 text-3xl font-bold tracking-wide text-green-400 shadow-md bg-gray-900">
        BROLY 69
      </header>

      <div className="px-4 py-2 flex gap-3">
        <select className="flex-1 p-2 rounded-xl bg-gray-800 text-white text-sm shadow-inner">
          <option>Toutes les catégories</option>
        </select>
        <select className="flex-1 p-2 rounded-xl bg-gray-800 text-white text-sm shadow-inner">
          <option>Toutes les farms</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-4">
        {products.map((product, idx) => (
          <div key={idx} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-28 object-cover" />
            <div className="p-2">
              <div className="text-sm font-semibold truncate">{product.name}</div>
              <div className="text-xs text-gray-400">{product.farm}</div>
            </div>
          </div>
        ))}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around items-center py-3 z-50 rounded-t-xl">
        <button className="text-xs text-white hover:text-green-400">Menu</button>
        <button className="text-xs text-white hover:text-green-400">Infos</button>
        <button className="text-xs text-white hover:text-green-400">Canal</button>
        <button className="text-xs text-white hover:text-green-400">Contact</button>
      </nav>
    </div>
  );
}
