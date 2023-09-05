const App = () => {
  const friends = [
    { name: "David", age: 27 },
    { name: "Chey", age: 25 },
  ];
  return (
    <>
      <p>
        {friends[0].name} {friends[0].age}
      </p>
    </>
  );
};

export default App;
