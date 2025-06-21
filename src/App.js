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
      image: 'https://www.smokingpaper.com/wp-content/uploads/2024/05/Que-es-Beldia-Hash.jpg',
      farm: 'Darks Farms 2k25',
      category: 'Hash',
      description: 'Delicioso Apple Pie hash, suave y potente.',
    },
    {
      name: 'Gmo x Banana Jungle Cake',
      image: 'https://cbd-alchemy.com/app/uploads/sites/2/2024/07/article-types-of-hash-complete-guide-9-1024x682.jpeg',
      farm: 'Darks Farms 2k25',
      category: 'Weed',
      description: 'Gmo x Banana Jungle Cake - aroma intenso y efecto relajante.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFarm, setSelectedFarm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para producto seleccionado

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
          <button onClick={handleBack} className="back-button">⬅️ Volver</button>
          <div className="product-name">{selectedProduct.name}</div>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image-large" />
          <div className="product-farm">{selectedProduct.farm}</div>
          <div className="product-description">{selectedProduct.description}</div>
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
                <img src={product.image} alt={product.name} className="product-image" />
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
