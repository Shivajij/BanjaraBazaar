import React from 'react';
// import t_img from '../../public/assets/img/dummy.tshirt.jpg';


const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Fashion Store</h1>
        <p>Discover the latest trends in fashion</p>
      </div>
      
      <div className="featured-products" >
        <h2>Featured Products</h2>
        <div className="product-grid" >
         
            <div  className="product-card" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <div className="product-image"><img height={200} width={250} alt="" src="https://i4.cloudfable.net/styles/735x735/8.51/Black/big-dummy-t-shirt-20240606030016-lhmpwz3s-s2.jpg"               /></div>
              <h3>Fashion Item </h3>
              <p>$99.99</p>
              <button className="btn-primary">Add to Cart</button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;