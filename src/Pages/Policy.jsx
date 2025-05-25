
import "../Css/Policy.css"; 

export default function Help() {
  return (
    <div className="help-container">
      <h1>Terms & Refund Policy</h1>

      <p className="intro">
        Thank you for shopping with Apple Online Store. Please review the terms of service and our refund policy below before making a purchase.
      </p>

      <section>
        <h2>Terms of Service</h2>
        <ul>
          <li>All sales are subject to availability and verification.</li>
          <li>Prices shown include all applicable taxes.</li>
          <li>Orders are processed within 24–48 hours of confirmation.</li>
          <li>Apple reserves the right to cancel orders in cases of pricing errors or suspected fraud.</li>
        </ul>
      </section>

      <section>
        <h2>Return & Refund Policy</h2>
        <ul>
          <li>Products can be returned within 14 days of delivery.</li>
          <li>Returned items must be in original condition with packaging and accessories.</li>
          <li>Digital products, services, and personalized items are non-refundable.</li>
          <li>Refunds are issued within 5–7 business days after the item is received and inspected.</li>
        </ul>
      </section>

      <section>
        <h2>Warranty & Repair</h2>
        <ul>
          <li>All Apple products come with a standard one-year limited warranty.</li>
          <li>AppleCare+ may extend coverage for eligible products.</li>
          <li>Warranty does not cover accidental or liquid damage unless otherwise stated.</li>
        </ul>
      </section>

      <section>
        <h2>Need Help?</h2>
        <p>
          Visit our <a href="/support">Support</a> page or email us at <a href="mailto:support@apple.com">support@apple.com</a> for any questions regarding your order.
        </p>
      </section>

      <footer className="help-footer">
        © {new Date().getFullYear()} Apple Store India. All rights reserved.
      </footer>
    </div>
  );
}
