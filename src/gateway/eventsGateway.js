const BaseURL = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/events';

export const fetchEventsList = () =>
   fetch(BaseURL)
      .then(res => {
         if (!res.ok) {
            alert(`Internal Server Error. Can't display events`);
         }
         return res.json();
      })
      .then(eventsList =>
         eventsList.map(({ dateFrom, dateTo, ...event }) => ({
            dateFrom: new Date(dateFrom),
            dateTo: new Date(dateTo),
            ...event,
         })),
      );

export const createEvent = data =>
   fetch(BaseURL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   }).then(res => {
      if (!res.ok) {
         alert(`Internal Server Error. Can't display events`);
      }
   });

export const deleteEvent = id =>
   fetch(`${BaseURL}/${id}`, {
      method: 'DELETE',
   }).then(res => {
      if (!res.ok) {
         alert(`Internal Server Error. Can't display events`);
      }
   });
