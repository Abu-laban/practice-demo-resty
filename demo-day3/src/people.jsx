import { useState, useEffect } from "react";

function People(props) {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    name && setPeople([...people, name]);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  //1- useEffect - on Every re-render of this component
  useEffect(() => {
    console.log("I Run On Every Render");
  });

  //2- useEffect - this runs only when the name changes
  useEffect(() => {
    console.log("I Run On Name Changed to", name);
    document.title = name;
  }, [name]);

  //3- useEffect - this  runs only once on the initial rendering
  // (this could be a good use case for doing a GET from an api to pre-loade the data)
  useEffect(() => {
    console.log("I Run only on initial render");
  }, []);

  //4- useEffect - this runs only when the form is submit (we can use this for post and put request api)
  useEffect(() => {
    console.log("I Run On person added");
    if (people.length >= 1) {
      document.title = name;
    }
  }, [people]);

  //   useEffect(() => {
  //     console.log("I Run On person added");
  //     if (people.length >= 1) {
  //       document.title = name;
  //     }
  //   }, [people, name]);

  //5- useEffect - this has a cleanup job (ComponentDidUnmount) this could be in any of the above cases
  useEffect(() => {
    return () => {
      console.log("I Run when component unmount");
    };
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onNameChange} />
      </form>
      {people.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  );
}

export default People;
