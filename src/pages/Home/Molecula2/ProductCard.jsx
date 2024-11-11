import { useState } from "react";
import LikeWhite from "../../.../../../assets/likewhite.png"; // Corazón blanco
import LikeRed from "../../.../../../assets/likered.png"; // Corazón rojo
import CartGray from "../../.../../../assets/Cartgray.png"; // Carrito gris
import CartRed from "../../.../../../assets/Cartred.png"; // Carrito rojo
import './ProductCard.css'

const ProductCard = ({ product }) => {
  console.log("Product data:", product);
  const [liked, setLiked] = useState(product.liked);
  const [inCart, setInCart] = useState(product.inCart);

  const handleLike = () => {
    setLiked(!liked);

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ liked: !liked })
    })
      .then((response) => response.json())
      .then((data) => console.log("Estado de like actualizado:", data))
      .catch((error) => console.error("Error:", error));
  };

  const handleCart = () => {
    setInCart(!inCart);

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inCart: !inCart })
    })
      .then((response) => response.json())
      .then((data) => console.log("Estado de carrito actualizado:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="product-card">
      <div key={product.id}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}€</p>
        <p>{product.Description}</p>
        <div className="buttons">
          <img
            src={liked ? LikeRed : LikeWhite}
            alt="like button"
            className="like-button"
            onClick={handleLike}
          />
          <img
            src={inCart ? CartRed : CartGray}
            alt="add to cart button"
            className="cart-button"
            onClick={handleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
