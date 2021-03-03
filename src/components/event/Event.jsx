import React, { useState } from 'react';
import './event.scss';
import PropTypes from 'prop-types';

const Event = p => {
   const { height, marginTop } = p;

   const [isShownBtn, setIsShownBtn] = useState(false);

   const handleIsShownBtn = () => {
      setIsShownBtn(!isShownBtn);
   };

   const eventStyle = {
      height,
      marginTop,
   };

   return (
      <>
         <div style={eventStyle} className="event" onClick={handleIsShownBtn}>
            <div className="event__title">{p.title}</div>
            <div className="event__time">{p.time}</div>
         </div>
         {isShownBtn && (
            <button className="delete-event-btn" onClick={() => p.deleteEvent(p.id)}>
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
