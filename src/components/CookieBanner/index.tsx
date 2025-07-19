// import Image from "next/image";
import Link from "next/link";
// import Contact from "@/app/ui/Contact";

/*
.cookie-banner {
  :where(.content) {
  }
  :where(.actions) {
    :where(.link) {
    }
    :where(.button) {
    }
    :where(.button--dark) {
    }
  }
}

*/

export default function CookieBanner() {
  return (
    <section className="">
      <p className="">
        By clicking "Accept All Cookies", you agree to the storing of cookies on
        your device to analyze site usage. View our{" "}
        <a href="/#">Privacy Policy</a>.
      </p>
      <div>
        <Link className="" href={"/#"}>
          Preferences
        </Link>
        <button className="">Deny</button>
        <button className="">Accept</button>
      </div>
    </section>
  );
}
