import React from 'react';
import './navigation.scss';
import { days } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
   return (
      <header className="calendar__header">
         {weekDates.map(dayDate => {
            const dayNow = new Date(
               new Date().getFullYear(),
               new Date().getMonth(),
               new Date().getDate(),
            );
            const day = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate());

            const dayToShow = dayDate.getDay();

            return (
               <div className="calendar__day-label day-label" key={dayToShow}>
                  <span className="day-label__day-name">{days[dayToShow]}</span>
                  <span className={`day-label__day-number ${+dayNow === +day ? 'orange' : ''}`}>
                     {dayDate.getDate()}
                  </span>
               </div>
            );
         })}
      </header>
   );
};

export default Navigation;

Navigation.propTypes = {
   weekDates: PropTypes.array.isRequired,
};
