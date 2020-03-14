import React, { useState, useEffect } from 'react';
import Container from './components/container'
import Form from './components/form'
import axios from 'axios'

function App() {
   const [num, setNum] = useState(10)
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
         .then(res => {
            console.log(res)
            setData(res.data.message)
         })
         .catch(err => {
            console.log(err)
         })
   }, [num])

   const changeNum = newNum => {
      setNum(newNum)
   }

   return (
      <div className="App">
         <Form changeNum={changeNum} num={num} />
         <Container data={data} />
      </div>
   );
}

export default App;
