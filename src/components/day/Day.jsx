import React, { useEffect, useState } from 'react';
import './day.scss';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';

const Day = p => {
   const { dataDay, dayStart } = p;

   const [redLineTop, setRedLineTop] = useState(
      new Date().getHours() * 60 + new Date().getMinutes(),
   );

   useEffect(() => {
      const id = setTimeout(() => setRedLineTop(redLineTop + 1), 1000 * 60);
      return () => clearTimeout(id);
   });

   const style = {
      top: redLineTop,
   };

   const hours = Array(24)
      .fill()
      .map((val, index) => index);

   const dayNow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
   const day = new Date(dayStart.getFullYear(), dayStart.getMonth(), dayStart.getDate());

   return (
      <>
         <div className="calendar__day" data-day={dataDay}>
            {hours.map(hour => {
               const hourEvents = p.dayEvents.filter(event => event.dateFrom.getHours() === hour);

               return (
                  <Hour
                     key={dataDay + hour}
                     dataHour={hour}
                     hourEvents={hourEvents}
                     deleteEvent={p.deleteEvent}
                  />
               );
            })}
            {+day === +dayNow && <div style={style} className="red-line" />}
         </div>
      </>
   );
};

export default Day;

Day.propTypes = {
   dayStart: PropTypes.object.isRequired,
   dataDay: PropTypes.number.isRequired,
   dayEvents: PropTypes.array.isRequired,
   deleteEvent: PropTypes.func.isRequired,
};
