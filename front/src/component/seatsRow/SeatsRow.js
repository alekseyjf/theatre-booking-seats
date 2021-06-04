import React from 'react';
import SeatsCell from '../seatsCell/SeatsCell';
import {SeatsRowCustom} from './style/SeatsRowStyles';

const SeatsRow = ({row, toggleReserveSeat}) => {
  return (
    <SeatsRowCustom>
      {row.map((item, idx) => (<SeatsCell toggleReserveSeat={toggleReserveSeat(idx)} key={idx} cell={item} />))}
    </SeatsRowCustom>
  )
};

export default SeatsRow;
