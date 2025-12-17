import { useState } from "react";

function App() {
  const [incrementValue, setIncrementValue] = useState(0);

  return (
    <div className="App min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-5" style={{ minWidth: "400px" }}>
        <h1 className="text-center mb-4 text-primary fw-bold">Counter App</h1>

        <div className="d-flex flex-column align-items-center gap-4">
          <div
            className="display-1 fw-bold text-dark bg-white rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "150px",
              height: "150px",
              border: "4px solid #0d6efd",
            }}
          >
            {incrementValue}
          </div>

          <div className="d-flex gap-3">
            <button
              type="button"
              className="btn btn-danger btn-lg px-4 py-2 fw-bold"
              onClick={() => setIncrementValue(incrementValue - 1)}
              style={{ minWidth: "120px" }}
            >
              <i className="bi bi-dash-circle"></i> Minus
            </button>

            <button
              type="button"
              className="btn btn-success btn-lg px-4 py-2 fw-bold"
              onClick={() => setIncrementValue(incrementValue + 1)}
              style={{ minWidth: "120px" }}
            >
              <i className="bi bi-plus-circle"></i> Plus
            </button>
          </div>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setIncrementValue(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
