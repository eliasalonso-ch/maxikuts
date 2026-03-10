"use client";

import styles from "@/components/Pricing/Pricing.module.css";
import { useEffect, useRef } from "react";

export default function Pricing({ cards = [] }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        <h2 className={styles.title}>SERVICIOS</h2>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <div
              key={card.name}
              className={styles.card}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className={styles.cardTop}>
                <h3 className={styles.cardName}>{card.name}</h3>
                <span className={styles.cardPrice}>
                  {card.price.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </div>
              <p className={styles.cardDescription}>{card.duration} min</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomAccent}>
        <span className={styles.accentLine} />
        <span className={styles.accentTag}>EST. 2015</span>
      </div>
    </section>
  );
}