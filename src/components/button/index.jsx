import React from "react";

const Button = ({ children }) => {
  return <button type="button" className="btn btn-primary">{ children }</button>
}

export default Button