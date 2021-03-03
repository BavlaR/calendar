import React from 'react';
import './header.scss';
import { months } from '../../utils/dateUtils';
import PropTypes from 'prop-types';

const Header = p => {
   const { weekDates } = p;

   const firstMonth = weekDates[0].getMonth();
   const firstMonthToShow = months[firstMonth];

   const secondMonth = weekDates.find(date => date.getMonth() !== firstMonth);
   const secondMonthToShow = secondMonth ? ` - ${months[secondMonth.getMonth()]}` : '';

   return (
      <header className="header">
         <button className="button create-event-btn" onClick={p.modalToggle}>
            <i className="fas fa-plus create-event-btn__icon"></i>Create
         </button>
         <div className="navigation">
            <button className="navigation__today-btn button" onClick={p.weekToday}>
               Today
            </button>
            <button className="icon-button navigation__nav-icon" onClick={p.weekPast}>
               <i className="fas fa-chevron-left"></i>
            </button>
            <button className="icon-button navigation__nav-icon" onClick={p.weekFuture}>
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
