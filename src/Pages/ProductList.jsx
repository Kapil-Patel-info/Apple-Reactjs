import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/ProductList.css"; 
import "../Css/Global.css"; 
import { addToCart } from '../cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.mycart.cart);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const filtered = res.data.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filtered);
      })
      .catch((err) => console.error(err));
  }, [category]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    const alreadyInCart = cartData.find(item => item.id === product.id);
    if (alreadyInCart) {
      toast.warning("This product is already in the cart.");
    } else {
      dispatch(
        addToCart({
          id: product.id,
          name: product.title,
          description: product.description,
          category: product.category,
          image: product.image,
          qnty: 1,
          price: product.price,
        })
      );
      toast.success("Product added to cart!");
    }
  };

  return (
    <div className="container main my-5">
      <h1 className="mb-4 fw-bold text-center text-capitalize" style={{ color:"#1D1D1F", fontFamily: "'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        Shop {category} | <span className="designed"> Designed to be Loved.</span> 
      </h1>







<br /><br /><br />

<h3>All Models. <span className="designed">Take your pick</span>  </h3>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className=" large col-12 col-sm-6 col-md-4 col-lg-4 mb-2">
            <div
              className="card h-100 shadow-sm product-card"
              onClick={() => navigate(`/ProductDetail/${product.id}`)}
              style={{
                cursor: "pointer",
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(58, 89, 209, 0.3)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
              }}
            >

              <h4 className="card-title fw-semibold text-truncate m-4  title" >
                  {product.title}
                </h4>


              <img
                src={product.image}
                alt={product.title}
                className="card-img-top "
                style={{ height: "300px", objectFit: "contain", borderRadius: "16px 16px 0 0" }}
              />
              <div className="card-body text-center">
               
                <p className="card-text fw-bold text-primary" style={{ color: "#3A59D1"  }}>
                  From ₹{Math.floor(product.price / 12)}/mo. with instant cashback
                </p>
                <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                  or ₹{product.price.toLocaleString()}.00
                </p>
              </div>
              <div className="text-center mb-3">
                <Button
                  variant="dark"
                  onClick={(e) => handleAddToCart(product, e)}
                  style={{ borderRadius: "12px", padding: "0.5rem 1.5rem", fontWeight: "600" }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
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
    </div>
  );
};

export default ProductList;
