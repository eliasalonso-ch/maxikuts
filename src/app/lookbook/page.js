import styles from "@/app/lookbook.module.css";
import { getLookbook } from "@/sanity/lib/queries";
import Image from "next/image";

export const metadata = {
  title: "Lookbook — MAXIKUTS",
};

const TAGLINE = "Disciplina, dedicación y pasión.";

export default async function Lookbook() {
  const photos = await getLookbook();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>LOOKBOOK</h1>

      <div className={styles.grid}>
        {/* First cell — text */}
        <div className={`${styles.cell} ${styles.textCell}`}>
          <p className={styles.tagline}>{TAGLINE}</p>
        </div>

        {/* Photo cells */}
        {photos.map((photo) => (
          <div key={photo._id} className={styles.cell}>
            <Image
              src={photo.url}
              alt={photo.alt || "Trabajo de MAXIKUTS"}
              width={photo.width}
              height={photo.height}
              className={styles.photo}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}

        {/* Last cell — text forced to bottom right */}
        <div className={`${styles.cell} ${styles.textCell} ${styles.lastCell}`}>
          <p className={styles.tagline}>{TAGLINE}</p>
        </div>
      </div>
    </main>
  );
}