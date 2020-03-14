import React from 'react';

import Card from './card'

const Container = ({ data }) => {
   return (
      <div className='container'>
         {data.map(dog => (
            <Card key={dog} dog={dog} />
         ))}
      </div>
   );
}

export default Container;