// import Image from "next/image";
// import Contact from "@/app/ui/Contact";
import Link from "next/link";
import SvgLinkedin from "@/components/ui/SvgLinkedin";
import SvgInstagram from "@/components/ui/SvgInstagram";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-container">
        <div>
          <h5>Telephone</h5>
          <Link href={"tel:+441480467916"}>+44 (0) 1480 467 916</Link>
        </div>
        <div className="item-2">
          <h5>General info</h5>
          <Link href={"mailto:info@agency"}>info@agency</Link>
        </div>
        <div className="item-3">
          <h5>Project enquiries</h5>
          <Link href={"mailto:enquiries@agency?subject=Project%20enquiry"}>
            enquiries@agency
          </Link>
        </div>
        <div className="item-4">
          <h5>Careers</h5>
          <Link href={"/#"}>Job openings</Link>
        </div>
      </div>
      <div className="social-container">
        <Link href={"/#"}>
          <SvgLinkedin />
        </Link>
        <Link href={"/#"}>
          <SvgInstagram />
        </Link>
      </div>
    </footer>
  );
}
