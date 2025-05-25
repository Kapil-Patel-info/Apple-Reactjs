const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#1d1d1f",
      color: "#f5f5f7",
      padding: "40px 20px",
      fontSize: "14px"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px"
        }}>
          <div>
            <h4 style={{ color: "#86868b", marginBottom: "10px" }}>Shop</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>Mac</li>
              <li>iPhone</li>
              <li>iPad</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#86868b", marginBottom: "10px" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>Apple Music</li>
              <li>iCloud</li>
              <li>AppleCare</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#86868b", marginBottom: "10px" }}>Account</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>Manage Your Apple ID</li>
              <li>My Orders</li>
              <li>Shopping Help</li>
            </ul>
          </div>
        </div>

        <hr style={{ margin: "30px 0", borderColor: "#3a3a3c" }} />

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          color: "#86868b"
        }}>
          <p>&copy; {new Date().getFullYear()} MyShop Inc. All rights reserved.</p>
          <p>Privacy Policy | Terms of Use | Sales Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
