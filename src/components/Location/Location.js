import styles from "@/components/Location/Location.module.css";
import { getLocation } from "@/sanity/lib/queries";

export default async function Location() {
  const data = await getLocation();

  return (
    <section className={styles.container}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        <h2 className={styles.title}>DÓNDE ESTOY</h2>

        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.label}>DIRECCIÓN</h3>
            <p className={styles.text}>{data?.address}</p>
            <p className={styles.text}>{data?.city}</p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.label}>HORARIO</h3>
            {data?.hours?.map((h, i) => (
              <p key={i} className={styles.text}>
                {h.days}: <br></br> {h.hours}
              </p>
            ))}
          </div>

          <div className={styles.block}>
            <h3 className={styles.label}>CONTACTO</h3>
            <p className={styles.text}>{data?.phone}</p>
            <p className={styles.text}>{data?.email}</p>
          </div>

          <div className={styles.mapBlock}>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.110857551433!2d-73.14678740000001!3d-37.0071516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669c6cfdf86603b%3A0x66c7541da4188a8a!2zWW9iaWxvIDg3MCwgNDIwMTM2NiBDb25jZXBjacOzbiwgQ29yb25lbCwgQsOtbyBCw61v!5e0!3m2!1sen!2scl!4v1773021452653!5m2!1sen!2scl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación MAXIKUTS"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomAccent}>
        <span className={styles.accentLine} />
        <span className={styles.accentTag}>EST. 2015</span>
      </div>
    </section>
  );
}