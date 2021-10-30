import dynamic from 'next/dynamic'
import React from 'react'

const Calendar = dynamic({
  modules: () => ({
    calendar: import('@fullcalendar/react'),
    timeGridPlugin: import('@fullcalendar/timegrid'),
    interactionPlugin: import('@fullcalendar/interaction'),
    momentPlugin: import('@fullcalendar/moment'),
    dayGrid: import('@fullcalendar/daygrid')
  }),
  render: (props, { calendar: Calendar, ...plugins }) => {
    return (
      <Calendar
        ref={ref => {
          props.myRef && props.myRef(ref)
        }}
        {...props}
        plugins={Object.values(plugins)}
      />
    )
  },
  ssr: false
})

export default Calendar
