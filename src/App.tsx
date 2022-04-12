import "./App.css";
import { Button } from "./components/button";
import { Icon } from "./components/icon";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", gap: 16 }}>
        <Icon name="EyeClosed" />
        <Icon name="EyeOpen" color="red" />
        <Icon name="File" width={32} height={32} />
      </div>

      <br />

      <Button title="Press Me" icon="File" />
    </div>
  );
}

export default App;
