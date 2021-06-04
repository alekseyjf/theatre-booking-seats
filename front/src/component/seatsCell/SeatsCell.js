import React from 'react';
import {Seat, SeatsCellCusom} from './style/SeatsCellStyles';

const SeatsCell = ({cell, toggleReserveSeat}) => {
  return (
    <>
      <SeatsCellCusom>
        <Seat booked={cell} onClick={toggleReserveSeat}>
          {cell ? '✔' : '✘'}
        </Seat>
      </SeatsCellCusom>
    </>
  )
};

export default SeatsCell;
