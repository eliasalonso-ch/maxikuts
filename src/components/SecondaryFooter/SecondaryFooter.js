"use client";
import styles from "@/components/SecondaryFooter/SecondaryFooter.module.css";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function SecondaryFooter() {
  return (
    <footer className={styles.secondaryFooter}>
      <div className={styles.secondaryFooterContainer}>

        {/* Top row */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.brandName}>MAXIKUTS</p>
            <p className={styles.tagline}>Disciplina, dedicación y pasión.</p>
          </div>

          <div className={styles.cta}>
            <Link href="/booking" className={styles.ctaButton}>
              Reservar hora →
            </Link>
          </div>

          <div className={styles.social}>
            <a
              href="https://www.instagram.com/maxikuts/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <p className={styles.socialLabel}>sígueme @maxikuts</p>
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <ul className={styles.secondaryFooterUl}>
            <li>
              <a className={styles.secondaryFooterA} href="/contact">Contacto</a>
            </li>
            <li>
              <a className={styles.secondaryFooterA} href="/privacy-policy">Política de Privacidad</a>
            </li>
            <li>
              <a className={styles.secondaryFooterA} href="/terms-of-service">Términos de Servicio</a>
            </li>
            <li>
              <a className={styles.secondaryFooterA} href="/about-us">Sobre Nosotros</a>
            </li>
          </ul>

          <p className={styles.copyright}>
            © 2026 <a href="/">Maxikuts</a> · Desarrollado por{" "}
            <a
              href="https://github.com/eliasalonso-ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elías Alonso
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}