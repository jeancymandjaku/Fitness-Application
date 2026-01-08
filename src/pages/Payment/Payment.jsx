import { useState } from "react";

import "./Payment.css";

export default function PaymentForm() {
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("mpesa");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phone, method });
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h2>Paiement abonnement</h2>

      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="mpesa">M-Pesa</option>
        <option value="airtel">Airtel Money</option>
      </select>

      <input
        type="tel"
        placeholder="Numéro mobile"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button type="submit">Payer</button>
    </form>
  );
}
