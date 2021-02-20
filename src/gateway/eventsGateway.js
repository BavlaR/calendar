const events = [
   {
      id: 1,
      title: 'Try to complete Calendar',
      description: 'You can do it!',
      dateFrom: new Date(2021, 1, 15, 12),
      dateTo: new Date(2021, 1, 15, 23, 30),
   },
   {
      id: 2,
      title: 'Create something impossible',
      description: 'You can do it!',
      dateFrom: new Date(2021, 1, 18, 20),
      dateTo: new Date(2021, 1, 18, 23, 30),
   },
   {
      id: 3,
      title: 'Study and study again!',
      description: 'You can do it!',
      dateFrom: new Date(2021, 1, 22, 9),
      dateTo: new Date(2021, 1, 22, 22),
   },
   {
      id: 4,
      title: 'What about to have a rest?',
      description: 'You can do it!',
      dateFrom: new Date(2021, 1, 27, 9),
      dateTo: new Date(2021, 1, 27, 23),
   },
];
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
