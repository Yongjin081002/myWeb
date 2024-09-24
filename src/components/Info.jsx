import React, { useState } from 'react';
import '../Info.css';
import Header from './Header';

const Info = () => {
    
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(value => e.target.value);
        console.log(value);
    }
  return (
    <div className='mom'>
        <Header />
        <div>
            <h1>{value}</h1>
        </div>
        <div>
            <input value={value} onChange={onChange}/>
        </div>
    </div>


  )
}

export default Info
