import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function next() {
    if (steps < 3) setSteps((s) => s + 1);
  }
  function Previous() {
    if (steps > 1) setSteps((s) => s - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? "X" : "☰"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
            <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
            <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            step {steps}: {messages[steps - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={Previous}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
