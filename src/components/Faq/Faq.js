"use client";

import styles from "@/components/Faq/Faq.module.css";
import { useState } from "react";

const faqs = [
  {
    question: "¿Necesito reservar una hora antes de ir?",
    answer: "Sí, es obligatorio. No te presentes sin una reserva previa confirmada. Esto nos permite atenderte con la dedicación y el tiempo que mereces.",
  },
  {
    question: "¿Dónde puedo hacer mi reserva?",
    answer: "Contamos con una plataforma personalizada donde puedes ver las fechas disponibles, seleccionar un horario y confirmar tu reserva. Una vez confirmada, recibirás una notificación por email. Puedes reservar tu hora en:",
    link: { label: "Ir a reservas →", href: "/booking" },
  },
  {
    question: "¿Puedo cancelar o reagendar mi hora?",
    answer: "Sí, siempre y cuando lo hagas con al menos 5 horas de anticipación. En el correo de confirmación de tu reserva encontrarás los enlaces para cancelar o reagendar directamente.",
  },
  {
    question: "¿Cuánto demora un corte de pelo?",
    answer: "Los cortes detallados tienen una duración aproximada de 1 hora. Te pedimos que llegues puntual para no afectar las horas de los demás clientes.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Aceptamos efectivo y transferencias bancarias. Por el momento no contamos con pago con tarjeta.",
  },
  {
    question: "¿Atienden a niños?",
    answer: "Sí, atendemos a niños desde los 7 años de edad.",
  },
  {
    question: "¿Tienen estacionamiento?",
    answer: "No contamos con estacionamiento propio. Estamos ubicados en un recinto privado sobre la calle principal de Yobilo, por lo que puedes estacionar en la vía pública cercana.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.container}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        <h2 className={styles.title}>PREGUNTAS<br />FRECUENTES</h2>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.itemOpen : ""}`}
            >
              <button className={styles.question} onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
              </button>
              <div className={styles.answerWrap}>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                  {faq.link && (
                    <a href={faq.link.href} className={styles.answerLink}>
                      {faq.link.label}
                    </a>
                  )}
                </div>
              </div>
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