import styles from "@/app/pages/about.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.imageWrap}>
          <Image
            src="/images/about-maximiliano.jpg"
            alt="Maximiliano Monsalves — MAXIKUTS"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className={styles.header}>
          <p className={styles.eyebrow}>CORONEL, BÍO BÍO</p>
          <h1 className={styles.title}>Sobre Mí</h1>
          <p className={styles.subtitle}>EST. 2015</p>
        </div>
      </div>

      <div className={styles.content}>
        <p>
          Nací y crecí en Coronel, una ciudad que me formó y a la que le debo
          todo. Desde chico supe que quería trabajar con mis manos, que quería
          crear algo. No tenía claro exactamente qué, pero la tijera siempre
          estuvo cerca.
        </p>
        <p>
          En la adolescencia temprana fue cuando todo tomó sentido. Empecé a
          fijarme en los cortes, en cómo una buena línea podía cambiarle la cara
          a alguien, cómo un degradado bien hecho era casi una obra de arte. Mi
          mamá siempre trabajó en el mundo del cabello, y ver eso desde adentro
          me despertó algo que no tenía vuelta atrás.
        </p>
        <p>
          Desde 2015 trabajo desde casa, el mismo lugar donde crecí, junto a mi
          mamá. Sin pretensiones, sin grandes lujos — solo las ganas de hacer
          bien las cosas y un espacio que con el tiempo se fue llenando de gente
          que volvía, no solo por el corte, sino por el ambiente.
        </p>
        <p>
          Acá la gente no solo viene a cortarse el pelo — viene a hablar, a
          reírse, a desconectarse un rato. Eso es lo que más me enorgullece. Que
          en Yobilo 877 se sientan cómodos, como en casa. Porque lo es.
        </p>
        <p>
          Hoy, casi una década después, sigo con la misma energía del primer
          día. Porque esto no es solo un trabajo para mí. Es mi forma de
          conectar con la gente, de aportar algo a mi comunidad, de hacer de
          Coronel un lugar donde hay orgullo en los detalles.
        </p>
        <p className={styles.signature}>— Maximiliano Monsalves</p>
      </div>
    </main>
  );
}