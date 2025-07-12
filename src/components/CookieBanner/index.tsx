import styles from "./index.module.scss";
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
    <section className={styles.cookie_banner}>
      <p className={styles.content}>
        By clicking "Accept All Cookies", you agree to the storing of cookies on
        your device to analyze site usage. View our{" "}
        <a href="/#">Privacy Policy</a>.
      </p>
      <div>
        <Link className={styles.link} href={"/#"}>
          Preferences
        </Link>
        <button className={styles.button}>Deny</button>
        <button className={`${styles.button} ${styles.is_dark}`}>Accept</button>
      </div>
    </section>
  );
}
