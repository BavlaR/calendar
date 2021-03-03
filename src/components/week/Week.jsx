import React from 'react';
import './week.scss';
import Day from '../day/Day';
import PropTypes from 'prop-types';

const Week = p => {
   return (
      <div className="calendar__week">
         {p.weekDates.map(dayStart => {
            const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

            const dayEvents = p.events.filter(
               event => event.dateFrom > dayStart && event.dateTo < dayEnd,
            );

            return (
               <Day
                  key={dayStart.getDate()}
                  dataDay={dayStart.getDate()}
                  dayStart={dayStart}
                  dayEvents={dayEvents}
                  deleteEvent={p.deleteEvent}
               />
            );
         })}
      </div>
   );
};

export default Week;

Week.propTypes = {
   weekDates: PropTypes.array.isRequired,
   events: PropTypes.array.isRequired,
   deleteEvent: PropTypes.func.isRequired,
};
