import React from "react";

const Button = ({ children }) => {
  return <button type="button" className="btn btn-primary" style={{width:100}}>{ children }</button> 
}

export default Button