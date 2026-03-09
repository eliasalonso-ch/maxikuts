"use client";

import { useState } from "react";
import styles from "@/app/pages/contact/ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
  });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", email: "", telefono: "", comentario: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className={styles.main}>
      {/* Background texture */}
      <div className={styles.bgTexture} />
      <div className={styles.bgGrain} />

      {/* Decorative scissors */}
      <div className={styles.scissorsLeft}>✂</div>
      <div className={styles.scissorsRight}>✂</div>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.logoMark}>
            <span className={styles.logoIcon}>✦</span>
          </div>
          <h1 className={styles.title}>
            Hablemos,
            <br />
            <em>Caballero</em>
          </h1>
          <div className={styles.divider}>
            <span />
            <span className={styles.diamond}>◆</span>
            <span />
          </div>
          <p className={styles.subtitle}>
            Estamos aquí para atenderte. Escríbenos y te responderemos a la
            brevedad.
          </p>
        </header>

        {/* Form card */}
        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.row}>
              {/* Nombre */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="nombre">
                  <span className={styles.labelNumber}>01</span> Nombre Completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Juan García"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              {/* Email */}
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  <span className={styles.labelNumber}>02</span> Correo
                  Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            {/* Teléfono */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="telefono">
                <span className={styles.labelNumber}>03</span> Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+56 9 1234 5678"
                value={form.telefono}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            {/* Comentario */}
            <div className={styles.field}>
              <label className={styles.label} htmlFor="comentario">
                <span className={styles.labelNumber}>04</span> Tu Mensaje
              </label>
              <textarea
                id="comentario"
                name="comentario"
                placeholder="Cuéntanos en qué podemos ayudarte, reservar una cita, preguntas sobre nuestros servicios…"
                value={form.comentario}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={styles.btn}
            >
              {status === "loading" ? (
                <span className={styles.btnInner}>
                  <span className={styles.spinner} /> Enviando…
                </span>
              ) : (
                <span className={styles.btnInner}>
                  Enviar Mensaje <span className={styles.btnArrow}>→</span>
                </span>
              )}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <div className={`${styles.feedback} ${styles.feedbackSuccess}`}>
                ✦ ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}
            {status === "error" && (
              <div className={`${styles.feedback} ${styles.feedbackError}`}>
                ✕ Hubo un error al enviar. Por favor intenta de nuevo.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
