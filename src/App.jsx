import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Support from "./Pages/Support";
import MyCart from "./Pages/MyCart";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./Pages/Search";
import Policy from "./Pages/Policy";
import Help from "./Pages/Help";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/search" element={<Search />} />

            <Route path="/help" element={<Help />} />
            <Route path="/policy" element={<Policy />} />

            <Route path=":category" element={<ProductList />} />

            <Route path="/support" element={<Support />} />
            <Route path="/mycart" element={<MyCart />} />

            <Route path="/ProductDetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
