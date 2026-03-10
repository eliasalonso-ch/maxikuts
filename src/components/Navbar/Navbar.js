"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <>
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <filter id="liquidGlass">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="4" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="22"/>
      </filter>
    </svg>

    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        {/* LEFT */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className={styles.menuButton}
          >
            navegar
          </button>
        )}

        {/* CENTER */}
        <Link href="/" className={styles.logo}>
          maxikuts
        </Link>

        {/* RIGHT */}
        {!open && (
          <Link href="/booking" className={styles.rightLink}>
            agendar
          </Link>
        )}
      </header>

      {/* DRAWER */}
      {open && (
        <div
          className={`${styles.dropdown} ${
            closing ? styles.slideUp : styles.slideDown
          }`}
        >
          {/* DRAWER HEADER */}
          <div className={styles.dropdownHeader}>
            <h2 className={styles.dropdownTitle}>navegar</h2>

            <button
              onClick={() => {
                setClosing(true);
                setTimeout(() => {
                  setOpen(false);
                  setClosing(false);
                }, 300);
              }}
              className={styles.closeButton}
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          <div className={styles.dropdownLinks}>
            {[
              { name: "Lookbook", href: "/lookbook" },
              { name: "Agendar Cita", href: "/booking" },
              { name: "Sobre Mí", href: "/about-us" },
              { name: "Contacto", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={styles.dropdownLink}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}