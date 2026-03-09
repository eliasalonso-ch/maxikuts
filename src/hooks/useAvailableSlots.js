"use client"

import { useState, useEffect } from 'react'

export function useAvailableSlots(eventTypeId, date) {
  const [slots, setSlots] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!eventTypeId || !date) return

    async function fetchSlots() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/slots?eventTypeId=${eventTypeId}&date=${date}`)
        if (!res.ok) throw new Error('Failed to fetch slots')
        const data = await res.json()
        console.log('Slots response:', data)
        const slotsForDate = Object.values(data.data ?? {}).flat()
        setSlots(slotsForDate)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSlots()
  }, [eventTypeId, date])

  return { slots, loading, error }
}