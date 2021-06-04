import styled from 'styled-components';

export const SeatsCellCusom = styled.div(() => ({
  margin: '12px',
}));
export const Seat = styled.div(({booked}) => ({
  background: booked ? '#dcf4ff' : '#823eb7',
  border: '2px solid #c2c',
  borderRadius: '10px',
  color: booked ? '#823eb7' : '#dcf4ff',
  height: '50px',
  width: '50px',
  transition: '.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  cursor: 'pointer',
  '&:empty': {
    display: 'none'
  }
}));