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
      image: 'https://i.imgur.com/zfThsxn.jpeg',
      farm: 'Darks Farms 2k25',
    },
    {
      name: 'Gmo x Banana Jungle Cake',
      image: 'https://i.imgur.com/zfThsxn.jpeg',
      farm: 'Darks Farms 2k25',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">BROLY 69</h1>

      <div className="flex gap-2 mb-4">
        <select className="flex-1 p-2 bg-gray-800 rounded">
          <option>Toutes les catégories</option>
        </select>
        <select className="flex-1 p-2 bg-gray-800 rounded">
          <option>Toutes les farms</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-2">
            <img src={product.image} alt={product.name} className="rounded mb-2 w-full" />
            <div className="text-sm font-semibold">{product.name}</div>
            <div className="text-xs text-gray-400">{product.farm}</div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around items-center py-2 rounded-t-xl">
        <button className="text-sm">Menu</button>
        <button className="text-sm">Infos</button>
        <button className="text-sm">Canal</button>
        <button className="text-sm">Contact</button>
      </div>
    </div>
  );
}
