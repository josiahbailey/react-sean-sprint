import React, { useState } from 'react';

const Form = ({ changeNum }) => {
   const [dogoNum, setDogoNum] = useState(10)

   const handleChange = e => {
      e.preventDefault()
      setDogoNum(e.target.value)
   }

   const handleSubmit = e => {
      e.preventDefault()
      changeNum(dogoNum)
   }

   return (
      <form onSubmit={handleSubmit} className='form'>
         <input onChange={handleChange} value={dogoNum} type='number' />
         <input type='submit' />
      </form>
   );
}

export default Form;