import React from 'react';

const Card = ({ dog }) => {
   return (
      <div className='card'>
         <h2>Dogo</h2>
         <img className='card-img' src={dog} />
      </div>
   );
}

export default Card;