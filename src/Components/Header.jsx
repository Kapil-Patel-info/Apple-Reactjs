import { Link } from "react-router-dom";
import "../Css/Header.css";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  const cartData = useSelector((state) => state.mycart.cart);
  const cartLength = cartData.length;
  return (
    <div>
      <nav className="navbar navbar-light bg-light  justify-content-between">
        <Link className="navbar-brand" to="/home"></Link>

        <div className="navbar-nav d-flex flex-row gap-3">
          <Link className="nav-link" to="/">
            <i></i>
          </Link>
          <Link className="nav-link" to="/">
            Store
          </Link>
          <Link className="nav-link" to="/macbook">
            Mac
          </Link>
          <Link className="nav-link" to="/ipad">
            iPad
          </Link>
          <Link className="nav-link" to="/iphone">
            iPhone
          </Link>
          <Link className="nav-link" to="/watch">
            Watch
          </Link>
          <Link className="nav-link" to="/airpods">
            AirPods
          </Link>
          
          <Link className="nav-link" to="/policy">
            Terms & Refund Policy
          </Link>

             <Link className="nav-link" to="/help">
           Help
          </Link>

          <Link className="nav-link" to="/support">
            Support
          </Link>
          <Link className="nav-link" to="/search">
            <IoSearchOutline className="search" />
          </Link>

          <Link className="nav-link cart-link" to="/mycart" aria-label="Cart">
            <LiaShoppingBagSolid className="cart-icon" />
            {cartLength > 0 && <span className="cart-count">{cartLength}</span>}
          </Link>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-link" type="button" aria-label="Search">
            <i className="fas fa-search"></i>
          </button>
          <Link className="btn btn-link" to="/mycart" aria-label="Cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}
