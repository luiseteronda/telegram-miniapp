import { useEffect } from 'react';
import './App.css';

export default function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  }, []);

  const products = [
    {
      name: 'Apple Pie',
      image: 'https://www.smokingpaper.com/wp-content/uploads/2024/05/Que-es-Beldia-Hash.jpg',
      farm: 'Darks Farms 2k25',
    },
    {
      name: 'Gmo x Banana Jungle Cake',
      image: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      farm: 'Darks Farms 2k25',
    },
  ];

  return (
    <div className="app">
      <h1 className="title">BROLY 69</h1>

      <div className="filters">
        <select>
          <option>Toutes les catégories</option>
        </select>
        <select>
          <option>Toutes les farms</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <div className="product-name">{product.name}</div>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-farm">{product.farm}</div>
          </div>
        ))}
      </div>

      <div className="footer">
        <button>Menu</button>
        <button>Infos</button>
        <button>Canal</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
