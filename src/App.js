import React from "react"
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";




function App() {
  const [radio, setRadio] = React.useState()

  const handleChangeRadio = (e) => {
    setRadio(e.target.value)
  }



  return (

    
    <div className="container">


      <p className="bg-info" style = {{width:800, height: 50}}>
      Theme!!!
      </p>

<div className="panel panel-default">
  <div className="panel-heading">Panel heading</div>
  <table className="table table-bordered" style={{width:800}}>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td>윤</td>
        <td>원열</td>
        <td>윤원열</td>
      </tr>
      <tr>
        <td>국</td>
        <td>지웅</td>
        <td>국지웅</td>
      </tr>
    </tbody>
  </table>
</div>

      <h3>Input</h3>
      <Input name="name"/>

      <h3>Checkbox</h3>
      <Checkbox value="1" style={{width:20, height: 20}}/>
      <Checkbox value="2" style={{width:20, height: 20}}/>

      <h3>Radio</h3>
      <Radio value="0" checked={radio === "0"} onChange={handleChangeRadio} />
      <Radio value="1" checked={radio === "1"} onChange={handleChangeRadio} />
      <Radio value="2" checked={radio === "2"} onChange={handleChangeRadio} />
      <Radio value="2" checked={radio === "3"} onChange={handleChangeRadio} />
      <Radio value="2" checked={radio === "4"} onChange={handleChangeRadio} />

      <h3>Select</h3>
      <Select><option value="1">1</option></Select>

      <h3>Slider</h3>
      <Slider />


      <h3>Button</h3>
      <Button>체크</Button>
    </div>
  );
}

export default App;
