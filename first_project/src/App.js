function App() {
  let message = "Bye there";
  if (Math.random() > 0.5) {
    message = "Hello there";
  }
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
