import styles from "@/app/pages/page.module.css";

export const metadata = {
  title: "Términos de Servicio — MAXIKUTS",
};

export default function TermsOfService() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Términos de Servicio</h1>

      <div className={styles.content}>

        <section className={styles.section}>
          <h2 className={styles.heading}>1. Identificación del Prestador</h2>
          <p>El presente sitio web es operado por:</p>
          <p>Nombre: Maximiliano Monsalves<br />RUT: [RUT]<br />Dirección: Yobilo 877, Coronel, Bío Bío, Chile<br />Correo electrónico: eliasalonso4real@gmail.com<br />Sitio web: tudominio.cl</p>
          <p>Al acceder y utilizar este sitio web, usted acepta los presentes Términos de Servicio en su totalidad. Si no está de acuerdo, le pedimos que no utilice este sitio.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. Descripción del Servicio</h2>
          <p>MAXIKUTS es una barbería ubicada en Coronel, Bío Bío, Chile. Este sitio web tiene como propósito principal permitir a los clientes realizar reservas de hora en línea para servicios de barbería, así como obtener información sobre los servicios disponibles, precios y ubicación del establecimiento.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Condiciones de Uso del Sitio</h2>
          <p>Al utilizar este sitio, usted declara que:</p>
          <ul className={styles.list}>
            <li>Es mayor de 18 años o actúa con el consentimiento de su representante legal.</li>
            <li>La información proporcionada en los formularios es verdadera, completa y actualizada.</li>
            <li>No utilizará este sitio para fines ilícitos, fraudulentos o que perjudiquen a terceros.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Reservas de Hora</h2>
          <p>Las reservas realizadas a través del sitio están sujetas a disponibilidad y confirmación por parte del barbero. Una reserva no se considera confirmada hasta que el cliente recibe un correo electrónico de confirmación.</p>
          <p>Para cancelar o reagendar una reserva, el cliente debe hacerlo con al menos 5 horas de anticipación a la hora reservada, utilizando el enlace incluido en el correo de confirmación.</p>
          <p>MAXIKUTS se reserva el derecho de cancelar o rechazar reservas en casos justificados, notificando al cliente por correo electrónico.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Precios y Métodos de Pago</h2>
          <p>Los precios de los servicios se expresan en pesos chilenos (CLP) y pueden ser modificados sin previo aviso. El precio vigente al momento de la reserva es el que se aplicará al servicio.</p>
          <p>Los pagos se realizan exclusivamente de forma presencial en el establecimiento, en efectivo o mediante transferencia bancaria. No se realizan cobros en línea a través de este sitio web.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Menores de Edad</h2>
          <p>MAXIKUTS atiende a menores de edad a partir de los 7 años. Los menores de 18 años deben asistir acompañados de un adulto responsable o contar con su autorización expresa.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Propiedad Intelectual</h2>
          <p>Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, diseños y código fuente, son de propiedad de Maximiliano Monsalves o de sus respectivos titulares, y están protegidos por la Ley N.° 17.336 de Propiedad Intelectual de Chile.</p>
          <p>Queda prohibida la reproducción, distribución, modificación o uso comercial de cualquier contenido de este sitio sin autorización escrita previa.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Limitación de Responsabilidad</h2>
          <p>MAXIKUTS no será responsable por:</p>
          <ul className={styles.list}>
            <li>Interrupciones o errores técnicos en el funcionamiento del sitio web.</li>
            <li>Daños derivados del uso indebido del sitio o de la información contenida en él.</li>
            <li>Incumplimientos causados por circunstancias fuera de nuestro control razonable (fuerza mayor).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Protección de Datos Personales</h2>
          <p>El tratamiento de los datos personales recopilados a través de este sitio se rige por nuestra Política de Privacidad, disponible en tudominio.cl/pages/privacy-policy, conforme a la Ley N.° 19.628 sobre Protección de la Vida Privada.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>10. Ley Aplicable y Jurisdicción</h2>
          <p>Los presentes Términos de Servicio se rigen por las leyes de la República de Chile. Para cualquier controversia derivada del uso de este sitio o de los servicios prestados, las partes se someten a la jurisdicción de los tribunales ordinarios de justicia de la ciudad de Concepción, Región del Bío Bío, Chile.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>11. Modificaciones a los Términos</h2>
          <p>Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios entrarán en vigor desde su publicación en este sitio. El uso continuado del sitio tras la publicación de cambios implica su aceptación.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>12. Contacto</h2>
          <p>Para cualquier consulta relacionada con estos Términos de Servicio, puede contactarnos a:<br />Correo electrónico: eliasalonso4real@gmail.com<br />Dirección: Yobilo 877, Coronel, Bío Bío, Chile</p>
        </section>

      </div>
    </main>
  );
}