import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/ProductDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../cartSlice';
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cartData = useSelector(state => state.mycart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product details");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="centered">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered">
        <p className="error">{error}</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const alreadyInCart = cartData.find(item => item.id === product.id);
    if (alreadyInCart) {
      toast.warning("This product is already in the cart.");
    } else {
      dispatch(addToCart({
        id: product.id,
        name: product.title,
        description: product.description,
        category: product.category,
        image: product.image,
        qnty: 1,
        price: product.price,
      }));
      toast.success("Product added to cart!");
    }
  };

  return (
    <>
      <div className="product-detail-container details" style={{ display: "flex", gap: "2rem", padding: "2rem", maxWidth: 900, margin: "auto" }}>
        <img
          src={product.image}
          alt={product.title}
          height={400}
          className="product-image"
          style={{ borderRadius: 12, boxShadow: "0 4px 8px rgba(0,0,0,0.1)", flexShrink: 0 }}
        />
        <div className="product-info" style={{ flexGrow: 1 }}>
          <h2 style={{ fontWeight: 700 }}>{product.title}</h2>
          <p className="description" style={{ fontSize: 16, color: "#555", marginBottom: "1rem" }}>{product.description}</p>

          <h3>Specifications:</h3>
          <ul className="specs-list" style={{ listStyleType: "none", paddingLeft: 0, fontSize: 15, color: "#333" }}>
            <li><strong>Chip:</strong> {product.specification?.chip || "N/A"}</li>
            <li><strong>Display:</strong> {product.specification?.display || "N/A"}</li>
            <li><strong>Memory:</strong> {product.specification?.memory || "N/A"}</li>
            <li><strong>Storage:</strong> {product.specification?.storage || "N/A"}</li>
            <li><strong>Battery:</strong> {product.specification?.battery || "N/A"}</li>
          </ul>

          <h3>Additional Details:</h3>
          <ul className="specs-list" style={{ listStyleType: "none", paddingLeft: 0, fontSize: 15, color: "#333" }}>
            <li><strong>Color:</strong> {product.color || "N/A"}</li>
            <li><strong>Warranty:</strong> {product.warranty || "N/A"}</li>
            <li><strong>Release Date:</strong> {product.releaseDate || "N/A"}</li>
            <li><strong>Accessories Included:</strong> {product.accessoriesIncluded || "N/A"}</li>
          </ul>

          <h3 style={{ marginTop: "1.5rem" }}>
            Price: ₹{product.price.toLocaleString()}
          </h3>

          <Button
            variant="outline-primary"
            size="lg"
            onClick={handleAddToCart}
            style={{ marginTop: "1rem", borderRadius: "8px", fontWeight: 600 }}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ProductDetail;
