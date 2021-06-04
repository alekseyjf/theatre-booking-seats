import React, {useState, useEffect} from 'react';
import SeatsService from "../../services/Seats";
import SeatsRow from '../../component/seatsRow/SeatsRow';
import {ButtonCustom} from './style/SeatsStyles';

const Seats = () => {
  const [booked, setBooked] = useState(false);
  const [seats, setSeats] = useState([]);
  const seatsService = new SeatsService();

  useEffect(() => {
    seatsService.getAllSeats()
    .then(data => setSeats(data.allSeats))
    .catch(e => console.log(e))
  }, []);

  const bookingSeat = () => seatsService.bookingSeat(seats)
  .then(data => setBooked(data.booked))
  .catch(e => console.log(e));

  const toggleReserveSeat = (row) => (cell) => (e) => {
    const [...tempSeats] = seats;

    tempSeats[row][cell] = false;

    setSeats(tempSeats);
  };

  return (
    <>
      <ButtonCustom onClick={bookingSeat}>Бронировать</ButtonCustom>

      {booked && <span>Забронировано</span>}

      {seats.map((item, idx) => {
        return (
          <SeatsRow key={idx} toggleReserveSeat={toggleReserveSeat(idx)} row={item} />
        )
      })}
    </>
  )
};

export default Seats;
