import React from 'react';
import { useContext } from 'react';
import myContext from './Context';
import { useState } from 'react';

function D(props) {

      const {setState} = useContext(myContext)
      const [dValue , setDvalue] = useState("")

    return (
        <div>
            <h2>D Comp</h2>
            <input type='text' onChange={(e)=>{setDvalue(e.target.value)}} />
            <button onClick={()=>{setState(dValue)}}>Send Data To Parent</button>
        </div>
    );
}

export default D;