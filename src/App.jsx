import React, { useEffect, useState } from 'react';
import './common.scss';
import { getWeekStartDate, generateWeekRange, getDateTime } from '../src/utils/dateUtils';
import { fetchEventsList, createEvent, deleteEvent } from './gateway/eventsGateway';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';

const App = () => {
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
            weekFuture={handleWeekFuture}
            weekPast={handleWeekPast}
            weekToday={handleWeekToday}
            modalToggle={handleModalToggle}
         />
         {modalStatus && <Modal modalToggle={handleModalToggle} submit={handleSubmit} />}
         <Calendar weekDates={weekDates} events={userEvents} deleteEvent={handleDeleteEvent} />
      </>
   );
};

export default App;
