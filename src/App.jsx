import React from 'react';
import './common.scss';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

const App = () => {
   return (
      <>
         <Header />
         <Calendar weekDates={generateWeekRange(getWeekStartDate(new Date()))} />
      </>
   );
};

export default App;
