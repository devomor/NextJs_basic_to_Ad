import { useState } from 'react';

export default function state() {
  const [value,setValue] = useState(0);
 const add=()=>{
     setValue(value +1);
 }

  return (
    <div>
      <h1>this is added value {value}</h1>
      <button onClick={add}>increment number</button>
    </div>
  )
}
