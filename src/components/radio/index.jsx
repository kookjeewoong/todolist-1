import React from "react";

// const Radio = ({ value, checked, onChange }) => {
const Radio = (props) => {  
  // return <input type="radio" value={value} checked={checked} onChange={onChange} />
  return <input type="radio" {...props} className="radio" style={{width:20, height:20}}/>
}

export default Radio