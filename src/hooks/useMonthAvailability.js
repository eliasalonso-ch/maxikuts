"use client"

import { useState, useEffect, useRef } from "react";

export function useMonthAvailability(eventTypeId, month) {
  const cache = useRef({});
  const [availability, setAvailability] = useState({});

  async function fetchMonth(m) {
    if (!eventTypeId || !m) return;

    const cacheKey = `${eventTypeId}-${m}`;
    if (cache.current[cacheKey]) return cache.current[cacheKey];

    const [year, mo] = m.split("-").map(Number);
    const lastDay = new Date(year, mo, 0).getDate();
    const start = `${m}-01`;
    const end = `${m}-${String(lastDay).padStart(2, "0")}`;

    const data = await fetch(`/api/slots?eventTypeId=${eventTypeId}&start=${start}&end=${end}`)
      .then((r) => r.json())
      .catch(() => null);

    if (!data) return null;

    const slots = data.data ?? {};
    const map = {};
    Object.entries(slots).forEach(([date, dateSlots]) => {
      const count = Array.isArray(dateSlots) ? dateSlots.length : 0;
      if (count > 0) map[date] = count;
    });

    cache.current[cacheKey] = map;
    return map;
  }

  useEffect(() => {
    if (!eventTypeId || !month) return;

    const [year, mo] = month.split("-").map(Number);
    const nextDate = new Date(year, mo, 1);
    const nextMonth = `${nextDate.getFullYear()}-${String(nextDate.getMonth() + 1).padStart(2, "0")}`;

    // Load current month
    fetchMonth(month).then((map) => {
      if (map) setAvailability(map);
    });

    // Silently prefetch next month
    fetchMonth(nextMonth);

  }, [eventTypeId, month]);

  return { availability };
}