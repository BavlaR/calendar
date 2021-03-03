import React, { useState } from 'react';
import './modal.scss';
import PropTypes from 'prop-types';

const Modal = p => {
   const { modalToggle } = p;

   const [formData, setFormData] = useState({
      title: '',
      description: '',
      date: '',
      timeFrom: '',
      timeTo: '',
   });

   const { title, description, date, timeFrom, timeTo } = formData;

   const handleChange = e => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   return (
      <div className="modal overlay">
         <div className="modal__content">
            <div className="create-event">
               <button className="create-event__close-btn" onClick={modalToggle}>
                  +
               </button>
               <form
                  className="event-form"
                  onSubmit={e => {
                     e.preventDefault();
                     p.submit(formData);
                     modalToggle();
                     setFormData({
                        title: '',
                        description: '',
                        date: '',
                        timeFrom: '',
                        timeTo: '',
                     });
                  }}
               >
                  <input
                     type="text"
                     name="title"
                     value={title}
                     placeholder="Title"
                     className="event-form__field"
                     onChange={handleChange}
                  />
                  <div className="event-form__time">
                     <input
                        type="date"
                        name="date"
                        value={date}
                        className="event-form__field"
                        onChange={handleChange}
                     />
                     <input
                        type="time"
                        name="timeFrom"
                        value={timeFrom}
                        className="event-form__field"
                        onChange={handleChange}
                     />
                     <span>-</span>
                     <input
                        type="time"
                        name="timeTo"
                        value={timeTo}
                        className="event-form__field"
                        onChange={handleChange}
                     />
                  </div>
                  <textarea
                     name="description"
                     value={description}
                     placeholder="Description"
                     className="event-form__field"
                     onChange={handleChange}
                  />
                  <button type="submit" className="event-form__submit-btn">
                     Create
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Modal;

Modal.propTypes = {
   modalToggle: PropTypes.func.isRequired,
   submit: PropTypes.func.isRequired,
};
