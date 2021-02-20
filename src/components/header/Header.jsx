import React from 'react';
import './header.scss';
import { months } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';

const Header = ({ weekDates, weekFuture, weekPast, weekToday, modalToggle }) => {
   const firstMonth = weekDates[0].getMonth();
   const firstMonthToShow = months[firstMonth];

   const secondMonth = weekDates.find(date => date.getMonth() !== firstMonth);
   const secondMonthToShow = secondMonth ? ` - ${months[secondMonth.getMonth()]}` : '';

   return (
      <header className="header">
         <button className="button create-event-btn" onClick={modalToggle}>
            <i className="fas fa-plus create-event-btn__icon"></i>Create
         </button>
         <div className="navigation">
            <button className="navigation__today-btn button" onClick={weekToday}>
               Today
            </button>
            <button className="icon-button navigation__nav-icon" onClick={weekPast}>
               <i className="fas fa-chevron-left"></i>
            </button>
            <button className="icon-button navigation__nav-icon" onClick={weekFuture}>
               <i className="fas fa-chevron-right"></i>
            </button>
            <span className="navigation__displayed-month">
               {firstMonthToShow}
               {secondMonthToShow}
            </span>
         </div>
      </header>
   );
};

export default Header;

Header.propTypes = {
   weekDates: PropTypes.array.isRequired,
   weekFuture: PropTypes.func.isRequired,
   weekPast: PropTypes.func.isRequired,
   weekToday: PropTypes.func.isRequired,
   modalToggle: PropTypes.func.isRequired,
};
