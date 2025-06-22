import { useEffect, useState } from 'react';
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
      name: 'Frozen Sift Supreme',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Darks Farms 2k25',
      category: 'Frozen Sift',
      description: 'Frozen Sift de qualité supérieure, parfait pour les connaisseurs.',
      formatPrices: [
        { weight: '5g', price: '80€' },
        { weight: '10g', price: '150€' },
        { weight: '25g', price: '350€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: '90u Premium Hash',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'No Farm',
      category: '90u',
      description: 'Hash 90u, pureté exceptionnelle, effet relaxant.',
      formatPrices: [
        { weight: '5g', price: '85€' },
        { weight: '10g', price: '160€' },
        { weight: '25g', price: '370€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'Beldia Royal',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Maison HH',
      category: 'BELDIA',
      description: 'Beldia marocaine, arôme intense et authentique.',
      formatPrices: [
        { weight: '5g', price: '60€' },
        { weight: '10g', price: '110€' },
        { weight: '25g', price: '250€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'Cali Sunset Weed',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Must Hash us',
      category: 'Cali',
      description: 'Cali Sunset Weed - parfum tropical et effet euphorique.',
      formatPrices: [
        { weight: '5g', price: '90€' },
        { weight: '10g', price: '170€' },
        { weight: '25g', price: '400€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'ICE WPFF ⭐⭐⭐⭐⭐',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Darks Farms 2k25',
      category: 'ICE WPFF ⭐⭐⭐⭐⭐',
      description: 'ICE WPFF - extraction 5 étoiles pour connaisseurs.',
      formatPrices: [
        { weight: '5g', price: '95€' },
        { weight: '10g', price: '180€' },
        { weight: '25g', price: '420€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'Mousse Premium',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Maison HH',
      category: 'Mousse Premium',
      description: 'Mousse hash premium, texture légère et effet fort.',
      formatPrices: [
        { weight: '5g', price: '75€' },
        { weight: '10g', price: '140€' },
        { weight: '25g', price: '320€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'Topshelf Hash Deluxe',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Must Hash us',
      category: 'Topshelf',
      description: 'Topshelf Hash - pureté extrême et arômes riches.',
      formatPrices: [
        { weight: '5g', price: '100€' },
        { weight: '10g', price: '190€' },
        { weight: '25g', price: '450€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'Frozen Sift 73u Mix',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'No Farm',
      category: '90u 73u Mix',
      description: 'Frozen Sift 73u Mix - extraction multiple haute qualité.',
      formatPrices: [
        { weight: '5g', price: '85€' },
        { weight: '10g', price: '160€' },
        { weight: '25g', price: '360€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === '' || product.category === selectedCategory) &&
      (selectedFarm === '' || product.farm === selectedFarm)
    );
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1 className="title">BROLY 69</h1>

      {selectedProduct ? (
        <div className="product-detail">
          <button onClick={handleBack} className="back-button">⬅️ Retour</button>

          <div className="product-name">{selectedProduct.name}</div>

          <video className="product-video" controls>
            <source src={selectedProduct.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="product-farm">{selectedProduct.farm}</div>

          <div className="product-description">
            {selectedProduct.description.split('\n').map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>

          <div className="format-section">
            <div><strong>Format 100g</strong></div>
            <div className="format-prices">
              {selectedProduct.formatPrices.map((item, idx) => (
                <div key={idx} className="format-price">
                  {item.weight} <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="buttons">
            <a href={selectedProduct.telegramLink} target="_blank" rel="noopener noreferrer" className="btn btn-telegram">
              🚀 Commander via Telegram
            </a>
            <a href={selectedProduct.signalLink} target="_blank" rel="noopener noreferrer" className="btn btn-signal">
              💬 Commander sur Signal
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="filters">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Toutes les catégories</option>
              <option value="Frozen Sift">Frozen Sift</option>
              <option value="90u">90u</option>
              <option value="90u 73u Mix">90u 73u Mix</option>
              <option value="BELDIA">BELDIA</option>
              <option value="Cali">Cali</option>
              <option value="Topshelf">Topshelf</option>
              <option value="ICE WPFF ⭐⭐⭐⭐⭐">ICE WPFF ⭐⭐⭐⭐⭐</option>
              <option value="Mousse Premium">Mousse Premium</option>
            </select>

            <select value={selectedFarm} onChange={(e) => setSelectedFarm(e.target.value)}>
              <option value="">Toutes les farms</option>
              <option value="Darks Farms 2k25">Darks Farms 2k25</option>
              <option value="No Farm">No Farm</option>
              <option value="Maison HH">Maison HH</option>
              <option value="Must Hash us">Must Hash us</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div
                className="product-card"
                key={product.name}
                onClick={() => handleProductClick(product)}
              >
                <div className="product-name">{product.name}</div>
                <img src={product.thumbnail} alt={product.name} className="product-image" />
                <div className="product-farm">{product.farm}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="footer">
        <button>Menu</button>
        <button>Infos</button>
        <button>Canal</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
