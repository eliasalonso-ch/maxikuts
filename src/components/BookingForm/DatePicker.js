"use client";

//NOTA: No se como funciona esta parte, pero funciona, asi que no la toquen. Atentamente: Elias 'Masacre' Alonso.//

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import { useMonthAvailability } from "@/hooks/useMonthAvailability";
import styles from "@/components/BookingForm/DatePicker.module.css";

export default function DatePicker({ value, onChange, min, serviceId }) {
  const today = new Date();
  const [month, setMonth] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`
  );

  const { availability } = useMonthAvailability(serviceId, month);

  const selected = value ? new Date(value + "T12:00:00") : undefined;
  const disabled = min ? { before: new Date(min + "T12:00:00") } : undefined;

  function handleSelect(day) {
    if (!day) return;
    onChange(day.toLocaleDateString("en-CA"));
  }

  function handleMonthChange(newMonth) {
    const m = `${newMonth.getFullYear()}-${String(newMonth.getMonth() + 1).padStart(2, "0")}`;
    setMonth(m);
  }

  function renderDay(date) {
  const key = date.toLocaleDateString("en-CA");
  const count = availability[key];
  return (
    <span className={styles.dayWrapper}>
      {count > 0 && (
        <span className={styles.tooltip}>{count} horarios</span>
      )}
      <span>{date.getDate()}</span>
    </span>
  );
}

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={handleSelect}
      onMonthChange={handleMonthChange}
      disabled={disabled}
      locale={es}
      components={{ DayButton: ({ day, ...props }) => {
  const key = day.date.toLocaleDateString("en-CA");
  const hasSlots = availability[key] > 0;
  return (
    <button
      {...props}
      className={`${props.className} ${hasSlots ? styles.hasSlots : ""}`}
    >
      {renderDay(day.date)}
    </button>
  );
}}}
      classNames={{
        root: styles.root,
        months: styles.months,
        month: styles.month,
        month_caption: styles.caption,
        caption_label: styles.captionLabel,
        nav: styles.nav,
        button_previous: styles.navButton,
        button_next: styles.navButton,
        month_grid: styles.table,
        weekdays: styles.headRow,
        weekday: styles.headCell,
        week: styles.row,
        day: styles.cell,
        day_button: styles.day,
        selected: styles.selected,
        today: styles.today,
        disabled: styles.disabled,
        outside: styles.outside,
      }}
    />
  );
}