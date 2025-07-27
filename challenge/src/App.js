import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);
  const totalService = ((service1 + service2) / 2 / 100) * bill;
  function handleBill(e) {
    const number = Number(e.target.value);
    if (!isNaN(number)) {
      setBill(number);
    } else {
      setBill("");
    }
  }
  function Reset() {
    setBill(0);
    setService1(0);
    setService2(0);
  }
  return (
    <>
      <BillIn bill={bill} onSetBill={handleBill} />
      <ServiceIn service={service1} handleService={setService1}>
        Your Rating{" "}
      </ServiceIn>
      <ServiceIn service={service2} handleService={setService2}>
        Friend Rating{" "}
      </ServiceIn>
      <TotalPay bill={bill} totalService={totalService} />
      <Resets reset={Reset} />
    </>
  );
}

function BillIn({ bill, onSetBill }) {
  return (
    <div>
      <p>
        How much was the bill{" "}
        <input
          type="text"
          value={bill}
          onChange={(e) => onSetBill(e)}
          placeholder="bill amount"
        ></input>
      </p>
    </div>
  );
}

function ServiceIn({ service, handleService, children }) {
  return (
    <div>
      <p>
        {children}
        <select
          value={service}
          onChange={(e) => handleService(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">Dissatisfied (5%)</option>
          <option value="10">It was okay (10%)</option>
          <option value="20">Amazing! (20%)</option>
        </select>
      </p>
    </div>
  );
}

function TotalPay({ bill, totalService }) {
  return (
    <div>
      <p>
        You pay {bill + totalService}$ ({bill}$ + {totalService}$ tips)
      </p>
    </div>
  );
}

function Resets({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
