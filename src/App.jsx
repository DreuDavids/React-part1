const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Chey";
  const age = 25;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="David" age="27" />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
