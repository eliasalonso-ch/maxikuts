"use client";

import { useState, useEffect } from "react";
import { useAvailableSlots } from "@/hooks/useAvailableSlots";
import styles from "@/components/BookingForm/BookingForm.module.css";
import DatePicker from "@/components/BookingForm/DatePicker";
import Link from "next/link";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", notes: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const {
    slots,
    loading: slotsLoading,
    error: slotsError,
  } = useAvailableSlots(selectedService?.id, date);

  function handleFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventTypeId: selectedService.id,
          start: selectedSlot,
          ...form,
        }),
      });
      if (!res.ok) throw new Error("Booking failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.bookingForm}>
        <div className={styles.formCard}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✂️</div>
            <div className={styles.successBody}>
              <p className={styles.successTitle}>¡Reserva enviada!</p>
              <p className={styles.successSubtitle}>
                Tu solicitud está pendiente de confirmación. Te avisaremos por correo electrónico una vez que el barbero la acepte.
              </p>
              <div className={styles.successDetails}>
                <div className={styles.successRow}>
                  <span className={styles.successLabel}>Servicio</span>
                  <span className={styles.successValue}>{selectedService?.name}</span>
                </div>
                <div className={styles.successRow}>
                  <span className={styles.successLabel}>Fecha</span>
                  <span className={styles.successValue}>
                    {new Date(selectedSlot).toLocaleDateString("es", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className={styles.successRow}>
                  <span className={styles.successLabel}>Hora</span>
                  <span className={styles.successValue}>
                    {new Date(selectedSlot).toLocaleTimeString("es", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className={styles.successRow}>
                  <span className={styles.successLabel}>Correo</span>
                  <span className={styles.successValue}>{form.email}</span>
                </div>
              </div>
            </div>
            <Link href="/" className={styles.successBack}>
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <div className={styles.formCard}>
        <div className={styles.stepIndicators}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`${styles.stepDot} ${step >= s ? styles.stepDotActive : ""}`}
            />
          ))}
        </div>

        {/* Step 1 — Pick a service */}
        {step === 1 && (
          <div className={styles.stepContent}>
            <Link href="/" className={styles.backButton}>
              Volver al Inicio
            </Link>
            <h2 className={styles.stepTitle}>Selecciona un servicio</h2>
            <div className={styles.bookingContainer}>
              {services.map((service) => (
                <button
                  className={`${styles.bookingButtons} ${selectedService?.id === service.id ? styles.bookingButtonsSelected : ""}`}
                  type="button"
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service);
                    setDate("");
                    setSelectedSlot(null);
                  }}
                  aria-pressed={selectedService?.id === service.id}
                >
                  <div className={styles.serviceTop}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.serviceDuration}>{service.duration} min</span>
                  </div>
                  <div className={styles.serviceBottom}>
                    <span className={styles.servicePrice}>
                      {service.price.toLocaleString("es-CL", {
                        style: "currency",
                        currency: "CLP",
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <button
              className={styles.nextButton}
              type="button"
              disabled={!selectedService}
              onClick={() => setStep(2)}
            >
              Siguiente →
            </button>
          </div>
        )}

        {/* Step 2 — Pick a date & time */}
        {step === 2 && (
          <div className={styles.stepContent}>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => setStep(1)}
            >
              ← Volver
            </button>
            <h2 className={styles.stepTitle}>Elige una fecha y hora</h2>
            <p className={styles.stepSubtitle}>
              {selectedService?.name} — {selectedService?.duration} min
            </p>

            <DatePicker
              value={date}
              onChange={(val) => {
                setDate(val);
                setSelectedSlot(null);
              }}
              min={new Date().toISOString().split("T")[0]}
              serviceId={selectedService?.id}
            />

            {date && (
              <div className={styles.slotsSection}>
                {slotsLoading && (
                  <p className={styles.slotsMessage}>
                    Cargando horarios disponibles...
                  </p>
                )}
                {slotsError && (
                  <p className={styles.slotsError}>
                    Error al cargar horarios: {slotsError}
                  </p>
                )}
                {!slotsLoading && slots.length === 0 && (
                  <p className={styles.slotsMessage}>
                    No hay espacios disponibles para este día.
                  </p>
                )}
                {!slotsLoading && slots.length > 0 && (
                  <div className={styles.bookingContainer}>
                    {slots.map((slot) => (
                      <button
                        className={`${styles.bookingButtons} ${styles.slotButton} ${selectedSlot === slot.start ? styles.bookingButtonsSelected : ""}`}
                        type="button"
                        key={slot.start}
                        onClick={() => setSelectedSlot(slot.start)}
                        aria-pressed={selectedSlot === slot.start}
                      >
                        {new Date(slot.start).toLocaleTimeString("es", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <button
              className={styles.nextButton}
              type="button"
              disabled={!selectedSlot}
              onClick={() => setStep(3)}
            >
              Siguiente →
            </button>
          </div>
        )}

        {/* Step 3 — Client details */}
        {step === 3 && (
          <div className={styles.stepContent}>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => setStep(2)}
            >
              ← Volver
            </button>
            <h2 className={styles.stepTitle}>Tus datos</h2>
            <p className={styles.stepSubtitle}>
              {selectedService?.name} —{" "}
              {new Date(selectedSlot).toLocaleDateString("es", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
              ,{" "}
              {new Date(selectedSlot).toLocaleTimeString("es", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <div className={styles.fieldsGroup}>
              <input
                className={styles.textInput}
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleFormChange}
                required
              />
              <input
                className={styles.textInput}
                name="email"
                type="email"
                placeholder="Tu correo electrónico"
                value={form.email}
                onChange={handleFormChange}
                required
              />
              <textarea
                className={styles.textArea}
                name="notes"
                placeholder="Detalles - Ayudanos a prepararnos. Ej: Corte bajo en los lados, largo arriba, sin tocar la barba"
                value={form.notes}
                onChange={handleFormChange}
              />
            </div>

            {status === "error" && (
              <p className={styles.errorMessage}>
                Algo salió mal, por favor inténtalo de nuevo.
              </p>
            )}

            <button
              className={styles.nextButton}
              type="submit"
              disabled={!form.name || !form.email || status === "loading"}
            >
              {status === "loading" ? "Reservando..." : "Reservar cita"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}