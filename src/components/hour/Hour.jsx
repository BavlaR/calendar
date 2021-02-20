import React from 'react';
import './hour.scss';
import { formatMins } from '../../../src/utils/dateUtils.js';
import Event from '../event/Event';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, deleteEvent }) => {
   return (
      <div className="calendar__time-slot" data-time={dataHour + 1}>
         {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
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
                  deleteEvent={deleteEvent}
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
