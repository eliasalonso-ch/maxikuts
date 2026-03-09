import styles from "@/app/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>PÁGINA NO<br />ENCONTRADA</h1>
        <p className={styles.text}>La página que buscas no existe o fue movida.</p>
        <a href="/" className={styles.link}>← Volver al inicio</a>
      </div>

      <div className={styles.bottomAccent}>
        <span className={styles.accentLine} />
        <span className={styles.accentTag}>EST. 2015</span>
      </div>
    </div>
  );
}