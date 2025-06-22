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
      name: 'Apple Pie',
      thumbnail: 'https://www.smokingpaper.com/wp-content/uploads/2024/05/Que-es-Beldia-Hash.jpg', // IMAGEN para la pantalla principal
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Darks Farms 2k25',
      category: 'Hash',
      description: 'Les images parlent d\'elles meme\nMuter à froid le rendu est incroyable\nUnseul mot d\'ordre PÉPITE !',
      formatPrices: [
        { weight: '5g', price: '70€' },
        { weight: '10g', price: '130€' },
        { weight: '25g', price: '260€' },
        { weight: '50g', price: '450€' },
        { weight: '100g', price: '850€' },
      ],
      telegramLink: 'https://t.me/tuusuario',
      signalLink: 'https://signal.me/#p/tuusuario',
    },
    {
      name: 'Gmo x Banana Jungle Cake',
      thumbnail: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      farm: 'Darks Farms 2k25',
      category: 'Weed',
      description: 'Gmo x Banana Jungle Cake - arôme intense et effet relaxant.\nUn hash parfait pour se détendre.',
      formatPrices: [
        { weight: '5g', price: '75€' },
        { weight: '10g', price: '140€' },
        { weight: '25g', price: '270€' },
        { weight: '50g', price: '460€' },
        { weight: '100g', price: '860€' },
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
        // PANTALLA DETALLE PRODUCTO
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
        // PANTALLA LISTADO
        <>
          <div className="filters">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Toutes les catégories</option>
              <option value="Hash">Hash</option>
              <option value="Weed">Weed</option>
            </select>

            <select value={selectedFarm} onChange={(e) => setSelectedFarm(e.target.value)}>
              <option value="">Toutes les farms</option>
              <option value="Darks Farms 2k25">Darks Farms 2k25</option>
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
