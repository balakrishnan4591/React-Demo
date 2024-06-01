import Child from "./components/child/Child";

const App = () => {
  // const type = "text";
  return (
    <div className="container">
      <Child name="Bala" age="33" />
      <Child name="Krish" age="24" />
    </div>
  );
};

export default App;
