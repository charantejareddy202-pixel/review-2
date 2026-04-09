import { useState } from "react";
import api from "../services/api";
import "../styles/auth.css";

function BookLegalAdvisor() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    victimEmail: user?.email || "",
    type: "LEGAL_ADVISOR",
    appointmentDate: "",
    appointmentTime: "",
    issueSummary: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/appointments/book", form);
      setMessage(res.data);
      setForm({
        victimEmail: user?.email || "",
        type: "LEGAL_ADVISOR",
        appointmentDate: "",
        appointmentTime: "",
        issueSummary: "",
      });
    } catch (error) {
      setMessage("Failed to book legal advisor session");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Book Legal Advisor Session</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="appointmentDate"
            value={form.appointmentDate}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="appointmentTime"
            value={form.appointmentTime}
            onChange={handleChange}
            required
          />
          <textarea
            name="issueSummary"
            placeholder="Legal Issue Summary"
            value={form.issueSummary}
            onChange={handleChange}
            required
            rows="4"
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d0d7e2" }}
          />
          <button type="submit">Book Session</button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default BookLegalAdvisor;