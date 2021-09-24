function Content(props) {
  return (
    <>
      <h1>{props.hello}</h1>
      <button onClick={() => props.changeTitle("Tito")}>Change Title!</button>
    </>
  );
}

export default Content;
