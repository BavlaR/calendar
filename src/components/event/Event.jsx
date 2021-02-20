import React, { useState } from 'react';
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {
   const [isShownBtn, setIsShown] = useState(false);

   const handleIsShownBtn = () => {
      setIsShown(!isShownBtn);
   };

   const eventStyle = {
      height,
      marginTop,
   };

   return (
      <>
         <div style={eventStyle} className="event" onClick={handleIsShownBtn}>
            <div className="event__title">{title}</div>
            <div className="event__time">{time}</div>
         </div>
         {isShownBtn && (
            <button className="delete-event-btn" onClick={() => deleteEvent(id)}>
               <i className="fas fa-trash delete-event-btn__icon" />
               Delete
            </button>
         )}
      </>
   );
};

export default Event;

Event.propTypes = {
   height: PropTypes.number.isRequired,
   marginTop: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   time: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   deleteEvent: PropTypes.func.isRequired,
};
