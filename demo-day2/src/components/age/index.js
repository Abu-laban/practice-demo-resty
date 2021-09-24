import { useState } from "react";

function Age(props) {
  const [name, setName] = useState("someone");
  const [age, setAge] = useState(props.age);

  function handleNameChange(e) {
    let value = e.target.value;
    setName(value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  return (
    <>
      <div>
        <h1 data-testid='name'>
          {name} is {age}
        </h1>
        <input data-testid='name-input' type="text" onChange={handleNameChange} />
        <input type="number" onChange={handleAgeChange} />
      </div>
    </>
  );
}

export default Age;
