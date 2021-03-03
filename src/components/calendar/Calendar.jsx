import React, { useState, useEffect } from 'react';
import './calendar.scss';
import { getWeekStartDate, generateWeekRange, getDateTime } from '../../utils/dateUtils';
import { fetchEventsList, createEvent, deleteEvent } from '../../gateway/eventsGateway';
import Header from '../header/Header';
import Modal from '../modal/Modal';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

const Calendar = () => {
   const weekRange = generateWeekRange(getWeekStartDate(new Date()));

   const [weekDates, setWeekDates] = useState(weekRange);
   const [modalStatus, setModalStatus] = useState(false);
   const [userEvents, setUserEvents] = useState([]);

   const fetchEvents = () => {
      fetchEventsList().then(events => {
         setUserEvents(events);
      });
   };

   useEffect(() => {
      fetchEvents();
   }, []);

   const handleSubmit = formData => {
      const { title, description, date, timeFrom, timeTo } = formData;

      const dateFrom = getDateTime(date, timeFrom);
      const dateTo = getDateTime(date, timeTo);

      const userEvent = {
         title,
         description,
         dateFrom,
         dateTo,
      };

      createEvent(userEvent).then(() => fetchEvents());
   };

   const handleDeleteEvent = id => deleteEvent(id).then(() => fetchEvents());

   const handleWeekFuture = () =>
      setWeekDates(weekDates.map(date => new Date(date.setDate(date.getDate() + 7))));

   const handleWeekPast = () =>
      setWeekDates(weekDates.map(date => new Date(date.setDate(date.getDate() - 7))));

   const handleWeekToday = () => setWeekDates(weekRange);

   const handleModalToggle = () => setModalStatus(!modalStatus);

   return (
      <>
         <Header
            weekDates={weekDates}
            modalToggle={handleModalToggle}
            weekFuture={handleWeekFuture}
            weekPast={handleWeekPast}
            weekToday={handleWeekToday}
         />
         <section className="calendar">
            <Navigation weekDates={weekDates} />
            <div className="calendar__body">
               <div className="calendar__week-container">
                  <Sidebar />
                  <Week weekDates={weekDates} events={userEvents} deleteEvent={handleDeleteEvent} />
               </div>
            </div>
         </section>
         {modalStatus && <Modal modalToggle={handleModalToggle} submit={handleSubmit} />}
      </>
   );
};

export default Calendar;
