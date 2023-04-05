import React from "react";
import B from "./B";

import myContext from "./Context";
import { useState } from "react";

function A(props) {
      const[state,setState]  = useState("")

  return (
    <div>
      <h2>A Comp</h2>
      <p> Data from D Comp : {state}</p>   

       {/* using state here coz the data coming from D ll be changing/dynamic  & displaying it */}

      <myContext.Provider value={{setState}} >  

      {/* here we stored the func "setState" in our context which we ll be updating from D comp   */}

        <B />

      </myContext.Provider>

    </div>
  );
}

export default A;
