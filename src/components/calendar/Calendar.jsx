import React from 'react';
import './calendar.scss';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, events, deleteEvent }) => {
   return (
      <section className="calendar">
         <Navigation weekDates={weekDates} />
         <div className="calendar__body">
            <div className="calendar__week-container">
               <Sidebar />
               <Week weekDates={weekDates} events={events} deleteEvent={deleteEvent} />
            </div>
         </div>
      </section>
   );
};

export default Calendar;

Calendar.propTypes = {
   weekDates: PropTypes.array.isRequired,
   events: PropTypes.array.isRequired,
   deleteEvent: PropTypes.func.isRequired,
};
