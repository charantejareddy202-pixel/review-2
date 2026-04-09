import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/dashboard.css";

function CounsellorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/type/COUNSELLOR");
      setAppointments(res.data);
    } catch (error) {
      console.log("Error fetching counsellor appointments");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="sidebar">
        <h2>Suraksha</h2>
        <Link to="/counsellor">Home</Link>
        <Link to="/counsellor/appointments">Appointments</Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Counsellor Appointments</h1>
          <p>Welcome, {user?.name}. View and manage counselling sessions.</p>
        </div>

        {appointments.length === 0 ? (
          <p className="empty-text">No counsellor appointments found</p>
        ) : (
          <div className="track-grid">
            {appointments.map((a) => (
              <div key={a.id} className="complaint-card">
                <h3 className="complaint-title">Counselling Session</h3>

                <p className="complaint-desc">
                  <strong>Victim Email:</strong> {a.victimEmail}
                </p>

                <p className="complaint-desc">
                  <strong>Issue Summary:</strong> {a.issueSummary}
                </p>

                <p className="complaint-desc">
                  <strong>Date:</strong> {a.appointmentDate}
                </p>

                <p className="complaint-desc">
                  <strong>Time:</strong> {a.appointmentTime}
                </p>

                <p className="complaint-status-row">
                  <strong>Status:</strong>
                  <span className={`status-badge ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CounsellorAppointments;