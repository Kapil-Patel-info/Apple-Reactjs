import "../Css/Help.css";

export default function Help() {
  return (
    <div className="help-container">
      <header className="help-header">
        <h1>How can we help?</h1>
        <p>
          We want you to have the simplest, easiest buying experience possible.
          But we know you might have a few questions. Read on for details about
          purchasing, shipping, checking order status and more.
        </p>
        <div className="help-yourself">
          <h3>Help yourself.</h3>
          <p>
            Check order status, track or change your order and more.{" "}
            <a href="/orders">Go to your order &gt;</a>
          </p>
        </div>
      </header>

      <main className="help-grid">
        <section>
          <h2>Shipping & Delivery</h2>
          <ul>
            <li>Delivery options</li>
            <li>Apple Store Pickup</li>
            <li>Pickup points</li>
            <li>Tracking your order</li>
            <li>Problems with your order</li>
            <li>Cancellations, returns and refunds</li>
            <li><a href="#">Learn more &gt;</a></li>
          </ul>
        </section>

        <section>
          <h2>Apple Account</h2>
          <ul>
            <li>What is an Apple Account</li>
            <li>Benefits of an Apple Account</li>
            <li>Create an Apple Account</li>
            <li>Modify your Apple Account</li>
            <li>Reset your Apple Account Password</li>
            <li><a href="#">Learn more &gt;</a></li>
          </ul>
        </section>

        <section>
          <h2>Payment</h2>
          <ul>
            <li>Payment methods</li>
            <li>GST and Invoicing</li>
            <li>Security</li>
            <li><a href="#">Learn more &gt;</a></li>
          </ul>
        </section>

        <section>
          <h2>Order Status & Management</h2>
          <ul>
            <li>Check order status</li>
            <li>Track items</li>
            <li>Edit your order</li>
            <li>Cancel your order</li>
            <li><a href="#">Learn more &gt;</a></li>
          </ul>
        </section>

        <section>
          <h2>Returns</h2>
          <ul>
            <li>How to return an item</li>
            <li>Trouble with your new Apple Product</li>
            <li><a href="#">Learn more &gt;</a></li>
          </ul>
        </section>

        <section>
          <h2>Shopping Experience</h2>
          <ul>
            <li>Security Policy</li>
            <li>Enabling Cookies</li>
            <li>Saving Items & Cards</li>
            <li>Where to buy</li>
            <li><a href="#">Learn more &gt;</a></li>
          </ul>
        </section>
      </main>

      <footer className="help-footer">
        © {new Date().getFullYear()} Apple Store India. All rights reserved.
      </footer>
    </div>
  );
}
