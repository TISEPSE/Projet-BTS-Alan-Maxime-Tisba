"use client"

import {useState, useMemo, useEffect, useRef} from "react"
import {Calendar as BigCalendar, dateFnsLocalizer} from "react-big-calendar"
import {format, parse, startOfWeek, getDay, addMonths, subMonths, addWeeks, subWeeks} from "date-fns"
import {fr} from "date-fns/locale"
import {ChevronLeft, ChevronRight, ChevronDown, Check} from "lucide-react"
import "react-big-calendar/lib/css/react-big-calendar.css"
import WeekView from "./WeekView"

const messages = {
  allDay: "Toute la journée",
  previous: "Précédent",
  next: "Suivant",
  today: "Aujourd'hui",
  month: "Mois",
  week: "Semaine",
  day: "Jour",
  agenda: "Agenda",
  date: "Date",
  time: "Heure",
  event: "Événement",
  noEventsInRange: "Aucun événement dans cette période",
  showMore: total => `+${total} plus`,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), {locale: fr}),
  getDay,
  locales: {fr},
})

export default function Calendar() {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState("month") // "month" ou "week"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const events = useMemo(
    () => [
      {
        id: 1,
        title: "Marketing site kickoff",
        start: new Date(2025, 0, 15, 14, 30),
        end: new Date(2025, 0, 15, 16, 0),
        color: "#6366f1",
      },
      {
        id: 2,
        title: "One-on-one w/ Eva",
        start: new Date(2025, 0, 20, 10, 0),
        end: new Date(2025, 0, 20, 11, 0),
        color: "#8b5cf6",
      },
      {
        id: 3,
        title: "Lunch with Olivia",
        start: new Date(2025, 0, 22, 12, 0),
        end: new Date(2025, 0, 22, 13, 30),
        color: "#10b981",
      },
    ],
    []
  )

  const eventStyleGetter = event => ({
    style: {
      backgroundColor: event.color,
      color: "white",
      padding: "4px 8px",
      fontSize: "12px",
    },
  })

  // Gestion du click outside pour fermer le dropdown
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Navigation adaptée à la vue
  const handlePrevious = () => {
    if (view === "month") {
      setDate(subMonths(date, 1))
    } else {
      setDate(subWeeks(date, 1))
    }
  }

  const handleNext = () => {
    if (view === "month") {
      setDate(addMonths(date, 1))
    } else {
      setDate(addWeeks(date, 1))
    }
  }

  const handleViewChange = newView => {
    setView(newView)
    setIsDropdownOpen(false)
  }

  const viewOptions = [
    {value: "month", label: "Mois"},
    {value: "week", label: "Semaine"},
  ]

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 capitalize">
            {format(date, "MMMM yyyy", {locale: fr})}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Semaine {format(date, "w", {locale: fr})}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Période précédente"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setDate(new Date())}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Aujourd'hui
          </button>

          {/* Dropdown pour choisir la vue */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span>{viewOptions.find(option => option.value === view)?.label}</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Menu déroulant */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-dropdown">
                {viewOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleViewChange(option.value)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                      view === option.value
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{option.label}</span>
                    {view === option.value && (
                      <Check className="w-4 h-4 text-indigo-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Période suivante"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {view === "week" ? (
        <WeekView date={date} onNavigate={setDate} events={events} />
      ) : (
        <div className="w-full h-[1000px]">
          <BigCalendar
            localizer={localizer}
            culture="fr"
            messages={messages}
            events={events}
            startAccessor="start"
            endAccessor="end"
            date={date}
            onNavigate={setDate}
            view="month"
            views={["month"]}
            components={{
              event: ({event}) => (
                <div className="p-1">
                  <span className="text-white text-xs">{event.title}</span>
                </div>
              ),
              toolbar: () => null,
            }}
            eventPropGetter={eventStyleGetter}
            style={{height: "100%"}}
          />
        </div>
      )}
    </>
  )
}
