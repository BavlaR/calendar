import React, { useState } from 'react';
import './calendar.scss';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

const Calendar = p => {
   const [userEvents, setEvents] = useState(events);
   const { weekDates } = p;

   return (
      <section className="calendar">
         <Navigation weekDates={weekDates} />
         <div className="calendar__body">
            <div className="calendar__week-container">
               <Sidebar />
               <Week weekDates={weekDates} events={userEvents} />
            </div>
         </div>
      </section>
   );
};

export default Calendar;
