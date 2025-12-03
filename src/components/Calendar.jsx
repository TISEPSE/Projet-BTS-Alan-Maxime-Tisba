"use client"

import { useState } from 'react'
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'
import { fr } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "react-big-calendar/lib/css/react-big-calendar.css"

// Localiser pour le français
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: fr }),
  getDay,
  locales: { fr },
})

// Composant Event personnalisé
const EventComponent = ({ event }) => (
  <div className="flex flex-col p-1 h-full">
    <span className="font-medium text-xs text-gray-900">{event.title}</span>
    {event.time && <span className="text-xs text-gray-600">{event.time}</span>}
  </div>
)

export default function Calendar() {
  const [date, setDate] = useState(new Date())

  // Événements avec couleurs
  const events = [
    {
      id: 1,
      title: "Marketing site kickoff",
      start: new Date(2025, 0, 15, 14, 30),
      end: new Date(2025, 0, 15, 16, 0),
      time: "2:30 PM",
      color: "#6366f1" // indigo-600
    },
    {
      id: 2,
      title: "One-on-one w/ Eva",
      start: new Date(2025, 0, 20, 10, 0),
      end: new Date(2025, 0, 20, 11, 0),
      time: "10:00 AM",
      color: "#8b5cf6" // violet-500
    },
    {
      id: 3,
      title: "Lunch with Olivia",
      start: new Date(2025, 0, 22, 12, 0),
      end: new Date(2025, 0, 22, 13, 30),
      time: "12:00 PM",
      color: "#10b981" // emerald-500
    }
  ]

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color,
      borderRadius: '6px',
      border: 'none',
      color: 'white',
      padding: '4px 8px',
      fontSize: '12px'
    }
  })

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {format(date, 'MMMM yyyy', { locale: fr })}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Semaine {format(date, 'w', { locale: fr })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setDate(new Date())}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Aujourd'hui
          </button>
          <button
            onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="h-96">
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={date}
          onNavigate={setDate}
          view="month"
          views={['month', 'week', 'day']}
          components={{
            event: EventComponent,
            toolbar: () => null, // On masque la toolbar par défaut
          }}
          eventPropGetter={eventStyleGetter}
          style={{ height: '100%' }}
        />
      </div>

      {/* Légende */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Légende</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
            <span className="text-xs text-gray-600">Réunion</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Entretien</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Repas</span>
          </div>
        </div>
      </div>
    </div>
  )
}