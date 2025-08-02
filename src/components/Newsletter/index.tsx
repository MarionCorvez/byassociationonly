import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="newsletter-container">
      <div className="insights-container">
        <ul>
          <li>Design</li>
          <li>Performance</li>
          <li>Strategy</li>
          <li>Technical Pedigree</li>
          <li>Best in class Service</li>
        </ul>
        <p>
          Want insights, news and opinions from the Shopify Plus agency for the
          world’s most design-conscious luxury brands? Sign up below.
        </p>
        <Image
          className=""
          src="/images/digital-goodness.png"
          alt="Logo Digital Goodness"
          width={216}
          height={214}
          priority
        />
      </div>
      <div>
        <form className="newsletter-form">
          <input
            type="text"
            placeholder="Enter your email"
            id="email"
            autoComplete="on"
            required
          />
          <button className="theme--light" aria-label="Sign in">
            Sign me up
          </button>
        </form>
        <p className="newsletter-message">Thank you for your subscription !</p>
      </div>
    </section>
  );
}
