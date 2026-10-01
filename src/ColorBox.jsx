import React from "react";

const ColorBox = ({ value } /*{ value = "Empty Value" }*/) => {
  return (
    /* we used colorName, but that variable doesn't
     exist inside ColorBox. That threw an error during
      render, and React showed nothing as a result.

       The box's color comes in through the value prop,
        so Claude changed the style
         to style={{ backgroundColor: value }}

       
        minor exception, but you got the idea, thus
        you've learned PLENTY!
      */
    <figure className="colorBox" style={{ backgroundColor: value }}>
      {/* the way Dave taught it was different,
        but claude says a default like value = "Empty Value"
         only kicks in when the prop is undefined, meaning
          it wasn't passed at all. 
          
          App always passes  value={colorName},
           and colorName starts as  "" (an empty string). An empty
            string counts as a real value, so the default
             never gets used. 
             
             Now the box shows "Empty Value" whenever the
              input is empty. value || "Empty Value" means
               "use value if it has something in it, otherwise
               use the text."*/}
      <div>{value || "Empty Value"}</div>
    </figure>
  );
};

export default ColorBox;
