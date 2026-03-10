"use client";

import styles from "@/components/SecHero/SecHero.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SecHero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      if (!section || !image) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const offset = (progress - 0.5) * 150;

      image.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.secHeroContainer} ref={sectionRef}>
      <div className={styles.secHeroImage}>
        <div ref={imageRef} className={styles.chairWrap}>
          <Image
            className={styles.chairImg}
            src="/images/barber-chair-v2.png"
            alt="Transparent barber chair"
            width={1080}
            height={729}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <h2 className={styles.secHeroTitle}>QUÉ SOY</h2>

      <div className={styles.secHeroText}>
        <p className={styles.secHeroParagraph}>
          Un espacio pensado para hombres y mujeres que valoran el estilo, la
          buena conversación y la experiencia de una verdadera barbería. Un
          lugar donde puedes venir a relajarte, renovar tu look y disfrutar del
          ambiente, como si estuvieras entre amigos. Aquí no se trata solo de un
          corte de pelo o un arreglo de barba, sino de vivir el ritual clásico
          de la barbería, con atención al detalle, profesionalismo y un servicio
          cercano.
        </p>
      </div>
    </section>
  );
}