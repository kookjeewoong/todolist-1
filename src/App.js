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
    <div>
      <p class="bg-warning">
        <h1>Theme!!!</h1>
      </p>
      

      <h3>Input</h3>
      <Input />

      <h3>Checkbox</h3>
      <Checkbox value="1" />
      <Checkbox value="2" />

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
      <Button>클릭</Button>
    </div>
  );
}

export default App;
