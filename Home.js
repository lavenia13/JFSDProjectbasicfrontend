import React, { useRef, useState } from 'react';
import './Home.css';

function Home() {
  const typesSectionRef = useRef(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const scrollToTypesSection = () => {
    typesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Handloom Treasures</h1>
            <p>Discover the elegance and artistry of authentic handloom products crafted by skilled artisans from around the world.</p>
            <button className="explore-button" onClick={scrollToTypesSection}>
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      {/* About Handlooms */}
      <section className="about-section">
        <h2>About Handlooms</h2>
        <p>Handlooms are fabrics created with intricate artistry, passed down through generations. Each piece tells a story of heritage, skill, and craftsmanship.</p>
      </section>

      {/* Types of Handlooms */}
      <section className="types-section" ref={typesSectionRef}>
        <h2>Our Collections</h2>
        
        <div className="handloom-type" onClick={() => toggleCategory('Cotton')}>
          <img src="https://varanga.in/cdn/shop/files/DP-1040_3.jpg?v=1726373259" alt="Cotton Handloom" />
          <h3>Cotton Handloom</h3>
          <p>Known for its softness and comfort, ideal for traditional wear.</p>
          {expandedCategory === 'Cotton' && (
            <div className="expanded-content">
              <h3>Cotton Categories</h3>
              <ul>
                <li><strong>Khadi</strong>: Hand-spun and hand-woven, khadi cotton is known for its raw texture and durability, symbolizing India's independence.</li>
                <li><strong>Chanderi Cotton</strong>: Lightweight and soft, often blended with silk and used for sarees and suits.</li>
                <li><strong>Ikat Cotton</strong>: Known for unique dyeing technique with geometric designs, especially from Pochampally and Odisha.</li>
                <li><strong>Narayanpet Cotton</strong>: From Maharashtra and Karnataka, with traditional striped patterns, ideal for everyday wear.</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="handloom-type" onClick={() => toggleCategory('Silk')}>
          <img src="https://img.perniaspopupshop.com/catalog/product/s/n/SNGC122303_1.jpg?impolicy=detailimageprod" alt="Silk Handloom" />
          <h3>Silk Handloom</h3>
          <p>Renowned for luxurious feel, perfect for special occasions.</p>
          {expandedCategory === 'Silk' && (
            <div className="expanded-content">
              <h3>Silk Categories</h3>
              <ul>
                <li><strong>Banarasi Silk</strong>: Known for intricate zari work and Mughal-inspired designs, ideal for weddings.</li>
                <li><strong>Mysore Silk</strong>: Fine texture, rich colors with plain bodies and traditional zari borders.</li>
                <li><strong>Gadwal Silk</strong>: Lightweight weave with contrast borders, often blending silk and cotton.</li>
                <li><strong>Kalamkari Silk</strong>: Traditional hand-painted or block-printed motifs, popular for sarees and dupattas.</li>
              </ul>
            </div>
          )}
        </div>
        
        <div className="handloom-type" onClick={() => toggleCategory('Wool')}>
          <img src="https://apisap.fabindia.com/medias/20036351-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTk1Mjl8aW1hZ2UvanBlZ3xhR1ZrTDJoaE1DODVNVEV4TnpNNE5ERTNNVGd5THpJd01ETTJNelV4WHpFdWFuQm58OGEwZWRkZjY0MWU4ZjI3MGVhODk2OTY4NTRlNjI2MThiYWI2MDg4NDEyYjZhNzBhNzllYjViMDA3NGEyMTlkOA" alt="Wool Handloom" />
          <h3>Wool Handloom</h3>
          <p>Known for warmth and durability, excellent for colder climates.</p>
          {expandedCategory === 'Wool' && (
            <div className="expanded-content">
              <h3>Wool Categories</h3>
              <ul>
                <li><strong>Pashmina</strong>: Luxurious and warm, made from the fine undercoat of Himalayan goats, known for hand-embroidery.</li>
                <li><strong>Coorgi Shawls</strong>: Thick wool shawls from Karnataka, worn by the Kodava community.</li>
                <li><strong>Dhabla</strong>: Woolen shawls from Gujarat with vibrant geometric patterns, used by the Rabari community.</li>
                <li><strong>Rupshu Shawls</strong>: Thick and warm shawls from Ladakh, often made from yak or sheep wool.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Scrolling Quotes Section */}
      <section className="quotes-section">
        <div className="quotes-container">
          <div className="quote">
            "Handlooms reflect the heart and soul of artisans."
          </div>
          <div className="quote">
            "Each fabric tells a story of tradition and craftsmanship."
          </div>
          <div className="quote">
            "Preserve heritage, wear handloom."
          </div>
          <div className="quote">
            "Sustainable fashion, woven with love."
          </div>
          <div className="quote">
            "Empowering artisans, one thread at a time."
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
