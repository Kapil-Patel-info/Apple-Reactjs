import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { qtyIncr, qtyDecr, proRemove } from "../cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyCart = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();

  let TotAmount = 0;

  const cartRows = cartData.map((item) => {
    TotAmount += item.qnty * item.price;
    return (
      <tr key={item.id} style={{ verticalAlign: "middle", height: "100px" }}>
        <td>
          <img
            src={item.image}
            width="80"
            height="80"
            alt={item.name}
            style={{ borderRadius: 12, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          />
        </td>
        <td style={{ fontWeight: "600", fontSize: "1rem" }}>{item.name}</td>
        {/* <td style={{ color: "#666", fontSize: "0.95rem" }}>{item.category}</td> */}
        <td>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FaMinusSquare
              onClick={() => {
                if (item.qnty <= 1) {
                  toast.error("Quantity cannot be less than One");
                } else {
                  dispatch(qtyDecr({ id: item.id }));
                  toast.info("Quantity decreased");
                }
              }}
              style={{ cursor: "pointer", color: "#0071e3", fontSize: 20 }}
            />
            <span
              style={{
                minWidth: 32,
                textAlign: "center",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              {item.qnty}
            </span>
            <FaPlusSquare
              onClick={() => {
                dispatch(qtyIncr({ id: item.id }));
                toast.success("Quantity increased");
              }}
              style={{ cursor: "pointer", color: "#0071e3", fontSize: 20 }}
            />
          </div>
        </td>
        <td style={{ fontWeight: "600", fontSize: "1rem" }}>
          <FaIndianRupeeSign /> {item.price.toLocaleString("en-IN")}
        </td>
        <td style={{ fontWeight: "700", fontSize: "1rem" }}>
          <FaIndianRupeeSign />{" "}
          {(item.qnty * item.price).toLocaleString("en-IN")}
        </td>
        <td>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              dispatch(proRemove({ id: item.id }));
              toast.warn("Product removed from cart");
            }}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "40px auto",
        padding: "30px",
        background: "#fefefe",
        borderRadius: 18,
        boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        color: "#1d1d1f",
      }}
    >
      <h1
        style={{
          fontWeight: "700",
          fontSize: "2.2rem",
          marginBottom: "30px",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
        }}
      >
        🛒 My Cart
      </h1>

      <Table
        striped
        responsive
        hover
        className="shadow-sm"
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <thead
          style={{
            backgroundColor: "#f1f1f1",
            fontWeight: 600,
            fontSize: 16,
            color: "#444",
          }}
        >
          <tr style={{ color: "grey" }}>
            <th>Image</th>
            <th>Product Name</th>

            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>{cartRows}</tbody>
      </Table>

      <div
        style={{
          textAlign: "right",
          marginTop: "30px",
          fontSize: "1.6rem",
          fontWeight: "700",
          color: "#0071e3",
        }}
      >
        Total: <FaIndianRupeeSign /> {TotAmount.toLocaleString("en-IN")}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MyCart;
