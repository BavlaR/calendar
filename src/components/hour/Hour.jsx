import React from 'react';
import './hour.scss';
import { formatMins } from '../../utils/dateUtils';
import Event from '../event/Event';
import PropTypes from 'prop-types';

const Hour = p => {
   return (
      <div className="calendar__time-slot" data-time={p.dataHour + 1}>
         {p.hourEvents.map(({ id, dateFrom, dateTo, title }) => {
            const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
            const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

            return (
               <Event
                  key={id}
                  id={id}
                  height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
                  marginTop={dateFrom.getMinutes()}
                  time={`${eventStart} - ${eventEnd}`}
                  title={title}
                  deleteEvent={p.deleteEvent}
               />
            );
         })}
      </div>
   );
};

export default Hour;

Hour.propTypes = {
   dataHour: PropTypes.number.isRequired,
   hourEvents: PropTypes.array.isRequired,
   deleteEvent: PropTypes.func.isRequired,
};
