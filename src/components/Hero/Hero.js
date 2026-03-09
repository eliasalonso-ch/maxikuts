"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;

      // progress: 0 at top of viewport, 1 when section fully scrolled out
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

      const translateX = progress * 40; // vw units via percentage
      const opacity = 1 - progress * 2.5; // fade out faster

      if (leftRef.current) {
        leftRef.current.style.transform = `translateX(-${translateX}vw)`;
        leftRef.current.style.opacity = Math.max(0, opacity);
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translateX(${translateX}vw)`;
        rightRef.current.style.opacity = Math.max(0, opacity);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} ref={sectionRef}>
      <Image
        src="/images/barber-razor.jpg"
        alt="Barbershop"
        fill
        priority
        quality={100}
        className={styles.heroImage}
      />
      <div className={styles.overlay} />

      {/* Scroll-animated big text */}
      <div className={styles.bigTextWrap}>
        <span ref={leftRef} className={`${styles.bigText} ${styles.bigTextLeft}`}>
          MAXIKUTS
        </span>
        <span ref={rightRef} className={`${styles.bigText} ${styles.bigTextRight}`}>
          Barbería
        </span>
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          CREADO CON DISCIPLINA, DEDICACIÓN Y PASIÓN. CONSISTENCIA EN CADA
          CORTE, CADA ESTILO, CADA CLIENTE. DONDE LA CALIDAD SE
          ENCUENTRA CON LA PERFECCIÓN.
        </h1>
      </div>
    </section>
  );
}