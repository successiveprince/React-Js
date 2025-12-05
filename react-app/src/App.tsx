import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          This is a Alter Message!!!
        </Alert>
      )}
      <Buttons onClick={() => setAlertVisible(true)}>Click Me!!!</Buttons>
    </div>
  );
}

export default App;
