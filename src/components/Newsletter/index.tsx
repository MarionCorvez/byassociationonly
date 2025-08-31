import Image from "next/image";
import NewsletterForm from "../NewsletterForm";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
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
      <NewsletterForm />
    </div>
  );
}
