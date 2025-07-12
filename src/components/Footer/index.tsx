import styles from "./index.module.scss";
import Image from "next/image";
// import Contact from "@/app/ui/Contact";

export default function Footer() {
  return (
    <footer className="theme--anthracite">
      <div className={`${styles.container} flex--center screen`}>
        <span>© 2024 - {new Date().getFullYear()} Marion Corvez</span>

        <a
          href="https://www.ecoindex.fr/en/result/?id=1cea285d-5c1a-42f2-b190-9e2bddb368c9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://portfolio-naotas-projects.vercel.app/"
            alt="Ecoindex Badge"
            width={108}
            height={32}
            className={styles.ecoindex}
          />
        </a>
      </div>
    </footer>
  );
}
