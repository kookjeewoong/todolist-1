import React from "react";

const Radio = () => {
  return (
    <select className="form-control input-sm" style={{width:200, height: 35}}>
      <option selected>*** 선택 ***</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
  </select>
  )
}

export default Radio