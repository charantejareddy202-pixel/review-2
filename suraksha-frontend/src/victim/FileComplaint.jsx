import { useState } from "react";
import api from "../services/api";
import "../styles/auth.css";

function FileComplaint() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    title: "",
    description: "",
    victimEmail: user?.email || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/complaints/file", form);
      setMessage(res.data);
      setForm({
        title: "",
        description: "",
        victimEmail: user?.email || "",
      });
    } catch (error) {
      setMessage("Failed to file complaint");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>File Complaint</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Complaint Title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Describe your issue"
            value={form.description}
            onChange={handleChange}
            required
            rows="5"
            style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d0d7e2" }}
          />
          <button type="submit">Submit Complaint</button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default FileComplaint;